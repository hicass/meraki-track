import { JobApplication } from '@/types/jobApplication';
import prisma from '../prisma/prismaClient';

export const createJobApp = async ({ companyName }: JobApplication) => {
  return prisma.jobApplication.create({
    data: {
      companyName,
    },
  });
};
