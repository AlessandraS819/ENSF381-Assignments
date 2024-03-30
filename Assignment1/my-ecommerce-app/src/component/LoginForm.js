import React from 'react';

function LoginForm(){

    return(
        <>
        <form>
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
            <button onclick="validateLogin()" type="button">
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