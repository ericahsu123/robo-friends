import configureStore from 'redux-mock-store'; //ES6 modules
import reduxThunk from 'redux-thunk';
import { fetchRobots, changeSearchString } from '../index';
import types from '../types';

const middlewares = [reduxThunk];
const mockStore = configureStore(middlewares);

// You would import the action from your codebase in a real scenario
describe('action creators work as expected', () => {
  const initialState = {};
  const store = mockStore(initialState);
  let i = 0;

  test('should execute changeSearchString action creator', () => {
    expect.assertions(1);
    // Initialize mockstore with empty state

    const query1 = 'monster';
    // Dispatch the action
    store.dispatch(changeSearchString(query1));

    // Test if your store dispatched the expected actions
    const actions = store.getActions();
    const expectedPayload = {
      type: types.CHANGE_SEARCH_STRING,
      payload: query1,
    };

    expect(actions[i++]).toEqual(expectedPayload);
  });

  test('should execute fetchRobots action creator sucessfully', () => {
    expect.assertions(2);

    // Return the promise
    return store
      .dispatch(fetchRobots('https://jsonplaceholder.typicode.com/users'))
      .then(() => {
        const actions = store.getActions();
        expect(actions[i].payload.robots.length).toEqual(10);
        expect(actions[i++].payload.error).toBeUndefined();
      });
  });

  test('should execute fetchRobots action creator with error', () => {
    expect.assertions(2);

    // Return the promise
    return store
      .dispatch(fetchRobots('https://jsonplaceholder.typicode.com/us'))
      .then(() => {
        const actions = store.getActions();
        expect(actions[i].payload.robots).toBeUndefined();
        expect(actions[i++].payload.error).toBeTruthy();
      });
  });
});
