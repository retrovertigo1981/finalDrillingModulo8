const express = require('express');
const router = express.Router();

const { UsersController } = require('../controllers/index.controller.js');

router.get('/', UsersController.getAllUsers);
router.get('/:id', UsersController.findUserById);
router.post('/', UsersController.createUser);
router.put('/:id', UsersController.updateUserById);
router.delete('/:id', UsersController.deleteUserById);

module.exports = {
  UserRouter: router,
};
