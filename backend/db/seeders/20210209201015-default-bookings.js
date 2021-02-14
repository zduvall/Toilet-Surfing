'use strict';

const db = require('../models/index');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // create filler bookings
    let fillerBookings = [];
    const maxPerUser = 5; // edit this to edit the max # bookings per user
    const numUsers = await db.User.count();
    const numBathrooms = await db.Bathroom.count();

    function createDate(userId, bathroomId) {
      const now = new Date();
      const daysAhead = Math.ceil(Math.random() * 14);

      const strtHr = Math.ceil(Math.random() * 15) + 6; // random hour between 6AM and 9PM
      const strtMin = Math.floor(Math.random() * 4) * 15; // random increment between 0 and 3 * 15

      const addMin = Math.ceil(Math.random() * 8) * 15; // random 15 minutes to 120 minutes
      const newMin = strtMin + addMin;

      let endHr, endMin;
      if (newMin <= 45) {
        endHr = strtHr;
        endMin = newMin;
      } else if (newMin <= 105) {
        endHr = strtHr + 1;
        endMin = newMin - 60;
      } else {
        endHr = strtHr + 2;
        endMin = newMin - 120;
      }

      // console.log(`${strtHr}:${strtMin} + ${addMin / 15}x15min = ${endHr}:${endMin}`);

      const start = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + daysAhead,
        strtHr,
        strtMin
      );
      const end = new Date(
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

    // make 26 copies of every booking repeated two weeks out every time (to cover one year)
    function repeatDate(userId, BrId) {
      let booking = createDate(userId, BrId);
      const bookingX26 = []

      for(let i = 0; i < 26; i++) {
        // create new start and end times two weeks out
        const strtPls2Wks = new Date(booking.dateTimeStart);
        strtPls2Wks.setDate(strtPls2Wks.getDate() + 14);
        const endPls2Wks = new Date(booking.dateTimeEnd);
        endPls2Wks.setDate(endPls2Wks.getDate() + 14);
        
        // copy and update attributes on newBooking
        const newBooking = { ...booking };
        newBooking.dateTimeStart = strtPls2Wks;
        newBooking.dateTimeEnd = endPls2Wks;

        bookingX26.push(newBooking)
        booking = newBooking
      }

      return bookingX26;
    }

    for (let userId = 3; userId <= numUsers; userId++) {
      const max = Math.ceil(Math.random() * maxPerUser);
      for (let i = 0; i < max; i++) {
        const randBrId = Math.ceil(Math.random() * numBathrooms);
        fillerBookings = [...fillerBookings, ...repeatDate(userId, randBrId)];
      }
    }

    return queryInterface.bulkInsert(
      'UserBookBathrooms',
      [
        // {
        //   userId: 2,
        //   bathroomId: 3,
        //   dateTimeStart: new Date(2021, 1, 15, 10),
        //   dateTimeEnd: new Date(2021, 1, 15, 12),
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        // {
        //   userId: 3,
        //   bathroomId: 2,
        //   dateTimeStart: new Date(2021, 1, 15, 11),
        //   dateTimeEnd: new Date(2021, 1, 15, 13),
        //   createdAt: new Date(),
        //   updatedAt: new Date(),
        // },
        ...fillerBookings,
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserBookBathrooms', null, {});
  },
};
