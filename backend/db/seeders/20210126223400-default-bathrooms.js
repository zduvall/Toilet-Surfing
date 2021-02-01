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
          route: '',
          locality: 'Click/drag the map above to begin your search',
          administrativeArea: 'and happy surfing!',
          postalCode: '',
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
            'https://toilet-surfing.s3-us-west-1.amazonaws.com/001-view-bathroom.jpg',
          streetNumber: '1900',
          route: 'S River Bottom Rd',
          locality: 'Spanish Fork',
          administrativeArea: 'UT',
          postalCode: '84660',
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
            'https://toilet-surfing.s3-us-west-1.amazonaws.com/002-paradise-bathroom.jpg',
          streetNumber: '45-102',
          route: 'Pikonia Loop',
          locality: 'Honokaa',
          administrativeArea: 'HI',
          postalCode: '96727',
          country: 'United States',
          lat: 20.089261,
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
            'https://toilet-surfing.s3-us-west-1.amazonaws.com/003-vegas-bathroom.jpg',
          streetNumber: '3595',
          route: 'East Flamingo Road',
          locality: 'Las Vegas',
          administrativeArea: 'NV',
          postalCode: '89109',
          country: 'United States',
          lat: 36.114698,
          lng: -115.172883,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bathroomOwnerId: 5,
          name: 'Medibathroom',
          description:
            "Come relax in our bathroom designed to help calm your nerves and your bowels. You'll soon realize it's never been so easy to go.",
          imageUrl:
            'https://toilet-surfing.s3-us-west-1.amazonaws.com/004-relaxing-bathroom.jpg',
          streetNumber: '73-4050',
          route: 'Hulikoa Dr',
          locality: 'Kailua-Kona',
          administrativeArea: 'HI',
          postalCode: '96740',
          country: 'United States',
          lat: 19.700328,
          lng: -156.027843,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bathroomOwnerId: 4,
          name: "Lumberjack's Loo",
          description:
            'Please stop by our one-of-a-kind completely wooden bathroom, where even the porcelin is made of wood (completely de-splinterized!).',
          imageUrl:
            'https://toilet-surfing.s3-us-west-1.amazonaws.com/005-log-bathroom.jpg',
          streetNumber: '1490',
          route: 'Eagle Way',
          locality: 'Park City',
          administrativeArea: 'UT',
          postalCode: '84060',
          country: 'United States',
          lat: 40.654216,
          lng: -111.489618,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bathroomOwnerId: 6,
          name: 'White Wash Wellness',
          description:
            "You'll feel cleansed in body and spirit after relaxing in our singular bathroom with one-of-a-kind flooring and walls.",
          imageUrl:
            'https://toilet-surfing.s3-us-west-1.amazonaws.com/006-white-w-tree-background.jpg',
          streetNumber: '1751',
          route: 'Collins Ave',
          locality: 'Miami Beach',
          administrativeArea: 'FL',
          postalCode: '33139',
          country: 'United States',
          lat: 25.79331,
          lng: -80.128143,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bathroomOwnerId: 7,
          name: 'Blue Bath and Bubbly',
          description:
            "You're welcome to stop by our favorite blue bathroom, enjoy a bubble bath, and a Martinelli's on the house :).",
          imageUrl:
            'https://toilet-surfing.s3-us-west-1.amazonaws.com/007-lots-of-blue.jpg',
          streetNumber: '1',
          route: 'Sea Horse Ln',
          locality: 'Freeport',
          administrativeArea: 'The Bahamas',
          postalCode: '54321',
          country: 'United States',
          lat: 26.508922,
          lng: -78.643472,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bathroomOwnerId: 8,
          name: 'The Modern Minimalist',
          description:
            "We've set up our bathroom to tickle the modern minimalist inside of everyone. We hope you come for a visit.",
          imageUrl:
            'https://toilet-surfing.s3-us-west-1.amazonaws.com/008-modern-minimalist.jpg',
          streetNumber: '2799',
          route: 'Kilgore St',
          locality: 'Orlando',
          administrativeArea: 'FL',
          postalCode: '32803',
          country: 'United States',
          lat: 28.543257,
          lng: -81.347847,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bathroomOwnerId: 9,
          name: 'Baby Blue Bathroom',
          description:
            'We are lovers of bathrooms and lovers of baby blue, hoping to share our two loves with the world.',
          imageUrl:
            'https://toilet-surfing.s3-us-west-1.amazonaws.com/009-sky-blue-w-candles.jpg',
          streetNumber: '1217',
          route: 'Jayhawk Loop',
          locality: 'Corpus Christi',
          administrativeArea: 'TX',
          postalCode: '78418',
          country: 'United States',
          lat: 27.695395,
          lng: -97.25898,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bathroomOwnerId: 10,
          name: 'The Tub of Ages',
          description:
            'It may not look like much on the surface, but we have never had a disappointed visitor. Just wait until you try the water jets.',
          imageUrl:
            'https://toilet-surfing.s3-us-west-1.amazonaws.com/010-just-white-tub.jpg',
          streetNumber: '10498',
          route: 'Bessemer St',
          locality: 'Houston',
          administrativeArea: 'TX',
          postalCode: '77034',
          country: 'United States',
          lat: 29.637976,
          lng: -95.226836,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bathroomOwnerId: 11,
          name: 'Toilet of elegance',
          description:
            'Our team of interior designers and relaxation specialists put their minds together to create this peaceful and uplifting environment.',
          imageUrl:
            'https://toilet-surfing.s3-us-west-1.amazonaws.com/011-elegant.jpg',
          streetNumber: '1491',
          route: 'Inglewood St',
          locality: 'Austin',
          administrativeArea: 'TX',
          postalCode: '78741',
          country: 'United States',
          lat: 30.245432,
          lng: -97.732968,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bathroomOwnerId: 12,
          name: 'Teddy and a Tub',
          description:
            'We designed this bathroom to be a family-friendly room for one and all, where all your bathroom needs can be met.',
          imageUrl:
            'https://toilet-surfing.s3-us-west-1.amazonaws.com/012-teddy.jpg',
          streetNumber: '199',
          route: 'Front St',
          locality: 'South Portland',
          administrativeArea: 'ME',
          postalCode: '04106',
          country: 'United States',
          lat: 43.650008,
          lng: -70.240758,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bathroomOwnerId: 13,
          name: 'Your Downtown Distraction',
          description:
            'Tired of the busy Manhattan life? Stop in for a quick visit to rest from your woes.',
          imageUrl:
            'https://toilet-surfing.s3-us-west-1.amazonaws.com/013-heated-towel-rack-plant.jpg',
          streetNumber: '60',
          route: 'E 65th St',
          locality: 'New York',
          administrativeArea: 'NY',
          postalCode: '10065',
          country: 'United States',
          lat: 40.767002,
          lng: -73.967882,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bathroomOwnerId: 14,
          name: 'Waters of Brighton Beach',
          description:
            'Brookly bringing you down? Cove visit one of the local-favorite bathrooms near one of the local-favorite beaches.',
          imageUrl:
            'https://toilet-surfing.s3-us-west-1.amazonaws.com/014-squeacky-clean-sink.jpg',
          streetNumber: '105',
          route: 'Oceana Dr',
          locality: 'E Brooklyn',
          administrativeArea: 'NY',
          postalCode: '11235',
          country: 'United States',
          lat: 40.576086,
          lng: -73.957374,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bathroomOwnerId: 15,
          name: "Plant-lover's Potty",
          description:
            'This bathroom is designed to meet all the needs of your hidden (or not) plant loving heart!',
          imageUrl:
            'https://toilet-surfing.s3-us-west-1.amazonaws.com/015-plant-lovers.jpg',
          streetNumber: '8',
          route: 'Lindner Ct',
          locality: 'Brookhaven',
          administrativeArea: 'NY',
          postalCode: '11719',
          country: 'United States',
          lat: 40.760648,
          lng: -72.923783,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bathroomOwnerId: 16,
          name: 'Lavender Lavatory',
          description:
            'We provide lavender essential oils with a first-class diffuser to soothe your soul as you relieve yourself of stress and other things.',
          imageUrl:
            'https://toilet-surfing.s3-us-west-1.amazonaws.com/016-large-mirror.jpg',
          streetNumber: '4684',
          route: 'Ulloa St',
          locality: 'San Francisco',
          administrativeArea: 'CA',
          postalCode: '94116',
          country: 'United States',
          lat: 37.739881,
          lng: -122.505954,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bathroomOwnerId: 17,
          name: "Dog Lover's Toilet",
          description:
            "We can't say our dogs mouths haven't been in the toilet, but we can say we keep it clean and sanitized!",
          imageUrl:
            'https://toilet-surfing.s3-us-west-1.amazonaws.com/017-dog-lovers.jpg',
          streetNumber: '6065',
          route: '13th St',
          locality: 'Sacramento',
          administrativeArea: 'CA',
          postalCode: '95822',
          country: 'United States',
          lat: 38.516886,
          lng: -121.508935,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bathroomOwnerId: 18,
          name: "Patty's Powder Room",
          description:
            "This bathroom is inspired by my mother's love for good times and good vibes.",
          imageUrl:
            'https://toilet-surfing.s3-us-west-1.amazonaws.com/018-great-for-make-up.jpg',
          streetNumber: '4021',
          route: 'S Pacific Ave',
          locality: 'San Pedro',
          administrativeArea: 'CA',
          postalCode: '90731',
          country: 'United States',
          lat: 33.707035,
          lng: -118.288171,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bathroomOwnerId: 19,
          name: 'One shower to rule them all',
          description:
            "I dare you to try and find a shower you enjoy better than ours! We're excited for you to stop by.",
          imageUrl:
            'https://toilet-surfing.s3-us-west-1.amazonaws.com/019-huge-shower.jpg',
          streetNumber: '40312',
          route: 'Windsor Rd',
          locality: 'Temecula',
          administrativeArea: 'CA',
          postalCode: '92591',
          country: 'United States',
          lat: 33.535283,
          lng: -117.108253,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bathroomOwnerId: 20,
          name: "Lover's Outhouse",
          description:
            "Don't be fooled by the rustic outside. The inside is sure to spark all the passion and excitement for life you ever needed :)",
          imageUrl:
            'https://toilet-surfing.s3-us-west-1.amazonaws.com/020-lovers-outhouse.jpg',
          streetNumber: '649',
          route: 'S Zuni St',
          locality: 'Denver',
          administrativeArea: 'CO',
          postalCode: '80223',
          country: 'United States',
          lat: 39.704954,
          lng: -105.016111,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bathroomOwnerId: 21,
          name: 'Private Porta Potty',
          description:
            "If you find me in the middle of Ross Island, you're welcome to drop in if you need and drop off what you don't need.",
          imageUrl:
            'https://toilet-surfing.s3-us-west-1.amazonaws.com/021-grown-over-outhouse.jpg',
          streetNumber: 'Somewhere',
          route: 'Ross Island',
          locality: 'Portland',
          administrativeArea: 'OR',
          postalCode: '97202',
          country: 'United States',
          lat: 45.49597,
          lng: -122.664063,
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
