'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Infected extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Infected.belongsTo(models.Survivors, { foreingKey: 'survivorId'});
    }
  }
  Infected.init({
    infected: DataTypes.BOOLEAN,
    notifications: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Infected',
    tabelName: 'infected'
  });
  return Infected;
};     