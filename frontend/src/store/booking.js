import { fetch } from './csrf';

// Action types
const LOAD_BOOKING = '/bathrooms/LOAD_BOOKING';
const CREATE_BOOKING = '/bathrooms/CREATE_BATHROOM';

// Action creators
const load = (bookings) => ({
  type: LOAD_BOOKING,
  bookings,
});

const create = (booking) => ({
  type: CREATE_BOOKING,
  booking,
});

// Thunks
export const getBookings = () => async (dispatch) => {
  const res = await fetch('/api/bookings');
  if (res.ok) {
    dispatch(load(res.data));
  }
};

export const createBooking = (booking) => async (dispatch) => {
  const { userId, bathroomId, dateTimeStart, dateTimeEnd } = booking;

  console.log('userId', userId);
  console.log('bathroomId', bathroomId);
  console.log('dateTimeStart', dateTimeStart);
  console.log('dateTimeEnd', dateTimeEnd);
  // const response = await fetch('/api/bookings', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     userId,
  //     bathroomId,
  //     dateTimeStart,
  //     dateTimeEnd,
  //   }),
  // });
  // dispatch(create(response.data.booking));
  // return response;
};

// Reducer
const initState = {
  1: {
    id: 1,
    bathroomOwnerId: 1,
    name: '',
    description: '',
    imageUrl: '',
    streetNumber: '',
    route: '',
    locality: '',
    administrativeArea: '',
    postalCode: 1,
    country: '',
    lat: 1,
    lng: 1,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
};

const bathroomReducer = (state = initState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case LOAD_BOOKING:
      for (let bathroom of action.bathrooms) {
        newState[bathroom.id] = bathroom;
      }
      return newState;
    case CREATE_BOOKING:
      // return { ...newState, bathroom: action.bathroom }
      newState[action.bathroom.id] = action.bathroom;
      return newState;
    default:
      return newState;
  }
};

export default bathroomReducer;
