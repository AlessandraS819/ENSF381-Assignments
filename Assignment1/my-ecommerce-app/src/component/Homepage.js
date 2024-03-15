
import React from 'react';
import './Homepage.css';
import logo from './logo.png';

function HomePage() {
    return (
        <>
  <title>Swamp Fox</title>
  <link rel="homepagesheet" href="Homepage.css" />
  <header className="mainheader">
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    {/* Logo and website name go here */}
    <div className="flex-container">
      <div className="mainheader-fleximg">
        <a href="index.html" target="_self" title="Home page">
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
      <a
        className="navigationbarlink"
        href="index.html"
        target="_self"
        title="Home page"
      >
        Home{" "}
      </a>{" "}
       
    </div>
    <div className="navigationbar">
      <a
        className="navigationbarlink"
        href="products.html"
        target="_self"
        title="Products page"
      >
        Products
      </a>
       
    </div>
    <div className="navigationbar">
      <a
        className="navigationbarlink"
        href="contact.html"
        target="_self"
        title="Contact page"
      >
        Contacts
      </a>{" "}
       
    </div>
    <div className="navigationbar">
      <a
        className="navigationbarlink"
        href="login.html"
        target="_blank"
        title="Login page"
      >
        Login
      </a>{" "}
       
    </div>
    <hr />
  </div>
  <main>
    {/* About Us Section */}
    <section className="about-us">
      <h2>About Us</h2>
      {/* About Us contents go here */}
      <p>
        At Swamp Fox, we are dedicated to revolutionizing the skincare and
        makeup industry by providing high-quality, vegan-free, and cruelty-free
        products that empower individuals to express their unique beauty while
        fostering a compassionate lifestyle. <br />
        We believe in the power of nature and science to create innovative
        formulas that nourish and enhance the skin, without compromising our
        ethical values. <br />
        Our mission is to inspire confidence, promote sustainability, and
        advocate for animal welfare, one radiant face at a time.
      </p>
    </section>
    <section>
      <a href="products.html" target="_self" title="Products page">
        <button className="shop-now">Shop Now</button>
      </a>
    </section>
    {/* Customer Reviews/Testimonials Section */}
    <section className="customer-reviews">
      <h2> Customer Reviews</h2>
      <b>Alyssa Gertrude</b>
      <p>
        {" "}
        Amazing! Especially love the French Matte Lipstick and the Cream Jelly
        Cleanser.{" "}
      </p>
      <b>Michael Carter</b>
      <p>
        {" "}
        Bought the tan foundation for one of my friends for her birthday and she
        absolutely loved it! She's been a loyal customer of this company for 3
        years now.
      </p>
    </section>
  </main>
  <footer className="mainfooter">
    <hr />
    <p>© 2024 Swamp Fox. All rights reserved.</p>
  </footer>
</>

    );
}
export default HomePage;
