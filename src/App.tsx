import type { FC } from "react";
import { Login } from "./features/login/login";
import { CssBaseline } from "@mui/material";
import { USER_EMAIL_KEY, USER_PASSWORD_KEY } from "./constants";
import { CoursesList } from "./features/courses-list/courses-list";

export const App: FC = () => {
  const userEmail = localStorage.getItem(USER_EMAIL_KEY);
  const userPassword = localStorage.getItem(USER_PASSWORD_KEY);

  return (
    <>
      <CssBaseline />
      {userEmail && userPassword ? <CoursesList /> : <Login />}
    </>
  );
};
