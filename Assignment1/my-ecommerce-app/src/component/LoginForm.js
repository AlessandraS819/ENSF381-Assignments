import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LoginForm(){
    const validateLogin = async () => {
        try {
            /*const response = await axios.post('http://localhost:5000/login', {
                username: document.getElementById('username').value,
                password: document.getElementById('pword').value
            });
            console.log(response.data); // Handle successful login response
            // Redirect or update UI accordingly*/
            console.log('testing');
        } catch (error) {
            /*console.error('Error:', error.response.data); // Handle error response
            // Update UI to display error message
            alert('User does not exist');*/
        }
    }

    const [formData, setFormData] = useState({
        username: '',
        pword: '',
    });

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value });
        console.log(formData);
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log("Form Data:", formData)
        setFormErrors(validate(formData));
        setIsSubmit(true);
      };

      useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formData);
        }
      }, [formErrors]);

    const validate = (values) => {
        const errors = {}
        console.log('Inside validate');
        if (!values.username) {
            errors.username = "Username is required!";
            console.log(errors.username);
        }

        if (!values.pword) {
            errors.pword = "Password is required!";
            console.log(errors.pword);
        }
        console.log(errors);

        return errors;
    };

    return(
        <>
        <form onSubmit={onSubmitHandler}>
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
                //required=""
                value={formData.username}
                onChange={handleChange}
                autoComplete="username"
            />
            </div>
            <p style={{ color: 'red' }}>{formErrors.username}</p>
            <div>
            <label htmlFor="pword">Password:</label>
            <input
                type="password"
                id="pword"
                name="pword"
                placeholder="Enter your password"
                //required=""
                value={formData.pword}
                onChange={handleChange}
                autoComplete="current-password"
            />
            </div>
            <p style={{ color: 'red' }}>{formErrors.pword}</p>
            <div>
            <button onClick={validateLogin} /*type="button"*/>
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