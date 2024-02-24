import express from 'express';
import { getAllAttendances, addEmployee, editEmployee } from '../controllers/adminHrdController.js';

const router = express.Router();

router.get('/attendances', getAllAttendances);

router.post('/employees', addEmployee);

router.put('/employees/:id', editEmployee);

export default router;
