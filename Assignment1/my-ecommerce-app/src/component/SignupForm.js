import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header.js';
import Footer from './Footer.js';


function SignupForm(){
    //const navigate = useNavigate();
    /*const validateSignup = async () => {
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
    }*/

    const [formData, setFormData] = useState({
        username: '',
        pword: '',
        confirmpword: '',
        email: ''
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

        if (!values.confirmpword) {
            errors.confirmpword = "Password confirmation is required!";
        }
        else if (values.confirmpword.localeCompare(values.pword))
        { errors.confirmpword = "Password and Confirm Password fields must match!"}

        if (!values.email) {
            errors.email = "Email is required!";
        }

        console.log(errors);

        return errors;
    };

    return(
        <>
        <Header/>
        <form onSubmit={onSubmitHandler}>
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
            <label htmlFor="confirmpword">Confirm Password:</label>
            <input
                type="password"
                id="confirmpword"
                name="confirmpword"
                placeholder="Confirm your password"
                //required=""
                value={formData.confirmpword}
                onChange={handleChange}
                autoComplete="current-password"
            />
            </div>
            <p style={{ color: 'red' }}>{formErrors.confirmpword}</p>

            <div>
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your Email"
                //required=""
                value={formData.email}
                onChange={handleChange}
            />
            </div>
            <p style={{ color: 'red' }}>{formErrors.email}</p>
            <div>
            <button >
                Signup
            </button>
            </div>
            <div>
            <a href="login" target="_self" title="Login page">
            <button type="button">
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