import { Request, Response } from 'express';
import { createJobApp } from '../../services/jobApplicationService';

export async function addJobApp(req: Request, res: Response) {
  const body = req.body;

  try {
    const newJobApp = await createJobApp(body);
    res.status(201).json(newJobApp);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}
