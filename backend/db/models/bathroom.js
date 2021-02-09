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
      description: { type: DataTypes.STRING(200), allowNull: false },
      imageUrl: { type: DataTypes.STRING(2083), allowNull: false },
      streetNumber: { type: DataTypes.STRING(255), allowNull: false },
      route: { type: DataTypes.STRING(255), allowNull: false },
      locality: { type: DataTypes.STRING(255), allowNull: false },
      administrativeArea: { type: DataTypes.STRING(255), allowNull: false },
      postalCode: { type: DataTypes.STRING(15), allowNull: false },
      country: { type: DataTypes.STRING(255), allowNull: false },
      lat: { type: DataTypes.DECIMAL(10, 8), allowNull: false },
      lng: { type: DataTypes.DECIMAL(10, 8), allowNull: false },
    },
    {}
  );

  Bathroom.associate = function (models) {
    // associations can be defined here
    Bathroom.belongsTo(models.User, { foreignKey: 'bathroomOwnerId' });
    Bathroom.hasMany(models.UserBookBathroom, {
      foreignKey: 'bathroomId',
      onDelete: 'CASCADE',
      hooks: true,
    });
    Bathroom.hasMany(models.UserFavBathroom, {
      foreignKey: 'bathroomId',
      onDelete: 'CASCADE',
      hooks: true,
    });
    Bathroom.belongsToMany(models.User, {
      through: 'UserBookBathroom',
      otherKey: 'userId',
      foreignKey: 'bathroomId',
      as: 'userBookBathrooms',
    });
    Bathroom.belongsToMany(models.User, {
      through: 'UserFavBathroom',
      otherKey: 'userId',
      foreignKey: 'bathroomId',
      as: 'userFavBathrooms',
    });
  };
  return Bathroom;
};
