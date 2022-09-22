import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import FormControlLabel from "@mui/material/FormControlLabel";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import "./SignIn.scss";
import axios from "axios";

function SignIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (name) => (event) => {};

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let userInfo = {
      userName: event.target.username.value,
      password: event.target.password.value,
    };
    axios
      .post("http://localhost:5050/users/login", userInfo)
      .then((response) => {
        if (response.status === 200) {
          if (rememberMe) {
            localStorage.setItem(
              "authorization",
              `Bearer ${response.data.token}`
            );
          } else {
            sessionStorage.setItem(
              "authorization",
              `Bearer ${response.data.token}`
            );
          }
        }
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  if (isLoggedIn) {
    return <Navigate to="/dashboard" />;
  }

  if (
    sessionStorage.getItem("authorization") ||
    localStorage.getItem("authorization")
  ) {
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
              onChange={handleChange("userName")}
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
              onChange={handleChange("password")}
            />
            <FormControlLabel
              control={<Checkbox onClick={handleRememberMe} />}
              label="Remember Me"
            ></FormControlLabel>
            <Button variant="contained" fullWidth type="submit">
              Sign In
            </Button>
          </Box>
          <Typography variant="body2" marginTop={"1rem"}>
            New to TrailBLZR? <Link to="/signup">Sign up now.</Link>
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default SignIn;
