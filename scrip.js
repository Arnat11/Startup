// เพิ่มหรือแก้เมนูได้จากรายการนี้ แล้วหน้าเว็บจะสร้างการ์ดให้อัตโนมัติ
const menuItems = [
    { name: "สตรอว์เบอร์รีโยเกิร์ต", detail: "เปรี้ยวหวานละมุน", price: 65, emoji: "🍓", tint: "#ffe8e9", tag: "ขายดี", tagColor: "#f17b89", ingredients: ["สตรอว์เบอร์รีสด", "โยเกิร์ตรสธรรมชาติ", "นมสด", "น้ำแข็ง", "น้ำเชื่อม (เลือกได้)"], benefits: ["สตรอว์เบอร์รีมีวิตามินซี", "โยเกิร์ตและนมมีโปรตีนและแคลเซียม", "ปรับระดับความหวานได้"] },
    { name: "มะม่วงสมูทตี้", detail: "มะม่วงสุกเนื้อแน่น", price: 60, emoji: "🥭", tint: "#fff0d0", tag: "ผลไม้สด", tagColor: "#e5a33d", ingredients: ["มะม่วงสุก", "นมสด", "น้ำแข็ง", "น้ำผึ้ง (เลือกได้)"], benefits: ["มะม่วงมีใยอาหาร", "มีเบต้าแคโรทีนซึ่งร่างกายนำไปสร้างวิตามินเอได้", "ได้รสหวานหอมจากผลไม้"] },
    { name: "อะโวคาโดนมสด", detail: "เนียนนุ่ม อิ่มกำลังดี", price: 70, emoji: "🥑", tint: "#e8f1dc", tag: "สุขภาพดี", tagColor: "#72965a", ingredients: ["อะโวคาโดสุก", "นมสด", "น้ำแข็ง", "น้ำผึ้ง (เลือกได้)"], benefits: ["อะโวคาโดมีใยอาหาร", "มีไขมันไม่อิ่มตัวจากพืช", "เนื้อเนียนและให้พลังงานจากวัตถุดิบ"] },
    { name: "แตงโมปั่น", detail: "สดชื่น หวานฉ่ำ", price: 45, emoji: "🍉", tint: "#ffe6e1", tag: "สดชื่น", tagColor: "#e77a68", ingredients: ["แตงโมสดไร้เมล็ด", "น้ำแข็ง", "มะนาวเล็กน้อย (เลือกได้)"], benefits: ["แตงโมมีน้ำเป็นส่วนประกอบสูง", "มีวิตามินซี", "รสหวานสดชื่นจากผลไม้"] },
    { name: "กล้วยนมสด", detail: "หอมกล้วย นมสดแท้", price: 50, emoji: "🍌", tint: "#fff3cc", tag: "คลาสสิก", tagColor: "#d9a632", ingredients: ["กล้วยหอม", "นมสด", "น้ำแข็ง", "น้ำผึ้ง (เลือกได้)"], benefits: ["กล้วยมีใยอาหารและโพแทสเซียม", "นมมีโปรตีนและแคลเซียม", "อิ่มสบายด้วยรสหวานจากกล้วย"] },
    { name: "ส้มปั่น", detail: "คั้นสด เปรี้ยวหวาน", price: 50, emoji: "🍊", tint: "#ffead4", tag: "วิตามินซี", tagColor: "#e98b45", ingredients: ["ส้มสดคั้น", "น้ำแข็ง", "น้ำเชื่อม (เลือกได้)"], benefits: ["ส้มมีวิตามินซี", "ได้รสเปรี้ยวหวานจากผลไม้สด", "เลือกไม่เติมน้ำเชื่อมได้"] },
    { name: "บลูเบอร์รีโยเกิร์ต", detail: "โยเกิร์ตเนื้อเนียน", price: 65, emoji: "🫐", tint: "#e9e8f8", tag: "ขายดี", tagColor: "#7e78b7", ingredients: ["บลูเบอร์รี", "โยเกิร์ตรสธรรมชาติ", "นมสด", "น้ำแข็ง", "น้ำผึ้ง (เลือกได้)"], benefits: ["บลูเบอร์รีมีสารพฤกษเคมีและใยอาหาร", "โยเกิร์ตมีโปรตีนและแคลเซียม", "เปรี้ยวหวานละมุน"] },
    { name: "สับปะรดปั่น", detail: "หอมหวานอมเปรี้ยว", price: 50, emoji: "🍍", tint: "#fff1ce", tag: "ผลไม้สด", tagColor: "#d3a137", ingredients: ["สับปะรดสด", "น้ำแข็ง", "มะนาวเล็กน้อย (เลือกได้)"], benefits: ["สับปะรดมีวิตามินซี", "มีใยอาหารจากผลไม้", "รสเปรี้ยวหวานช่วยให้สดชื่น"] },
    { name: "กีวีแอปเปิล", detail: "เปรี้ยวสดชื่นลงตัว", price: 60, emoji: "🥝", tint: "#e8f2d9", tag: "สดชื่น", tagColor: "#72965a", ingredients: ["กีวีสด", "แอปเปิลเขียว", "น้ำแข็ง", "น้ำผึ้ง (เลือกได้)"], benefits: ["กีวีมีวิตามินซี", "กีวีและแอปเปิลมีใยอาหาร", "ได้รสเปรี้ยวสดชื่นจากผลไม้"] },
    { name: "มิกซ์เบอร์รี", detail: "เบอร์รีรวม 3 ชนิด", price: 70, emoji: "🍇", tint: "#f1e5f4", tag: "ซิกเนเจอร์", tagColor: "#a06ca8", ingredients: ["สตรอว์เบอร์รี", "บลูเบอร์รี", "ราสป์เบอร์รี", "น้ำแข็ง", "โยเกิร์ต (เลือกได้)"], benefits: ["เบอร์รีหลากชนิดมีวิตามินซีและใยอาหาร", "มีสารพฤกษเคมีจากผลไม้หลายสี", "เลือกเพิ่มโยเกิร์ตเพื่อรสสัมผัสที่นุ่มขึ้นได้"] },
    { name: "ชาไทย", detail: "ชาหอมเข้ม นมละมุน", price: 50, emoji: "🧋", tint: "#f8e5d2", tag: "ชา", tagColor: "#a96e43", styles: ["ร้อน", "เย็น", "ปั่น"], ingredients: ["ชาไทย", "นมสด", "นมข้น (เลือกความหวานได้)"], benefits: ["ปรับความหวานได้ตามชอบ", "เลือกดื่มได้ทั้งร้อน เย็น และปั่น", "มีคาเฟอีนจากใบชา"] },
    { name: "ชาเขียวนม", detail: "ชาเขียวหอม นมนุ่ม", price: 55, emoji: "🍵", tint: "#e7efdc", tag: "ชา", tagColor: "#6c8b5e", styles: ["ร้อน", "เย็น", "ปั่น"], ingredients: ["ชาเขียว", "นมสด", "นมข้น (เลือกความหวานได้)"], benefits: ["ได้กลิ่นหอมจากชาเขียว", "ปรับความหวานได้", "มีคาเฟอีนจากใบชา"] },
    { name: "มัทฉะลาเต้", detail: "มัทฉะเข้มข้นกับนมสด", price: 65, emoji: "🍵", tint: "#e4eddb", tag: "มัทฉะ", tagColor: "#58794f", styles: ["ร้อน", "เย็น", "ปั่น"], ingredients: ["ผงมัทฉะ", "นมสด", "น้ำเชื่อม (เลือกได้)"], benefits: ["เลือกความหวานได้", "เลือกดื่มได้ทั้งร้อน เย็น และปั่น", "มีคาเฟอีนจากชาเขียว"] },
    { name: "ชามะนาว", detail: "ชาหอมเปรี้ยวสดชื่น", price: 45, emoji: "🍋", tint: "#fff2cf", tag: "ชา", tagColor: "#c69a38", styles: ["ร้อน", "เย็น", "ปั่น"], ingredients: ["ชาดำ", "มะนาว", "น้ำเชื่อม (เลือกได้)"], benefits: ["รสเปรี้ยวสดชื่นจากมะนาว", "ปรับความหวานได้", "มีคาเฟอีนจากใบชา"] },
    { name: "ชาพีช", detail: "ชาหอมกลิ่นพีช", price: 50, emoji: "🍑", tint: "#f9e6df", tag: "ชา", tagColor: "#c77f6d", styles: ["ร้อน", "เย็น", "ปั่น"], ingredients: ["ชาดำ", "ไซรัปพีช", "เนื้อพีช (เลือกได้)"], benefits: ["กลิ่นหอมผลไม้ ดื่มง่าย", "ปรับความหวานได้", "เลือกดื่มได้ทั้งร้อน เย็น และปั่น"] },
    { name: "อเมริกาโน่", detail: "กาแฟดำ หอมเข้ม", price: 50, emoji: "☕", tint: "#eee5dc", tag: "กาแฟ", tagColor: "#785a46", styles: ["ร้อน", "เย็น", "ปั่น"], ingredients: ["เอสเพรสโซ่", "น้ำเปล่า", "น้ำเชื่อม (เลือกได้)"], benefits: ["เลือกดื่มกาแฟดำได้ตามชอบ", "ปรับความหวานได้", "มีคาเฟอีนจากกาแฟ"] },
    { name: "ลาเต้", detail: "เอสเพรสโซ่กับนมสด", price: 55, emoji: "☕", tint: "#f2e9dc", tag: "กาแฟ", tagColor: "#8a6a4e", styles: ["ร้อน", "เย็น", "ปั่น"], ingredients: ["เอสเพรสโซ่", "นมสด", "น้ำเชื่อม (เลือกได้)"], benefits: ["รสนุ่มจากกาแฟผสมนม", "ปรับความหวานได้", "มีคาเฟอีนจากกาแฟ"] },
    { name: "คาปูชิโน่", detail: "กาแฟเข้มกับฟองนมนุ่ม", price: 55, emoji: "☕", tint: "#f0e5db", tag: "กาแฟ", tagColor: "#8b624c", styles: ["ร้อน", "เย็น", "ปั่น"], ingredients: ["เอสเพรสโซ่", "นมสด", "ฟองนม"], benefits: ["กลิ่นกาแฟชัดและสัมผัสนุ่ม", "เลือกดื่มได้ทั้งร้อน เย็น และปั่น", "มีคาเฟอีนจากกาแฟ"] },
    { name: "มอคค่า", detail: "กาแฟผสมช็อกโกแลต", price: 60, emoji: "🍫", tint: "#f0e1dc", tag: "กาแฟ", tagColor: "#875b50", styles: ["ร้อน", "เย็น", "ปั่น"], ingredients: ["เอสเพรสโซ่", "โกโก้", "นมสด", "น้ำเชื่อม (เลือกได้)"], benefits: ["ได้รสกาแฟและโกโก้ในแก้วเดียว", "ปรับความหวานได้", "มีคาเฟอีนจากกาแฟ"] },
    { name: "คาราเมลมัคคิอาโต้", detail: "กาแฟนมแต่งกลิ่นคาราเมล", price: 65, emoji: "☕", tint: "#f5e7d2", tag: "กาแฟ", tagColor: "#a77b48", styles: ["ร้อน", "เย็น", "ปั่น"], ingredients: ["เอสเพรสโซ่", "นมสด", "ซอสคาราเมล"], benefits: ["หอมหวานกลิ่นคาราเมล", "ปรับความหวานได้", "มีคาเฟอีนจากกาแฟ"] }
];

