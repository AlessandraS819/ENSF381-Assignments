import React from 'react';
import axios from 'axios';

function LoginForm(){
    const validateLogin = async (event) => {
        event.preventDefault(); // Prevent form submission

        try {
            const response = await axios.post('http://localhost:5000/users', {
                username: document.getElementById('username').value,
                password: document.getElementById('pword').value
            });
            console.log(response.data); // Handle successful login response
            // Redirect or update UI accordingly
        } catch (error) {
            console.error('Error:', error.response.data); // Handle error response
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