const cartContainer = document.getElementById("cartContainer");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

let total = 0;

cart.forEach((item, index) => {
    total += item.price;

    cartContainer.innerHTML += `
        <div class="product-card">
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
            <button onclick="removeItem(${index})">
                Remove
            </button>
        </div>
    `;
});

cartContainer.innerHTML += `
    <h2 style="text-align:center; margin:20px;">
        Total: ₹${total}
    </h2>
`;

function removeItem(index) {
    cart.splice(index, 1);

    localStorage.setItem("cart", JSON.stringify(cart));

    location.reload();
}