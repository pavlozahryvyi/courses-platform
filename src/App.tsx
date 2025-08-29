import { useEffect, type FC } from "react";
import { Login } from "./features/login/login";
import { CssBaseline } from "@mui/material";
import { USER_EMAIL_KEY, USER_PASSWORD_KEY } from "./constants";
import { CoursesList } from "./features/courses-list/courses-list";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "./store";
import { setUser } from "./store/auth.slice";

const userEmail = localStorage.getItem(USER_EMAIL_KEY);
const userPassword = localStorage.getItem(USER_PASSWORD_KEY);

export const App: FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (userEmail && userPassword) {
      dispatch(setUser(userEmail));
    }
  });

  return (
    <>
      <CssBaseline />
      {user ? <CoursesList /> : <Login />}
    </>
  );
};
