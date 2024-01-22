'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Libros', [
      {
        titulo: 'Título Libro 1',
        autorId: 1, // ID del autor correspondiente
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Título Libro 2',
        autorId: 2, // ID del autor correspondiente
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Libros', null, {});
  },
};