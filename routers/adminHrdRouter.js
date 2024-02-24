import express from 'express';
import { getAllAttendances } from '../controllers/adminHrdController.js';

const router = express.Router();

// Route untuk melihat summary absen karyawan

router.get('/attendances', getAllAttendances);

export default router;
