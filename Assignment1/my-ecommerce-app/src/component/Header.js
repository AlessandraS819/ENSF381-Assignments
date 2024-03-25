import React from 'react';
import logo from '../images/logo.png';
import '../index.css';

function Header() {
    return (
        <div>
        <header>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <div className="flex-container">
        <div className="mainheader-fleximg">
            <a>
            <img src={logo} height={200} alt="e-commerce" />
            </a>
        </div>

        <div className="mainheader-flextext">
        <h1>e-commerce</h1>
        </div>
        </div>
</header>
<div className="flex-container">
    {/* Navigation links go here*/}
    <div className="navigationbar1">
    <a href='/'> Home </a>
    </div>
    <div  className="navigationbar2">
    <a href='/products'>Products</a>
    </div>
    <div  className="navigationbar3">
    <a href='/login'>Login</a>
    </div>
</div>
</div>
    );
}

export default Header;