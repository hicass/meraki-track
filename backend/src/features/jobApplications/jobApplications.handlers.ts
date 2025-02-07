import { Request, Response } from 'express';
import { createJobApplication } from './jobApplications.service';

export async function handleCreateJobApplication(req: Request, res: Response) {
  const body = req.body;

  try {
    const newJobApp = await createJobApplication(body);
    res.status(201).json(newJobApp);
  } catch (error) {
    console.error('controller error: ', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}