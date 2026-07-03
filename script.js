let cart = [];

// ADD ITEM
function addToCart(item) {
  cart.push(item);
  updateCart();
}

// UPDATE CART UI
function updateCart() {
  const list = document.getElementById("cartList");

  if (!list) return;

  list.innerHTML = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.innerText = item;
    list.appendChild(li);
  });
}

// CHECKOUT
function checkout() {
  const nameInput = document.getElementById("username");

  if (!nameInput || !nameInput.value) {
    alert("Put your username first!");
    return;
  }

  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }

  let message =
`🛒 NEW ORDER

👤 Username: ${nameInput.value}

📦 Items:
- ${cart.join("\n- ")}

Send this in Discord ticket.`;

  alert(message);
  navigator.clipboard.writeText(message);

  cart = [];
  updateCart();
}
