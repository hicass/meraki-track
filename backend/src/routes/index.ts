import { Router } from 'express';
import jobApplicationsRoutes from '../features/jobApplications/jobApplications.routes';

const router = Router();

router.use('/job-applications', jobApplicationsRoutes);

export default router;