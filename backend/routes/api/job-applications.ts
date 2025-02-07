import express from 'express';
import { addJobApp } from '../../controllers/api/job-applications';

const router = express.Router();

router.post('/new', addJobApp);

export default router;