const toppings = [
    { name: "ไข่มุกบราวน์ชูการ์", price: 10 },
    { name: "โอรีโอ้บด", price: 10 },
    { name: "เวเฟอร์กรอบ", price: 10 },
    { name: "วิปครีม", price: 15 },
    { name: "เยลลี่ผลไม้", price: 10 },
    { name: "บุกบราวน์ชูการ์", price: 10 },
    { name: "วุ้นมะพร้าว", price: 10 },
    { name: "เฉาก๊วย", price: 10 },
    { name: "มุกป๊อปผลไม้", price: 15 },
    { name: "เมล็ดเจีย", price: 5 }
];

const menuGrid = document.querySelector("#menuGrid");
const cartCount = document.querySelector(".cart-count");
const toast = document.querySelector(".toast");
const menuDialog = document.querySelector("#menuDialog");
const cartDialog = document.querySelector("#cartDialog");
const orderDialog = document.querySelector("#orderDialog");
const paymentDialog = document.querySelector("#paymentDialog");
const drinkOptions = document.querySelector("#drinkOptions");
const drinkStyle = document.querySelector("#drinkStyle");
const sweetnessLevel = document.querySelector("#sweetnessLevel");
const drinkQuantity = document.querySelector("#drinkQuantity");
const toppingOptionsList = document.querySelector("#toppingOptionsList");
let selectedDrinkIndex = null;
const cartSelection = new Map();
const FEEDBACK_STORAGE_KEY = "mali-blend-menu-feedback-v1";
let menuFeedback = loadMenuFeedback();
let toastTimer;

