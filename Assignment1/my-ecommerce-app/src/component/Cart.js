import React from 'react';
import CartItem from './CartItem'; // Import CartItem component

const Cart = ({ cart, removeFromCart }) => {
    const getTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
      };
    
  

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div>
        {cart.map((item) => (
            <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
        ))}
      </div>
      <h4>Total (in cart): ${getTotalPrice().toFixed(2)}</h4>
    </div> 
  );
}

export default Cart;