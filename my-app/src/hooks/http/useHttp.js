import { api, filterValues } from "../../constants/Api/api";
import {
  normalizeDataCharacters,
  normalizeCharacter,
  normalizeDataLocations,
  normalizeDataEpisodes,
} from "../../normalizeData/normalizeData";

const useHttp = () => {
  const request = async (url, method = "GET", body = null, headers = {}) => {
    try {
      const response = await fetch(url, { method, body, headers });

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      const data = await response.json();

      return data;
    } catch (e) {
      throw e;
    }
  };

  const getCharacter = async (id) => {
    const apiCharacter = `${api.characters}/${id}`;
    const character = await request(apiCharacter);

    const data = { result: [], info: {} };
    data.results = [normalizeCharacter(character)];

    return data;
  };

  const getCharacters = async (numberPage, name, status, species, gender) => {
    let apiFilters = api.filterCharacters;

    if (numberPage) {
      apiFilters += `${filterValues.PAGE}=${numberPage}&`;
    }

    if (name) {
      apiFilters += `${filterValues.NAME}=${name}&`;
    }

    if (status) {
      apiFilters += `${filterValues.STATUS}=${status}&`;
    }

    if (species) {
      apiFilters += `${filterValues.SPECIES}=${species}&`;
    }

    if (gender) {
      apiFilters += `${filterValues.GENDER}=${gender}`;
    }

    const data = await request(apiFilters);

    return normalizeDataCharacters(data);
  };

  const getCountLocations = async () => {
    const locationsRequest = `${api.locations}`;

    const countLocations = await fetch(locationsRequest)
      .then((res) => res.json())
      .then((res) => res.info.count);

    return countLocations;
  };

  const getLocations = async (numberLocation = 1) => {
    const locationRequest = `${api.locations}${numberLocation}`;
    const locationInfo = await request(locationRequest);
    const locationCharacters = await Promise.all(
      locationInfo.residents.map((apiCharacter) => {
        return request(apiCharacter);
      })
    );
    const countLocations = await getCountLocations();

    const data = {
      results: locationCharacters,
      info: {
        name: locationInfo.name,
        dimension: locationInfo.dimension,
        type: locationInfo.type,
        countLocations,
      },
    };

    return normalizeDataLocations(data);
  };

  const getCountEpisodes = async () => {
    const episodesRequest = `${api.episodes}`;
    const countEpisodes = await request(episodesRequest).then(
      (res) => res.info.count
    );

    return countEpisodes;
  };

  const getEpisodes = async (numberEpisode = 1) => {
    const episodeRequest = `${api.episodes}${numberEpisode}`;

    const episodeInfo = await request(episodeRequest);
    const episodeCharacters = await Promise.all(
      episodeInfo.characters.map((apiCharacter) => {
        return request(apiCharacter);
      })
    );
    const countEpisodes = await getCountEpisodes();

    const data = {
      results: episodeCharacters,
      info: {
        name: episodeInfo.name,
        air_date: episodeInfo.air_date,
        episode: episodeInfo.episode,
        countEpisodes,
      },
    };

    return normalizeDataEpisodes(data);
  };

  return {
    getCharacters,
    getCharacter,
    getLocations,
    getEpisodes,
  };
};

export default useHttp;
