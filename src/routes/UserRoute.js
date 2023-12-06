import express from "express";
import {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
} from "../controllers/UserController.js";

import {
    getPakets,
    getPaketsById
} from "../controllers/PaketController.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/pakets', getPakets);
router.get('/users/:id', getUserById);
router.get('/pakets/:id', getPaketsById);
router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;