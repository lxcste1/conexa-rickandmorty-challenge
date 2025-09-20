import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Character, EpisodesKind } from "@/types";
import { extractIdFromUrl } from "@/services/api";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const toIdSet = (c: Character | null): Set<number> =>
  new Set((c?.episode ?? []).map(extractIdFromUrl));

export const difference = (a: Set<number>, b: Set<number>) =>
  new Set([...a].filter((x) => !b.has(x)));

export const intersection = (a: Set<number>, b: Set<number>) =>
  new Set([...a].filter((x) => b.has(x)));

export const pickEpisodeIds = (
  type: EpisodesKind,
  character1: Character | null,
  character2: Character | null
): number[] => {
  const E1 = toIdSet(character1);
  const E2 = toIdSet(character2);

  if (type === "character1") return [...difference(E1, E2)];
  if (type === "character2") return [...difference(E2, E1)];
  return [...intersection(E1, E2)];
};
