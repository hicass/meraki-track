import express from 'express';
import {
  handleCreateJobApplication,
  handleGetJobApplications,
  handleDeleteJobApplication,
} from './jobApplications.handlers';

const router = express.Router();

router.get('/', handleGetJobApplications);
router.post('/new', handleCreateJobApplication);
router.delete(`/:id`, handleDeleteJobApplication);

export default router;
