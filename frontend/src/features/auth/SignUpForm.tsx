'use client';
import React, { FC, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import supabaseClient from '@/utils/supabase/client';

interface SignupFormProps {
  onSignupSuccess: () => void;
}

const SignUpForm: FC<SignupFormProps> = ({ onSignupSuccess }) => {
  const { setSession } = useAuth(); // Access the setSession function from context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error message on form submit

    try {
      // Call Supabase sign-up API
      const { data, error } = await supabaseClient.auth.signUp({
        email,
        password,
        options: {
          data: {
            name, // Add name to the user metadata
          },
        },
      });

      if (error) {
        throw new Error(error.message);
      }

      // Update session on successful sign-up
      setSession(data.session);
      onSignupSuccess();
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message); // Display error message if sign-up fails
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
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
      </div>
      
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default SignUpForm;
