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
    if (isAdmin) {
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Admin Login</h2>
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-dark w-100">
                  Login
                </button>
              </form>
              {errorMessage && <p className="error-message text-center mt-3">{errorMessage}</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
