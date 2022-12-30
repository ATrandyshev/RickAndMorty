import useHttp from "../../../hooks/http/useHttp";
import {
  startLoading,
  failLoading,
  successLoading,
} from "../slice/locationsSlice";
import { successLoading as successLoadingCharacters } from "../../characters/slice/charactersSlice";

export const loadLocations = (numberLocation = 1) => {
  return (dispatch, getState) => {
    const { getLocations } = useHttp();

    dispatch(startLoading());

    try {
      getLocations(numberLocation).then((data) => {
        dispatch(successLoading(data));
        dispatch(successLoadingCharacters(data));
      });
    } catch {
      dispatch(failLoading());
    }
  };
};
