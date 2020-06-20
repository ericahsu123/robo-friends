import React from 'react';
// We're using our own custom render function and not RTL's render
// our custom utils also re-export everything from RTL
// so we can import fireEvent and screen here as well
import { render, cleanup, fireEvent } from './ test-utils';
import '@testing-library/jest-dom/extend-expect';
import SearchBox from '../SearchBox';

afterEach(cleanup);

test('<SearchBox/> component matches snapshot', () => {
  const { container } = render(<SearchBox />, {
    initialState: { query: 'hi' },
  });
  expect(container).toMatchSnapshot();
});

test('Renders the connected <SearchBox/> with initialState', () => {
  const { getByTestId } = render(<SearchBox />, {
    initialState: { query: 'monster' },
  });
  const searchInput = getByTestId('search-input');
  expect(searchInput).toHaveAttribute('value', 'monster');
});

test('Renders the connected <SearchBox/> with input change', () => {
  const { getByTestId } = render(<SearchBox />, {
    initialState: { query: 'monster' },
  });
  const searchInput = getByTestId('search-input');

  fireEvent.change(searchInput, { target: { value: 'hello' } });

  expect(searchInput).toHaveAttribute('value', 'hello');
});
