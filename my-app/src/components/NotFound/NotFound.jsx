import styles from "./style.module.css";

export const NotFound = () => {
  return (
    <img
      className={styles.notFound_img}
      src={process.env.PUBLIC_URL + "/404.jpg"}
      alt={`Not found page`}
    />
  );
};
