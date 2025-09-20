import type {
  Character,
  Episode,
  ApiResponse,
  CharacterFilters,
} from "@/types/index";

const BASE_URL = "https://rickandmortyapi.com/api";

class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = "ApiError";
  }
}

async function fetchJson<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, init);
  if (!res.ok) {
    const msg = await res.text().catch(() => "");
    throw new ApiError(res.status, msg || res.statusText);
  }
  return (await res.json()) as T;
}

function qs(params: Record<string, string | number | undefined>): string {
  const usp = new URLSearchParams();
  Object.entries(params).forEach(([k, v]) => {
    if (v !== undefined && v !== "") usp.set(k, String(v));
  });
  const s = usp.toString();
  return s ? `?${s}` : "";
}

// --- Characters ---

export function extractIdFromUrl(url: string): number {
  const m = url.match(/\/(\d+)(?:\/|\?.*)?$/);
  return m ? Number(m[1]) : 0;
}

export async function getCharacter(
  id: number,
  signal?: AbortSignal
): Promise<Character> {
  return fetchJson<Character>(`${BASE_URL}/character/${id}`, { signal });
}

export async function getCharacters(
  { page = 1, name, status, species }: CharacterFilters = {},
  signal?: AbortSignal
): Promise<ApiResponse<Character>> {
  const url = `${BASE_URL}/character${qs({ page, name, status, species })}`;
  return fetchJson<ApiResponse<Character>>(url, { signal });
}

export async function getCharactersByIds(
  ids: number[],
  signal?: AbortSignal
): Promise<Character[]> {
  if (ids.length === 0) return [];
  const data = await fetchJson<Character | Character[]>(
    `${BASE_URL}/character/${ids.join(",")}`,
    { signal }
  );
  return Array.isArray(data) ? data : [data];
}

// --- Episodes ---

export async function getEpisode(
  id: number,
  signal?: AbortSignal
): Promise<Episode> {
  return fetchJson<Episode>(`${BASE_URL}/episode/${id}`, { signal });
}

export async function getEpisodes(
  ids: number[],
  signal?: AbortSignal
): Promise<Episode[]> {
  if (ids.length === 0) return [];
  const data = await fetchJson<Episode | Episode[]>(
    `${BASE_URL}/episode/${ids.join(",")}`,
    { signal }
  );
  return Array.isArray(data) ? data : [data];
}
