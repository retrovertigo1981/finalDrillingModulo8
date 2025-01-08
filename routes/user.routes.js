const express = require('express');
const router = express.Router();
const { UsersController } = require('../controllers/index.controller.js');
const { AuthMiddleware } = require("../middlewares")




// Rutas protegidas con JWT

router.use(AuthMiddleware)

router.get('/', UsersController.getAllUsers);
router.get('/:id', UsersController.findUserById);
router.put('/:id', UsersController.updateUserById);
router.delete('/:id', UsersController.deleteUserById);

module.exports = {
  UserRouter: router,
};
