'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Autors', [
      {
        nombre: 'Nombre Autor 1',
        nacionalidad: 'Nacionalidad 1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nombre: 'Nombre Autor 2',
        nacionalidad: 'Nacionalidad 2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Autors', null, {});
  },
};