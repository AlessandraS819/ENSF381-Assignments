import React from 'react';
import CartItem from './CartItem'; // Import CartItem component

const Cart = ({ cart, removeFromCart }) => {

    
  

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div>
        {cart.map((item) => (
            <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
        ))}
      </div>
      <h4>Total (in cart): ${}</h4>
    </div> 
  );
}

export default Cart;