function loadMenuFeedback() {
    try {
        return JSON.parse(localStorage.getItem(FEEDBACK_STORAGE_KEY) || "{}") || {};
    } catch {
        return {};
    }
}

function saveMenuFeedback() {
    try {
        localStorage.setItem(FEEDBACK_STORAGE_KEY, JSON.stringify(menuFeedback));
    } catch {
        showToast("บันทึกรีวิวไม่สำเร็จ กรุณาลองใหม่");
    }
}

function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2200);
}

function parseCartKey(key) {
    const [index, style = "", sweetness = "50", toppingIndexes = ""] = String(key).split("::");
    return { index: Number(index), style, sweetness, toppingIndexes: toppingIndexes ? toppingIndexes.split(",").map(Number) : [] };
}

function getUnitPrice(index, toppingIndexes = []) {
    return menuItems[index].price + toppingIndexes.reduce((sum, toppingIndex) => sum + toppings[toppingIndex].price, 0);
}

function getSelectedToppingIndexes() {
    return [...toppingOptionsList.querySelectorAll("input:checked")].map((input) => Number(input.value));
}

function updateDialogPrice() {
    if (selectedDrinkIndex === null) return;
    const quantity = Math.max(1, Math.min(20, Number(drinkQuantity.value) || 1));
    document.querySelector("#dialogPrice").textContent = `รวม ฿${getUnitPrice(selectedDrinkIndex, getSelectedToppingIndexes()) * quantity}`;
}

