import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders theme toggle button', () => {
  const { getByLabelText } = render(<App />);
  const buttonElement = getByLabelText('Toggle theme');
  expect(buttonElement).toBeInTheDocument();
});

test('renders skills heading', () => {
  const { getByText } = render(<App />);
  const headingElement = getByText('Skills');
  expect(headingElement).toBeInTheDocument();
});

test('renders expertise heading', () => {
  const { getByText } = render(<App />);
  const headingElement = getByText('Expertise');
  expect(headingElement).toBeInTheDocument();
});

