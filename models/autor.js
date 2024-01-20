module.exports = (sequelize, DataTypes) => {
    const Autor = sequelize.define('Autor', {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nacionalidad: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
  
    // Define relaciones con otros modelos si es necesario
  
    return Autor;
  };