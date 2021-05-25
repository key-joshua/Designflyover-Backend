import Router from 'express';
import inputRoute from './inputRoute';

const router = Router();
router.use('/', inputRoute);

export default router;
