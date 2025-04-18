import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'; // For navigation after registration

const Register = () => {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // Registration logic
  const handleRegister = (e) => {
    e.preventDefault();

    // Basic validation
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    if (!name || !email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Dummy registration (replace with actual logic)
    if (email && password) {
      // Redirect to login page after successful registration
      history.push('/login');
    } else {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-xl w-96">
        <h2 className="text-2xl font-bold text-center mb-6 text-primary">Create an Account</h2>

        <form onSubmit={handleRegister} className="space-y-4">
          <div>
            <label className="block font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-2 rounded w-full"
              required
            />
          </div>

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

          <div>
            <label className="block font-medium">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border p-2 rounded w-full"
              required
            />
          </div>

          {error && <div className="text-red-500 text-center">{error}</div>}

          <button
            type="submit"
            className="primary-btn w-full"
          >
            Register
          </button>
        </form>

        <div className="mt-4 text-center">
          <span>Already have an account? </span>
          <a href="/login" className="text-primary font-semibold">Log In</a>
        </div>
      </div>
    </div>
  );
};

export default Register;
