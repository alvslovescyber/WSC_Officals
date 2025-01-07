// Initialize an empty cart
let cart = [];

// Function to add item to cart
function addToCart(name, price) {
    const item = { name, price };
    cart.push(item);
    alert(`${name} has been added to your cart!`);
    console.log(cart); // For debugging purposes
}

// Get all "Add to Cart" buttons
const buttons = document.querySelectorAll('.add-to-cart');

// Add click event listeners to each button
