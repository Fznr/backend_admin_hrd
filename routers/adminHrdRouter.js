import express from 'express';
import { getAllAttendances } from '../controllers/adminHrdController.js';

const router = express.Router();

router.get('/attendances', getAllAttendances);

export default router;
