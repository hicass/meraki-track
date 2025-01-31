'use client';
import { FC, ReactNode, useEffect } from 'react';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

import DashboardNav from '@/features/dashboard/DashboardNav';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  const { session } = useAuth();
  const router = useRouter();

  // If there is no session, redirect to the login page
  useEffect(() => {
    if (!session) {
      router.push('/auth/login');
    }
  }, [session]);

  // TODO: Replace with loading spinner
  if (!session) return null;

  return (
    <div className="flex">
      <DashboardNav />
      <main className="w-full">{children}</main>
    </div>
  );
};

export default DashboardLayout;
