'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        firstName: 'Mateo',
        lastName: 'Díaz',
        email: 'mateo.diaz@correo.com',
        password: 'mateo123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Santiago',
        lastName: 'Mejías',
        email: 'santiago.mejias@correo.com',
        password: 'santiago123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Lucas',
        lastName: 'Rojas',
        email: 'lucas.rojas@correo.com',
        password: 'lucas123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Facundo',
        lastName: 'Fernández',
        email: 'facundo.fernandez@correo.com',
        password: 'facundo123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  },
};
