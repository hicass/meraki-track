'use client';
import React, { FC, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import supabaseClient from '@/utils/supabase/client';

interface LoginFormProps {
  onLoginSuccess: () => void;
}

const LoginForm: FC<LoginFormProps> = ({ onLoginSuccess }) => {
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
      onLoginSuccess();
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message); // Display error message if login fails
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white text-black flex flex-col items-end gap-4 p-4"
    >
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border ml-2"
        />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border ml-2"
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={loading}
          className="bg-gray-200 p-2 hover:bg-gray-300"
        >
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </div>

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default LoginForm;
