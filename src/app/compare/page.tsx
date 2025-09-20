"use client";

import React from "react";
import CharacterCard from "@/components/features/CharacterCard/CharacterCard";
import { characterMock } from "@/mocks/character.mock";
import { Character } from "@/types";
import EpisodeCard from "@/components/features/EpisodeCard/EpisodeCard";
import { episodeMock } from "@/mocks/episode.mock";

function ComparePage() {
  return (
    <div className="min-h-screen flex flex-col gap-4">
      <h1 className="mb-4 text-2xl font-bold">ComparePage</h1>
      <div className="flex flex-col gap-2">
        <h2>CharacterCard</h2>
        <CharacterCard
          character={characterMock as Character}
          onSelect={(c) => console.log("select", c)}
          // isSelected={true}
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2>EpisodeCard</h2>
        <EpisodeCard episode={episodeMock} />
      </div>
    </div>
  );
}

export default ComparePage;
