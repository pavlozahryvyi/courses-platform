import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type ActiveVideoStateType = {
  videoUrl: string;
};

const initialState: ActiveVideoStateType = {
  videoUrl: "",
};

export const activeVideoSlice = createSlice({
  name: "active-video",
  initialState,
  reducers: {
    setActiveVideo: (state, action: PayloadAction<string>) => {
      state.videoUrl = action.payload;
    },
    clearActiveVideo: (state) => {
      state.videoUrl = "";
    },
  },
});

export const { setActiveVideo, clearActiveVideo } = activeVideoSlice.actions;

export default activeVideoSlice.reducer;
