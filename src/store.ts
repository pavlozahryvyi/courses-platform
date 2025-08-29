import { configureStore } from "@reduxjs/toolkit";
import activeVideoReducer from "./store/active-video.slice";
import authReducer from "./store/auth.slice";
import coursesSlice from "./store/courses.slice";
import { coursesApi } from "./api/courses.api";

export const store = configureStore({
  reducer: {
    activeVideo: activeVideoReducer,
    auth: authReducer,
    courses: coursesSlice,
    [coursesApi.reducerPath]: coursesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coursesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
