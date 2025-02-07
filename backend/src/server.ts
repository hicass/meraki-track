import express, { Request, Response, json } from 'express';
import logger from 'morgan';
import next from 'next';
import cors from 'cors';
import routes from './routes';

// Initialize Next.js
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, dir: './frontend' });
const handle = app.getRequestHandler();

// Wait for Next.js to be ready
app.prepare().then(() => {
  const server = express();
  server.use(logger('dev'));
  server.use(cors());
  server.use(json());
  server.use(express.urlencoded({ extended: true }));

  server.use('/api', routes);

  // Handle all Next.js pages and routes
  server.all('./frontend/*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  // Start the server
  const PORT = process.env.PORT || 8000;
  server.listen(PORT, (err?: Error) => {
    if (err) throw err;
    console.log(`Ready on http://localhost:${PORT}`);
  });
});
