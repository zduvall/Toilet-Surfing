const initState = {
  1: {
    id: 1,
    userName: 'TestUser',
    email: 'testUser@email.com'
  }
}

const userReducer = (state = initState, action) => {
  const newState = { ...state };

  switch (action.type) {
    default:
      return newState;
  }
};

export default userReducer;
