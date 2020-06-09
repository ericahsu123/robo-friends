import { combineReducers } from 'redux';
import robotsReducer from './robotsReducer';
import queryReducer from './queryReducer';

export default combineReducers({ robots: robotsReducer, query: queryReducer });
