// import User from "../models/UserModel.js";
// import Paket from "../models/PaketModel.js";
const Paket = require('../models/PaketModel.js');

const getPakets = async (req, res) => {
    try {
        const response = await Paket.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}
const getPaketsById = async (req, res) => {
    try {
        const response = await Paket.findOne({
            where: {
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

exports.module = {
    getPakets, getPaketsById
}

