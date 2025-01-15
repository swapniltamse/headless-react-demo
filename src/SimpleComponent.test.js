import React from "react";
import { render, screen } from '@testing-library/react';
import SimpleComponent from './SimpleComponent';

test('renders simple text', () => {
  render(<SimpleComponent />);
  screen.debug();
  const linkElement = screen.getByText(/Simple Test/i);
  expect(linkElement).not.toBeNull();
});
