'use strict';

const db = require('../models/index');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // create filler bookings
    const fillerBookings = [];
    const maxPerUser = 5; // edit this to edit the max # bookings per user
    const numUsers = await db.User.count();
    const numBathrooms = await db.Bathroom.count();

    function createDate(userId, bathroomId) {
      let now = new Date();
      let daysAhead = Math.ceil(Math.random() * 14);

      let strtHr = Math.ceil(Math.random() * 15) + 6; // random hour between 6AM and 9PM
      let strtMin = Math.floor(Math.random() * 4) * 15; // random increment between 0 and 3 * 15

      let addMin = Math.ceil(Math.random() * 8) * 15; // random 15 minutes to 120 minutes
      let endHr, endMin;
      if (strtMin + addMin <= 45) {
        endHr = strtHr;
        endMin = strtMin + addMin;
      } else if (strtMin + addMin <= 105) {
        endHr = strtHr + 1;
        endMin = strtMin + addMin - 60;
      } else {
        endHr = strtHr + 2;
        endMin = strtMin + addMin - 120;
      }

      // console.log(`${strtHr}:${strtMin} + ${addMin / 15}x15min = ${endHr}:${endMin}`);

      let start = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + daysAhead,
        strtHr,
        strtMin
      );
      let end = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + daysAhead,
        endHr,
        endMin
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

    for (let userId = 1; userId <= numUsers; userId++) {
      let max = Math.ceil(Math.random() * maxPerUser);
      for (let i = 0; i < max; i++) {
        let randBrId = Math.ceil(Math.random() * numBathrooms);
        fillerBookings.push(createDate(userId, randBrId));
      }
    }

    return queryInterface.bulkInsert(
      'UserBookBathrooms',
      [...fillerBookings],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserBookBathrooms', null, {});
  },
};
