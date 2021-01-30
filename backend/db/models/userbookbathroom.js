'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserBookBathroom = sequelize.define(
    'UserBookBathroom',
    {
      userId: DataTypes.INTEGER,
      bathroomId: DataTypes.INTEGER,
      dateTime: DataTypes.DATE,
      timeLength: DataTypes.INTEGER,
    },
    {}
  );
  UserBookBathroom.associate = function (models) {
    // associations can be defined here
  };
  return UserBookBathroom;
};
