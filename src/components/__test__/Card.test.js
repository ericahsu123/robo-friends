import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';

import Card from '../Card';

afterEach(cleanup);

// test('<Heading/> matches snapshot', () => {
//     const tree = renderer.create(<Heading />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });

describe('Card component matches snapshot', () => {
  const tree = renderer.create(<Card />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Card component loads correctly', () => {
  const { container } = render(<Card />);
  test('renders correctly', () => {
    expect(container).toHaveTextContent(/stars/i);
  });
});

describe('State is managed correctly', () => {
  it('likes count starts at 0', () => {
    const { getByTestId } = render(<Card />);
    const count = getByTestId('likes-count');
    expect(count.innerHTML).toBe('0');
  });

  it('should add 1 to count', () => {
    const { getByTestId } = render(<Card />);
    const count = getByTestId('likes-count');
    const add = getByTestId('add-count');
    // Click 1 time
    for (let i = 0; i < 1; i++) {
      fireEvent.click(add);
    }
    expect(count.innerHTML).toBe('1');
  });

  it('should add 2 to count', () => {
    const { getByTestId } = render(<Card />);
    const count = getByTestId('likes-count');
    const add = getByTestId('add-count');
    // Click 2 times
    for (let i = 0; i < 2; i++) {
      fireEvent.click(add);
    }
    expect(count.innerHTML).toBe('2');
  });

  it('should add 3 to count', () => {
    const { getByTestId } = render(<Card />);
    const count = getByTestId(`likes-count`);
    const add = getByTestId(`add-count`);
    // Click 3 times
    for (let i = 0; i < 3; i++) {
      fireEvent.click(add);
    }
    expect(count.innerHTML).toBe('3');
  });

  it('should add 4 to count', () => {
    const { getByTestId } = render(<Card />);
    const count = getByTestId(`likes-count`);
    const add = getByTestId(`add-count`);
    // Click 4 times
    for (let i = 0; i < 4; i++) {
      fireEvent.click(add);
    }
    expect(count.innerHTML).toBe('4');
  });

  it('should add 5 to count', () => {
    const { getByTestId } = render(<Card />);
    const count = getByTestId(`likes-count`);
    const add = getByTestId(`add-count`);
    // Click 5 times
    for (let i = 0; i < 5; i++) {
      fireEvent.click(add);
    }
    expect(count.innerHTML).toBe('5');
  });

  it('should add up no more than 5', () => {
    const { getByTestId } = render(<Card />);
    const count = getByTestId(`likes-count`);
    const add = getByTestId(`add-count`);
    for (let i = 0; i < 10; i++) {
      fireEvent.click(add);
    }
    expect(count.innerHTML).toBe('5');
  });
});
