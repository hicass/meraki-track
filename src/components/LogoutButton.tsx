import React from 'react';
import { useAuth } from '@/context/AuthContext';
import supabaseClient from '@/utils/supabase/client';

const LogoutButton: React.FC = () => {
  const { setSession } = useAuth(); // Access the setSession function from context

  const handleLogout = async () => {
    try {
      // Call Supabase signOut API
      await supabaseClient.auth.signOut();

      // Clear session after logout
      setSession(null); // Update the session to null
      alert('Logged out successfully!');
    } catch (error) {
      console.error('Error logging out:', error);
      alert('Error logging out. Please try again.');
    }
  };

  return (
    <button onClick={handleLogout}>
      Log Out
    </button>
  );
};

export default LogoutButton;
