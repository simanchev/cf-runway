'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Fin_data', [{
      fin_types_id: 2,
      project_id: 1,
      title: 'Аренда',
      sum: 5000,
      date: '',
      regular: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Fin_data', null, {});
  },
};
