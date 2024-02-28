import { getAllAttendancesService, createEmployee, editEmployeeService, getAllEmployeesService } from '../services/adminHrdService.js';


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
    console.log('halo masuk')
    const { name, email, position, photo, phoneNumber, password, role } = req.body;
    try {
        const employee = await createEmployee(name, email, position, photo, phoneNumber, password, role);
        res.status(201).json({ success: true, message: 'Employee created', data: employee });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

async function editEmployee(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
        const updatedEmployee = await editEmployeeService(id, newData);
        res.status(200).json({ success: true, message: 'Employee updated', data: updatedEmployee });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

async function getAllEmployees(req, res, next) {
    try {
        const name = req.query.name;
        const email = req.query.email;
        const employees = await getAllEmployeesService(name, email);
        res.status(200).json({ success: true, message: 'Employees fetched successfully', data: employees });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch employees', error: error.message });
    }
}
export { getAllAttendances, addEmployee, editEmployee, getAllEmployees };