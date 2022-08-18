'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Fin_data', [{
      fin_data_id: 1,
      m1: 150000,
      m2: 150000,
      m3: 150000,
      m4: 150000,
      m5: 150000,
      m6: 150000,
      m7: 150000,
      m8: 150000,
      m9: 150000,
      m10: 150000,
      m11: 150000,
      m12: 150000,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Fin_data', null, {});
  },
};
