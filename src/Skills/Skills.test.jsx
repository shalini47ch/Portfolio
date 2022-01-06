import { render, screen } from "@testing-library/react";
import Skills from './Skills'

test("checking the label of programming languages", () => {
  render(<Skills/>);
  const container = screen.getByText(/Languages/i);
  expect(container).toBeInTheDocument();
});


test("checking the label of Web Technologies", () => {
    render(<Skills/>);
    const container = screen.getByText(/Web Technologies/i);
    expect(container).toBeInTheDocument();
  });

  test("checking the label of Deployment", () => {
    render(<Skills/>);
    const container = screen.getByText(/Deployment/i);
    expect(container).toBeInTheDocument();
  });

  test("checking the label of Libraries and Frameworks", () => {
    render(<Skills/>);
    const container = screen.getByText(/Libraries and Frameworks/i);
    expect(container).toBeInTheDocument();
  });

  
  
