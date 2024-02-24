import { Sequelize } from "sequelize";
import db from "../config/db.js"
import Employee from "./employeeModel.js";

const {DataTypes} = Sequelize;

const Attendance = db.define('Attendance', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },  
      arrivalDate: {
        type: DataTypes.DATEONLY // Hanya tanggal tanpa waktu
      },
      arrivalTime: {
        type: DataTypes.TIME // Hanya waktu tanpa tanggal
      },
      arrivalStatus: {
        type: DataTypes.ENUM('Masuk', 'Pulang'), // 'Masuk' atau 'Pulang'
        allowNull: false
      },
      departureDate: {
        type: DataTypes.DATEONLY // Hanya tanggal tanpa waktu
      },
      departureTime: {
        type: DataTypes.TIME // Hanya waktu tanpa tanggal
      },
}, {freezeTableName: true
});

Attendance.belongsTo(Employee);

export default Attendance;

(async () => {
    await db.sync();
})();