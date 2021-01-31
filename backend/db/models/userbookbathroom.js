'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserBookBathroom = sequelize.define('UserBookBathroom', {
    userId: DataTypes.INTEGER,
    bathroomId: DataTypes.INTEGER,
    dateTimeStart: DataTypes.DATE,
    dateTimeEnd: DataTypes.DATE
  }, {});
  UserBookBathroom.associate = function(models) {
    // associations can be defined here
  };
  return UserBookBathroom;
};