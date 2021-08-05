const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('genre', {
        id: {
          primaryKey: true,
          type: DataTypes.UUID,
          allowNull: false
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      });
}
