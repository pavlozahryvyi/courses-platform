import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { CourseEntity as CourseEntity } from "../api/courses.model";

export type CoursesStateType = {
  orderedVideos: Array<CourseEntity>;
};

const initialState: CoursesStateType = {
  orderedVideos: [],
};

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    addCourse: (state, action: PayloadAction<CourseEntity>) => {
      state.orderedVideos.push(action.payload);
    },
  },
});

export const { addCourse } = coursesSlice.actions;

export default coursesSlice.reducer;
