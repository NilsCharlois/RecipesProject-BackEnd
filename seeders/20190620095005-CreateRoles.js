'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Roles', [{
        description: 'User',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        description: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Roles', [{
      description :'User'
    },{
      description :'Admin'
    }])
  }
};