function addToCart(index, style = "", sweetness = "50", toppingIndexes = [], quantity = 1) {
    const key = `${index}::${style}::${sweetness}::${toppingIndexes.join(",")}`;
    cartSelection.set(key, (cartSelection.get(key) || 0) + quantity);
    updateCart();
    const item = menuItems[index];
    showToast(`เพิ่ม${item.name}${style ? ` (${style})` : ""} ${quantity} แก้วลงตะกร้าแล้ว ♡`);
}

function openMenuDetails(index) {
    const item = menuItems[index];
    selectedDrinkIndex = index;
    menuDialog.style.setProperty("--dialog-tint", item.tint);
    document.querySelector("#dialogEmoji").textContent = item.emoji;
    document.querySelector("#dialogTitle").textContent = item.name;
    document.querySelector("#dialogDescription").textContent = item.detail;
    document.querySelector("#dialogPrice").textContent = `฿${item.price}`;
    const isFruitSmoothie = index < 10;
    const sweetnessChoices = isFruitSmoothie ? ["25", "50", "75", "100"] : ["0", "25", "50", "75", "100"];
    sweetnessLevel.replaceChildren(...sweetnessChoices.map((value) => {
        const option = document.createElement("option");
        option.value = value;
        option.textContent = `หวาน ${value}%`;
        return option;
    }));
    sweetnessLevel.value = isFruitSmoothie ? "25" : "50";
    document.querySelector("#sweetnessHint").hidden = !isFruitSmoothie;
    drinkQuantity.value = "1";
    toppingOptionsList.replaceChildren(...toppings.map((topping, toppingIndex) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "checkbox";
        input.value = toppingIndex;
        label.append(input, document.createTextNode(`${topping.name} +฿${topping.price}`));
        return label;
    }));
    drinkOptions.hidden = !item.styles;
    if (item.styles) {
        drinkStyle.replaceChildren(...item.styles.map((style) => {
            const option = document.createElement("option");
            option.value = style;
            option.textContent = style;
            return option;
        }));
        drinkStyle.value = "เย็น";
    }
    const fillList = (selector, values) => {
        const list = document.querySelector(selector);
        list.replaceChildren(...values.map((value) => {
            const li = document.createElement("li");
            li.textContent = value;
            return li;
        }));
    };
    fillList("#dialogIngredients", item.ingredients);
    fillList("#dialogBenefits", item.benefits);
    updateDialogPrice();
    menuDialog.showModal();
}

