import React, { useState } from 'react';

const ProductItem = ({ product, addToCart }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleMouseEnter = () => {
    setShowDetails(true);
  };

  const handleMouseLeave = () => {
    setShowDetails(false);
  };

  return (
    <div className="product-item" >
        <img  className="product-images" src={product.image} alt={product.name} />
         <div className="product-details" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <h3>{product.name}</h3>   
        </div>
        <p>Price: ${product.price}</p>
        <button class="add-to-cart-button" onClick={() => addToCart(product)}>Add to Cart</button> 
        {showDetails && <p>{product.description}</p>}
    </div>
  );
}

export default ProductItem;