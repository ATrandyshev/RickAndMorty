import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Status from "../Status/Status";
import styles from "./card.module.css";

export const CharacterCard = ({
  img,
  name,
  status,
  lastLocation,
  id,
  ref2,
}) => {
  return (
    <Link to={`/character/${id}`} style={{ textDecoration: "none" }} ref={ref2}>
      <Card className={styles.card}>
        <Card.Img
          variant="top"
          src={img}
          className={styles.img}
          alt={`Character: ${name}`}
        />

        <Card.Body>
          <Card.Title className={styles.title}>
            {name}
            <Status status={status} />
          </Card.Title>

          <Card.Text className={styles.card__text}>
            Last location: {lastLocation}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};
