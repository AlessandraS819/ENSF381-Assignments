import React, {useState} from 'react';
import axios from 'axios';
import Header from './Header.js';
import Footer from './Footer.js';

//Options for messages: All fields are required!, Passwords do not match! Username is already taken, 

function SignupForm(){
    //const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');

    const validateForm = () => {
        const username = document.getElementById('username')?.value;
        const password = document.getElementById('pword')?.value;
        const confirmPassword = document.getElementById('confirmpword')?.value;
        const email = document.getElementById('email')?.value;

        if (!username || !password || !confirmPassword || !email) {
            setErrorMessage('All fields are required!');
            return false;
        }
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match!');
            return false;
        }

        return true;
    }

    const handleSignup = async () => {
        if (!validateForm()) {
            return;
        }

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
            setErrorMessage('');
            setErrorMessage('User added successfully');
            // Redirect or update UI accordingly
        } catch (error) {
            console.error('Error:', error.response?.data); // Handle error response
            setErrorMessage('User is already taken');
        }
    }


    

    return(
        <>
        <Header/>
        <form>
        <br />
        <h2>Signup</h2>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
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
                type="password"
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
                <button onClick={handleSignup} type="button">
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