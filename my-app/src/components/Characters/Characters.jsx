import { CharacterCard } from "../CharacterCard/CharacterCard";
import styles from "./characters.module.css";

export const Characters = ({ charList }) => {
  return (
    <div className={styles.cards}>
      {charList.length > 0
        ? charList.map(({ id, img, name, status, lastLocation }) => (
            <CharacterCard
              key={id}
              img={img}
              name={name}
              status={status}
              lastLocation={lastLocation}
              id={id}
            />
          ))
        : null}
    </div>
  );
};
