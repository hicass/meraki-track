import { prismaMock } from '@/__mocks__/prismaMock';
import { createJobApplication } from './jobApplications.service';

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
