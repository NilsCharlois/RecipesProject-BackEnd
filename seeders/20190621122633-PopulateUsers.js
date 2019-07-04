'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      username: 'NilsCharlois',
      role_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      username: 'CharloisNils',
      role_id: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Users', [{
      username: 'NilsCharlois',
    },{
      username: 'CharloisNils',
    }])
  }
};
