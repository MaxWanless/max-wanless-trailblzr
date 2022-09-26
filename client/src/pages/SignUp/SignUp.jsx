import { useState, forwardRef } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "./SignUp.scss";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function SignUp() {
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [registerError, setRegisterError] = useState({
    error: false,
    message: "",
  });

  const handleCloseSnack = () => {
    setRegisterError({ error: false, message: "" });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let newUser = {
      firstName: event.target.firstname.value,
      lastName: event.target.lastname.value,
      email: event.target.email.value,
      userName: event.target.username.value,
      password: event.target.password.value,
    };
    axios
      .post(`${process.env.REACT_APP_API_URL}users/register`, newUser)
      .then((response) => setRegisterSuccess(true))
      .catch((error) =>
        setRegisterError({ error: true, message: error.response.data.message })
      );
  };

  if (registerSuccess) {
    return <Navigate to="/" />;
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
          <Typography variant="h2">Sign Up</Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="First Name"
              name="firstname"
              variant="outlined"
              required
              size="small"
              margin="normal"
              fullWidth
            />
            <TextField
              label="Last Name"
              name="lastname"
              variant="outlined"
              required
              size="small"
              margin="normal"
              fullWidth
            />
            <TextField
              label="Email"
              name="email"
              variant="outlined"
              required
              size="small"
              margin="normal"
              fullWidth
              autoComplete="email"
            />
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
            <Button type="submit" variant="contained" fullWidth>
              Sign Up
            </Button>
          </Box>
          <Typography variant="body2" marginTop={"1rem"}>
            Already a member? <Link to="/signin">Sign In</Link>
          </Typography>
        </CardContent>
      </Card>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={registerError.error}
        onClose={handleCloseSnack}
        autoHideDuration={3000}
      >
        <Alert
          severity="error"
          onClose={handleCloseSnack}
          sx={{ width: "100%" }}
        >
          {registerError.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default SignUp;
