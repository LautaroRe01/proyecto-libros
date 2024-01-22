module.exports = (sequelize, DataTypes) => {
  const Autor = sequelize.define('Author', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthdate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    nationality: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  return Autor;
};