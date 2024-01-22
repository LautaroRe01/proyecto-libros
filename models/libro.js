module.exports = (sequelize, DataTypes) => {
  const Libro = sequelize.define('Libro', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    publicationDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });

  return Libro;
};