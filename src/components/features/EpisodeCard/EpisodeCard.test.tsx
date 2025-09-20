import React from "react";
import { render, screen } from "@testing-library/react";
import EpisodeCard from "./EpisodeCard";
import { episodeMock } from "@/mocks/episode.mock";

describe("EpisodeCard", () => {
  it("renders episode name and code", () => {
    render(<EpisodeCard episode={episodeMock} />);

    expect(
      screen.getByRole("heading", { name: /the ricklantis mixup/i })
    ).toBeInTheDocument();

    expect(screen.getByText("S03E07")).toBeInTheDocument();
  });

  it("renders the air date with calendar icon", () => {
    render(<EpisodeCard episode={episodeMock} />);

    expect(screen.getByText("September 10, 2017")).toBeInTheDocument();
    expect(screen.getByTestId("lucide-calendar")).toBeInTheDocument();
  });

  it("renders the characters count with users icon", () => {
    render(<EpisodeCard episode={episodeMock} />);

    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByTestId("lucide-users")).toBeInTheDocument();
  });

  it("shows correct characters length from episode prop", () => {
    render(<EpisodeCard episode={episodeMock} />);
    const charactersCount = screen.getByText(
      episodeMock.characters.length.toString()
    );
    expect(charactersCount).toBeInTheDocument();
  });
});
