const express = require('express');
const { getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} = require("../controllers/UserController.js");

const {
    getPakets,
    getPaketsById
} = require("../controllers/PaketController.js");

const router = express.Router();

router.get('/users', getUsers);
router.get('/pakets', getPakets);
router.get('/users/:id', getUserById);
router.get('/pakets/:id', getPaketsById);
router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

exports.module = router;