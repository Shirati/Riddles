const express = require('express');
const router = express.Router();
const { getAllUsers, getById, createUser, updatedUser, deleteUser, login } = require("../controllers/user.controller")

router.get('/', getAllUsers);
router.get('/:userId', getById);
router.post('/', createUser);
router.post('/login', login);
router.put('/:userId', updatedUser);
router.delete('/:userId', deleteUser);

module.exports = router;