export interface Character {
  id: number;
  name: string;
  status: Status;
  species: string;
  type: string;
  gender: string;
  origin: OriginType;
  location: LocationType;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface ApiResponse<T> {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: T[];
}

export type CharacterFilters = {
  page?: number;
  name?: string;
  status?: Status;
  species?: string;
};

export type Status = "Alive" | "Dead" | "unknown";

export type OriginType = {
  name: string;
  url: string;
};

export type LocationType = {
  name: string;
  url: string;
};