function renderFeedback(index, feedbackArea) {
    const item = menuItems[index];
    const data = menuFeedback[item.name] || { liked: false, comments: [] };
    const likeButton = feedbackArea.querySelector("[data-like-index]");
    likeButton.classList.toggle("is-liked", Boolean(data.liked));
    likeButton.setAttribute("aria-pressed", String(Boolean(data.liked)));
    likeButton.innerHTML = `${data.liked ? "♥" : "♡"} <span>${data.liked ? "ถูกใจแล้ว" : "ถูกใจ"}</span>`;
    feedbackArea.querySelector("[data-review-count]").textContent = `รีวิว ${data.comments.length}`;
    const commentsList = feedbackArea.querySelector(".review-list");
    commentsList.replaceChildren();
    if (!data.comments.length) {
        const empty = document.createElement("p");
        empty.className = "review-empty";
        empty.textContent = "ยังไม่มีรีวิว มาแบ่งปันความรู้สึกแรกกันนะ";
        commentsList.append(empty);
        return;
    }
    data.comments.slice().reverse().forEach((comment) => {
        const row = document.createElement("article");
        row.className = "review-entry";
        const author = document.createElement("strong");
        author.textContent = comment.author || "ลูกค้า MALI BLEND";
        const body = document.createElement("p");
        body.textContent = comment.text;
        row.append(author, body);
        commentsList.append(row);
    });
}

function updateCart() {
    const totalQuantity = [...cartSelection.values()].reduce((sum, quantity) => sum + quantity, 0);
    const totalPrice = [...cartSelection.entries()].reduce((sum, [key, quantity]) => {
        const { index, toppingIndexes } = parseCartKey(key);
        return sum + getUnitPrice(index, toppingIndexes) * quantity;
    }, 0);
    cartCount.textContent = totalQuantity;
    document.querySelector("#cartTotal").textContent = `฿${totalPrice}`;
    document.querySelector("#paymentTotal").textContent = `฿${totalPrice}`;
    document.querySelector("#openCheckout").disabled = totalQuantity === 0;
    document.querySelector("#placeOrderWithoutPayment").disabled = totalQuantity === 0;

    const list = document.querySelector("#cartItemsList");
    list.replaceChildren();
    if (cartSelection.size === 0) {
        const empty = document.createElement("p");
        empty.className = "cart-empty";
        empty.textContent = "ยังไม่มีเมนูในตะกร้า เลือกเมนูที่ชอบได้เลย";
        list.append(empty);
        return;
    }

    cartSelection.forEach((quantity, key) => {
        const { index, style, sweetness, toppingIndexes } = parseCartKey(key);
        const item = menuItems[index];
        const toppingText = toppingIndexes.map((toppingIndex) => toppings[toppingIndex].name).join(", ");
        const unitPrice = getUnitPrice(index, toppingIndexes);
        const row = document.createElement("div");
        row.className = "cart-row";
        row.innerHTML = `<span class="cart-item-emoji" aria-hidden="true">${item.emoji}</span><div class="cart-item-copy"><strong>${item.name}${style ? ` · ${style}` : ""} · หวาน ${sweetness}%</strong><span>${toppingText ? `ท็อปปิ้ง: ${toppingText} · ` : ""}฿${unitPrice} × ${quantity}</span></div><div class="cart-item-end"><strong>฿${unitPrice * quantity}</strong><button class="cart-remove" type="button" data-remove-key="${key}" aria-label="นำ${item.name}${style ? `แบบ${style}` : ""}ออกจากตะกร้า">ลบ</button></div>`;
        list.append(row);
    });
}

