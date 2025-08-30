import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { AlertColor } from "@mui/material";

export type NotificationStateType = {
  message: string;
  severity: AlertColor | null;
};

const initialState: NotificationStateType = {
  message: "",
  severity: null,
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification: (state, action: PayloadAction<NotificationStateType>) => {
      state.message = action.payload.message;
      state.severity = action.payload.severity;
    },
    resetNotification: (state) => {
      state.message = "";
      state.severity = null;
    },
  },
});

export const { setNotification, resetNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
