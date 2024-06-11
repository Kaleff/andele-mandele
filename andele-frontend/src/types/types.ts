export type RouterError = {
  statusText: string;
  message: string;
}

export type PaginationEvent = {
  selected: number;
}

export type EpisodeType = {
  name: string;
  air_date: string;
  episode: string;
  id: number;
}

export type LocationType = {
  name: string;
  type: string;
  dimension: string;
}

export type CharacterType = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string | null;
  gender: string;
  image: string;
}

export type UrlParams = {
  id: number;
}

export type PlacesType = {
  origin: LocationType;
  location: LocationType;
}