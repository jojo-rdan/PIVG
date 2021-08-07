const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define('Videogame', {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    release: {
      type: DataTypes.STRING
    },
    rating: {
      type: DataTypes.INTEGER
    },
    platforms: {
      type: DataTypes.STRING,
      allowNull: false
    },
    mine: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })
};
