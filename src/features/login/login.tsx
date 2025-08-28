import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useState, type FC } from "react";
import { USER_EMAIL_KEY, USER_PASSWORD_KEY } from "../../constants";
import { validateEmail, validatePassword } from "./validators";

export const Login: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const emailError = validateEmail(email);

    if (emailError) {
      setEmailError(emailError);
      return;
    }

    const passwordError = validatePassword(password);

    if (passwordError) {
      setPasswordError(passwordError);
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);

    localStorage.setItem(USER_EMAIL_KEY, email);
    localStorage.setItem(USER_PASSWORD_KEY, password);
  };

  return (
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
      <Paper elevation={3} sx={{ p: 4, width: "100%", borderRadius: 2 }}>
        <Typography component="h1" variant="h5" align="center" gutterBottom>
          Sign In
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => {
              setEmail(e.target.value);
              if (emailError) {
                setEmailError(validateEmail(e.target.value));
              }
            }}
            error={Boolean(emailError)}
            helperText={emailError}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => {
              setPassword(e.target.value);
              if (passwordError) {
                setPasswordError(validatePassword(e.target.value));
              }
            }}
            error={Boolean(passwordError)}
            helperText={passwordError}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            disabled={!email || !password}
          >
            Sign In
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};
