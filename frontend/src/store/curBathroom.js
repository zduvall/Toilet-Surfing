// Action Types
const SET_CURBATHROOM_ID = 'curBathroom/SET_CURBATHROOM_ID';

// action
export const setCurBathroomIdAction = (bathroomId) => {
  return {
    type: SET_CURBATHROOM_ID,
    bathroomId,
  };
};

// Reducer
const curBathroomReducer = (state = 1, action) => {
  switch (action.type) {
    case SET_CURBATHROOM_ID:
      return action.bathroomId;
    default:
      return state;
  }
};

export default curBathroomReducer;
