import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders the main text with the Rick and Morty API link", () => {
    render(<Footer />);
    const link = screen.getByRole("link", { name: /Rick and Morty API/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://rickandmortyapi.com/");
    expect(link).toHaveAttribute("target", "_blank");
  });

  it("renders the dynamic copyright year", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(new RegExp(`© ${currentYear} Conexa Challenge`, "i"))
    ).toBeInTheDocument();
  });

  it("renders the LinkedIn profile link", () => {
    render(<Footer />);
    const link = screen.getByRole("link", { name: /lxcste/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/tellolucas/"
    );
  });
});
