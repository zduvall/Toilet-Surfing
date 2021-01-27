import { fetch } from './csrf';

// Action type
const SET_USERS = '/users/SET_USERS';

// Action creator
const setUsers = (users) => ({
  type: SET_USERS,
  users,
});

// Thunk
export const getUsers = () => async (dispatch) => {
  const res = await fetch('/api/users');

  if (res.ok) {
    dispatch(setUsers(res.data));
  }
};

// Reducer
const initState = {
  1: {
    id: 1,
    userName: '',
    email: '',
  },
};

const userReducer = (state = initState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case SET_USERS:
      for (let user of action.users) {
        newState[user.id] = user;
      }
      return newState;
    default:
      return newState;
  }
};

export default userReducer;
