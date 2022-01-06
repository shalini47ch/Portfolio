import { render, screen } from '@testing-library/react';
import About from './About';

test('checking the label for the heading of the about component', () => {
  render(<About />);
  const heading = screen.getByText(/Hello World!/i);
  expect(heading).toBeInTheDocument();
});
test('check for the data present in the div tag', ()=> {
    render(<About />);
    const data = screen.getByText(/Keen interest areas include Development and Analytics/i);
    expect(data).toBeTruthy()
});




  




