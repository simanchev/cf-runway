module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Projects', [{
      user_id: 1,
      title: 'Интернет-магазин детской одежды',
      industry: 'Интернет-торговля',
      description: 'Интернет-магазин одежды и аксессуаров для детей от 3 до 14 лет. Ассортиментный ряд включает множество разнообразных по цвету и фасону моделей повседневной, школьной, спортивной и праздничной одежды',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Projects', null, {});
  },
};
