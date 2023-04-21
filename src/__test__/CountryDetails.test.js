import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const CountryDetails = () => (
  <div>
    <h1>Countries</h1>
  </div>
);

describe('Countries', () => {
  test('render CountryDetails React component', () => {
    render(<CountryDetails />);
    expect(screen.getByText('Countries')).toBeInTheDocument();
  });
});
