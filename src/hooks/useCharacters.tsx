"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { ApiResponse, Character, Status } from "@/types";
import { getCharacters } from "@/services/api";

export type UseCharactersParams = {
  page: number;
  name?: string;
  status?: Status;
  species?: string;
};

type State = {
  data: ApiResponse<Character> | null;
  loading: boolean;
  error: unknown;
};

export function useCharacters(params: UseCharactersParams) {
  const [state, setState] = useState<State>({
    data: null,
    loading: true,
    error: null,
  });

  const stableParams = useMemo(
    () => ({ ...params }),
    [params.page, params.name, params.status, params.species]
  );

  const reqIdRef = useRef(0);

  useEffect(() => {
    const currentId = ++reqIdRef.current;
    const ctrl = new AbortController();

    setState((s) => ({ ...s, loading: true, error: null }));

    getCharacters(stableParams, ctrl.signal)
      .then((res) => {
        if (currentId === reqIdRef.current) {
          setState({ data: res, loading: false, error: null });
        }
      })
      .catch((err) => {
        if (ctrl.signal.aborted) return;
        if (currentId === reqIdRef.current) {
          setState({ data: null, loading: false, error: err });
        }
      });

    return () => ctrl.abort();
  }, [stableParams]);

  const characters = state.data?.results ?? [];
  const totalPages = state.data?.info.pages ?? 1;

  return {
    ...state,
    characters,
    totalPages,
  };
}
