# เผยแพร่ MALI BLEND บน GitHub Pages

เพิ่ม workflow ที่ `.github/workflows/pages.yml` แล้ว เมื่อไฟล์โปรเจกต์ถูก push ไปที่ branch `main` หรือ `master` GitHub Actions จะเผยแพร่หน้าเว็บให้อัตโนมัติ

1. ใน GitHub Repository เปิด **Settings → Pages**
2. ตั้ง **Build and deployment → Source** เป็น **GitHub Actions**
3. Push ไฟล์โปรเจกต์ขึ้น branch `main` หรือ `master` แล้วดูผลที่แท็บ **Actions**

workflow เผยแพร่เฉพาะไฟล์เว็บ, รูปภาพ และหน้า About ไม่ส่ง `shop_server.py`, หน้าร้านแอดมิน หรือฐานข้อมูลออเดอร์ขึ้นเว็บสาธารณะ

GitHub Pages ให้บริการไฟล์เว็บแบบ static เท่านั้น จึงแสดงเมนูและหน้า About ได้ แต่ไม่สามารถเก็บออเดอร์หรือรัน Python server ได้ ปุ่มสั่งซื้อจะแจ้งให้ทราบจนกว่าจะตั้ง `window.MALI_ORDER_API_BASE` ใน `order-config.js` เป็น URL ของ API ร้านที่โฮสต์ออนไลน์ และตั้ง `SHOP_ALLOWED_ORIGINS` ของ API ให้ตรงกับโดเมน GitHub Pages

ไฟล์ `shop-orders.sqlite3` อาจมีชื่อและเบอร์โทรลูกค้า ห้ามอัปโหลดหรือเผยแพร่ไฟล์นี้
