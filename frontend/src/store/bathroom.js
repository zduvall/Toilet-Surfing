const initState = {
  1: {
    id: 1,
    bathroomOwnerId: 1,
    name: 'Cool Bath',
    description: 'The coolest bathroom out there',
    picture: '/pictures/bath-3622540.jpg',
    streetNumber: '1374',
    route: 'Royal Troon Drive',
    locality: 'Millcreek',
    administrativeArea: 'UT',
    postalCode: 84124,
    country: 'United States',
    lat: 40.676615,
    lng: -111.852043,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
};

const bathroomReducer = (state = initState, action) => {
  const newState = { ...state };

  switch (action.type) {
    default:
      return newState;
  }
};

export default bathroomReducer