import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const Error = () => (
  <div>
    <h1>Error</h1>
  </div>
);

describe('Error', () => {
  test('render Error React component', () => {
    render(<Error />);
    expect(screen.getByText('Error')).toBeInTheDocument();
  });
});
