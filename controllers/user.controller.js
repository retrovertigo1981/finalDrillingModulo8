const { or, where } = require('sequelize');
const db = require('../models');

const { User, Bootcamp } = db;

const UsersController = {};

UsersController.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({
      order: [['id', 'ASC']],
      include: {
        model: Bootcamp,
        through: { attributes: [] },
      },
    });
    return res.json(users);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

UsersController.createUser = async (req, res, next) => {
  const data = req.body;
  console.log(data);
  try {
    const user = await User.create(data);
    return res.json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

UsersController.findUserById = async (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  try {
    const user = await User.findByPk(id, {
      include: {
        model: Bootcamp,
        through: { attributes: [] },
      },
    });
    res.json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

UsersController.updateUserById = async (req, res, next) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    await user.update(data);
    return res.json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

UsersController.deleteUserById = async (req, res, next) => {
  const id = req.params.id;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no Encontrado' });
    }
    await user.destroy();
    return res.json({ message: 'Usuario eliminado' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  UsersController,
};
