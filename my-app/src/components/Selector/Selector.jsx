import { useCallback } from "react";
import Select from "react-select";
import styles from "./style.module.css";

export const Selector = ({ currentLocation, setCurrentValue, listOptions }) => {
  const getValueOption = useCallback(() => {
    return currentLocation
      ? listOptions?.find((option) => option.value === currentLocation)
      : "";
  }, [currentLocation, listOptions]);

  const onChange = (newValue) => {
    setCurrentValue(newValue.value);
  };

  return (
    <Select
      className={styles.dropdownList}
      onChange={onChange}
      value={getValueOption()}
      options={listOptions}
    />
  );
};
