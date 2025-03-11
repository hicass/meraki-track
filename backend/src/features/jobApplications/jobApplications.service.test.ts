import { prismaMock } from '@/__mocks__/prismaMock';
import {
  createJobApplication,
  deleteJobApplication,
} from './jobApplications.service';
import { JobApplication } from '@/src/types/jobApplication';

jest.mock('@/src/config/prisma/prismaClient', () => prismaMock);

describe('createJobApplication', () => {
  it('should create a job application', async () => {
    const mockJob = { id: 1, companyName: 'Test Corp' };

    prismaMock.jobApplication.create.mockResolvedValue(mockJob);

    const result = await createJobApplication({ companyName: 'Test Corp' });

    expect(result).toEqual(mockJob);
    expect(prismaMock.jobApplication.create).toHaveBeenCalledWith({
      data: { companyName: 'Test Corp' },
    });
  });
});

describe('deleteJobApplication', () => {
  it('should delete a job application', async () => {
    const mockJobApplicationDelete = jest.spyOn(
      prismaMock.jobApplication,
      'delete'
    );

    await deleteJobApplication(1);

    expect(mockJobApplicationDelete.mock.calls.length).toBe(1);
  });

  it('should return an array of job applications', async () => {
    const mockJobApplications: JobApplication[] = [
      { id: 1, companyName: 'Test Corp' },
      { id: 2, companyName: 'Test Corp' },
      { id: 3, companyName: 'Test Corp' },
      { id: 4, companyName: 'Test Corp' },
    ];

    prismaMock.jobApplication.delete.mockResolvedValue({
      id: 5,
      companyName: 'Test Corp',
    });
    prismaMock.jobApplication.findMany.mockResolvedValue(mockJobApplications);

    const result = await deleteJobApplication(1);

    expect(result).toBe(mockJobApplications);
  });
});
