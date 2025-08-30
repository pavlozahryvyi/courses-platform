import { combineReducers, configureStore, type Action } from "@reduxjs/toolkit";
import activeVideoReducer from "./store/active-video.slice";
import authReducer, { clearUser } from "./store/auth.slice";
import coursesSlice from "./store/courses.slice";
import { coursesApi } from "./api/courses.api";
import notificationSlice from "./store/notification.slice";

const appReducer = combineReducers({
  activeVideo: activeVideoReducer,
  auth: authReducer,
  courses: coursesSlice,
  notification: notificationSlice,
  [coursesApi.reducerPath]: coursesApi.reducer,
});

export type AppState = ReturnType<typeof appReducer>;

const resettableRootReducer = (state: AppState | undefined, action: Action) => {
  if (action.type === clearUser.type) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export const store = configureStore({
  reducer: resettableRootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(coursesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
