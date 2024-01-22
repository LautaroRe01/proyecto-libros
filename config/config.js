const path = require('path');

module.exports = {
  development: {
    username: 'root',  
    password: '',      
    database: 'proyecto_libros_db', 
    host: 'localhost',
    dialect: 'mysql',
    seederStorage: 'sequelize',  
    seederStorageTableName: 'sequelize_seeders',
    migrationStorage: 'sequelize', 
    migrationStorageTableName: 'sequelize_migrations',
  },
  production: {
    username: 'root',
    password: '',
    database: 'proyecto_libros_db',
    host: 'localhost',
    dialect: 'mysql',
  }
};