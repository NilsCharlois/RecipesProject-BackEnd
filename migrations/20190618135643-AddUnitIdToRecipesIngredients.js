'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'RecipesIngredients', // name of Source model
      'Unit_Id', // name of the key we're adding 
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'Units', // name of Target model
          key: 'id', // key in Target model that we're referencing
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'RecipesIngredients', // name of Source model
      'Unit_Id' // key we want to remove
    );
  }
};
