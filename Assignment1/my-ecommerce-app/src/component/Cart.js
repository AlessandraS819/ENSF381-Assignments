import React from 'react';
import CartItem from './CartItem'; // Import CartItem component

const Cart = ({ cart, removeFromCart }) => {
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cart.map(item => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
      ))}
      <p>Total Price: ${getTotalPrice()}</p>
    </div>
  );
}

export default Cart;