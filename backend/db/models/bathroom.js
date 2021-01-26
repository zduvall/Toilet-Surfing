'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bathroom = sequelize.define('Bathroom', {
    bathroomOwnerId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    picture: DataTypes.STRING,
    streetNumber: DataTypes.STRING,
    route: DataTypes.STRING,
    locality: DataTypes.STRING,
    administrativeArea: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    country: DataTypes.STRING,
    lat: DataTypes.DECIMAL,
    lng: DataTypes.DECIMAL
  }, {});
  Bathroom.associate = function(models) {
    // associations can be defined here
  };
  return Bathroom;
};