document.querySelector("#cartButton").addEventListener("click", () => {
    updateCart();
    cartDialog.showModal();
});
cartDialog.querySelector(".dialog-close").addEventListener("click", () => cartDialog.close());
cartDialog.addEventListener("click", (event) => {
    if (event.target === cartDialog) cartDialog.close();
});
document.querySelector("#continueShopping").addEventListener("click", () => {
    cartDialog.close();
    document.querySelector("#menu").scrollIntoView({ behavior: "smooth" });
});
document.querySelector("#placeOrderWithoutPayment").addEventListener("click", () => {
    if (cartSelection.size === 0) return;
    cartDialog.close();
    document.querySelector("#orderFormPanel").hidden = false;
    document.querySelector("#orderSuccessPanel").hidden = true;
    document.querySelector("#orderForm").reset();
    orderDialog.showModal();
});
orderDialog.querySelector(".dialog-close").addEventListener("click", () => orderDialog.close());
orderDialog.addEventListener("click", (event) => {
    if (event.target === orderDialog) orderDialog.close();
});
document.querySelector("#orderForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    if (cartSelection.size === 0) return;
    const formData = new FormData(event.currentTarget);
    const customer = String(formData.get("customer") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const summary = document.querySelector("#confirmedOrderItems");
    summary.replaceChildren();
    let total = 0;
    const items = [];
    cartSelection.forEach((quantity, key) => {
        const { index, style, sweetness, toppingIndexes } = parseCartKey(key);
        const item = menuItems[index];
        const unitPrice = getUnitPrice(index, toppingIndexes);
        total += unitPrice * quantity;
        const toppingNames = toppingIndexes.map((toppingIndex) => toppings[toppingIndex].name);
        items.push({ name: item.name, style, sweetness: Number(sweetness), toppings: toppingNames, quantity, unitPrice });
        const row = document.createElement("li");
        const itemTitle = document.createElement("strong");
        itemTitle.textContent = `${item.name}${style ? ` · ${style}` : ""} · หวาน ${sweetness}%`;
        const itemDetails = document.createElement("span");
        const toppingText = toppingIndexes.map((toppingIndex) => toppings[toppingIndex].name).join(", ");
        itemDetails.textContent = `${toppingText ? `ท็อปปิ้ง: ${toppingText} · ` : ""}${quantity} แก้ว · ฿${unitPrice * quantity}`;
        row.append(itemTitle, itemDetails);
        summary.append(row);
    });
    const submitButton = event.currentTarget.querySelector('[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = "กำลังส่งออเดอร์…";
    try {
        const response = await fetch(`${window.location.protocol}//${window.location.hostname}:8765/api/orders`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ customer, phone, items, total })
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || "ส่งออเดอร์ไม่สำเร็จ");
        document.querySelector("#orderNumber").textContent = result.order.number;
        document.querySelector("#orderCustomerSummary").textContent = `${customer} · ${phone}`;
        document.querySelector("#confirmedOrderTotal").textContent = `฿${total}`;
        document.querySelector("#orderFormPanel").hidden = true;
        document.querySelector("#orderSuccessPanel").hidden = false;
        cartSelection.clear();
        updateCart();
        event.currentTarget.reset();
    } catch (error) {
        showToast(error instanceof TypeError ? "เชื่อมต่อระบบร้านไม่ได้ กรุณาแจ้งร้านโดยตรง" : error.message);
    } finally {
        submitButton.disabled = false;
        submitButton.innerHTML = 'ส่งคำสั่งซื้อ <span>→</span>';
    }
});
document.querySelector("#closeOrderConfirmation").addEventListener("click", () => orderDialog.close());
document.querySelector("#openCheckout").addEventListener("click", () => {
    if (cartSelection.size === 0) return;
    updateCart();
    cartDialog.close();
    paymentDialog.showModal();
});
paymentDialog.querySelector(".dialog-close").addEventListener("click", () => paymentDialog.close());
paymentDialog.addEventListener("click", (event) => {
    if (event.target === paymentDialog) paymentDialog.close();
});
document.querySelector("#paymentForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    if (cartSelection.size === 0) {
        paymentDialog.close();
        showToast("ตะกร้าว่าง กรุณาเลือกเมนูก่อน");
        return;
    }
    const formData = new FormData(event.currentTarget);
    const customer = String(formData.get("customer") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const lines = [...cartSelection.entries()].map(([key, quantity]) => {
        const { index, style, sweetness, toppingIndexes } = parseCartKey(key);
        const item = menuItems[index];
        const toppingText = toppingIndexes.map((toppingIndex) => `${toppings[toppingIndex].name} (+฿${toppings[toppingIndex].price})`).join(", ");
        const unitPrice = getUnitPrice(index, toppingIndexes);
        return `• ${item.name}${style ? ` (${style})` : ""} (หวาน ${sweetness}%)${toppingText ? ` + ท็อปปิ้ง: ${toppingText}` : ""} × ${quantity} = ฿${unitPrice * quantity}`;
    });
    const total = [...cartSelection.entries()].reduce((sum, [key, quantity]) => {
        const { index, toppingIndexes } = parseCartKey(key);
        return sum + getUnitPrice(index, toppingIndexes) * quantity;
    }, 0);
    const orderText = [`ออเดอร์ MALI BLEND`, `ชื่อ: ${customer}`, `เบอร์ติดต่อ: ${phone}`, ...lines, `ยอดโอน: ฿${total}`, "ชำระผ่าน PromptPay — รอตรวจสอบยอด"].join("\n");
    const fallback = document.querySelector("#paymentOrderText");
    fallback.value = orderText;
    try {
        await navigator.clipboard.writeText(orderText);
        fallback.hidden = true;
        showToast("คัดลอกรายการแล้ว กดปุ่มเปิด LINE เพื่อส่งให้ร้าน");
    } catch {
        fallback.hidden = false;
        fallback.focus();
        fallback.select();
        showToast("คัดลอกอัตโนมัติไม่ได้ เลือกข้อความด้านล่างแล้วคัดลอก");
    }
});
document.querySelector("#cartItemsList").addEventListener("click", (event) => {
    const button = event.target.closest("[data-remove-key]");
    if (!button) return;
    cartSelection.delete(button.dataset.removeKey);
    updateCart();
});

