import React, {useState} from 'react';

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import HomePage from './component/Homepage.js';
import ProductPage from './component/Productpage.js';
import LoginPage from './component/LoginPage.js';
import SignupForm from './component/SignupForm.js';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomePage />} ></Route>
        <Route path="/products" element={isLoggedIn ? (<ProductPage />): (<Navigate to="/login" replace={true}/>)}>
        </Route>
          <Route path= "/login" element = {<LoginPage setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path= "/signup" element = {<SignupForm/>}/>
        </Routes>
        
      </BrowserRouter> 
    </>
    
  );
}

export default App;
