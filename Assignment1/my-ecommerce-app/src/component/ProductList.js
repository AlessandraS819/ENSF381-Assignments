import React from 'react';
import ProductItem from './ProductItem'; // Import ProductItem component
import product from '../data/products.js';

const ProductList = ({ addToCart }) => {
    return (
      <div className="product-list">
        <h2>Products</h2>
        {product.map(product => (
          <ProductItem image = {product.image} productName={product.name} price={product.price} addToCart={addToCart}/>
        ))}
      </div>
    );
  }
  
  export default ProductList;