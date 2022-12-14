import { useState, forwardRef } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "./SignIn.scss";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SignIn({ handleUserChange }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginError, setLoginError] = useState({ error: false, message: "" });

  const handleCloseSnack = () => {
    setLoginError({ error: false, message: "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let userInfo = {
      userName: event.target.username.value,
      password: event.target.password.value,
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}/users/login`, userInfo)
      .then((response) => {
        if (response.status === 200) {
          sessionStorage.setItem(
            "authorization",
            `Bearer ${response.data.token}`
          );
        }
        const token = sessionStorage.getItem("authorization").split(" ")[1];
        const decodedUser = jwt_decode(token);
        handleUserChange(decodedUser);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        setLoginError({ error: true, message: error.response.data.message });
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/Dashboard" />;
  }

  if (sessionStorage.getItem("authorization")) {
    setIsLoggedIn(true);
  }

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Card sx={{ marginTop: "10vh" }}>
        <CardContent>
          <Typography variant="h2">Sign In</Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="Username"
              name="username"
              variant="outlined"
              required
              size="small"
              margin="normal"
              fullWidth
              autoComplete="username"
            />
            <TextField
              label="Password"
              name="password"
              variant="outlined"
              required
              size="small"
              margin="normal"
              fullWidth
              type="password"
              autoComplete="current-password"
            />
            <Button
              variant="contained"
              fullWidth
              type="submit"
              sx={{ marginTop: "1rem" }}
            >
              Sign In
            </Button>
          </Box>
          <Typography variant="body2" marginTop={"1rem"}>
            New to TrailBLZR? <Link to="/signup">Sign up now.</Link>
          </Typography>
        </CardContent>
      </Card>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={loginError.error}
        onClose={handleCloseSnack}
        autoHideDuration={3000}
      >
        <Alert
          severity="error"
          onClose={handleCloseSnack}
          sx={{ width: "100%" }}
        >
          {loginError.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default SignIn;
