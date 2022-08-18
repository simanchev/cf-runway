'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Schedules', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fin_data_id: {
        type: Sequelize.INTEGER,
        references: {model: 'Fin_data', key: 'id'}
      },
      m1: {
        type: Sequelize.INTEGER
      },
      m2: {
        type: Sequelize.INTEGER
      },
      m3: {
        type: Sequelize.INTEGER
      },
      m4: {
        type: Sequelize.INTEGER
      },
      m5: {
        type: Sequelize.INTEGER
      },
      m6: {
        type: Sequelize.INTEGER
      },
      m7: {
        type: Sequelize.INTEGER
      },
      m8: {
        type: Sequelize.INTEGER
      },
      m9: {
        type: Sequelize.INTEGER
      },
      m10: {
        type: Sequelize.INTEGER
      },
      m11: {
        type: Sequelize.INTEGER
      },
      m12: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Schedules');
  }
};
