import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './component/Homepage.js';
import ProductPage from './component/Productpage.js';

function App() {
  return (
    <>
      <div className="App">
      
      </div> 
      <BrowserRouter>
        <Routes>
          <Route path= "/" element = {<HomePage/>}/>
          <Route path= "/ProductPage" element = {<ProductPage/>}/>
          <Route path= "/Login" element = {<HomePage/>}/>
        </Routes>
      </BrowserRouter> 
    </>
    
  );
}

export default App;
