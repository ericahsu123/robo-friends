import React from 'react';
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import NavBar from '../NavBar';

afterEach(cleanup);

test('<NavBar/> component matches snapshot', () => {
  const mockStore = configureStore([]);
  const store = mockStore({});
  const component = renderer.create(
    <Provider store={store}>
      <NavBar />
    </Provider>
  );
  expect(component.toJSON()).toMatchSnapshot();
});
