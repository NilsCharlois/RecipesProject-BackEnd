'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      username: 'NilsCharlois',
      Role_Id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      username: 'CharloisNils',
      Role_Id: 2,
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
