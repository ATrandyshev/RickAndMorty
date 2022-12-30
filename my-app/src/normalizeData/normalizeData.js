// Caracters
const normalizeDataCharacters = (data) => {
  return {
    results: data.results.map(normalizeCharacter),
    info: normalizeCharacterInfo(data.info),
  };
};

const normalizeCharacter = ({
  id,
  name,
  image,
  status,
  location,
  gender,
  origin,
  species,
}) => {
  return {
    id,
    name,
    img: image,
    status,
    lastLocation: location.name,
    gender,
    origin: origin.name,
    species,
  };
};

const normalizeCharacterInfo = ({ pages }) => {
  return {
    pages,
  };
};

// Locations
const normalizeDataLocations = (data) => {
  return {
    results: data.results.map(normalizeCharacter),
    info: normalizeLocationInfo(data.info),
  };
};

const normalizeLocationInfo = ({ name, dimension, type, countLocations }) => {
  return {
    name,
    dimension,
    type,
    countLocations,
  };
};

// Episodes
const normalizeDataEpisodes = (data) => {
  return {
    results: data.results.map(normalizeCharacter),
    info: normalizeEpisodeInfo(data.info),
  };
};

const normalizeEpisodeInfo = ({ name, air_date, episode, countEpisodes }) => {
  return {
    name,
    airDate: air_date,
    episode,
    countEpisodes,
  };
};
export {
  normalizeDataCharacters,
  normalizeCharacter,
  normalizeDataLocations,
  normalizeDataEpisodes,
};
