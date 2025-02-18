import { Request, Response } from 'express';
import { createJobApplication, getJobApplications } from './jobApplications.service';

export async function handleGetJobApplications(req: Request, res: Response) {
  try {
    const jobApplications = await getJobApplications();
    res.status(201).json(jobApplications);
  } catch (error) {
    console.error('handler error: ', error);
    res.status(500).json({ error: 'Something went wrong' })
  }
}

export async function handleCreateJobApplication(req: Request, res: Response) {
  const newJobApplicationInfo = req.body;

  try {
    const newJobApplication = await createJobApplication(newJobApplicationInfo);
    res.status(201).json(newJobApplication);
  } catch (error) {
    console.error('controller error: ', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}
