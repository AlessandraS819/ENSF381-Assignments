import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginForm({ setIsLoggedIn }){
    const navigate = useNavigate();
    const validateLogin = async (event) => {
        event.preventDefault(); // Prevent form submission

        try {
            const response = await axios.post('http://127.0.0.1:5000/users', {
                username: document.getElementById('username').value,
                password: document.getElementById('pword').value
            });
            if (response.status === 200) {
                console.log('login successful'); // Handle successful login response
                localStorage.setItem('isLoggedIn', true);
                setIsLoggedIn(true); // Update login status in App component
                navigate('/products'); // Navigate to ProductPage
            } else {
                console.error('Error:  Response status is not 200'); // Log error message
                alert('An error occurred during login'); // Display error message to user
            }
        } catch (error) {
            console.error('Error:', error); // Handle error response
            // Update UI to display error message
            alert('User does not exist');
        }
    }

    return(
        <>
        <form onSubmit={validateLogin}>
        <br />
        <h2>Login</h2>
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
            <button type="submit">
                Login
            </button>
            </div>
            <div>
            <a href="signup" target="_self" title="Signup page">
            <button type="button">
                Switch to Signup
            </button>
            </a>
            </div>
        </div>
        </form>
        </>
    );
}
export default LoginForm;