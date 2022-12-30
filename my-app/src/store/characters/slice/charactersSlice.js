import { createSlice } from "@reduxjs/toolkit";

const charactersSlice = createSlice({
  name: "characters",
  initialState: {
    entities: {},
    ids: [],
    pages: 0,
    status: "notStarted",
  },
  reducers: {
    startLoading: (state) => {
      state.status = "startLoading";
    },

    failLoading: (state) => {
      state.status = "failLoading";
      state.pages = 0;
    },

    successLoading: (state, { payload }) => {
      const { info, results } = payload;
      const countPages = info?.pages || 0;

      state.entities = (results || []).reduce((acc, character) => {
        acc[character.id] = character;
        return acc;
      }, {});
      state.ids = (results || []).map(({ id }) => id);
      state.pages = countPages;
      state.status = "successLoading";
    },
  },
});

export const { startLoading, failLoading, successLoading } =
  charactersSlice.actions;

export default charactersSlice;
