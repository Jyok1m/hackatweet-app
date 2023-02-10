//# Imports:
import { createSlice } from "@reduxjs/toolkit";

//# Set up the initial state:
const initialState = { value: false };

//# Configure the reducer module:
export const tweetSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    changeState: (state) => {
      state.value = !state.value;
    },
  },
});

// Export the reducer:
export const { changeState } = tweetSlice.actions;
export default tweetSlice.reducer;
