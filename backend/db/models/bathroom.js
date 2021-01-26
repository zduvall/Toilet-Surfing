'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bathroom = sequelize.define(
    'Bathroom',
    {
      bathroomOwnerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'Users' },
      },
      name: { type: DataTypes.STRING(50), unique: true, allowNull: false },
      description: { type: DataTypes.STRING(1000) },
      picture: { type: DataTypes.STRING(2083) },
      streetNumber: { type: DataTypes.STRING(255) },
      route: { type: DataTypes.STRING(255) },
      locality: { type: DataTypes.STRING(255) },
      administrativeArea: { type: DataTypes.STRING(255) },
      postalCode: { type: DataTypes.STRING(15) },
      country: { type: DataTypes.STRING(255) },
      lat: { type: DataTypes.DECIMAL(10, 8) },
      lng: { type: DataTypes.DECIMAL(10, 8) },
    },
    {}
  );
  Bathroom.associate = function (models) {
    // associations can be defined here
    Bathroom.belongsTo(models.User, { foreignKey: 'bathroomOwnerId' });
  };
  return Bathroom;
};
