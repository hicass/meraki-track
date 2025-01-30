'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';

import SignUpForm from '@/features/auth/SignUpForm';

const SignupPage: FC = () => {
  const router = useRouter();

  const handleSignupSuccess = () => {
    // After successful login, navigate to the dashboard
    router.push('/dashboard');
  };

  return (
    <main className="flex flex-col items-center justify-center gap-10 min-h-screen">
      <h1 className="text-4xl font-bold">Sign Up</h1>

      <SignUpForm onSignupSuccess={handleSignupSuccess} />
    </main>
  );
};

export default SignupPage;
