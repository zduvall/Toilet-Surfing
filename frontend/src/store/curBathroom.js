// Action Types
const SET_CURBATHROOM = 'curBathroom/SET_CURBATHROOM';

// action
export const setCurBathroomAction = (bathroom) => {
  return {
    type: SET_CURBATHROOM,
    bathroom,
  };
};

// Thunk
export const setCurBathroom = (bathroom) => async (dispatch) => {
  dispatch(setCurBathroomAction(bathroom));
};

// Reducer
const curBathroomReducer = (state = null, action) => {
  switch (action.type) {
    case SET_CURBATHROOM:
      return action.bathroom;
    default:
      return state;
  }
};

export default curBathroomReducer;
