import { Sequelize } from "sequelize";
import db from "../config/db.js";

const {DataTypes} = Sequelize;

const Log_History = db.define('Log_History', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },  
    value: {
        type: DataTypes.STRING,
        allowNull: false
      },
}, {freezeTableName: true
});

export default Log_History;

(async () => {
    await db.sync();
})();