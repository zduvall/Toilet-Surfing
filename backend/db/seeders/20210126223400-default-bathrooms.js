'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkInsert(
      'Bathrooms',
      [
        {
          bathroomOwnerId: 1,
          name: 'Welcome to Toilet Surfing',
          description:
            'Where chill people share their toilets with other chill people.',
          imageUrl: './pictures/toilet-surfer.png',
          streetNumber: '',
          route: ' ',
          locality: 'Click/drag the map above to begin surfing.',
          administrativeArea: 'and happy surfing!',
          postalCode: ' ',
          country: '- from Toilet Surfing HQ',
          lat: 40.7608,
          lng: -111.891,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bathroomOwnerId: 2,
          name: 'Bath with a view',
          description:
            'All are welcome to try this bathroom where you can enjoy a beautiful sunset over the green feilds after a long day.',
          imageUrl:
            'https://toilet-surfing.s3-us-west-1.amazonaws.com/1-view-bathroom.jpg',
          streetNumber: '1900',
          route: 'S River Bottom Rd',
          locality: 'Spanish Fork',
          administrativeArea: 'UT',
          postalCode: 84660,
          country: 'United States',
          lat: 40.103711,
          lng: -111.651406,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bathroomOwnerId: 3,
          name: 'Potty in Paradise',
          description:
            'You will love how spacious this bathroom is, and we offer the best view out there. All amenities provided.',
          imageUrl:
            'https://toilet-surfing.s3-us-west-1.amazonaws.com/2-paradise-bathroom.jpg',
          streetNumber: '45-102',
          route: 'Pikonia Loop',
          locality: 'Honokaa',
          administrativeArea: 'HI',
          postalCode: 96727,
          country: 'United States',
          lat: 30.089261,
          lng: -155.467314,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bathroomOwnerId: 4,
          name: 'Best Restroom on The Strip',
          description:
            'Come use our one of a kind bathroom with dark granite walls and mood lights to get you in the mood.',
          imageUrl:
            'https://toilet-surfing.s3-us-west-1.amazonaws.com/3-vegas-bathroom.jpg',
          streetNumber: '3595',
          route: 'East Flamingo Road',
          locality: 'Las Vegas',
          administrativeArea: 'NV',
          postalCode: 89109,
          country: 'United States',
          lat: 36.114698,
          lng: -115.172883,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bathroomOwnerId: 3,
          name: 'Medibathroom',
          description:
            "Come relax in our bathroom designed to help calm your nerves and your bowels. You'll soon realize it's never been so easy to go.",
          imageUrl:
            'https://toilet-surfing.s3-us-west-1.amazonaws.com/4-relaxing-bathroom.jpg',
          streetNumber: '73-4050',
          route: 'Hulikoa Dr',
          locality: 'Kailua-Kona',
          administrativeArea: 'HI',
          postalCode: 96740,
          country: 'United States',
          lat: 29.700328,
          lng: -156.027843,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bathroomOwnerId: 2,
          name: "Lumberjack's Loo",
          description:
            'Please stop by our one-of-a-kind completely wooden bathroom, where even the porcelin is made of wood (completely de-splinterized!).',
          imageUrl:
            'https://toilet-surfing.s3-us-west-1.amazonaws.com/5-log-bathroom.jpg',
          streetNumber: '1490',
          route: 'Eagle Way',
          locality: 'Park City',
          administrativeArea: 'UT',
          postalCode: 84060,
          country: 'United States',
          lat: 40.654216,
          lng: -111.489618,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Bathrooms', null, {});
  },
};
