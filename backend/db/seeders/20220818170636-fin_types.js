module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Fin_types', [{
      title: 'Поступления от продаж',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Оплата товаров и услуг',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Инвестиции',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Финансирование',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Fin_types', null, {});
  },
};
