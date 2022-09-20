import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Account.scss";

function Account() {
  const [signOut, setSignOut] = useState(false);
  const [updateInfoSuccess, setUpdateInfoSuccess] = useState(false);
  let token = "";
  let decodedUser = {};

  if (!sessionStorage.getItem("authorization") && !signOut) {
    setSignOut(true);
  }
  if (sessionStorage.getItem("authorization")) {
    token = sessionStorage.getItem("authorization").split(" ")[1];
    decodedUser = jwt_decode(token);
  }

  const handleSignOut = () => {
    sessionStorage.removeItem("authorization");
    setSignOut(true);
  };

  const handleSubmit = () => {
    axios.put().then((response) => {
      setUpdateInfoSuccess(true);
    });
  };

  if (updateInfoSuccess) {
    return <Navigate to="/dashboard" />;
  }

  if (signOut) {
    return <Navigate to="/" />;
  }

  return (
    <Container maxWidth="xs">
      <Card sx={{ marginTop: "10vh" }}>
        <CardContent>
          <Typography variant="h2">Account</Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="First Name"
              name="firstname"
              variant="outlined"
              required
              size="small"
              margin="normal"
              defaultValue={decodedUser.firstName}
              fullWidth
            />
            <TextField
              label="Last Name"
              name="lastname"
              variant="outlined"
              required
              size="small"
              margin="normal"
              defaultValue={decodedUser.lastName}
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
              defaultValue={decodedUser.email}
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
              defaultValue={decodedUser.userName}
              autoComplete="username"
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ marginTop: "0.5rem" }}
            >
              Update information
            </Button>
          </Box>
          <Button
            variant="contained"
            fullWidth
            onClick={handleSignOut}
            sx={{ marginTop: "1rem" }}
          >
            Sign Out
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Account;
