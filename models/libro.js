const { DataTypes } = require('sequelize');
const sequelize = require('./index');

const Libro = sequelize.define('Libro', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  autorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Libro;