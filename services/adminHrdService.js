import axios from "axios";
import Employee from "../models/employeeModel.js";
import Log_History from "../models/logHistoryModel.js";
import { Op } from "sequelize";

async function getAllAttendancesService(startDate, endDate, employeeId) {
  try {
    const response = await axios.get("http://localhost:3002/attendances", {
      params: {
        startDate: startDate,
        endDate: endDate,
        employeeId: employeeId ? employeeId : "",
      },
    });
    console.log(response.data);
    return response.data.data;
  } catch (error) {
    throw new Error("Failed to fetch attendances, " + error);
  }
}

async function createEmployee(
  name,
  email,
  position,
  photo,
  phoneNumber,
  password,
  role
) {
  try {
    const employee = await Employee.create({
      name,
      email,
      position,
      photo,
      phoneNumber,
      password,
      role,
    });
    return employee;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to create employee");
  }
}

async function editEmployeeService(id, newData) {
  try {
    const employee = await Employee.findByPk(id);
    if (!employee) {
      throw new Error("Employee not found");
    }
    const updatedEmployee = await employee.update(newData);
    return updatedEmployee;
  } catch (error) {
    throw new Error("Failed to update employee");
  }
}

async function createLogHistory(value) {
  try {
    const logHistory = await Log_History.create({ value });
    return logHistory;
  } catch (error) {
    throw new Error("Failed to create logHistory");
  }
}

async function getAllEmployeesService(name, email) {
  try {
    const filterOptions = {
      where: {
        role: "Employee",
      },
    };
    if (name) {
      filterOptions.where.name = {
        [Op.iLike]: `%${name}%`,
      };
    }
    if (email) {
      if (!filterOptions.where) filterOptions.where = {};
      filterOptions.where.email = {
        [Op.iLike]: `%${email}%`,
      };
    }

    const employees = await Employee.findAll(filterOptions);
    console.log(employees);
    return employees;
  } catch (error) {
    throw new Error(error);
  }
}
export {
  getAllAttendancesService,
  createEmployee,
  editEmployeeService,
  createLogHistory,
  getAllEmployeesService,
};
