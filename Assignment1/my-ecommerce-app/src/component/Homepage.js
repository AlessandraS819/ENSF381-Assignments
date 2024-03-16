
import React from 'react';
import './Homepage.css';
import Header from './Header.js'
import Footer from './Footer.js'

function HomePage() {
    return (
        <>
        <Header />
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
                <p class="rating">Rating:⭐⭐⭐⭐⭐</p>

            </p>
            <b>Michael Carter</b>
            <p>
                {" "}
                Bought the tan foundation for one of my friends for her birthday and she
                absolutely loved it! She's been a loyal customer of this company for 3
                years now.
                <p class="rating">Rating:⭐⭐⭐⭐⭐</p>

            </p>
            </section>
        </main>
        <Footer/>
        </>

    );
}
export default HomePage;
