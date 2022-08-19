'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fin_data_id: {
        type: Sequelize.INTEGER,
        references: { model: 'Fin_data', key: 'id' },
      },
      1: {
        type: Sequelize.INTEGER,
      },
      2: {
        type: Sequelize.INTEGER,
      },
      3: {
        type: Sequelize.INTEGER,
      },
      4: {
        type: Sequelize.INTEGER,
      },
      5: {
        type: Sequelize.INTEGER,
      },
      6: {
        type: Sequelize.INTEGER,
      },
      7: {
        type: Sequelize.INTEGER,
      },
      8: {
        type: Sequelize.INTEGER,
      },
      9: {
        type: Sequelize.INTEGER,
      },
      10: {
        type: Sequelize.INTEGER,
      },
      11: {
        type: Sequelize.INTEGER,
      },
      12: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Schedules');
  },
};
