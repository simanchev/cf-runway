module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('Users', [{
      name: 'Александр',
      email: 'serega@spasibo.tebe',
      password: '$2b$10$1d5MzSV2YsX1mkdsJFJ6yu7Ucf8CmZj/uxqQS4VVrWm2TTNPPiG0y',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
