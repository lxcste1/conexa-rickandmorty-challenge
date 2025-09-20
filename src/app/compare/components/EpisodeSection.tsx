"use client";

import type { Character } from "@/types";
import { useEpisodes } from "@/hooks/useEpisodes";
import EpisodeCard from "@/components/features/EpisodeCard/EpisodeCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";

type Props = {
  title: string;
  character1: Character | null;
  character2: Character | null;
  type: "character1" | "shared" | "character2";
};

export function EpisodeSection({ title, character1, character2, type }: Props) {
  const { episodes, loading, error } = useEpisodes({
    type,
    character1,
    character2,
  });

  const shouldShow =
    (type === "character1" && !!character1) ||
    (type === "character2" && !!character2) ||
    (type === "shared" && !!character1 && !!character2);

  if (!shouldShow) {
    return (
      <div className="flex flex-col space-y-4">
        <h3 className="text-md font-semibold text-foreground">{title}</h3>
        <div className="m-1">
          <Card className="flex items-center justify-center text-center p-0 text-muted-foreground border-0 h-[62px]">
            {type === "shared"
              ? "Select both characters to see shared episodes"
              : `Select ${
                  type === "character1" ? "Character #1" : "Character #2"
                } to see episodes`}
          </Card>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="space-y-4">
        <h3 className="text-md font-semibold text-foreground">{title}</h3>
        <div className="grid gap-3">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="m-1">
              <Skeleton className="h-[62px] bg-white animate-pulse rounded-xl" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-4">
        <h3 className="text-md font-semibold text-foreground">{title}</h3>
        <div className="text-center py-8 text-red-500">
          Failed to load episodes.
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h3 className="text-md font-semibold text-foreground">{title}</h3>
      {episodes.length === 0 ? (
        <div className="text-center py-8 text-muted-foreground">
          No episodes found for this selection
        </div>
      ) : (
        <div className="grid gap-3 max-h-80 overflow-y-auto md:pr-2.5">
          {episodes.map((episode) => (
            <EpisodeCard key={episode.id} episode={episode} className="m-1" />
          ))}
        </div>
      )}
    </div>
  );
}
