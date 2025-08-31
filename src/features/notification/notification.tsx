import { Alert, Snackbar } from "@mui/material";
import type { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store";
import { resetNotification } from "../../store/notification.slice";

export const Notification: FC = () => {
  const dispatch = useDispatch();

  const { message, severity } = useSelector(
    (state: RootState) => state.notification
  );

  if (!message || !severity) return null;

  const handleClose = () => {
    dispatch(resetNotification());
  };

  return (
    <Snackbar
      open={!!message}
      autoHideDuration={5000}
      onClose={handleClose}
      message={message}
    >
      <Alert
        onClose={handleClose}
        severity={severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
