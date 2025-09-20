import React from "react";
import { cx } from "class-variance-authority";
import { Character } from "@/types";
import { Card, CardContent } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { statusVariants, type StatusVariantsProps } from "../styles";
import Image from "next/image";

type CharacterCardProps = {
  character: Character;
  isSelected?: boolean;
  onSelect?: (character: Character) => void;
  className?: string;
} & Partial<StatusVariantsProps>;

function CharacterCard({
  character,
  isSelected,
  onSelect,
  className,
}: CharacterCardProps) {
  const hasLink = Boolean(onSelect);

  const containerClassNames = cx(
    "transition-all duration-200 border-0",
    isSelected ? "ring-2 ring-primary shadow-lg" : "",
    hasLink && "cursor-pointer hover:shadow-md",
    className
  );

  const statusClassNames = cx(
    "absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white",
    statusVariants({ status: character.status })
  );

  const badgeClassNames = cx(
    "text-xs",
    statusVariants({ status: character.status })
  );

  return (
    <Card
      className={containerClassNames}
      onClick={() => onSelect && onSelect(character)}
    >
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Image
              src={character.image || "/placeholder.png"}
              alt={character.name}
              className="w-16 h-16 rounded-full object-cover"
              width={64}
              height={64}
            />
            <div data-testid="status-dot" className={statusClassNames} />
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm truncate text-card-foreground">
              {character.name}
            </h3>
            <div className="flex flex-wrap gap-1 mt-2">
              <Badge data-testid="status-badge" className={badgeClassNames}>
                {character.status}
              </Badge>
              <Badge variant="outline" className="text-xs">
                {character.species}
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default CharacterCard;
