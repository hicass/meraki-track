'use client';

import { FC, useState } from 'react';

import { useAuth } from '@/context/AuthContext';
import { createJobApp } from '@/features/dashboard/job-applications/api/create-job-application';
import JobApplicationForm from '@/features/dashboard/job-applications/components/JobApplicationForm';

const DashboardPage: FC = () => {
  const { session } = useAuth();
  const userName = session?.user?.user_metadata.name;
  const [newJobAppInfo, setNewJobAppInfo] = useState({
    companyName: '',
  });

  function handleFormChange(e: React.ChangeEvent<HTMLInputElement>) {
    setNewJobAppInfo({
      ...newJobAppInfo,
      [e.target.name]: e.target.value,
    });
  }

  async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await createJobApp(newJobAppInfo);
  }

  return (
    <section className="border flex flex-col items-center justify-center gap-10 min-h-screen">
      <h1 className="text-4xl font-bold">
        Welcome to your dashboard {userName}
      </h1>

      <JobApplicationForm
        handleFormChange={handleFormChange}
        handleFormSubmit={handleFormSubmit}
        {...newJobAppInfo}
      />
    </section>
  );
};

export default DashboardPage;
