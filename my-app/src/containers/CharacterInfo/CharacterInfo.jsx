import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectCharacterById,
  selectCharacterIsLoaded,
} from "../../store/characters/selector/selectors";
import { loadSingleCharacter } from "../../store/characters/thunks/load-singleCharacter";
import { CharacterInfo } from "../../components/CharacterInfo/CharacterInfo";

export const CharacterInfoContainer = () => {
  const { id } = useParams();
  const isLoaded = useSelector((state) => selectCharacterIsLoaded(state, id));
  const { img, name, status, gender, lastLocation, origin, species } =
    useSelector((state) => selectCharacterById(state, id));
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoaded) {
      dispatch(loadSingleCharacter(id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <CharacterInfo
      img={img}
      name={name}
      status={status}
      gender={gender}
      lastLocation={lastLocation}
      origin={origin}
      species={species}
    />
  );
};
