import { fetch } from './csrf';

// Action types
const LOAD_BOOKING = '/bookings/LOAD_BOOKING';
const CREATE_BOOKING = '/bookings/CREATE_BOOKING';
const CANCEL_BOOKING = '/bookings/CANCEL_BOOKING';

// Action creators
const load = (bookings) => ({
  type: LOAD_BOOKING,
  bookings,
});

const create = (booking) => ({
  type: CREATE_BOOKING,
  booking,
});

const cancel = (bookingId) => ({
  type: CANCEL_BOOKING,
  bookingId,
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

  const res = await fetch('/api/bookings', {
    method: 'POST',
    body: JSON.stringify({
      userId,
      bathroomId,
      dateTimeStart,
      dateTimeEnd,
    }),
  });
  dispatch(create(res.data.booking));
  return res;
};

export const deleteBooking = (bookingId) => async (dispatch) => {
  const res = await fetch(`/api/bookings/${bookingId}`, {
    method: 'DELETE',
  });
  if (res.ok) {
    dispatch(cancel(bookingId));
  }
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
      newState[action.booking.id] = action.booking
      return newState;
    case CANCEL_BOOKING:
      delete newState[action.bookingId];
      return newState;
    default:
      return newState;
  }
};

export default bookingReducer;
