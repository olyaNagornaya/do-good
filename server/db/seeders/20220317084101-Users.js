'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Users', [
       {
        name: 'Сережа',
        email: 'serg@gmail.com',
        password: '123',
        telephone: '+7-999-999-00-00',
        img: 'https://icdn.lenta.ru/images/2021/07/22/14/20210722141844249/square_1280_webp_d4095fd8d44f226208eb9e1b26d2c8d9.webp',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Алексей',
        email: 'aleks@gmail.com',
        password: '123',
        telephone: '+7-999-999-00-01',
        img: 'https://vokrug.tv/pic/news/1/9/3/a/193a39a3b3f454af26eb4ace1474f865.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Оля',
        email: 'olya@gmail.com',
        password: '123',
        telephone: '+7-999-999-00-02',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Olya_Polyakova_-_makeup_session_-_feb_2018_%281%29.jpg/274px-Olya_Polyakova_-_makeup_session_-_feb_2018_%281%29.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null, {});
  }
};
