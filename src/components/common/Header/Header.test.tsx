import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("renders the logo image", () => {
    render(<Header />);
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("src", "/rickandmorty-logo.png");
  });

  it("renders the home link with text 'Conexa Challenge'", () => {
    render(<Header />);
    const link = screen.getByRole("link", { name: /Conexa Challenge/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });
});
