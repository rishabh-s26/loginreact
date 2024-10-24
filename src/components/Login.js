// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import login from './login.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Here, you would typically authenticate the user
    navigate('/account');
  };

  return (
    <div className='App-header '>
      <h2>LogIn</h2>
      <form onSubmit={handleLogin}>
        <input className='passwordbox'
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br/>
        <input className='passwordbox'
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br/>
        <button className='loginbutton' type="submit" >Login</button>
      </form>
      <p>
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
};

export default Login;