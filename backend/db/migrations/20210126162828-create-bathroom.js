'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Bathrooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      bathroomOwnerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Users' },
      },
      name: {
        type: Sequelize.STRING(50),
        unique: true,
        allowNull: false,
        validate: {
          len: [3, 50],
        },
      },
      description: {
        type: Sequelize.STRING(1000),
        validate: {
          len: [0, 1000],
        },
      },
      picture: {
        type: Sequelize.STRING(2083),
      },
      streetNumber: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      route: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      locality: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      administrativeArea: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      postalCode: {
        type: Sequelize.STRING(15),
        allowNull: false,
      },
      country: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      lat: {
        type: Sequelize.DECIMAL(10, 8),
        allowNull: false,
      },
      lng: {
        type: Sequelize.DECIMAL(10, 8),
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Bathrooms');
  },
};
