import { useEffect, useState } from "react";
import styles from "./style.module.css";

const Search = ({ setEnteredValue, isClear, setIsClear }) => {
  const [inputValue, setinputValue] = useState("");

  useEffect(() => {
    if (isClear) {
      setinputValue("");
      setIsClear(false);
    }

    const timeOutId = setTimeout(() => setEnteredValue(inputValue), 300);
    return () => clearTimeout(timeOutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue, isClear]);

  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Enter character name..."
      value={inputValue}
      onChange={(event) => setinputValue(event.target.value)}
    />
  );
};

export default Search;
