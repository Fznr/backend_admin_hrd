import axios from 'axios';
import Employee from '../models/employeeModel.js';

async function getAllAttendancesService(startDate, endDate, employeeId) {
    try {
        const response = await axios.get('http://localhost:3000/attendances', {
            params: {
                startDate: startDate,
                endDate: endDate,
                employeeId: employeeId? employeeId : ''
            }
        });
        return response.data.data;
    } catch (error) {
        throw new Error('Failed to fetch attendances, ' + error);
    }
}

async function createEmployee(name, email, position, photo, phoneNumber, password) {
    try {
        const employee = await Employee.create({
            name,
            email,
            position,
            photo,
            phoneNumber,
            password
        });
        return employee;
    } catch (error) {
        throw new Error('Failed to create employee');
    }
}

async function editEmployeeService(id, newData) {
    try {
        const employee = await Employee.findByPk(id);
        if (!employee) {
            throw new Error('Employee not found');
        }
        const updatedEmployee = await employee.update(newData);
        return updatedEmployee;
    } catch (error) {
        throw new Error('Failed to update employee');
    }
}
export { getAllAttendancesService, createEmployee, editEmployeeService };