module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Schedules', [{
      fin_data_id: 1,
      1: 0,
      2: 0,
      3: 0,
      4: 50000,
      5: 50000,
      6: 50000,
      7: 50000,
      8: 50000,
      9: 50000,
      10: 50000,
      11: 0,
      12: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Schedules', null, {});
  },
};
