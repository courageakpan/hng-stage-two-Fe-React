import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import { useState } from 'react';

export default function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    // Simple validation
    if (!fullName || !email || !password) {
      setError('Please fill in all fields');
      return;
    }
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }
    
    // For demo purposes, accept any valid input
    // In a real app, you'd register with a backend
    try {
      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify({ fullName, email }));
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', email);
      setSuccess('Account created successfully!');
      
      // Redirect to dashboard after 2 seconds
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } catch (err) {
      setError('Failed to create account');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
          {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>}
          {success && <div className="bg-green-100 text-green-700 p-3 rounded mb-4">{success}</div>}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="border rounded p-2"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="border rounded p-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="border rounded p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Create Account</button>
          </form>
          <p className="text-sm text-center text-gray-500 mt-4">
            Already have an account? <Link to="/auth/login" className="text-blue-600">Login</Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}