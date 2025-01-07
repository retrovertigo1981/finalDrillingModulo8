'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bootcamps', [
      {
        title: 'Introduciendo El Bootcamp De React',
        cue: 10,
        description:
          'React es la librería más usada en JavaScript para el desarrollo de interfaces.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Bootcamp Desarrollo Web Full Stack',
        cue: 8,
        description:
          'Crearás aplicaciones web utilizando las tecnologías y lenguajes más actuales y populares, como: JavaScript, nodeJS, Angular, MongoDB, ExpressJS.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Bootcamp Big Data, Inteligencia Artificial & Machine Learning',
        cue: 7,
        description:
          'Domina Data Science, y todo el ecosistema de lenguajes y herramientas de Big Data, e intégralos con modelos avanzados de Artificial Intelligence y Machine Learning.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('bootcamps', null, {});
  },
};
