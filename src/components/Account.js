// src/components/Account.js
import React, { useState } from 'react';

const Account = () => {
  const [email, setEmail] = useState('user@example.com');
  const [password, setPassword] = useState('');

  const handleUpdate = (e) => {
    e.preventDefault();
    // Here, you would typically update the user's information
    console.log('Updated info:', { email, password });
  };

  return (
    <div className='App-header '>
      <h2>Account Information</h2>
      <form onSubmit={handleUpdate}>
        <input className='passwordbox'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br/>
        <input className='passwordbox'
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br/>
        <button className='loginbutton' type="submit">Update</button>
      </form>
    </div>
  );
};

export default Account;