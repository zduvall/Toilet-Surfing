import { fetch } from './csrf';

// Action types
const LOAD_BATHROOMS = '/bathrooms/LOAD_BATHROOMS';
const CREATE_BATHROOM = '/bathrooms/CREATE_BATHROOM'; // also used for update
const REMOVE_BATHROOM = '/bathrooms/REMOVE_BATHROOM'; // also used for update

// Action creators
const load = (bathrooms) => ({
  type: LOAD_BATHROOMS,
  bathrooms,
});

const create = (bathroom) => ({
  // also used for update
  type: CREATE_BATHROOM,
  bathroom,
});

const remove = (bathroomId) => ({
  // also used for update
  type: REMOVE_BATHROOM,
  bathroomId,
});

// Thunks
export const getBathrooms = () => async (dispatch) => {
  const res = await fetch('/api/bathrooms');
  if (res.ok) {
    dispatch(load(res.data));
  }
};

// create is also used to update if bathroomId is passed in as second argument
export const createBathroom = (bathroom, brIDtoUpdate = null) => async (
  dispatch
) => {
  const {
    // images,
    image,
    bathroomOwnerId,
    name,
    description,
    streetNumber,
    route,
    locality,
    administrativeArea,
    postalCode,
    country,
    lat,
    lng,
  } = bathroom;
  const formData = new FormData();
  formData.append('bathroomOwnerId', bathroomOwnerId);
  formData.append('name', name);
  formData.append('description', description);
  formData.append('streetNumber', streetNumber);
  formData.append('route', route);
  formData.append('locality', locality);
  formData.append('administrativeArea', administrativeArea);
  formData.append('postalCode', postalCode);
  formData.append('country', country);
  formData.append('lat', lat);
  formData.append('lng', lng);

  // for multiple files
  // if (images && images.length !== 0) {
  //   for (var i = 0; i < images.length; i++) {
  //     formData.append('images', images[i]);
  //   }
  // }

  // for single file
  if (image) formData.append('image', image);

  if (brIDtoUpdate) {
    // for updating bathroom
    const res = await fetch(`/api/bathrooms/${brIDtoUpdate}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    });

    if (res.ok) {
      dispatch(create(res.data.updatedBathroom));
    }
  } else {
    // for creating bathroom
    const res = await fetch(`/api/bathrooms`, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    });

    if (res.ok) dispatch(create(res.data.bathroom));
  }
};

export const deleteBathroom = (bathroomId) => async (dispatch) => {
  const res = await fetch(`/api/bathrooms/${bathroomId}`, {
    method: 'DELETE',
  });
  if (res.ok) {
    dispatch(remove(bathroomId));
  }
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
    case LOAD_BATHROOMS:
      for (let bathroom of action.bathrooms) {
        newState[bathroom.id] = bathroom;
      }
      return newState;
    case CREATE_BATHROOM:
      newState[action.bathroom.id] = action.bathroom;
      return newState;
    case REMOVE_BATHROOM:
      delete newState[Number(action.bathroomId)];
      return newState;
    default:
      return newState;
  }
};

export default bathroomReducer;
