import Status from "../Status/Status";
import styles from "./style.module.css";

export const CharacterInfo = ({
  img,
  name,
  status,
  gender,
  lastLocation,
  origin,
  species,
}) => {
  return (
    <main className={styles.container}>
      <img className={styles.img} src={img} alt={`Character: ${name}`} />

      <div className={styles.description}>
        <h2 className={styles.name}>{name}</h2>

        <div className={styles.description_item}>
          <Status status={status} />
        </div>

        <div className={styles.description_item}>
          <span className={styles.title}>Gender:</span> {gender}
        </div>

        <div className={styles.description_item}>
          <span className={styles.title}>Location:</span> {lastLocation}
        </div>

        <div className={styles.description_item}>
          <span className={styles.title}>Origin:</span> {origin}
        </div>

        <div className={styles.description_item}>
          <span className={styles.title}>Species:</span> {species}
        </div>
      </div>
    </main>
  );
};
