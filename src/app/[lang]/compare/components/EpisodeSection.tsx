"use client";

import type { Character, Dictionary } from "@/types";
import { useEpisodes } from "@/hooks/useEpisodes";
import EpisodeCard from "@/components/features/EpisodeCard/EpisodeCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "@/components/ui/card";
import { fmt } from "@/i18n/fmt";

type EpisodeSectionProps = {
  title: string;
  character1: Character | null;
  character2: Character | null;
  type: "character1" | "shared" | "character2";
  dict: Dictionary["compare"];
};

export function EpisodeSection({
  title,
  character1,
  character2,
  type,
  dict,
}: EpisodeSectionProps) {
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
    const msg =
      type === "shared"
        ? dict.prompts.selectBoth
        : fmt(dict.prompts.selectCharacter, {
            n: type === "character1" ? 1 : 2,
          });

    return (
      <div className="flex flex-col space-y-4">
        <h3 className="text-md font-semibold text-foreground">{title}</h3>
        <div className="m-1">
          <Card className="flex items-center justify-center text-center p-0 text-muted-foreground border-0 h-[62px]">
            {msg}
          </Card>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex flex-col space-y-4">
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
      <div className="flex flex-col space-y-4">
        <h3 className="text-md font-semibold text-foreground">{title}</h3>
        <div className="text-center py-8 text-red-500">
          <div className="m-1">
            <Card className="flex items-center justify-center text-center p-0 text-muted-foreground border-0 h-[62px]">
              {dict.error}
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col space-y-4">
      <h3 className="text-md font-semibold text-foreground">{title}</h3>
      {episodes.length === 0 ? (
        <div className="text-center text-muted-foreground">
          <div className="m-1">
            <Card className="flex items-center justify-center text-center p-0 text-muted-foreground border-0 h-[62px]">
              {dict.notFound}
            </Card>
          </div>
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
