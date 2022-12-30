export const selectCharactersState = (state) => state.characters;

export const selectCharacters = (state) =>
  Object.values(selectCharactersState(state).entities);

export const selectCharacterById = (state, id) => {
  return selectCharactersState(state).entities[id] || {};
};

export const selectCharacterIsLoaded = (state, id) => {
  return selectCharactersState(state).ids?.includes(+id);
};

export const selectCountPages = (state) => {
  return selectCharactersState(state).pages;
};

export const selectCharactersIsLoading = (state) => {
  return selectCharactersState(state).status === "startLoading";
};

export const selectCharactersIsError = (state) => {
  return selectCharactersState(state).status === "failLoading";
};
