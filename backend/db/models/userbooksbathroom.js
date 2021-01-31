'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserBooksBathroom = sequelize.define(
    'UserBooksBathroom',
    {
      userId: DataTypes.INTEGER,
      bathroomId: DataTypes.INTEGER,
      dateTimeStart: DataTypes.DATE,
      dateTimeEnd: DataTypes.DATE,
    },
    {}
  );
  UserBooksBathroom.associate = function (models) {
    // associations can be defined here
  };
  return UserBooksBathroom;
};
