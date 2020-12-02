import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

it('renders hello react', () => {
  render(<App />);
  const textElement = screen.getByText(/Hello React/i);
  expect(textElement).toBeInTheDocument();
});
