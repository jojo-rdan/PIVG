const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    return sequelize.define('Genre', {
        id: {
          primaryKey: true,
          type: DataTypes.INTEGER,
          allowNull: false
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
      });
}
