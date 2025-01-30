import { FC, ReactNode } from 'react';

import DashboardNav from '@/features/dashboard/DashboardNav';

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <DashboardNav />
      <main className="w-full">{children}</main>
    </div>
  );
};

export default DashboardLayout;
