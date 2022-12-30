export const selectEpisodesState = (state) => state.episodes;

export const selectCountEpisodes = (state) => {
  return selectEpisodesState(state).info.countEpisodes || 0;
};

export const selectEpisodesInfo = (state) => {
  return selectEpisodesState(state).info ?? "unknown";
};

export const selectEpisodesIsLoading = (state) => {
  return selectEpisodesState(state).status === "startLoading";
};

export const selectEpisodesIsError = (state) => {
  return selectEpisodesState(state).status === "failLoading";
};
