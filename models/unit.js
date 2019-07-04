'use strict';
module.exports = (sequelize, DataTypes) => {
  const Unit = sequelize.define('Unit', {
    description: DataTypes.STRING
  }, {});
  Unit.associate = function(models) {
    Unit.hasMany(models.Recipe, {foreignKey: 'Unit_Id'})
  };
  return Unit;
};