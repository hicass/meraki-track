import prisma from '@/src/config/prisma/prismaClient';
import { NewJobApplication } from '../../types/jobApplication';

export const createJobApplication = async ({ companyName }: NewJobApplication) => {
  const job = await prisma.jobApplication.create({
    data: {
      companyName,
    },
  });
  
  return job;
};
