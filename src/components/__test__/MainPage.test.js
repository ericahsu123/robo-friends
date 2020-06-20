import React from 'react';
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, cleanup } from './ test-utils';
import '@testing-library/jest-dom/extend-expect';
import MainPage from '../MainPage';

afterEach(cleanup);

describe('<MainPage/> component matches snapshots', () => {
  test('when fetching robots is still pending', () => {
    expect.assertions(1);
    const mockProps = {
      fetchRobots: jest.fn(),
      robots: [],
      error: null,
    };
    const { container } = render(<MainPage {...mockProps} />, {
      initialState: {},
    });
    expect(container).toMatchSnapshot();
  });

  test('when fetching robots is successful', () => {
    expect.assertions(1);
    const mockProps = {
      fetchRobots: jest.fn(),
      robots: [
        { id: 1, name: 'Aby', email: 'aby@gmail.com' },
        { id: 2, name: 'Abt', email: 'abt@mail.com' },
        { id: 3, name: 'Tse', email: 'tse@gmail.com' },
      ],
      error: null,
    };
    const { container } = render(<MainPage {...mockProps} />, {
      initialState: {},
    });
    expect(container).toMatchSnapshot();
  });

  test('when fetching robots fails', () => {
    expect.assertions(1);
    const mockProps = {
      fetchRobots: jest.fn(),
      robots: [],
      error: 'error in fetching robots',
    };
    const { container } = render(<MainPage {...mockProps} />, {
      initialState: {},
    });
    expect(container).toMatchSnapshot();
  });
});
