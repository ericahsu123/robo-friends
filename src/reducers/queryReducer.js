import types from '../actions/types';

export default (state = '', action) => {
  switch (action.type) {
    case types.CHANGE_SEARCH_STRING:
      return action.payload;
    default:
      return state;
  }
};
