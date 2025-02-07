import prisma from "../../config/prisma/prismaClient";
import { JobApplication } from "../../types/jobApplication";


export const createJobApp = async ({ companyName }: JobApplication) => {
  return prisma.jobApplication.create({
    data: {
      companyName,
    },
  });
};
