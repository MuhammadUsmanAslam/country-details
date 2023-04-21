import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';

const App = () => (
  <div>
    <h1>App</h1>
  </div>
);

describe('App', () => {
  test('render App React component', () => {
    render(<App />);
    expect(screen.getByText('App')).toBeInTheDocument();
  });
});
