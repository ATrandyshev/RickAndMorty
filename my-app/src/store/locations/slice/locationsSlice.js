import { createSlice } from "@reduxjs/toolkit";

const locationsSlice = createSlice({
  name: "locations",
  initialState: {
    info: {},
    countLocations: 0,
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
  locationsSlice.actions;

export default locationsSlice;
