const { Sequelize } = require("sequelize");
const pg = require('pg');

const db = new Sequelize('postgresql://postgres:3CTDg216ELdhCBOU@db.hndurlrpqemmqjruxsgo.supabase.co:5432/postgres', {
    dialectModule: pg
});
// const db = new Sequelize('laundrytes', 'root', '', {
//     host: 'localhost',
//     dialect: 'mysql'
// });
// coba 2
// const db = new Sequelize('postgres', 'postgres', '3CTDg216ELdhCBOU', {
//     host: 'db.hndurlrpqemmqjruxsgo.supabase.co',
//     dialect: 'postgres'
// });

exports.module = db;