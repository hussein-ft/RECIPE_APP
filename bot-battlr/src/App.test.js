import { render, screen } from '@testing-library/react';
import App from './App';

test('renders bot battlr header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Bot Battlr/i);
  expect(headerElement).toBeInTheDocument();
});
