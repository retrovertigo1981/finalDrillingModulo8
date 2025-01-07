'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_bootcamps', {
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users', // Nombre de la tabla users
          key: 'id',
        },
        onDelete: 'CASCADE', // Elimina los registros relacionados si se borra el usuario
        onUpdate: 'CASCADE', // Actualiza si se modifica el id del usuario
      },
      bootcamp_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'bootcamps', // Nombre de la tabla bootcamps
          key: 'id',
        },
        onDelete: 'CASCADE', // Elimina los registros relacionados si se borra el bootcamp
        onUpdate: 'CASCADE', // Actualiza si se modifica el id del bootcamp
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user_bootcamps');
  },
};
