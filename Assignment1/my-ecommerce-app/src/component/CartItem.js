import React from 'react';


const CartItem = ({ item, removeFromCart }) => {
  const { id, name, price, quantity } = item;

  const removeItem = () => {
    removeFromCart(id);
  };



  return (
    <div className="cart-item">
      <img src={item.image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
        <p>Total Price: ${price * quantity}</p>
        <button onClick={removeItem} >Remove</button>
      </div>
    </div>
  );
}

export default CartItem;