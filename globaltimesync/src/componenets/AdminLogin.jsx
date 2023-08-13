import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './homestyles.css';

function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const mockAdminCredentials = {
    username: 'admin',
    password: 'password',
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (username === mockAdminCredentials.username && password === mockAdminCredentials.password) {
      setIsAdmin(true);
      setErrorMessage('');
      navigate('/admin');
    } else {
      setIsAdmin(false);
      setErrorMessage('Invalid credentials. Please try again.');
    }
    if(isAdmin)
    {
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="admin-login">
      <h2 style={{color:"white", paddingTop:"100px"}}>Admin Login</h2>
      <br></br>
      <div className='outer'>
      <form onSubmit={handleLogin}>
        <br></br>
      <TextField id="standard-basic" type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          label="Email ID" variant="standard" />
          <br></br>
        <TextField id="standard-basic" 
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label="Password" variant="standard" />
       <br></br><br></br>
       <Button variant="contained" type="submit">Login</Button>
      </form>
      <br></br>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
}

export default AdminLogin;
