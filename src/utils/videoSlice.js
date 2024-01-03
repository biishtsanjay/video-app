import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {},
  reducers: {
    videoStore: (state, action) => {
      state = Object.assign(state, action.payload);
    },
  },
});

export const { videoStore } = videoSlice.actions;
export default videoSlice.reducer;
