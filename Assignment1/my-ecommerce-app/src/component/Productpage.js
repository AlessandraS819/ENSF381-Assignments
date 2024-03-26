import React, { useState }  from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import ProductList from './ProductList.js';
import Cart from './Cart.js';
import './Productpage.css';

function ProductPage(){
    // state to manage items in the cart
    const [cart, setCart] = useState([])
    const addToCart = (product) => {
        const itemIndex = cart.findIndex((item) => item.id === product.id);
    
        if (itemIndex !== -1) {
          // Item already exists in cart, update its quantity
          const updatedCart = [...cart];
          updatedCart[itemIndex].quantity++;
          setCart(updatedCart);
        } else {
          // Item doesn't exist in cart, add it
          setCart([...cart, { ...product, quantity: 1 }]);
        }
      };
    
      // Function to remove an item from the cart
      const removeFromCart = (id) => {
        const updatedCart = cart.map((item) => {
          if (item.id === id) {
            // Decrement quantity if greater than 1, otherwise remove item
            return { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 0 };
          }
          return item;
        });
    
        setCart(updatedCart.filter((item) => item.quantity > 0));
      };
    return(
        <div className = "product-page">
        <>
            <Header />
            <table>
                <tr>
                    <td style = {{width: '55%'}}><ProductList addToCart={addToCart} /></td>
                    <td style = {{width: '50%',verticalAlign:'top'}}><Cart cart={cart} removeFromCart={removeFromCart} /></td>
                </tr>
            </table>
            <Footer />
        </>
        </div>
    );
}

export default ProductPage

