'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      'Users',
      [
        // edit below
        {
          email: 'demo-lition@gmail.io',
          username: 'Demo-lition',
          hashedPassword: bcrypt.hashSync('password'),
        },
        {
          email: '1234@gmail.io',
          username: '1234',
          hashedPassword: bcrypt.hashSync('123456'),
        },
        {
          email: faker.internet.email(),
          username: 'FakeUser2',
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

    // edit below
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(
      'Users',
      {
        username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] },
      },
      {}
    );
  },
};
