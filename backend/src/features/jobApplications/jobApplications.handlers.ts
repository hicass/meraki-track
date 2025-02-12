import { Request, Response } from 'express';
import { createJobApplication } from './jobApplications.service';

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
