import { LOCATION_CHANGE, LocationChangeAction } from 'react-router-redux';

const initialState = {
  location: null
};

export default (state = initialState, action: LocationChangeAction) => {
  if (action.type === LOCATION_CHANGE) {
    return { location: action.payload };
  }

  return state;
};
