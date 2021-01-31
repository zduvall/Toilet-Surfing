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

const cancel = (booking) => ({
  type: CANCEL_BOOKING,
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

// for some reason I wasn't able to get the bookings to come through with the PK id attribute on get, so I'm having to delete using a body through put (can't do with delete)
export const deleteBooking = (booking) => async (dispatch) => {
  const res = await fetch(`/api/bookings/${booking.id}`, {
    method: 'DELETE',
  });
  dispatch(cancel(res.data.booking));
  return res;
};

// Reducer
const initState = [];

const bookingReducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_BOOKING:
      return [...action.bookings];
    case CREATE_BOOKING:
      return [...state, action.booking];
    case CANCEL_BOOKING:
      return [...state, action.booking];
    default:
      return state;
  }
};

export default bookingReducer;
