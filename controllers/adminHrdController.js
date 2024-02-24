import { getAllAttendancesService } from '../services/adminHrdService.js';


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

export { getAllAttendances };