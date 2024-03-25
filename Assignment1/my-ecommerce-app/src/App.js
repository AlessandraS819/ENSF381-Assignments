import logo from './logo.svg';
import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './component/Homepage.js';
import ProductPage from './component/Productpage.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />} ></Route>
        <Route path="/products" element={<ProductPage />}>
        </Route>
          <Route path= "/Login" element = {<HomePage/>}/>
        </Routes>
      </BrowserRouter> 
    </>
    
  );
}

export default App;
