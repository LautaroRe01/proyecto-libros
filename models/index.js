const { Sequelize } = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Importa los modelos
db.Autor = require('./autor')(sequelize, Sequelize);
db.Libro = require('./libro')(sequelize, Sequelize);

// Define relaciones entre modelos si es necesario

module.exports = db;