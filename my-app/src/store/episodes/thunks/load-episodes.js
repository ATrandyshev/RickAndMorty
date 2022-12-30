import useHttp from "../../../hooks/http/useHttp";
import {
  startLoading,
  failLoading,
  successLoading,
} from "../slice/episodesSlice";
import { successLoading as successLoadingCharacters } from "../../characters/slice/charactersSlice";

export const loadEpisodes = (numberLocation = 1) => {
  return (dispatch, getState) => {
    const { getEpisodes } = useHttp();

    dispatch(startLoading());

    try {
      getEpisodes(numberLocation).then((data) => {
        dispatch(successLoading(data));
        dispatch(successLoadingCharacters(data));
      });
    } catch {
      dispatch(failLoading());
    }
  };
};
