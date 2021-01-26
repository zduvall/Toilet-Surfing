import { fetch } from './csrf';

// Action type
const SET_BATHROOMS = '/users/SET_BATHROOMS';

// Action creator
const setBathrooms = (bathrooms) => ({
  type: SET_BATHROOMS,
  bathrooms,
});

// Thunk
export const getBathrooms = () => async (dispatch) => {
  const res = await fetch('/api/bathrooms');

  if (res.ok) {
    dispatch(setBathrooms(res.data));
  }
};

// Reducer
const initState = {
  1: {
    id: 1,
    bathroomOwnerId: 1,
    name: 'Cool Bath',
    description: 'The coolest bathroom out there',
    picture: '/pictures/1-view-bathroom.jpg',
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
    case SET_BATHROOMS:
      for (let bathroom of action.bathrooms) {
        newState[bathroom.id] = bathroom;
      }
      return newState;
    default:
      return newState;
  }
};

export default bathroomReducer;
