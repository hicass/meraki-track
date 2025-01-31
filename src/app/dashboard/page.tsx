'use client';

import { FC } from 'react';
import { useAuth } from '@/context/AuthContext';

const DashboardPage: FC = () => {
  const { session } = useAuth();
  const userName = session?.user?.user_metadata.name;

  return (
    <section className="border flex flex-col items-center justify-center gap-10 min-h-screen">
      <h1 className="text-4xl font-bold">
        Welcome to your dashboard {userName}
      </h1>
    </section>
  );
};

export default DashboardPage;
