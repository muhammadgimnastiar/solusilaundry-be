const { Sequelize } = require("sequelize");
const db = require("../config/Database.js");
const Paket = require("./PaketModel.js");
const { User } = require("./PaketModel.js");
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

exports.module = User;

(async () => {
    await db.sync();
})();