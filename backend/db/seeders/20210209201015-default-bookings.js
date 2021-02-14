'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    function createDate(userId, bathroomId, daysAhead) {
      let now = new Date();

      let start = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + daysAhead,
        10,
        45
      );
      let end = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + daysAhead,
        11,
        15
      );
      return {
        userId,
        bathroomId,
        dateTimeStart: start,
        dateTimeEnd: end,
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    }
    
    let daysAhead = Math.ceil(Math.random() * 14); 

    // let bookings = [createDate(1, 1, daysAhead)];
    let bookings = [createDate(1, 1, 20)];

    return queryInterface.bulkInsert('UserBookBathrooms', [...bookings], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
      */
    return queryInterface.bulkDelete('UserBookBathrooms', null, {});
  },
};
