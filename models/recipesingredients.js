'use strict';
module.exports = (sequelize, DataTypes) => {
  const RecipesIngredients = sequelize.define('RecipesIngredients', {
    value: DataTypes.FLOAT
  }, {});
  RecipesIngredients.associate = function(models) {
    // associations can be defined here
  };
  return RecipesIngredients;
};