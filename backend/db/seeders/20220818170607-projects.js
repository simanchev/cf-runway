module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Projects', [{
      user_id: 1,
      title: 'Магазин одежды и косметики',
      industry: 'торговля',
      description: 'Мужская, женская и детская одежда, обувь, косметика и парфюмерия, аксессуары. Ассортимент составлен из товаров мировых брендов и известных дизайнеров. Каналы продаж: опт и розница, интернет-магазин',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Projects', null, {});
  },
};
