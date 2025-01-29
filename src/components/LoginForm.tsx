'use client';
import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import supabaseClient from '@/utils/supabase/client';

const LoginForm: React.FC = () => {
  const { setSession } = useAuth(); // Access the setSession function from context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error message on form submit

    try {
      // Call Supabase login API
      const { data, error } = await supabaseClient.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw new Error(error.message);
      }

      // Update session on successful login
      setSession(data.session);

      // Optionally, redirect or show a success message
      alert('Login successful!');
    } catch (error: any) {
      setError(error.message); // Display error message if login fails
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='text-black bg-white mt-10'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;