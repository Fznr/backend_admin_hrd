import express from 'express';
import { getAllAttendances, addEmployee } from '../controllers/adminHrdController.js';

const router = express.Router();

router.get('/attendances', getAllAttendances);

router.post('/employees', addEmployee);

export default router;