menuItems.forEach((item, index) => {
    if (index === 0 || index === 10) {
        const heading = document.createElement("div");
        heading.className = "menu-category-heading";
        heading.setAttribute("role", "heading");
        heading.setAttribute("aria-level", "3");
        heading.textContent = index === 0 ? "สมูทตี้ผลไม้" : "ชาและกาแฟ · เลือกได้ทั้งร้อน เย็น หรือปั่น";
        menuGrid.append(heading);
    }
    const card = document.createElement("article");
    card.className = "menu-card";
    card.innerHTML = `
        <button class="menu-visual" type="button" data-detail-index="${index}" aria-label="ดูส่วนผสมและจุดเด่นของ${item.name}" style="--tint: ${item.tint}; --tag: ${item.tagColor}">
            <span class="menu-tag">${item.tag}</span>${item.image ? `<img class="menu-photo" src="${item.image}" alt="แก้วแตงโมปั่น MALI BLEND">` : `<span class="menu-emoji" aria-hidden="true">${item.emoji}</span>`}
        </button>
        <div class="menu-info">
            <h3>${item.name}</h3><p>${item.detail}</p>
            <div class="menu-bottom"><span class="menu-price">฿${item.price}</span>
                <button class="add-button${item.styles ? " add-button-choice" : ""}" type="button" aria-label="เลือก${item.name}และท็อปปิ้ง" data-menu-index="${index}">${item.styles ? "เลือก" : "+"}</button>
            </div>
            <div class="menu-feedback" data-feedback-index="${index}">
                <div class="feedback-actions"><button class="like-button" type="button" data-like-index="${index}" aria-pressed="false">♡ <span>ถูกใจ</span></button><button class="review-toggle" type="button" data-review-toggle="${index}" aria-expanded="false"><span data-review-count>รีวิว 0</span> <span aria-hidden="true">＋</span></button></div>
                <div class="review-panel" hidden>
                    <div class="review-list" aria-live="polite"></div>
                    <form class="review-form" data-review-form="${index}">
                        <label class="sr-only" for="review-author-${index}">ชื่อผู้รีวิว (ไม่บังคับ)</label>
                        <input id="review-author-${index}" name="author" type="text" maxlength="30" placeholder="ชื่อเล่น (ไม่บังคับ)">
                        <label class="sr-only" for="review-text-${index}">เขียนรีวิวเมนู${item.name}</label>
                        <textarea id="review-text-${index}" name="text" maxlength="240" rows="2" required placeholder="เขียนรีวิวเมนูนี้..."></textarea>
                        <button class="review-submit" type="submit">ส่งรีวิว</button>
                    </form>
                </div>
            </div>
        </div>`;
    menuGrid.append(card);
    renderFeedback(index, card.querySelector(".menu-feedback"));
});

