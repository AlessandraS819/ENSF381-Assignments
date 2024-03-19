import React from 'react';
import CartItem from './CartItem'; // Import CartItem component

const Cart = ({ cart, removeFromCart }) => {
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  var totalPrice = 0.00.toFixed(2);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <h4>Total (in cart): ${totalPrice}</h4>
      <div>
      
      </div>
    </div> 
  );
}

export default Cart;