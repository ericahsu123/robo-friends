import queryReducer from '../queryReducer';
import robotsReducer from '../robotsReducer';
import types from '../../actions/types';

describe('queryReducer', () => {
  it('should return the initial state', () => {
    expect.assertions(1);

    expect(queryReducer(undefined, {})).toEqual('');
  });

  it('should handle CHANGE_SEARCH_STRING', () => {
    expect.assertions(2);

    expect(
      queryReducer(undefined, {
        type: types.CHANGE_SEARCH_STRING,
        payload: 'test',
      })
    ).toEqual('test');

    expect(
      queryReducer('test', {
        type: types.CHANGE_SEARCH_STRING,
        payload: 'testtest',
      })
    ).toEqual('testtest');
  });
});

describe('robotsReducer', () => {
  it('should return the initial state', () => {
    expect.assertions(1);

    expect(robotsReducer(undefined, {})).toEqual({ robots: [], error: null });
  });

  it('should handle FETCH_ROBOTS', () => {
    expect.assertions(2);

    expect(
      robotsReducer(undefined, {
        type: types.FETCH_ROBOTS_SUCCESS,
        payload: { robots: ['robot1', 'robot2'] },
      })
    ).toEqual({ robots: ['robot1', 'robot2'], error: null });

    expect(
      robotsReducer(undefined, {
        type: types.FETCH_ROBOTS_ERROR,
        payload: { error: '404' },
      })
    ).toEqual({ robots: [], error: '404' });
  });
});
