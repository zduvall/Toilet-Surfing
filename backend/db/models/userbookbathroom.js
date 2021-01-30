'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserBookBathroom = sequelize.define(
    'UserBookBathroom',
    {
      userId: { type: DataTypes.INTEGER, allowNull: false },
      bathroomId: { type: DataTypes.INTEGER, allowNull: false },
      dateTimeStart: { type: DataTypes.DATE, allowNull: false },
      dateTimeEnd: { type: DataTypes.DATE, allowNull: false },
    },
    {}
  );
  UserBookBathroom.associate = function (models) {
    // associations can be defined here
  };
  return UserBookBathroom;
};
