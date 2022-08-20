module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Fin_data', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      fin_types_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Fin_types', key: 'id' },
      },
      project_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Projects', key: 'id' },
      },
      title: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      sum: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      start_date: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      end_date: {
        type: Sequelize.TEXT,
      },
      regular: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      1: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      2: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      3: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      4: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      5: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      6: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      7: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      8: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      9: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      10: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      11: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      12: {
        allowNull: false,
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
    await queryInterface.dropTable('Fin_data');
  }
};
