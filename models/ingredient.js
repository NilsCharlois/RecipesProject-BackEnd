'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ingredient = sequelize.define('Ingredient', {
    name: DataTypes.STRING,
    url: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  Ingredient.associate = function(models) {
  };
  return Ingredient;
};