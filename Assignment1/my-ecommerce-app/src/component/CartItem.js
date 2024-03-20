import React, { useState } from 'react';

const CartItem = ({ item, removeFromCart }) => {
  const { id, name, price, quantity, description} = item;

  const removeItem = () => {
    removeFromCart(id);
  };

  const [showDetails, setShowDetails] = useState(false);

  const handleMouseEnter = () => {
    setShowDetails(true);
  };

  const handleMouseLeave = () => {
    setShowDetails(false);
  };

  return (
    <div className="cart-item">
      <img className="cart-images" src={item.image} alt={name} />
      <div>
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <h4>{name}</h4>
        </div>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
        <p>Total Price: ${price * quantity}</p>
        <button className='remove-button' onClick={removeItem}>Remove</button>
        {showDetails && <p>{description}</p>}
      </div>
    </div>
  );
};

export default CartItem;
