'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recipe = sequelize.define('Recipe', {
    title: DataTypes.STRING,
    recommendedSteep: DataTypes.INTEGER
  }, {});
  Recipe.associate = function(models) {
    Recipe.belongsTo(models.Unit, {foreignKey: 'Unit_Id'})
  };
  return Recipe;
};