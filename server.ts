import express, { Request, Response } from 'express';
import next from 'next';
import cors from 'cors';

import jobApplicationsRoute from './routes/api/job-applications';

// Initialize Next.js
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Wait for Next.js to be ready
app.prepare().then(() => {
  const server = express();
  server.use(cors());

  // Custom Middleware
  server.use('/api/job-applications', jobApplicationsRoute);

  // Handle all Next.js pages and routes
  server.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  // Start the server
  const PORT = process.env.PORT || 8000;
  server.listen(PORT, (err?: Error) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
