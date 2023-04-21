import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const Country = () => (
  <div>
    <h1>Country</h1>
  </div>
);

describe('Country', () => {
  test('render Country React component', () => {
    render(<Country />);
    expect(screen.getByText('Country')).toBeInTheDocument();
  });
});
