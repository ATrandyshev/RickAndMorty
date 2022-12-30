import { useRef } from "react";
import { useSelector } from "react-redux";
import { Col } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
import { Characters } from "../../components/Characters/Characters";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { SpinnerBorder } from "../../components/Spinners/SpinnerBorder/SpinnerBorder";
import { selectCharacters } from "../../store/characters/selector/selectors";
import styles from "./style.module.css";

export const CharactersListWhithLoading = ({ isLoading, isError }) => {
  const nodeRef = useRef(null);
  const charList = useSelector(selectCharacters);

  let charactersContent;
  if (isLoading) {
    charactersContent = <SpinnerBorder />;
  } else if (isError) {
    charactersContent = <ErrorMessage />;
  } else {
    charactersContent = <Characters charList={charList} />;
  }

  return (
    <Col xs={12} md={8} xl={9}>
      <CSSTransition
        in={!isLoading}
        nodeRef={nodeRef}
        timeout={5000}
        classNames={{
          enterActive: styles.myNodeEnterActive,
          exitActive: styles.myNodeExitActive,
        }}
      >
        <div className={styles.center} ref={nodeRef}>
          {charactersContent}
        </div>
      </CSSTransition>
    </Col>
  );
};
