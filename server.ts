import express, { Request, Response } from 'express';
import next from 'next';
import cors from 'cors';

// Initialize Next.js
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Wait for Next.js to be ready
app.prepare().then(() => {
  const server = express();
  server.use(cors());

  // Your custom routes go here
  server.get('/api/test', (req: Request, res: Response) => {
    console.log('Test API called!');

    res.json({ message: 'Hello from Express!' });
  });

  // Handle all Next.js pages and routes
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Start the server
  const PORT = process.env.PORT || 8000;
  server.listen(PORT, (err?: Error) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
