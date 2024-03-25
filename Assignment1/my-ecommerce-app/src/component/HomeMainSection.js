import React from 'react';
import reviews from '../data/reviews.js';
import { FaStar } from "react-icons/fa";
import { useState, useEffect } from 'react';

function HomeMainSection() {

    const [samplereviews, setSamplesReviews] = useState([]);

    const shuffle = ([...Arr]) => {
        let m = Arr.length;
        console.log(m);
        while (m) {
          const i = Math.floor(Math.random() * m--);
          [Arr[m], Arr[i]] = [Arr[i], Arr[m]];
        }
        console.log(Arr);
        return Arr;
      };
    useEffect(() => { // Effect for running code on the initial render
        const sampleSize = shuffle(reviews).slice(0, 2);
        setSamplesReviews(sampleSize);
        }, []);

    return (
        <div>
        <section>
      <h2>About Us</h2>
      {/* About Us contents go here */}
      <p>
        At e-commerce, we are dedicated to revolutionizing the online market by providing high-quality, 
        products that our customers can purchase to improve their lifestyle. <br />
        We believe in the power of convenience and eco-friendly ways to shop online through our incredible brand. <br />
        Our mission is to inspire confidence, promote sustainability, and
        advocate for sustainability, one customer at a time.
      </p>
    </section>
    <br/>
    <a href="/products" target="_self" title="Products page">
    <button>Shop Now</button>
    </a>
        <main>
        <section>
      <h2> Customer Reviews</h2>
      <br/>
     {samplereviews.map(function(item) {
    return (
        <div>
    <div>{item.customerName}</div>
    <br/>
    <div>{item.reviewContent}</div>
    <br/>
    <div>{"Rating: "} {[...Array(item.stars)].map((star) => {return (<FaStar
              />);
              
              })}</div>
              <br/>
    </div>);
})}
    </section>
  </main>
    </div>
    )

}


export default HomeMainSection;