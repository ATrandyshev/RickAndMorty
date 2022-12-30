import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./characters/slice/charactersSlice";
import episodesSlice from "./episodes/slice/episodesSlice";
import locationsSlice from "./locations/slice/locationsSlice";

const rootReducer = (state, action) => ({
  characters: charactersSlice.reducer(state?.characters, action),
  locations: locationsSlice.reducer(state?.locations, action),
  episodes: episodesSlice.reducer(state?.episodes, action),
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
});
