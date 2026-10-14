"""MALI BLEND local order receiver and shop dashboard server."""
import json
import os
import secrets
import sqlite3
from datetime import datetime, timezone
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parent
DATABASE = ROOT / "shop-orders.sqlite3"
ADMIN_KEY = os.environ.get("SHOP_ADMIN_KEY") or secrets.token_urlsafe(24)
STATUSES = {"ใหม่", "กำลังทำ", "พร้อมรับ", "เสร็จแล้ว", "ยกเลิก"}


def connect_db():
    db = sqlite3.connect(DATABASE)
    db.row_factory = sqlite3.Row
    db.execute("""CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        number TEXT UNIQUE NOT NULL,
        created_at TEXT NOT NULL,
        customer TEXT NOT NULL,
        phone TEXT NOT NULL,
        items TEXT NOT NULL,
        total INTEGER NOT NULL,
        status TEXT NOT NULL DEFAULT 'ใหม่'
    )""")
    return db


class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def end_headers(self):
        origin = self.headers.get("Origin", "")
        parsed = urlparse(origin)
        if parsed.scheme == "http" and parsed.hostname in {"localhost", "127.0.0.1"}:
            self.send_header("Access-Control-Allow-Origin", origin)
            self.send_header("Vary", "Origin")
            self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
            self.send_header("Access-Control-Allow-Methods", "GET, POST, PATCH, OPTIONS")
        super().end_headers()

    def send_json(self, status, payload):
        encoded = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(encoded)))
        self.end_headers()
        self.wfile.write(encoded)

    def read_payload(self):
        length = min(int(self.headers.get("Content-Length", "0")), 100_000)
        if length <= 0:
            raise ValueError("กรุณากรอกข้อมูลออเดอร์")
        return json.loads(self.rfile.read(length).decode("utf-8"))

    def authorized(self):
        return secrets.compare_digest(self.headers.get("Authorization", ""), f"Bearer {ADMIN_KEY}")

    def do_OPTIONS(self):
        self.send_response(204)
        self.end_headers()

    def do_POST(self):
        if self.path != "/api/orders":
            return self.send_json(404, {"error": "ไม่พบปลายทาง"})
        try:
            payload = self.read_payload()
            customer = str(payload.get("customer", "")).strip()[:60]
            phone = str(payload.get("phone", "")).strip()[:20]
            items = payload.get("items")
            total = int(payload.get("total", 0))
            if not customer or not phone or not isinstance(items, list) or not items or len(items) > 40:
                raise ValueError("ข้อมูลผู้สั่งหรือรายการสินค้าไม่ครบ")
            if total < 0 or total > 1_000_000:
                raise ValueError("ยอดรวมไม่ถูกต้อง")
            for item in items:
                if not isinstance(item, dict) or not str(item.get("name", "")).strip():
                    raise ValueError("พบรายการสินค้าไม่ถูกต้อง")
                item["quantity"] = max(1, min(int(item.get("quantity", 1)), 99))
            db = connect_db()
            created = datetime.now(timezone.utc).isoformat(timespec="seconds")
            cursor = db.execute(
                "INSERT INTO orders(number,created_at,customer,phone,items,total) VALUES(?,?,?,?,?,?)",
                ("", created, customer, phone, json.dumps(items, ensure_ascii=False), total),
            )
            number = f"MB-{cursor.lastrowid:06d}"
            db.execute("UPDATE orders SET number=? WHERE id=?", (number, cursor.lastrowid))
            db.commit()
            db.close()
            return self.send_json(201, {"order": {"number": number}})
        except (ValueError, TypeError, json.JSONDecodeError, UnicodeDecodeError) as error:
            return self.send_json(400, {"error": str(error) or "ข้อมูลไม่ถูกต้อง"})
        except sqlite3.Error:
            return self.send_json(500, {"error": "บันทึกออเดอร์ไม่สำเร็จ กรุณาลองอีกครั้ง"})

    def do_GET(self):
        if self.path.split("?", 1)[0] != "/api/orders":
            return super().do_GET()
        if not self.authorized():
            return self.send_json(401, {"error": "รหัสผู้ดูแลไม่ถูกต้อง"})
        try:
            db = connect_db()
            rows = db.execute("SELECT * FROM orders ORDER BY id DESC LIMIT 300").fetchall()
            db.close()
            orders = [dict(row) for row in rows]
            for order in orders:
                order["items"] = json.loads(order["items"])
            return self.send_json(200, {"orders": orders})
        except sqlite3.Error:
            return self.send_json(500, {"error": "อ่านรายการออเดอร์ไม่สำเร็จ"})

    def do_PATCH(self):
        parts = self.path.strip("/").split("/")
        if len(parts) != 4 or parts[:2] != ["api", "orders"] or parts[3] != "status":
            return self.send_json(404, {"error": "ไม่พบปลายทาง"})
        if not self.authorized():
            return self.send_json(401, {"error": "รหัสผู้ดูแลไม่ถูกต้อง"})
        try:
            status = str(self.read_payload().get("status", ""))
            if status not in STATUSES:
                raise ValueError("สถานะออเดอร์ไม่ถูกต้อง")
            db = connect_db()
            cursor = db.execute("UPDATE orders SET status=? WHERE number=?", (status, parts[2]))
            db.commit()
            db.close()
            if cursor.rowcount == 0:
                return self.send_json(404, {"error": "ไม่พบออเดอร์นี้"})
            return self.send_json(200, {"ok": True})
        except (ValueError, json.JSONDecodeError, UnicodeDecodeError) as error:
            return self.send_json(400, {"error": str(error)})
        except sqlite3.Error:
            return self.send_json(500, {"error": "อัปเดตสถานะไม่สำเร็จ"})


if __name__ == "__main__":
    port = int(os.environ.get("SHOP_PORT", "8765"))
    server = ThreadingHTTPServer(("0.0.0.0", port), Handler)
    print(f"MALI BLEND order server: http://127.0.0.1:{port}/mali-blend/")
    print(f"Shop dashboard: http://127.0.0.1:{port}/mali-blend/orders.html")
    print(f"Admin key: {ADMIN_KEY}")
    print("Keep this terminal open while accepting orders.")
    server.serve_forever()
