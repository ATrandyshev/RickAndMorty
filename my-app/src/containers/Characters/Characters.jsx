import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCountPages,
  selectCharactersIsLoading,
  selectCharactersIsError,
} from "../../store/characters/selector/selectors";
import { loadCharacters } from "../../store/characters/thunks/load-characters";
import { Container, Col, Row } from "react-bootstrap";
import Search from "../../components/Search/Search";
import FilterCharacters from "../../components/Filters/FilterCharacters/FilterCharacters";
import { PaginationBasic } from "../../components/PaginationBasic/PaginationBasic";
import { CharactersListWhithLoading } from "../CharactersList/CharactersList";

export const CharactersContainer = () => {
  const [numberPage, setNumberPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [statusSelected, setStatusSelected] = useState("");
  const [speciesSelected, setSpeciesSelected] = useState("");
  const [genderSelected, setGenderSelected] = useState("");
  const [isClearFilterSearch, setIsClearFilterSearch] = useState(false);

  const isLoading = useSelector(selectCharactersIsLoading);
  const isError = useSelector(selectCharactersIsError);
  const countPagePagination = useSelector(selectCountPages);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      loadCharacters(
        numberPage,
        searchInput,
        statusSelected,
        speciesSelected,
        genderSelected
      )
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    numberPage,
    searchInput,
    statusSelected,
    speciesSelected,
    genderSelected,
  ]);

  const onClearFilter = () => {
    if (searchInput || statusSelected || speciesSelected || genderSelected) {
      setIsClearFilterSearch(true);
      setStatusSelected("");
      setSpeciesSelected("");
      setGenderSelected("");
      setSearchInput("");
      setNumberPage(1);
    }
  };

  return (
    <Container fluid>
      <Row className="justify-content-md-center mb-4">
        <Col md={6}>
          <Search
            setEnteredValue={setSearchInput}
            isClear={isClearFilterSearch}
            setIsClear={setIsClearFilterSearch}
          />
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={4} xl={3} className="ml-4">
          <FilterCharacters
            setStatusSelected={setStatusSelected}
            setSpeciesSelected={setSpeciesSelected}
            setGenderSelected={setGenderSelected}
            onClearFilter={onClearFilter}
            isClear={isClearFilterSearch}
            setIsClear={setIsClearFilterSearch}
          />
        </Col>

        <CharactersListWhithLoading isLoading={isLoading} isError={isError} />
      </Row>

      <Row className="justify-content-md-center mt-4">
        <Col sm={"auto"}>
          <PaginationBasic
            countPages={countPagePagination}
            onClick={(number) => setNumberPage(number)}
          />
        </Col>
      </Row>
    </Container>
  );
};
