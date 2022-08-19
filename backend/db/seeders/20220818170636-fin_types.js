'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Fin_types', [{
      title: 'Поступление(доходы)',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      title: 'Оплаты(расходы)',
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

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Fin_types', null, {});
  },
};
