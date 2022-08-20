module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Fin_data', [{
      fin_types_id: 2,
      project_id: 1,
      title: 'Аренда',
      sum: 50000,
      start_date: '2022-11',
      end_date: '',
      regular: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      fin_types_id: 1,
      project_id: 1,
      title: 'Продажа косметики',
      sum: 120000,
      start_date: '2022-10',
      end_date: '2023-05',
      regular: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      fin_types_id: 1,
      project_id: 1,
      title: 'Продажа одежды - опт',
      sum: 330000,
      start_date: '2022-12',
      end_date: '',
      regular: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Fin_data', null, {});
  },
};
