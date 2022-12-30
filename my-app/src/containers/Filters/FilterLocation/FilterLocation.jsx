import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Selector } from "../../../components/Selector/Selector";
import { selectCountLocations } from "../../../store/locations/selector/selectors";

const getListOptions = (countOptions) => {
  const listOptions = [];

  for (let i = 1; i <= countOptions; ++i) {
    const item = {
      value: `${i.toString()}`,
      label: `Location - ${i.toString()}`,
    };

    listOptions.push(item);
  }

  return listOptions;
};

const FilterLocationContainer = ({ currentLocation, setCurrentLocation }) => {
  const countOptions = useSelector(selectCountLocations);
  const listOptions = useMemo(
    () => getListOptions(countOptions),
    [countOptions]
  );
  return (
    <Selector
      currentLocation={currentLocation}
      setCurrentValue={setCurrentLocation}
      listOptions={listOptions}
    />
  );
};

export default FilterLocationContainer;