menuGrid.addEventListener("click", (event) => {
    const likeButton = event.target.closest("[data-like-index]");
    if (likeButton) {
        const item = menuItems[Number(likeButton.dataset.likeIndex)];
        const current = menuFeedback[item.name] || { liked: false, comments: [] };
        menuFeedback[item.name] = { ...current, liked: !current.liked };
        saveMenuFeedback();
        renderFeedback(Number(likeButton.dataset.likeIndex), likeButton.closest(".menu-feedback"));
        return;
    }
    const reviewToggle = event.target.closest("[data-review-toggle]");
    if (reviewToggle) {
        const panel = reviewToggle.closest(".menu-feedback").querySelector(".review-panel");
        const isOpening = panel.hidden;
        panel.hidden = !isOpening;
        reviewToggle.setAttribute("aria-expanded", String(isOpening));
        reviewToggle.querySelector("[aria-hidden]").textContent = isOpening ? "−" : "＋";
        return;
    }
    const button = event.target.closest(".add-button");
    if (button) {
        const index = Number(button.dataset.menuIndex);
        openMenuDetails(index);
        return;
    }

    const detailButton = event.target.closest("[data-detail-index]");
    if (!detailButton) return;
    openMenuDetails(Number(detailButton.dataset.detailIndex));
});

menuGrid.addEventListener("submit", (event) => {
    const form = event.target.closest("[data-review-form]");
    if (!form) return;
    event.preventDefault();
    const index = Number(form.dataset.reviewForm);
    const values = new FormData(form);
    const text = String(values.get("text") || "").trim();
    if (!text) return;
    const item = menuItems[index];
    const current = menuFeedback[item.name] || { liked: false, comments: [] };
    current.comments.push({ author: String(values.get("author") || "").trim(), text, createdAt: new Date().toISOString() });
    menuFeedback[item.name] = current;
    saveMenuFeedback();
    renderFeedback(index, form.closest(".menu-feedback"));
    form.reset();
    showToast("ขอบคุณสำหรับรีวิว ♡");
});

menuDialog.querySelector(".dialog-close").addEventListener("click", () => menuDialog.close());
menuDialog.addEventListener("click", (event) => {
    if (event.target === menuDialog) menuDialog.close();
});
document.querySelector("#addSelectedToCart").addEventListener("click", () => {
    if (selectedDrinkIndex === null) return;
    const quantity = Math.max(1, Math.min(20, Number(drinkQuantity.value) || 1));
    drinkQuantity.value = String(quantity);
    addToCart(selectedDrinkIndex, drinkOptions.hidden ? "" : drinkStyle.value, sweetnessLevel.value, getSelectedToppingIndexes(), quantity);
    menuDialog.close();
});
toppingOptionsList.addEventListener("change", updateDialogPrice);
drinkQuantity.addEventListener("input", updateDialogPrice);
drinkQuantity.addEventListener("change", () => {
    drinkQuantity.value = String(Math.max(1, Math.min(20, Number(drinkQuantity.value) || 1)));
    updateDialogPrice();
});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "ปิดเมนู" : "เปิดเมนู");
    menuToggle.textContent = isOpen ? "×" : "☰";
});
navLinks.addEventListener("click", (event) => {
    if (event.target.closest("a, #cartButton")) {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "เปิดเมนู");
        menuToggle.textContent = "☰";
    }
});
