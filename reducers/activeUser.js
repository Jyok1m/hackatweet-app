// Imports:
import { createSlice } from "@reduxjs/toolkit";

// Set up the initial state:
const initialState = { value: { token: null, username: null } };

// Configure the reducer module:
export const acitveUserSlice = createSlice({
  name: "activeUser",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value.token = action.payload.token;
      state.value.username = action.payload.username;
    },
    logout: (state) => {
      state.value.token = null;
      state.value.username = null;
    },
  },
});

// Export the reducer:
export const { login, logout } = acitveUserSlice.actions;
export default acitveUserSlice.reducer;
