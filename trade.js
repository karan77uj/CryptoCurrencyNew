let cart = [];

function addToCart(title,amount)
{
    const existingItemIndex = cart.findIndex(item => item.title === item);

    if(existingItemIndex > -1)
    {
        cart[existingItemIndex].quantity +=1;
    }
    else
    {
        cart.push({title,amount,quantity : 1});
    }
    alert(`${title} was added in your account `);
    updateCart();
}

function updateCart()
{
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item,index)=>{
        total += item.quantity * item.amount;
        cartItems.innerHTML +=`
        <div class="cart-items">
            <span>${item.title} ${item.quantity}</span>
            <span>₹${item.amount * item.quantity}</span>
            <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Trade</button>
        </div>
        `;
    });
    document.getElementById('cartTotal').textContent= `Total:$ ${total}`;
}

function removeFromCart(index)
{
    const item = cart[index];
    cart.splice(index,1);
    updateCart();
}