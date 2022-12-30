import styles from "./style.module.css";

const Status = ({ status }) => {
  let statusTag;
  switch (status) {
    case "Alive":
      statusTag = <div className={styles.statusAlive}>{status}</div>;
      break;
    case "Dead":
      statusTag = <div className={styles.statusDead}>{status}</div>;
      break;
    default:
      statusTag = <div className={styles.statusUnknown}>{status}</div>;
      break;
  }
  return statusTag;
};

export default Status;
