import { render, screen } from '@testing-library/react';
import Timelinenew from './Timelinenew'

test('checking the heading for the recent experience', () => {
  render(<Timelinenew />);
  const container = screen.getByText(/Associate XT L1/i);
  expect(container).toBeInTheDocument();
});

test('checking the heading for the next experience', () => {
    render(<Timelinenew />);
    const container = screen.getByText(/Junior Associate Technology/i);
    expect(container).toBeInTheDocument();
  });

test('checking for the text  microapp', () => {
    render(<Timelinenew />);
    const container = screen.getByText(/microapp/i);
    expect(container).toBeInTheDocument();
  });







  




