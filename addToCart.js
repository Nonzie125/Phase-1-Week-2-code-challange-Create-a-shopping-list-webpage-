// Function to add item to the cart
function addToCart(itemId) {
    // find iditem
    var item = document.getElementById(itemId);

    // Get item title
    var itemTitle = item.querySelector('.title').innerText;

    // new div element
    var cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.id = 'cart-item-' + itemId; 
    cartItem.innerText = itemTitle;

    // i will create a removve button 
    var removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.onclick = function() {
        removeFromCart(cartItem.id);
    };
    cartItem.appendChild(removeButton);

    // Append the cart item to the cart
    var cart = document.getElementById('cart-items');
    cart.appendChild(cartItem);
}

// function to remove from cart
function removeFromCart(cartItemId) {
    var cartItem = document.getElementById(cartItemId);
    cartItem.remove();
}

