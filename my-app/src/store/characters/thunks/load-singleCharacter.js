import useHttp from "../../../hooks/http/useHttp";
import {
  startLoading,
  failLoading,
  successLoading,
} from "../slice/charactersSlice";

export const loadSingleCharacter = (id) => {
  return (dispatch, getState) => {
    const { getCharacter } = useHttp();
    dispatch(startLoading());

    try {
      getCharacter(id)
        .then((data) => dispatch(successLoading(data)))
        .catch(() => {
          dispatch(failLoading());
        });
    } catch {
      dispatch(failLoading());
    }
  };
};
