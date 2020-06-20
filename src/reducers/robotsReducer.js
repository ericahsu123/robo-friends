import types from '../actions/types';

export default (state = { robots: [], error: null }, action) => {
  switch (action.type) {
    case types.FETCH_ROBOTS_SUCCESS:
      return { ...state, ...action.payload };
    case types.FETCH_ROBOTS_ERROR:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
