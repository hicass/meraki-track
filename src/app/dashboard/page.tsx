'use client';

import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useAuth } from '@/context/AuthContext';
import LogoutButton from '@/features/auth/LogoutButton';

const DashboardPage: FC = () => {
  const { session } = useAuth();
  const router = useRouter();
  const userName = session?.user?.user_metadata.name;

  const handleLogoutSuccess = () => {
    // After successful logout, navigate to the homepage
    router.push('/');
  };

  return (
    <main className="flex flex-col items-center justify-center gap-10 min-h-screen">
      <h1 className="text-4xl font-bold">Welcome to your dashboard</h1>

      {session ? (
        <section>
          <p>Hello {userName}!</p>
          <LogoutButton onLogoutSuccess={handleLogoutSuccess} />
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

export default DashboardPage;
