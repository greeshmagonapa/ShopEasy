const products = [
    {
        id: 1,
        name: "Laptop",
        price: 50000,
        image: "https://via.placeholder.com/200"
    },
    {
        id: 2,
        name: "Shoes",
        price: 2500,
        image: "https://via.placeholder.com/200"
    },
    {
        id: 3,
        name: "Phone",
        price: 30000,
        image: "https://via.placeholder.com/200"
    }

];

const productsContainer = document.getElementById("productsContainer");

products.forEach(product => {
    productsContainer.innerHTML += `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        </div>
    `;
});

function addToCart(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const product = products.find(p => p.id === id);

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product Added To Cart");
}