import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("checking the label of Frontend Developer", () => {
  render(<Home />);
  const container = screen.getByText(/Frontend Developer/i);
  expect(container).toBeInTheDocument();
});

test("checking the label of Curious Learner", () => {
  render(<Home />);
  const container = screen.getByText(/Curious Learner/i);
  expect(container).toBeInTheDocument();
});

test("checking the label of Technical Blogger", () => {
  render(<Home />);
  const container = screen.getByText(/Technical Blogger/i);
  expect(container).toBeInTheDocument();
});
