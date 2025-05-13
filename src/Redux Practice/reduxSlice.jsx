import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  inputValue: 0,
};

const reduxSlice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    decrement: (state) => {
      state.value -= 1;
    },

    getValue: (state, action) => {
      state.inputValue = Number(action.payload);
    },

    incrementByValue: (state) => {
      state.value += state.inputValue;
    },
  },
});

export const { increment, decrement, incrementByValue, getValue } =
  reduxSlice.actions;
export default reduxSlice.reducer;
