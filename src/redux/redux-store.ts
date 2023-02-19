import { configureStore } from "@reduxjs/toolkit";
import { Reducer } from "react";
import { markReducer } from "./mark-slice";

// type reducers = { marks: Reducer<string> };
export const store = configureStore({
  reducer: {
    marks: markReducer,
  },
});
