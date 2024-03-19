import React from 'react';

const CartItem = ({ item, removeFromCart, increaseQuantity, decreaseQuantity }) => {
  const { id, name, price, quantity } = item;

  const handleRemove = () => {
    if (quantity < 1){
        removeFromCart(id);
    }
    else{
        
    }
    
  };
  const handleIncrease = () => {
    increaseQuantity(id);
  };

  const handleDecrease = () => {
    decreaseQuantity(id);
  };

  return (
    <div className="cart-item">
      <img src={item.image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
        <p>Total Price: ${price * quantity}</p>
        <button onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
}

export default CartItem;