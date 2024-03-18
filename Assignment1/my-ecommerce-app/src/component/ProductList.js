import React from 'react';
import ProductItem from './ProductItem'; // Import ProductItem component
import product from '../data/products.js';

const ProductList = ({ addToCart }) => {
    return (
      <div className="product-list">
        <h2>Products</h2>
        {product.map(product => (
          <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    );
  }
  
  export default ProductList;