'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Fin_data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fin_types_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Fin_types', key: 'id'}
      },
      project_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Projects', key: 'id'}
      },
      title: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      sum: {
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.TEXT
      },
      regular: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('Fin_data');
  }
};
