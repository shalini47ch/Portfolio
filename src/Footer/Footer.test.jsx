import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

test("checking the heading for the recent experience", () => {
  render(<Footer />);
  const container = screen.getByText(/Made with/i);
  expect(container).toBeInTheDocument();
});
