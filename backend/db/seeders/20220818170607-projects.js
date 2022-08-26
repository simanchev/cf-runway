module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Projects', [{
      user_id: 1,
      title: 'Магазин одежды и косметики',
      industry: 'Торговля',
      description: 'Мужская, женская и детская одежда, обувь, косметика и парфюмерия, аксессуары. Ассортимент составлен из товаров мировых брендов и известных дизайнеров. Каналы продаж: опт, розница, интернет-магазин',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id: 1,
      title: 'Онлайн-школа "Спасибо"',
      industry: 'Edtech',
      description: 'Авторские курсы Сергея Васильевича по JavaScript. Опытный практик из IT-индустрии расскажет, кому и что изучать, даст качественную обратную связь на задания, задаст вопросы и подберет на них ответы',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Projects', null, {});
  },
};
