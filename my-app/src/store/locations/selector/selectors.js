export const selectLocationsState = (state) => state.locations;

export const selectCountLocations = (state) => {
  return selectLocationsState(state).info.countLocations;
};

export const selectLocationInfo = (state) => {
  return selectLocationsState(state).info ?? "unknown";
};

export const selectLocationIsLoading = (state) => {
  return selectLocationsState(state).status === "startLoading";
};

export const selectLocationIsError = (state) => {
  return selectLocationsState(state).status === "failLoading";
};
