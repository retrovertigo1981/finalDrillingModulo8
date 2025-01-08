const db = require('../models');

const { Bootcamp, User } = db;

BootcampController = {};

BootcampController.getAllBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.findAll({
      order: [['id', 'ASC']],
      include: {
        model: User,
        through: { attributes: [] },
      },
    });
    return res.status(200).json(bootcamps);
  } catch (error) {
    console.error(error);
    next(error)
  }
};

BootcampController.createBootcamp = async (req, res, next) => {
  const data = req.body;
  try {
    const bootcamp = await Bootcamp.create(data);
    res.status(201).json(bootcamp);
  } catch (error) {
    console.error(error);
    next(error)
  }
};

BootcampController.addUser = async (req, res, next) => {
  const params = req.params;

  try {
    const bootcamp = await Bootcamp.findByPk(params.bootcamp_id);

    if (!bootcamp) {
      return res.status(404).json({ message: 'Bootcamp no Encontrado' });
    }

    const user = await User.findByPk(params.user_id);
    console.log(user);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no Encontrado' });
    }
    await bootcamp.addUser(user.id);

    return res.status(200).json({
      message: `Usuario ${user.firstName} ${user.lastName} agregado al Bootcamp ${bootcamp.title}`,
    });
  } catch (error) {
    console.error(error);
    next(error)
  }
};

BootcampController.findBootcampbyId = async (req, res, next) => {
  const id = req.params.bootcamp_id;
  try {
    const bootcamp = await Bootcamp.findByPk(id, {
      include: {
        model: User,
        through: { Attributes: [] },
      },
    });
    if (!bootcamp) {
      return res.status(404).json({ message: 'Bootcamp no encontrado' });
    }
    res.json(bootcamp);
  } catch (error) {
    console.error(error);
    next(error)
  }
};

module.exports = {
  BootcampController,
};
