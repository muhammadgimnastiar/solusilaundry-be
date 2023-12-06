const Sequelize = require("sequelize");
const db = require("../../config/Database");

const { DataTypes } = Sequelize;

const Paket = db.define('pakets', {
    name: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    waktu: DataTypes.INTEGER,
}, {
    freezeTableName: true
});

const User = db.define('users', {
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

exports.module = User;
exports.module = Paket;

(async () => {
    await db.sync();
})();