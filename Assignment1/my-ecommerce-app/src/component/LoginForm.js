import React from 'react';

function LoginForm(){

    return(
        <>




<form>
  <br />
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
    <br />
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
    <br />
    <div>
      <button onclick="validateLogin()" type="button">
        Login
      </button>
    </div>
    <div>
      <p>
        Don't have an account?{" "}
        <a href="signup.html">
          Sign Up
          <br />
        </a>
      </p>
    </div>
  </div>
</form>







        














            
        </>
    );

}
export default LoginForm;