import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TitleComponent from "../components/TitleComponent";

test("renders the simple component with the correct title", () => {
  render(<TitleComponent message="Test Project" />);
  const textElement = screen.getByText(/Test Project/i);
  expect(textElement).toBeInTheDocument();
});
