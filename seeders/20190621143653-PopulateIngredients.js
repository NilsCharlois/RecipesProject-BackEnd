'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Ingredients', [{
      name: 'Strawberry (Ripe) Flavor',
      url: 'https://shop.perfumersapprentice.com/p-7544-strawberry-ripe-flavor.aspx',
      image: 'https://shop.perfumersapprentice.com/images/Product/medium/7544.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Cheesecake Flavor',
      url: 'https://shop.perfumersapprentice.com/p-6657-cheesecake-flavor.aspx',
      image: 'https://shop.perfumersapprentice.com/images/Product/medium/6657.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Cheesecake Flavor (Graham Crust)',
      url: 'https://shop.perfumersapprentice.com/p-7354-cheesecake-graham-crust.aspx',
      image: 'https://shop.perfumersapprentice.com/images/Product/medium/7354.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Bavarian Cream Flavor',
      url: 'https://shop.perfumersapprentice.com/p-6250-bavarian-cream-flavor.aspx',
      image: 'https://shop.perfumersapprentice.com/images/Product/medium/6250.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      name: 'Vanilla Custard Flavor',
      url: 'https://shop.perfumersapprentice.com/p-7166-vanilla-custard-flavor.aspx',
      image: 'https://shop.perfumersapprentice.com/images/Product/medium/7166.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Ingredients', [{
      name: 'Strawberry (Ripe) Flavor',
    },{
      name: 'Cheesecake Flavor',
    },{
      name: 'Cheesecake Flavor (Graham Crust)',
    },{
      name: 'Bavarian Cream Flavor',
    },{
      name: 'Vanilla Custard Flavor',
    }])
  }
};
