import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const Countries = () => (
  <div>
    <h1>Countries</h1>
  </div>
);

describe('Countries', () => {
  test('render Countries React component', () => {
    render(<Countries />);
    expect(screen.getByText('Countries')).toBeInTheDocument();
  });
});
