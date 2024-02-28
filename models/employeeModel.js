import { Sequelize } from "sequelize";
import db from "../config/db.js";
import {photoAdminBlob} from '../constant.js'

const {DataTypes} = Sequelize;

const Employee = db.define('Employee', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },  
    name: {
        type: DataTypes.STRING,
        allowNull: false
      },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    position: {
      type: DataTypes.STRING,
      allowNull: false
    },
    photo: {
      type: DataTypes.TEXT
    },
    phoneNumber: {
      type: DataTypes.STRING
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false
    },
}, {freezeTableName: true
});

export default Employee;

(async () => {
    await db.sync();

    const adminExists = await Employee.findOne({ where: { role: 'Admin' } });
    
    if (!adminExists) {
        try {
            // Data admin
            const adminData = {
                name: 'Admin HRD',
                email: 'adminHRD@argon.com',
                position: "HR",
                photo: photoAdminBlob,
                password: 'adminPassword123',
                role: 'Admin'
            };
            const admin = await Employee.create(adminData);
            console.log('Admin data created:', admin.toJSON());
        } catch (error) {
            console.error('Error creating admin data:', error);
        }
    }
})();