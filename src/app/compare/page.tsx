"use client";

import React, { useState } from "react";
import { Character } from "@/types";
import { CharacterList } from "./components/CharacterList";
import CharacterCard from "@/components/features/CharacterCard/CharacterCard";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { EpisodeSection } from "./components/EpisodeSection";

function ComparePage() {
  const [character1, setCharacter1] = useState<Character | null>(null);
  const [character2, setCharacter2] = useState<Character | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Character Comparison
          </h1>
          <p className="text-muted-foreground text-lg">
            Compare characters and discover their shared episodes
          </p>
        </div>
        {/* Character Selection */}
        <section className="grid lg:grid-cols-2 gap-8 mb-12">
          <CharacterList
            title="Character #1"
            selectedCharacter={character1}
            onCharacterSelect={setCharacter1}
          />
          <CharacterList
            title="Character #2"
            selectedCharacter={character2}
            onCharacterSelect={setCharacter2}
          />
        </section>
        {/* Selected Characters Display */}
        {(character1 || character2) && (
          <section>
            <Card className="mb-8 px-4 mx-4 md:mx-0 bg-card rounded-lg border-0">
              <CardTitle className="text-xl font-semibold mb-4 text-card-foreground">
                Selected Characters
              </CardTitle>
              <CardContent className="grid md:grid-cols-2 gap-6 px-0">
                {character1 && (
                  <CharacterCard character={character1 as Character} />
                )}
                {character2 && (
                  <CharacterCard character={character2 as Character} />
                )}
              </CardContent>
            </Card>
          </section>
        )}
        {/* Episodes Analysis */}
        <section className="grid lg:grid-cols-3 gap-8 px-4 md:px-0">
          <EpisodeSection
            title="Character #1 - Only Episodes"
            character1={character1}
            character2={character2}
            type="character1"
          />
          <EpisodeSection
            title="Character #1 & Character #2 - Shared Episodes"
            character1={character1}
            character2={character2}
            type="shared"
          />
          <EpisodeSection
            title="Character #2 - Only Episodes"
            character1={character1}
            character2={character2}
            type="character2"
          />
        </section>
      </div>
    </div>
  );
}

export default ComparePage;
