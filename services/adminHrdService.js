import axios from 'axios';

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

export { getAllAttendancesService };