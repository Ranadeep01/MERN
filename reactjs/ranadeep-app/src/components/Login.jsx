import React from 'react'
import './Login.css'
import './center-div.css'

export default function Login({setAuth}) {

  const handleRegister=()=>{
    setAuth('signUp')
  }
    
  return (
    <div>

      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand">LOGO</a>
          <div className='d-flex flex-direction-row align-items-center justifu-content-center gap-1' > 
            Don't have an account? <span className='register' onClick={handleRegister} > Register Now </span> 
          </div>
      </nav>
      <div className="container">
        <div className='box'>
          <div>
            <h1 className='center'>Welcome back</h1>
            <p>Enter your details to get sign in to your account.</p>
          </div>
          <div className='w-100'>
            <label>Email</label>
            <input type='email' placeholder='Enter E-mail' required /><br/>
            <label>Password</label>
            <input type='password' placeholder='Enter password' required /><br/>
          </div>
          <p>Forgot Password?</p>
          <button>Continue</button>
          <p>Or Sign in with</p>
        </div>
      </div>
    </div>
  )
}

