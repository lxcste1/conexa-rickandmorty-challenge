"use client";

import { useState } from "react";
import type { Character, Status } from "@/types";
import CharacterCard from "@/components/features/CharacterCard/CharacterCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCharacters } from "@/hooks/useCharacters";
import { Skeleton } from "@/components/ui/skeleton";

interface CharacterListProps {
  title: string;
  selectedCharacter: Character | null;
  onCharacterSelect: (character: Character) => void;
  nameFilter?: string;
  statusFilter?: Status;
  speciesFilter?: string;
}

export function CharacterList({
  title,
  selectedCharacter,
  onCharacterSelect,
}: CharacterListProps) {
  const [currentPage, setCurrentPage] = useState(1);

  const { characters, totalPages, loading, error } = useCharacters({
    page: currentPage,
  });

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((p) => p - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((p) => p + 1);
  };

  if (loading) {
    return (
      <div className="space-y-4 px-2 md:px-0">
        <h2 className="text-xl font-bold text-foreground">{title}</h2>
        <div className="grid grid-cols-2 gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="m-1">
              <Skeleton className="h-[144px] bg-white animate-pulse rounded-xl md:mr-2.5" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-4 px-2 md:px-0">
        <h2 className="text-xl font-bold text-foreground">{title}</h2>
        <div className="text-sm text-red-500">Failed to load characters.</div>
      </div>
    );
  }

  return (
    <div className="space-y-4 px-2 md:px-0">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-foreground">{title}</h2>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <span className="text-sm text-muted-foreground">
            {currentPage} / {totalPages}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2 max-h-[500px] overflow-y-auto pr-0 md:pr-2.5">
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            isSelected={selectedCharacter?.id === character.id}
            onSelect={onCharacterSelect}
            className="m-1"
          />
        ))}
      </div>
    </div>
  );
}
