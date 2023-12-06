import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Paket from "./PaketModel.js";
import { User } from "./PaketModel.js";
const { DataTypes } = Sequelize;

// const User = db.define('users', {
//     name: DataTypes.STRING,
//     status: DataTypes.STRING,
//     paket: DataTypes.STRING,
//     berat: DataTypes.STRING,
//     total: DataTypes.STRING,
//     dibayar: DataTypes.STRING,
//     paketId: {
//         model: 'pakets',
//         key: 'id',
//     }
// }, {
//     freezeTableName: true
// });

User.belongsTo(Paket)

export default User;

(async () => {
    await db.sync();
})();