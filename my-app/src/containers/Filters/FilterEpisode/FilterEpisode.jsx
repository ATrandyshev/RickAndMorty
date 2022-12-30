import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Selector } from "../../../components/Selector/Selector";
import { selectCountEpisodes } from "../../../store/episodes/selector/selectors";

const getListOptions = (countOptions) => {
  const listOptions = [];

  for (let i = 1; i <= countOptions; ++i) {
    const item = {
      value: `${i.toString()}`,
      label: `Episode - ${i.toString()}`,
    };

    listOptions.push(item);
  }

  return listOptions;
};

const FilterEpisodeContainer = ({ currentEpisode, setCurrentEpisode }) => {
  const countOptions = useSelector(selectCountEpisodes);
  const listOptions = useMemo(
    () => getListOptions(countOptions),
    [countOptions]
  );

  return (
    <Selector
      currentLocation={currentEpisode}
      setCurrentValue={setCurrentEpisode}
      listOptions={listOptions}
    />
  );
};

export default FilterEpisodeContainer;
