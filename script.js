let cart = [];

function addToCart(item) {
  cart.push(item);
  updateCart();
}

function updateCart() {
  let list = document.getElementById("cartList");
  list.innerHTML = "";

  cart.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });
}

function checkout() {
  let name = document.getElementById("username").value;

  if (!name) {
    alert("Put your Minecraft username first!");
    return;
  }

  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  let message =
`🛒 NEW STORE ORDER

👤 Username: ${name}

📦 Items:
- ${cart.join("\n- ")}

💬 Please open a Discord ticket and send this order.`;

  alert(message);
  navigator.clipboard.writeText(message);

  cart = [];
  updateCart();
}

function copyTicket() {
  let t = document.getElementById("ticketBox");
  t.select();
  document.execCommand("copy");
  alert("Ticket copied!");
}
let lastClick = 0;

function rateLimit() {
  let now = Date.now();
  if (now - lastClick < 1000) {
    return false; // block spam clicks
  }
  lastClick = now;
  return true;
}

}
document.addEventListener("keydown", function(e) {
  if (
    e.key === "F12" ||
    (e.ctrlKey && e.shiftKey && e.key === "I")
  ) {
    alert("Developer tools blocked");
    e.preventDefault();
  }
});