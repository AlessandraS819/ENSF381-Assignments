import React from 'react';
import axios from 'axios';
import Header from './Header.js';
import Footer from './Footer.js';


function SignupForm(){
    //const navigate = useNavigate();
    const validateSignup = async () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('pword').value;
        const email = document.getElementById('email').value;
        try {
            const response = await axios.post('http://localhost:5000/signup/add', {
                username,
                password,
                email
            });
            console.log(response.data); // Handle successful signup response
            alert('User added successfully');
            // Redirect or update UI accordingly
        } catch (error) {
            console.error('Error:', error.response.data); // Handle error response
            // Update UI to display error message
            alert('User already exists');
        }
    }

    return(
        <>
        <Header/>
        <form>
        <br />
        <h2>Signup</h2>
        <div>
            <div>
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                required=""
                autoComplete="username"
            />
            </div>
            <div>
            <label htmlFor="pword">Password:</label>
            <input
                type="password"
                id="pword"
                name="pword"
                placeholder="Enter your password"
                required=""
                autoComplete="current-password"
            />
            </div>
            <div>
            <label htmlFor="confirmpword">Confirm Password:</label>
            <input
                type="confirmpassword"
                id="confirmpword"
                name="confirmpword"
                placeholder="Confirm your password"
                required=""
                autoComplete="current-password"
            />
            </div>




            <div>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your Email"
                required=""
            />
            </div>




            <div>
            <button onclick={validateSignup()} type="button">
                Signup
            </button>
            </div>
            <div>
            <a href="login" target="_self" title="Login page">
            <button  type="button">
                Switch to Login
            </button>
            </a>
            </div>
        </div>
        </form>
        <Footer/>
        </>
    );
}
export default SignupForm;