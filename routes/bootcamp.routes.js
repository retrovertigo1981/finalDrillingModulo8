const express = require('express');
const router = express.Router();

const { BootcampController } = require('../controllers/bootcamp.controller');

router.get('/', BootcampController.getAllBootcamps);
router.get('/:bootcamp_id', BootcampController.findBootcampbyId);
router.post('/:bootcamp_id/:user_id', BootcampController.addUser);
router.post('/', BootcampController.createBootcamp);

module.exports = {
  BootcampRouter: router,
};
