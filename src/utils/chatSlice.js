import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "../components/constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(OFFSET_LIVE_CHAT, 1);
      state.messages.unshift(action.payload);
    },
    addName: (state, action) => {
      state.searchName = action.payload;
    },
    addLoginName: (state, action) => {
      state.LoginToPage = action.payload;
    },
  },
});
export const { addMessage, addName, addLoginName } = chatSlice.actions;
export default chatSlice.reducer;
