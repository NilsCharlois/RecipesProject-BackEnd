'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Recipes', // name of Source model
      'User_Id', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Recipes', // name of Source model
      'User_Id' // key we want to remove
    );
  }
};
