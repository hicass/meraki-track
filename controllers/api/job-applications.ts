import { Request, Response } from 'express';
import { createJobApp } from '../../services/jobApplicationService';

export async function addJobApp(req: Request, res: Response) {
  console.log('addJobApp controller called!');
  const body = req.body;
  console.log('ADD JOB APP REQ BODY', body);

  try {
    const newJobApp = await createJobApp(body);
    res.status(201).json(newJobApp);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
}
