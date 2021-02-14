'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // create filler users
    const fillerUsers = [];
    const numFillerUsers = 60; // edit this to edit the number of users created

    for (let i = 0; i < numFillerUsers; i++) {
      let userName = faker.internet.userName();
      while (userName.length > 20) {
        userName = faker.internet.userName();
      }

      const email = faker.internet.email();
      const hashedPassword = await bcrypt.hash(userName + '234', 10);

      fillerUsers.push({
        username: userName,
        email: email,
        hashedPassword: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    const hardCodedUsers = [
      {
        email: 'toiletsurfing.info@gmail.com',
        username: 'Zachary Duvall',
        hashedPassword: bcrypt.hashSync('pAssword987!'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'demo-surfer@gmail.io',
        username: 'PottyTraining',
        hashedPassword: bcrypt.hashSync('pAssw@rd543'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: faker.internet.email(),
        username: 'UseMyToilets',
        hashedPassword: bcrypt.hashSync(faker.internet.password()),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: '1234@gmail.io',
        username: '1234',
        hashedPassword: bcrypt.hashSync('123456'),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    return queryInterface.bulkInsert(
      'Users',
      [...hardCodedUsers, ...fillerUsers],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
