'use client';

import { FC } from 'react';
import Link from 'next/link';

import { useAuth } from '@/context/AuthContext';

const HomePage: FC = () => {
  const { session } = useAuth();
  const userName = session?.user?.user_metadata.name;

  return (
    <main className="flex flex-col items-center justify-center gap-10 min-h-screen">
      <h1 className="text-4xl font-bold">Home Page</h1>

      {session ? (
        <section>
          <p>Hello {userName}!</p>
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
