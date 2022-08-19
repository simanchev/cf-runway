module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Schedules', [{
      fin_data_id: 1,
      1: 150000,
      2: 150000,
      3: 150000,
      4: 150000,
      5: 150000,
      6: 150000,
      7: 150000,
      8: 150000,
      9: 150000,
      10: 150000,
      11: 150000,
      12: 150000,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Schedules', null, {});
  },
};
