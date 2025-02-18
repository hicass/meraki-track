import express from 'express';
import { handleCreateJobApplication, handleGetJobApplications } from './jobApplications.handlers';

const router = express.Router();

router.get('/', handleGetJobApplications)
router.post('/new', handleCreateJobApplication);

export default router;