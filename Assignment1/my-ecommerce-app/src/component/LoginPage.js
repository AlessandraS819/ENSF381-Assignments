import React from 'react';
import Header from './Header';
import Footer from './Footer';
import LoginForm from './LoginForm';


function LoginPage({ setIsLoggedIn }){

    return(
        <>
            <Header/>
            <LoginForm setIsLoggedIn={setIsLoggedIn}/>
            <Footer/>

        </>
    )

}
export default LoginPage;