'use client';

import { FC } from 'react';
import { useRouter } from 'next/navigation';

import { useAuth } from '@/context/AuthContext';
import LogoutButton from '@/features/auth/LogoutButton';
import { handleLogoutSuccess } from '@/utils/auth/auth';

const DashboardProfilePage: FC = () => {
  const { session } = useAuth();
  const router = useRouter();
  const userName = session?.user?.user_metadata.name;

  return (
    <section className="border flex flex-col items-center justify-center gap-10 min-h-screen">
      <h1 className="text-4xl font-bold">Profile Page</h1>

      <section>
        <p>Hello {userName}</p>
        <LogoutButton onLogoutSuccess={() => handleLogoutSuccess(router)} />
      </section>
    </section>
  );
};

export default DashboardProfilePage;
