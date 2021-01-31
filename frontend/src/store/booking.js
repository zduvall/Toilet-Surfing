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

  const response = await fetch('/api/bookings', {
    method: 'POST',
    body: JSON.stringify({
      userId,
      bathroomId,
      dateTimeStart,
      dateTimeEnd,
    }),
  });
  dispatch(create(response.data.booking));
  return response;
};

// Reducer
const initState = {};

const bookingReducer = (state = initState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case LOAD_BOOKING:
      for (let booking of action.bookings) {
        newState[booking.id] = booking;
      }
      return newState;
    case CREATE_BOOKING:
      newState[action.booking.id] = action.booking;
      return newState;
    default:
      return newState;
  }
};

export default bookingReducer;
