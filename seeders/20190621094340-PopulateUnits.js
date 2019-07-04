'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Units', [{
      description: 'mL',
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      description: 'mg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
},

down: (queryInterface, Sequelize) => {
  queryInterface.bulkDelete('Units', [{
    description :'mL'
  },{
    description :'mg'
  }])
}
};
