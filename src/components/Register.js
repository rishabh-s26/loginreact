
// src/components/Register.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [MobileNo, setMobileNo] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Here, you would typically register the user
    navigate('/account');
  };

  return (
    <div className='App-header '>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input className='passwordbox '
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
        <input className='passwordbox'
          type="MobileNo."
          placeholder="MobileNo."
          value={MobileNo}
          onChange={(e) => setMobileNo(e.target.value)}
          required
        />
        <br/>
        <button className='loginbutton'  type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
