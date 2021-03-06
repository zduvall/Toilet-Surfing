import { fetch } from './csrf';

// Action types
const LOAD_FAVORITES = '/favorites/LOAD_FAVORITES';
const CREATE_FAVORITE = '/favorites/CREATE_FAVORITE';
const REMOVE_FAVORITE = '/favorites/REMOVE_FAVORITE';

// Action creators
const load = (favorites) => ({
  type: LOAD_FAVORITES,
  favorites,
});

const create = (favorite) => ({
  type: CREATE_FAVORITE,
  favorite,
});

const remove = (favoriteId) => ({
  type: REMOVE_FAVORITE,
  favoriteId,
});

// Thunks
export const getFavorites = () => async (dispatch) => {
  const res = await fetch('/api/favorites');
  if (res.ok) {
    dispatch(load(res.data));
  }
};

export const createFavorite = (favorite) => async (dispatch) => {
  const { userId, bathroomId } = favorite;
  const res = await fetch('/api/favorites', {
    method: 'POST',
    body: JSON.stringify({
      userId,
      bathroomId,
    }),
  });
  dispatch(create(res.data.favorite));
  return res;
};

export const removeFavorite = (favoriteId) => async (dispatch) => {
  const res = await fetch(`/api/favorites/${favoriteId}`, {
    method: 'DELETE',
  });
  if (res.ok) {
    dispatch(remove(favoriteId));
  }
};

// Reducer
const initState = {};

const favoriteReducer = (state = initState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case LOAD_FAVORITES:
      for (let favorite of action.favorites) {
        newState[Number(favorite.id)] = favorite;
      }
      // maybe refactor this to filter out only cur user's favs upon load?
      return newState;
    case CREATE_FAVORITE:
      newState[Number(action.favorite.id)] = action.favorite;
      return newState;
    case REMOVE_FAVORITE:
      delete newState[Number(action.favoriteId)];
      return newState;
    default:
      return newState;
  }
};

export default favoriteReducer;
