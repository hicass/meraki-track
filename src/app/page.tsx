'use client';

import { FC } from 'react';
import Link from 'next/link';

import { useAuth } from '@/context/AuthContext';
import LogoutButton from '@/features/auth/LogoutButton';

const HomePage: FC = () => {
  const { session } = useAuth();

  return (
    <main className="flex flex-col items-center justify-center gap-10 min-h-screen">
      <h1 className="text-4xl font-bold">Home Page</h1>

      {session ? (
        <section>
          <p>Hello {session.user?.user_metadata.name}!</p>
          <LogoutButton />
        </section>
      ) : (
        <section className="flex items-center flex-col gap-4">
          <p>You are not logged in.</p>

          <Link href="/auth/login" className="hover:underline">
            Login Here
          </Link>
        </section>
      )}
    </main>
  );
};

export default HomePage;
