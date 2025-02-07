import express from 'express';
import { addJobApp } from './jobApplications.handlers';

const router = express.Router();

router.post('/new', addJobApp);

export default router;