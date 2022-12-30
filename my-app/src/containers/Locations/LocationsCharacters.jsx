import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadLocations } from "../../store/locations/thunks/load-locations";
import {
  selectLocationInfo,
  selectLocationIsLoading,
  selectLocationIsError,
} from "../../store/locations/selector/selectors";
import { Container, Col, Row } from "react-bootstrap";
import FilterLocationContainer from "../Filters/FilterLocation/FilterLocation";
import { CharactersListWhithLoading } from "../CharactersList/CharactersList";
import styles from "./style.module.css";

export const LocationsCharactersContainer = () => {
  const [currentLocation, setCurrentLocation] = useState("1");
  const isLoading = useSelector((state) => selectLocationIsLoading(state));
  const isError = useSelector(selectLocationIsError);
  const { name, dimension, type } = useSelector((state) =>
    selectLocationInfo(state)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadLocations(currentLocation));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLocation]);

  return (
    <Container fluid>
      <Row className="text-center ml-4 mb-3 text-dark">
        <Col>
          <h3 className={styles.caption}>
            Location:
            <span className={`text-primary ${styles.caption__description}`}>
              {name}
            </span>
          </h3>

          <p className={styles.caption}>
            Dimension:
            <span className={`text-primary ${styles.caption__description}`}>
              {dimension}
            </span>
          </p>

          <p className={styles.caption}>
            Type:
            <span className={`text-primary ${styles.caption__description}`}>
              {type}
            </span>
          </p>
        </Col>
      </Row>

      <Row>
        <Col xs={12} md={4} xl={3} className="ml-4 mb-3">
          <FilterLocationContainer
            currentLocation={currentLocation}
            setCurrentLocation={setCurrentLocation}
          />
        </Col>

        <CharactersListWhithLoading isLoading={isLoading} isError={isError} />
      </Row>
    </Container>
  );
};
