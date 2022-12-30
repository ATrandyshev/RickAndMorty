import useHttp from "../../../hooks/http/useHttp";
import {
  startLoading,
  failLoading,
  successLoading,
} from "../slice/charactersSlice";

export const loadCharacters = (numberPage, name, status, species, gender) => {
  return (dispatch, getState) => {
    const { getCharacters } = useHttp();

    dispatch(startLoading());

    try {
      getCharacters(numberPage, name, status, species, gender)
        .then((data) => {
          dispatch(successLoading(data));
        })
        .catch((e) => {
          console.log(e);
          dispatch(failLoading());
        });
    } catch {
      dispatch(failLoading());
    }
  };
};
