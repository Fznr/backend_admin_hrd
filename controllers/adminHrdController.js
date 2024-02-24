import { getAllAttendancesService, createEmployee } from '../services/adminHrdService.js';


async function getAllAttendances(req, res, next) {
    try {
        const startDate = req.query.startDate;
        const endDate = req.query.endDate;
        const employeeId = req.query.employeeId
        const attendances = await getAllAttendancesService(startDate, endDate, employeeId);
        res.status(200).json({ success: true, message: 'Attendances fetched successfully', data: attendances });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch attendances', error: error.message });
    }
}

async function addEmployee(req, res) {
    const { name, email, position, photo, phoneNumber, password } = req.body;
    try {
        const employee = await createEmployee(name, email, position, photo, phoneNumber, password);
        res.status(201).json({ success: true, message: 'Employee created', data: employee });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

export { getAllAttendances, addEmployee };