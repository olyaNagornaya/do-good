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

     await queryInterface.bulkInsert('Items', [
      {
        title: 'Хлеб',
        description: 'Описание хлебушка',
        img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
        category_id: 1,
        user_id: 1,
        city: 'Москва',
        address: 'ул. Вавилова, 1',
        available: true,
        createdAt: new Date(),
        updatedAt: new Date(),
     },
     {
      title: 'Свитер',
      description: 'Описание свитера',
      img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1544&q=80',
      category_id: 2,
      user_id: 2,
      city: 'Москва',
      address: 'ул. Вавилова, 2',
      available: true,
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
      title: 'Стол',
      description: 'Описание стола',
      img: 'https://images.unsplash.com/photo-1565791380713-1756b9a05343?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
      category_id: 3,
      user_id: 3,
      city: 'Москва',
      address: 'ул. Вавилова, 3',
      available: true,
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
      title: 'Кабачок',
      description: 'Описание кабачка',
      img: 'https://images.unsplash.com/photo-1615485499978-1279c3d6302f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      category_id: 1,
      user_id: 2,
      city: 'Москва',
      address: 'ул. Вавилова, 4',
      available: true,
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
      title: 'Морковка',
      description: 'Описание морковки',
      img: 'https://images.unsplash.com/photo-1582515073490-39981397c445?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80',
      category_id: 1,
      user_id: 3,
      city: 'Москва',
      address: 'ул. Вавилова, 5',
      available: true,
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
      title: 'Носки',
      description: 'Описание носок',
      img: 'https://images.unsplash.com/photo-1585499583264-491df5142e83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      category_id: 2,
      user_id: 1,
      city: 'Москва',
      address: 'ул. Вавилова, 6',
      available: true,
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
      title: 'Диван',
      description: 'Описание дивана',
      img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      category_id: 3,
      user_id: 2,
      city: 'Москва',
      address: 'ул. Вавилова, 7',
      available: true,
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
      title: 'Проданный Хлеб',
      description: 'Описание проданного хлебушка',
      img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80',
      category_id: 1,
      user_id: 1,
      city: 'Москва',
      address: 'ул. Вавилова, 8',
      available: false,
      createdAt: new Date(),
      updatedAt: new Date(),
   },
   {
    title: 'Проданный свитер',
    description: 'Описание проданного свитера',
    img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1544&q=80',
    category_id: 2,
    user_id: 2,
    city: 'Москва',
    address: 'ул. Вавилова, 9',
    available: false,
     createdAt: new Date(),
     updatedAt: new Date(),
   },
   {
    title: 'Стол',
    description: 'Описание стола',
    img: 'https://images.unsplash.com/photo-1565791380713-1756b9a05343?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80',
    category_id: 3,
    user_id: 3,
    city: 'Москва',
    address: 'ул. Вавилова, 10',
    available: false,
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
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Items', null, {});
  }
};
