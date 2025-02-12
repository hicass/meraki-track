import express, { Request, Response, json } from 'express';
import logger from 'morgan';
import cors from 'cors';
import routes from './routes';
import dotenv from 'dotenv';

// Initialize Express server
const server = express();

// Middleware setup
server.use(logger('dev'));
server.use(cors());
server.use(json());
server.use(express.urlencoded({ extended: true }));

// Load environment variables
dotenv.config();

// API routes
server.use('/api', routes);

// Start the server
const PORT = process.env.PORT || 8000;
server.listen(PORT, (err?: Error) => {
  if (err) throw err;
  console.log(`Server is ready on http://localhost:${PORT}`);
});
