import React  from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import ProductList from './ProductList.js';
import Cart from './Cart.js';

function ProductPage(){
    return(
        <div className = "product-page">
        <>
            <Header />
            <table>
                <tr>
                    <td style = {{width: '50%'}}><ProductList /></td>
                    <td style = {{width: '50%',verticalAlign:'top'}}><Cart /></td>
                </tr>
            </table>
            <Footer />
        </>
        </div>
    );
}

export default ProductPage

