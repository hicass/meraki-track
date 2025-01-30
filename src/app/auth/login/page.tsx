'use client';

import { FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import LoginForm from '@/features/auth/LoginForm';

const LoginPage: FC = () => {
  const router = useRouter();

  const handleLoginSuccess = () => {
    // After successful login, navigate to the dashboard
    router.push('/dashboard');
  };

  return (
    <main className="flex flex-col items-center justify-center gap-10 min-h-screen">
      <h1 className="text-4xl font-bold">Log in</h1>

      <LoginForm onLoginSuccess={handleLoginSuccess} />

      <section className="flex items-center flex-col gap-4">
        <p>Don't have an account?</p>

        <Link href="/auth/signup" className="hover:underline">
          Sign up Here
        </Link>
      </section>
    </main>
  );
};

export default LoginPage;
