module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Fin_data', [{
      fin_types_id: 2,
      project_id: 1,
      title: 'Аренда',
      sum: 50000,
      start_date: '2022-11',
      end_date: '2023-05',
      regular: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Fin_data', null, {});
  },
};
