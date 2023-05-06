import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  greeting: []
};

const greetingSlice = createSlice({
  name: "greeting",
  initialState,
  reducers: {
    setGreetings(state, action) {
      state.greeting = action.payload;
    }
  }
});

export const { setGreetings } = greetingSlice.actions;

export default greetingSlice.reducer;
