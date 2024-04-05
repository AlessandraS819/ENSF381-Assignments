import React from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './component/Homepage.js';
import ProductPage from './component/Productpage.js';
import LoginPage from './component/LoginPage.js';
import SignupForm from './component/SignupForm.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />} ></Route>
        <Route path="/products" element={<ProductPage />}>
        </Route>
          <Route path= "/login" element = {<LoginPage/>}/>
          <Route path= "/signup" element = {<SignupForm/>}/>
        </Routes>
        
      </BrowserRouter> 
    </>
    
  );
}

export default App;
