import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default AdminLogin;
