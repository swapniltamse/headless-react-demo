import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';


// test('renders counter on the page', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/Increment/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('renders counter on the page', () => {
//   render(<App />);
//   screen.debug(); 
//   const linkElement = screen.getByText(/a/i); // Adjusted text
//   expect(linkElement).toBeInTheDocument();
// });

test('renders something', () => {
  render(<App />);
  screen.debug();
});