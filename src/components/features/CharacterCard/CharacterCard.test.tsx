import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CharacterCard from "./CharacterCard";
import type { Character } from "@/types";
import { characterMock } from "@/mocks/character.mock";

// Mock statusVariants
jest.mock("../styles", () => ({
  statusVariants: ({ status }: { status: string }) => {
    const map: Record<string, string> = {
      Alive: "bg-green-500 text-green-700",
      Dead: "bg-red-500 text-red-700",
      unknown: "bg-gray-300 text-gray-700",
    };
    return map[status] ?? map.unknown;
  },
  __esModule: true,
}));

describe("CharacterCard", () => {
  it("renders name, image, and badges (status and species)", () => {
    const onSelect = jest.fn();
    render(
      <CharacterCard
        character={characterMock as Character}
        isSelected={false}
        onSelect={onSelect}
      />
    );

    expect(
      screen.getByRole("heading", { name: /rick sanchez/i })
    ).toBeInTheDocument();

    const img = screen.getByRole("img", {
      name: /rick sanchez/i,
    }) as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.getAttribute("src")).toContain("/api/character/avatar/1.jpeg");

    expect(screen.getByTestId("status-badge")).toHaveTextContent("Alive");
    expect(screen.getByText("Human")).toBeInTheDocument();
  });

  it("applies status classes to badge and dot", () => {
    const onSelect = jest.fn();
    render(
      <CharacterCard
        character={characterMock as Character}
        onSelect={onSelect}
      />
    );

    const statusBadge = screen.getByTestId("status-badge");
    expect(statusBadge).toHaveClass("bg-green-500");
    expect(statusBadge).toHaveClass("text-green-700");

    const statusDot = screen.getByTestId("status-dot");
    expect(statusDot).toHaveClass("bg-green-500");
    expect(statusDot).toHaveClass("text-green-700");
  });

  it("adds ring when isSelected is true", () => {
    const onSelect = jest.fn();
    const { container } = render(
      <CharacterCard
        character={characterMock as Character}
        isSelected
        onSelect={onSelect}
      />
    );

    const card = container.querySelector(".cursor-pointer");
    expect(card).toHaveClass("ring-2");
  });

  it("calls onSelect with character when clicked", async () => {
    const user = userEvent.setup();
    const onSelect = jest.fn();
    render(
      <CharacterCard
        character={characterMock as Character}
        onSelect={onSelect}
      />
    );

    await user.click(screen.getByRole("img", { name: /rick sanchez/i }));
    expect(onSelect).toHaveBeenCalledTimes(1);
    expect(onSelect).toHaveBeenCalledWith(characterMock);
  });

  it("uses placeholder image when character has no image", () => {
    const onSelect = jest.fn();
    const noImg = { ...(characterMock as Character), image: "" };
    render(<CharacterCard character={noImg} onSelect={onSelect} />);

    const img = screen.getByRole("img", {
      name: /rick sanchez/i,
    }) as HTMLImageElement;
    expect(img.getAttribute("src") ?? "").toMatch(/\/placeholder\.png$/);
  });
});
