import React, { useEffect, useState } from 'react';
import './Login.css';
import axios from 'axios';

export default function Signin({ setAuth }) {
  const [user, setUser] = useState({ firstName: '', lastName: '', phone: '', email: '', password: '', confirmPassword: '' });
  const [btnDisable, setBtnDisable] = useState(true); // Disabled initially

  useEffect(() => {
    passwordConfirmation(); // Check password confirmation whenever user state changes
  }, [user]);

  const passwordConfirmation = () => {
    if (user.password !== '' && user.confirmPassword !== '' && user.password === user.confirmPassword) {
      setBtnDisable(false);
    } else {
      setBtnDisable(true);
    }
  };

  const handleRegister = () => {
    setAuth('login');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/loginData', user)
      .then(() => {
        console.log('Data send success');
      })
      .catch((err) => {
        console.log('Data send failed!!', err);
      });
    setUser({ firstName: '', lastName: '', phone: '', email: '', password: '', confirmPassword: '' });
  };

  const handleChange = (e) => {
    setUser((prevUser) => ({ ...prevUser, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand">LOGO</a>
          <div className='d-flex flex-direction-row align-items-center justify-content-center gap-1'>
            Already have an account? <span className='register' onClick={handleRegister}> Login </span>
          </div>
        </nav>
      </div>
      <div className="container">
        <div className='box'>
          <div>
            <h1 className='center'>Welcome {user.firstName}</h1>
            <p>Enter your details to get sign in to your account.</p>
          </div>
          <div className='w-100 gap-5'>
            <label> First name :</label>
            <input type='text' value={user.firstName} name='firstName' onChange={handleChange} placeholder='Enter your first name' required /><br />
            <label> Last name :</label>
            <input type='text' value={user.lastName} name='lastName' onChange={handleChange} placeholder='Enter your last name' required /><br />
            <label>Phone :</label>
            <input type='text' value={user.phone} name='phone' onChange={handleChange} placeholder='Enter your phone number' required /><br />
            <label>Email :</label>
            <input type='text' value={user.email} name='email' onChange={handleChange} placeholder='Enter E-mail address' required /><br />
            <label>Password :</label>
            <input type='password' value={user.password} name='password' onChange={handleChange} placeholder='Enter password' required /><br />
            <label>Confirm Password :</label>
            <input type='password' value={user.confirmPassword} name='confirmPassword' onChange={handleChange} placeholder='Re-Enter password' required /><br />
          </div>
          <button onClick={handleSubmit} disabled={btnDisable}>SignUp</button>
          <p>Or Sign Up with</p>
        </div>
      </div>
    </div>
  );
}
