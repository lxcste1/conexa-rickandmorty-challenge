"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Character, Episode, EpisodesKind } from "@/types";
import { getEpisodes } from "@/services/api";
import { pickEpisodeIds } from "@/lib/utils";

type Params = {
  type: EpisodesKind;
  character1: Character | null;
  character2: Character | null;
};

type State = {
  episodes: Episode[];
  loading: boolean;
  error: unknown;
};

export function useEpisodes({ type, character1, character2 }: Params) {
  const [state, setState] = useState<State>({
    episodes: [],
    loading: false,
    error: null,
  });
  const reqIdRef = useRef(0);

  const stableDeps = useMemo(
    () => [
      type,
      character1?.id,
      character2?.id,
      character1?.episode.length,
      character2?.episode.length,
    ],
    [
      type,
      character1?.id,
      character2?.id,
      character1?.episode.length,
      character2?.episode.length,
    ]
  );

  useEffect(() => {
    const reqId = ++reqIdRef.current;
    const ids = pickEpisodeIds(type, character1, character2);

    if (ids.length === 0) {
      setState({ episodes: [], loading: false, error: null });
      return;
    }

    setState((s) => ({ ...s, loading: true, error: null }));

    getEpisodes(ids)
      .then((eps) => {
        if (reqId === reqIdRef.current) {
          setState({ episodes: eps, loading: false, error: null });
        }
      })
      .catch((err) => {
        if (reqId === reqIdRef.current) {
          setState({ episodes: [], loading: false, error: err });
        }
      });
  }, stableDeps);

  return state;
}
