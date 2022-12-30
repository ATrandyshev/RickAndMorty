const api = {
  characters: "https://rickandmortyapi.com/api/character",
  filterCharacters: "https://rickandmortyapi.com/api/character/?",
  locations: "https://rickandmortyapi.com/api/location/",
  episodes: "https://rickandmortyapi.com/api/episode/",
};

const filterValues = {
  PAGE: "page",
  NAME: "name",
  STATUS: "status",
  SPECIES: "species",
  GENDER: "gender",
};

export { api, filterValues };
