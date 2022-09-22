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
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import "./Account.scss";

const ModalStyle = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  p: 4,
  width: "343px",
  padding: "1rem",
};

function Account() {
  const [signOut, setSignOut] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [updateInfoSuccess, setUpdateInfoSuccess] = useState(false);
  const [enableEdit, setEnableEdit] = useState(true);
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
    localStorage.removeItem("authorization");
    setEnableEdit(true);
    setSignOut(true);
  };

  const handleOpenDeleteModalAccount = () => {
    setOpenDeleteModal(true);
  };

  const handleCloseModal = () => {
    setOpenDeleteModal(false);
  };

  const handleDeleteUser = () => {
    console.log(decodedUser);
    axios
      .delete(`http://localhost:5050/users/${decodedUser.id}`)
      .then((response) => {
        sessionStorage.removeItem("authorization");
        setSignOut(true);
      })
      .catch((error) => {});
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put().then((response) => {
      setUpdateInfoSuccess(true);
    });
  };

  const handleEditUser = () => {
    setEnableEdit(!enableEdit);
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
          <Box
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <Typography variant="h2" sx={{ flexGrow: 1 }}>
              Account
            </Typography>

            <IconButton
              sx={{ justifySelf: "flex-end" }}
              onClick={handleEditUser}
            >
              <EditIcon />
            </IconButton>
          </Box>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              label="First Name"
              name="firstname"
              variant="outlined"
              required
              size="small"
              margin="normal"
              defaultValue={decodedUser.firstName}
              disabled={enableEdit}
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
              disabled={enableEdit}
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
              disabled={enableEdit}
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
              disabled={enableEdit}
              autoComplete="username"
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              disabled={enableEdit}
              sx={{ marginTop: "0.5rem" }}
            >
              Update information
            </Button>
          </Box>
          <Button
            variant="contained"
            fullWidth
            onClick={handleOpenDeleteModalAccount}
            disabled={enableEdit}
            sx={{ marginTop: "1rem" }}
          >
            delete account
          </Button>
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
      <Modal
        open={openDeleteModal}
        onClose={setOpenDeleteModal}
        aria-labelledby=""
        aria-describedby=""
      >
        <Card sx={ModalStyle}>
          <CardContent>
            <Typography variant="h2" marginBottom={"1rem"}>
              Delete Account?
            </Typography>
            <Typography variant="body1">
              Please confirm that you’d like to delete the Washington from the
              list of warehouses. You won’t be able to undo this action.
            </Typography>
          </CardContent>
          <Button variant="text" onClick={handleCloseModal} fullWidth>
            Cancel
          </Button>
          <Button
            variant="text"
            onClick={handleDeleteUser}
            fullWidth
            color="error"
          >
            Delete
          </Button>
        </Card>
      </Modal>
    </Container>
  );
}

export default Account;
