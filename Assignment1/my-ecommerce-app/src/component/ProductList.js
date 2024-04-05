import React, { useState, useEffect }  from 'react';
import axios from 'axios';
import ProductItem from './ProductItem'; // Import ProductItem component
    

const ProductList = ({ addToCart }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    return (
        <div className="product-list">
          <h2>Products</h2>
          {/* Map over each product in the productsData array */}
          <div></div>
          <div >
            {products.map(product => (
                // Pass each product as a prop to the ProductItem component
                <ProductItem key={product.id} product={product} addToCart={addToCart}/>
            ))}
          </div>
          
        </div>
      );
 
  }
  
  export default ProductList;