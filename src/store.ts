import { configureStore } from "@reduxjs/toolkit";
import activeVideoReducer from "./store/active-video.slice";
import authReducer from "./store/auth.slice";

export const store = configureStore({
  reducer: {
    activeVideo: activeVideoReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
