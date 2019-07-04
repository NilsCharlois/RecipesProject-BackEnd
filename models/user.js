'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.belongsTo(models.Role, {foreignKey:'Role_Id'})
    User.hasMany(models.Recipe, {foreignKey:'User_Id'})
  };
  
  User.findByLogin = async login => {
    let user = await User.findOne({
      where: { username: login },
    });

    if (!user) {
      user = await User.findOne({
        where: { email: login },
      });
    }

    return user;
  };

  return User;
};