'use client';
import { FC } from 'react';

import LogoutButton from '@/features/auth/LogoutButton';
import { useAuth } from '@/context/AuthContext';

const HomePage: FC = () => {
  const { session } = useAuth();

  return (
    <main className="flex flex-col items-center justify-center gap-10 min-h-screen">
      <h1>Home Page</h1>

      {session ? (
        <section>
          <p>Hello {session.user?.user_metadata.name}!</p>
          <LogoutButton />
        </section>
      ) : (
        <p>You are not logged in.</p>
      )}
    </main>
  );
};

export default HomePage;
