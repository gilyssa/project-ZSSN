'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Survivors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Survivors.hasOne(models.Infected, { foreingKey: 'survivorId'})
      Survivors.hasOne(models.Inventory, { foreingKey: 'survivorId'})

    }
  }
  Survivors.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    sex: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Survivors',
    tableName: 'Survivors'
  });
  return Survivors;
};