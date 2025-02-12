import prisma from '../../config/prisma/prismaClient';
import { JobApplication } from '../../types/jobApplication';

export const createJobApplication = async ({ companyName }: JobApplication) => {
  const job = await prisma.jobApplication.create({
    data: {
      companyName,
    },
  });

  return job;
};
