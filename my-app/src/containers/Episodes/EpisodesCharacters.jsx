import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadEpisodes } from "../../store/episodes/thunks/load-episodes";
import {
  selectEpisodesIsLoading,
  selectEpisodesInfo,
  selectEpisodesIsError,
} from "../../store/episodes/selector/selectors";
import { Container, Col, Row } from "react-bootstrap";
import { CharactersListWhithLoading } from "../CharactersList/CharactersList";
import FilterEpisodeContainer from "../Filters/FilterEpisode/FilterEpisode";
import styles from "./style.module.css";

export const EpisodesharactersContainer = () => {
  const [currentEpisode, setCurrentEpisode] = useState("1");
  const isLoading = useSelector(selectEpisodesIsLoading);
  const isError = useSelector(selectEpisodesIsError);
  const { name, airDate, episode } = useSelector(selectEpisodesInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadEpisodes(currentEpisode));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentEpisode]);

  return (
    <Container fluid>
      <Row className="text-center ml-4 mb-3 text-dark">
        <Col>
          <h3 className={styles.caption}>
            Episode name:
            <span className={`text-primary ${styles.caption__description}`}>
              {name}
            </span>
          </h3>

          <p className={styles.caption}>
            Air Date:
            <span className={`text-primary ${styles.caption__description}`}>
              {airDate}
            </span>
          </p>

          <p className={styles.caption}>{episode}</p>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={4} xl={3} className="ml-4 mb-3">
          <FilterEpisodeContainer
            currentEpisode={currentEpisode}
            setCurrentEpisode={setCurrentEpisode}
          />
        </Col>

        <CharactersListWhithLoading isLoading={isLoading} isError={isError} />
      </Row>
    </Container>
  );
};
