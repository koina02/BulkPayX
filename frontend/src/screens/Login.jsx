import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // For navigation after login

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Dummy check for login (you can replace with actual authentication)
  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'admin@bulkpayx.com' && password === 'password123') {
      // Redirect to Dashboard on success
      history.push('/dashboard');
    } else {
      setError('Invalid credentials, please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-xl w-96">
        <h2 className="text-2xl font-bold text-center mb-6 text-primary">Welcome to BulkPayX</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border p-2 rounded w-full"
              required
            />
          </div>

          <div>
            <label className="block font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 rounded w-full"
              required
            />
          </div>

          {error && <div className="text-red-500 text-center">{error}</div>}

          <button
            type="submit"
            className="primary-btn w-full"
          >
            Log In
          </button>
        </form>

        <div className="mt-4 text-center">
          <span>Don't have an account? </span>
          <a href="/signup" className="text-primary font-semibold">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
