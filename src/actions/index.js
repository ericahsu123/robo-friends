import axios from 'axios';
import types from './types';

export const fetchRobots = () => {
  return async (dispatch) => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    dispatch({
      type: types.FETCH_ROBOTS,
      payload: response.data,
    });
  };
};

export const changeSearchString = (searchString) => {
  return {
    type: types.CHANGE_SEARCH_STRING,
    payload: searchString,
  };
};
