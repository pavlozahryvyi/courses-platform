import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type AuthStateType = {
  user: string;
};

const initialState: AuthStateType = {
  user: "",
};

export const authSlice = createSlice({
  name: "active-video",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = "";
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
