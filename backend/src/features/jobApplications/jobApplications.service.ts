import prisma from '@/src/config/prisma/prismaClient';
import { JobApplication, NewJobApplication } from '../../types/jobApplication';

export const getJobApplications = async () => {
  const jobApplications: JobApplication[] =
    await prisma.jobApplication.findMany();

  return jobApplications;
};

export const createJobApplication = async ({
  companyName,
}: NewJobApplication) => {
  const job = await prisma.jobApplication.create({
    data: {
      companyName,
    },
  });

  return job;
};
