"use client";

import React from "react";
import CharacterCard from "@/components/features/CharacterCard/CharacterCard";
import { characterMock } from "@/mocks/character.mock";
import { Character } from "@/types";

function ComparePage() {
  return (
    <div className="min-h-screen">
      <h1 className="mb-4 text-2xl font-bold">ComparePage</h1>
      <div className="flex flex-col gap-2">
        <h2>CharacterCard</h2>
        <CharacterCard
          character={characterMock as Character}
          onSelect={(c) => console.log("select", c)}
          // isSelected={true}
        />
      </div>
    </div>
  );
}

export default ComparePage;
