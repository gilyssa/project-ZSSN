'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('infecteds', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      infected: {
        type: Sequelize.BOOLEAN
      },
      notifications: {
        type: Sequelize.INTEGER
      },
      survivorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Survivors",
          key: "id"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('infecteds');
  }
};