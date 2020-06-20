import axios from 'axios';
import types from './types';

export const fetchRobots = (url) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(url);
      dispatch({
        type: types.FETCH_ROBOTS_SUCCESS,
        payload: { robots: response.data },
      });
    } catch (error) {
      dispatch({
        type: types.FETCH_ROBOTS_ERROR,
        payload: { error: error },
      });
    }
  };
};

export const changeSearchString = (searchString) => {
  return {
    type: types.CHANGE_SEARCH_STRING,
    payload: searchString,
  };
};
