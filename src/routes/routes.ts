import { Router } from 'express';
// routes path
const authRoutes = require('./auth/auth.routes');
const userRoutes = require('./users/user.routes');
const router = Router();

router.use('/auth', authRoutes);
router.use('/users', userRoutes);

export default router;
