import React from 'react';
import ProductItem from './ProductItem'; // Import ProductItem component
import product from '../data/products';// this is the product data array 

const ProductList = ({ addToCart }) => {
    return (
        <div className="product-list">
          <h2>Products</h2>
          {/* Map over each product in the productsData array */}
          <div></div>
          <div >
            {product.map(product => (
                // Pass each product as a prop to the ProductItem component
                <ProductItem key={product.id} product={product} addToCart={addToCart}/>
            ))}
          </div>
          
        </div>
      );
 
  }
  
  export default ProductList;