import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Paket = db.define('pakets', {
    name: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    waktu: DataTypes.INTEGER,
}, {
    freezeTableName: true
});

export const User = db.define('users', {
    name: DataTypes.STRING,
    status: DataTypes.STRING,
    berat: DataTypes.INTEGER,
    total: DataTypes.INTEGER,
    dibayar: DataTypes.BOOLEAN,
    paketId: {
        type: Sequelize.INTEGER,
        model: 'pakets',
        key: 'id',
    }
}, {
    freezeTableName: true
});

Paket.hasMany(User, {
    foreignKey: "paketId"
})


export default Paket;

(async () => {
    await db.sync();
})();