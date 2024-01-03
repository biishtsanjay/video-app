import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
    Theme: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    themeChange: (state, action) => {
      state.Theme = action.payload;
    },
  },
});
export const { toggleMenu, closeMenu, themeChange } = appSlice.actions;
export default appSlice.reducer;
