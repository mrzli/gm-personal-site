import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders learn react link', () => {
  render(<App />);
  const textElement = screen.getByText(/Hello React/i);
  expect(textElement).toBeInTheDocument();
  const actual = 1;
  const expected = 1;
  expect(actual).toEqual(expected);
});
