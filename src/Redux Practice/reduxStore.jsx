import { configureStore } from "@reduxjs/toolkit";
import sliceFile from "./reduxSlice";

export const reduxStore = configureStore({
  reducer: {
    slice: sliceFile,
  },
});
