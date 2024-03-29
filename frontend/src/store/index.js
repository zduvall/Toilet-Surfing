import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import sessionReducer from './session';
import bathroomReducer from './bathroom';
import userReducer from './user';
import curBathroomIdReducer from './curBathroom';
import bookingReducer from './booking';
import favoriteReducer from './favorite';

const rootReducer = combineReducers({
  session: sessionReducer,
  bathrooms: bathroomReducer,
  users: userReducer,
  curBathroomId: curBathroomIdReducer,
  bookings: bookingReducer,
  favorites: favoriteReducer,
});
let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
