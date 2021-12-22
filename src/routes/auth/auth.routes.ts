import { Router, Request, Response } from 'express';
import { registerController } from './auth.controller';
import { uploadFile } from '../../middlewares/multer';

const router = Router();

router.get('/register', uploadFile.single('image'), registerController);

module.exports = router;
