'use client';

import LoginForm from '@/features/auth/LoginForm';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const router = useRouter();

  const handleLoginSuccess = () => {
    // After successful login, navigate to the dashboard
    router.push('/dashboard');
  };

  return (
    <main className="flex flex-col items-center justify-center gap-10 min-h-screen">
      <h1 className="text-4xl font-bold">Log in</h1>

      <LoginForm onLoginSuccess={handleLoginSuccess} />
    </main>
  );
};

export default LoginPage;
