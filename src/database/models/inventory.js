'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Inventory.belongsTo(models.Survivors, { foreingKey: 'survivorId'});    }
  }
  Inventory.init({
    water: DataTypes.INTEGER,
    food: DataTypes.INTEGER,
    medication: DataTypes.INTEGER,
    ammunition: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Inventory',
    tableName: 'inventory'
  });
  return Inventory;
};