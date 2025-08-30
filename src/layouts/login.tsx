import { Container } from "@mui/material";
import { type FC } from "react";
import { Login } from "../features/login/login";

export const LoginLayout: FC = () => (
  <Container
    component="main"
    maxWidth="xs"
    sx={{
      display: "flex",
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Login />
  </Container>
);
