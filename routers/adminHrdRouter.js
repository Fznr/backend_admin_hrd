import express from 'express';
import { getAllAttendances, addEmployee, editEmployee, getAllEmployees} from '../controllers/adminHrdController.js';

const router = express.Router();

router.get('/attendances', getAllAttendances);

router.post('/employees', addEmployee);

router.get('/employees', getAllEmployees);

router.put('/employees/:id', editEmployee);

export default router;
