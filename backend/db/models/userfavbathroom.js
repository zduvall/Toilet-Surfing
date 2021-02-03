'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserFavBathroom = sequelize.define('UserFavBathroom', {
    userId: DataTypes.INTEGER,
    bathroomId: DataTypes.INTEGER
  }, {});
  UserFavBathroom.associate = function(models) {
    // associations can be defined here
  };
  return UserFavBathroom;
};