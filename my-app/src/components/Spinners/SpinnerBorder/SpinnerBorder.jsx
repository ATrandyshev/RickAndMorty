import Spinner from "react-bootstrap/Spinner";
import styles from "./style.module.css";

export const SpinnerBorder = () => (
  <Spinner animation="border" role="status" className={styles.spinner}>
    <span className="visually-hidden">Loading...</span>
  </Spinner>
);
