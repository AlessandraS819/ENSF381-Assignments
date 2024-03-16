import React from 'react';
import './Homepage.css';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
function Header(){
    return(
        <>
        <title>Swamp Fox</title>
        <link rel="homepagesheet" href="Homepage.css" />
        <header className="mainheader">
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            {/* Logo and website name go here  src={logo}*/}
            <div className="flex-container">
                <div className="mainheader-fleximg">
                    <a href='/' target="_self" title="Home page">
                    <img src={logo} height={200} alt="Swamp Fox" />
                    </a>
                </div>
                <div className="mainheader-flextext">
                    <h1>Swamp Fox</h1>
                </div>
            </div>
        </header>
        <div className="flex-container">
            {/* Navigation links go here*/}
            <hr />
            <div className="navigationbar">
                <a className="navigationbarlink" href='/HomePage' target="_self" title="Home page">Home</a>{" "}
                <a className="navigationbarlink" href='/ProductPage'target="_self" title="Products page">Products</a>{" "}
                <a className="navigationbarlink" href="login.html" target="_blank" title="Login page">Login</a>{" "}
            </div>
            <hr />
        </div>
        </>
    );
}
export default Header