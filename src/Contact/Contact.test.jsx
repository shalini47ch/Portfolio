import { render, screen } from '@testing-library/react';
import Contact from './Contact';

test('checking the heading titled as Contact Me', () => {
  render(<Contact />);
  const heading = screen.getByText(/Contact Me/i);
  expect(heading).toBeInTheDocument();
});








  




