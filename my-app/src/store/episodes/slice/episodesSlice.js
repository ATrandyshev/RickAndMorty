import { createSlice } from "@reduxjs/toolkit";

const episodesSlice = createSlice({
  name: "episodes",
  initialState: {
    info: {},
    countEpisodes: 0,
    status: "notStarted",
  },
  reducers: {
    startLoading: (state) => {
      state.status = "startLoading";
    },

    successLoading: (state, { payload }) => {
      const { info } = payload;

      state.info = info;
      state.status = "successLoading";
    },

    failLoading: (state) => {
      state.status = "failLoading";
    },
  },
});

export const { startLoading, failLoading, successLoading } =
  episodesSlice.actions;

export default episodesSlice;
