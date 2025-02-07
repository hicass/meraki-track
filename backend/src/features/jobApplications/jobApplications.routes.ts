import express from 'express';
import { handleCreateJobApplication } from './jobApplications.handlers';

const router = express.Router();

router.post('/new', handleCreateJobApplication);

export default router;