import { createSlice } from "@reduxjs/toolkit";
import Mark from "../models/note";

type Name = string;
type SliceState = { marks: Mark[] };

let markSlice = createSlice({
  name: "mark-slice",
  initialState: { marks: [] },
  reducers: {
    readMarks(
      state: SliceState,
      action: { payload: Mark[]; type: string }
    ): void {
      state.marks = action.payload;
    },
    addMark(state: SliceState, action: { payload: Mark; type: string }) {
      state.marks = [action.payload, ...state.marks];
    },
    deleteMark(state: SliceState, action: { payload: Mark; type: string }) {
      let data = state.marks.filter(
        (mark: Mark) => mark._id != action.payload._id
      );
      state.marks = data;
    },
  },
});

export const markReducer = markSlice.reducer;
export const markActions = markSlice.actions;
