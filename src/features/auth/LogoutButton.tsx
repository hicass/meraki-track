import React, { FC } from 'react';

import { useAuth } from '@/context/AuthContext';
import supabaseClient from '@/utils/supabase/client';

interface LoginFormProps {
  onLogoutSuccess: () => void;
}

const LogoutButton: FC<LoginFormProps> = ({ onLogoutSuccess }) => {
  const { setSession } = useAuth(); // Access the setSession function from context

  const handleLogout = async () => {
    try {
      // Call Supabase signOut API
      await supabaseClient.auth.signOut();

      // Clear session after logout
      setSession(null); // Update the session to null
      onLogoutSuccess();
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
