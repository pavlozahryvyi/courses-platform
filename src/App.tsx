import { useEffect, type FC } from "react";
import { CssBaseline } from "@mui/material";
import { USER_EMAIL_KEY, USER_PASSWORD_KEY } from "./constants";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store";
import { setUser } from "./store/auth.slice";
import { Notification } from "./features/notification/notification";
import { CourseList } from "./layouts/course-list";
import { LoginLayout } from "./layouts/login";

export const App: FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  const userEmail = localStorage.getItem(USER_EMAIL_KEY);
  const userPassword = localStorage.getItem(USER_PASSWORD_KEY);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userEmail && userPassword) {
      dispatch(setUser(userEmail));
    }
  });

  return (
    <>
      <CssBaseline />
      {user ? <CourseList /> : <LoginLayout />}
      <Notification />
    </>
  );
};
