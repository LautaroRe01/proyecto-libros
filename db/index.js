/ Módulo que maneja la conexión a la base de datos
const { Sequelize } = require('sequelize');
const config = require('./config');

// Conexión a la base de datos
const sequelize = new Sequelize(config.development);

// Objeto para almacenar modelos
const db = {};

// Sincroniza modelos con la base de datos
sequelize.sync()
  .then(() => {
    console.log('Base de datos sincronizada');
  })
  .catch((error) => {
    console.error('Error al sincronizar la base de datos:', error);
  });

module.exports = db;