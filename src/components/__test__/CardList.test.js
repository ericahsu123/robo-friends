import React from 'react';
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CardList from '../Cardlist';

afterEach(cleanup);

test('<CardList/> component matches snapshot', () => {
  const mockStore = configureStore([]);
  const store = mockStore({
    robots: {
      robots: [
        { id: 1, name: 'Aby', email: 'aby@gmail.com' },
        { id: 2, name: 'Abt', email: 'abt@mail.com' },
        { id: 3, name: 'Tse', email: 'tse@gmail.com' },
      ],
    },
    query: 'ab',
  });
  const component = renderer.create(
    <Provider store={store}>
      <CardList />
    </Provider>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
