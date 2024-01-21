
const { Sequelize } = require('sequelize');
const config = require('./config');

// Conexión a la base de datos
const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
  host: config.development.host,
  dialect: 'mysql', // Ajusta según tu base de datos (puede ser 'postgres', 'sqlite', etc.)
  transactionType: 'IMMEDIATE', // Puede ser necesario para algunas bases de datos
  logging: false, // Desactiva el logging para evitar mensajes innecesarios en la consola
});

// Importa tus modelos
const AutorModel = require('../models/autor');
const LibroModel = require('../models/libro');

// Define los modelos utilizando la conexión sequelize
const Autor = AutorModel(sequelize, Sequelize);
const Libro = LibroModel(sequelize, Sequelize);

// Objeto para almacenar modelos y la conexión a la base de datos
const db = {
  sequelize,
  Autor,
  Libro,
};

// Sincroniza modelos con la base de datos
sequelize.sync()
  .then(() => {
    console.log('Base de datos sincronizada');
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });

module.exports = db;