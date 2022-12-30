import { memo, useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Button from "react-bootstrap/Button";
import { characterFilter } from "../../../constants/Filters/filters";
import styles from "./style.module.css";

const {
  status: statusList,
  species: speciesList,
  gender: genderList,
} = characterFilter;

const FilterCharacters = ({
  setStatusSelected,
  setSpeciesSelected,
  setGenderSelected,
  onClearFilter,
  isClear,
  setIsClear,
}) => {
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    if (isClear) {
      setStatus("");
      setSpecies("");
      setGender("");
      setIsClear(false);
    }

    setStatusSelected(status);
    setSpeciesSelected(species);
    setGenderSelected(gender);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, species, gender, isClear]);

  return (
    <div className={styles.root}>
      <h3 className={styles.filter__lable}>Filter</h3>

      <Button
        className={styles.button__clear}
        variant="primary"
        onClick={onClearFilter}
      >
        Clear filter
      </Button>

      <Accordion className={styles.accordion}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <span className={styles.accordion__header}>Status</span>
          </Accordion.Header>
          <Accordion.Body>
            {getToggleButtonGroup(statusList, status, setStatus, "status")}
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <span className={styles.accordion__header}>Species</span>
          </Accordion.Header>
          <Accordion.Body>
            {getToggleButtonGroup(speciesList, species, setSpecies, "species")}
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <span className={styles.accordion__header}>Gender</span>
          </Accordion.Header>
          <Accordion.Body>
            {getToggleButtonGroup(genderList, gender, setGender, "gender")}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

const getToggleButtonGroup = (
  listToggleButton,
  valueSelected,
  onChangeValueSelected,
  nameGroup
) => {
  return (
    <ToggleButtonGroup
      type="radio"
      name={nameGroup}
      size="md"
      value={valueSelected}
      onChange={onChangeValueSelected}
      className={styles.buttonGroup}
    >
      {listToggleButton.map((item, idx) => (
        <ToggleButton
          key={idx}
          id={`${nameGroup}-${idx}`}
          type="radio"
          variant="outline-dark"
          name={`${nameGroup}-${item}`}
          value={item}
          className={styles.button}
        >
          {item}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default memo(FilterCharacters);
