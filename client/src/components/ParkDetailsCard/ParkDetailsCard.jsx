import { useState, useEffect, forwardRef } from "react";
import { Navigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import parksIcon from "../../assets/logos/parks-logo.png";
import Map from "../Map/Map";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import ParkDetailsTabs from "./ParkDetailsTabs";

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ParkDetailsCard = ({ handleChange, currentParkID }) => {
  const [currentPark, setCurrentPark] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [favourited, setFavourites] = useState(false);
  const [navFavourites, setNavFavourites] = useState(false);
  const [favSuccess, setFavSuccess] = useState({ open: false, message: "" });
  const [favError, setFavError] = useState({ error: false, message: "" });
  let token = "";
  let decodedUser = {};

  if (sessionStorage.getItem("authorization")) {
    token = sessionStorage.getItem("authorization").split(" ")[1];
    decodedUser = jwt_decode(token);
  } else if (localStorage.getItem("authorization")) {
    token = localStorage.getItem("authorization").split(" ")[1];
    decodedUser = jwt_decode(token);
  }

  useEffect(() => {
    axios
      .get(`http://localhost:5050/parks/${currentParkID}`)
      .then((response) => {
        setCurrentPark(response.data);
        setIsLoading(false);
      });
  }, [currentParkID]);

  useEffect(() => {
    if (decodedUser.id) {
      axios
        .get(`http://localhost:5050/users/favourites/${decodedUser.id}`)
        .then((response) => {
          setFavourites(response.data.includes(currentParkID));
        });
    }
  }, [favourited, currentParkID, decodedUser.id]);

  const handleSubmitFavourite = () => {
    if (favourited) {
      axios
        .delete(`http://localhost:5050/users/favourites/${decodedUser.id}`, {
          data: {
            parkID: currentParkID,
          },
        })
        .then((response) => {
          setFavourites(false);
          setFavSuccess({ open: true, message: "Removed from favourites" });
        })
        .catch((error) => {
          setFavError({ error: true, message: error.response.data.message });
        });
    } else {
      axios
        .post(`http://localhost:5050/users/favourites/${decodedUser.id}`, {
          parkID: currentParkID,
        })
        .then((response) => {
          setFavourites(true);
          setFavSuccess({ open: true, message: "Added to favourites" });
        })
        .catch((error) => {
          setFavError({ error: true, message: error.response.data.message });
        });
    }
  };

  const handleCloseSnack = () => {
    setFavSuccess({ open: false, message: "" });
    setFavError({ error: false, message: "" });
  };

  const handleNavFavourites = () => {
    setNavFavourites(true);
  };

  if (navFavourites) {
    return <Navigate to="/Favourites" />;
  }

  if (isLoading) {
    return <div>...Loading</div>;
  }

  return (
    <>
      <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={handleChange}>
              <ArrowBackIcon />
            </IconButton>
            <Avatar alt="Parks logo" variant="square" src={parksIcon} />
            <Typography variant="h2" color="primary" marginLeft={"1rem"}>
              {currentPark.name}
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}
            >
              {decodedUser.firstName ? (
                <Tooltip title="Favourite">
                  <IconButton onClick={handleSubmitFavourite}>
                    {favourited ? <BookmarkIcon /> : <BookmarkBorderIcon />}
                  </IconButton>
                </Tooltip>
              ) : null}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mt: "4px",
            }}
          >
            <Box sx={{ mr: "1rem" }}>
              <Typography variant="h4">CITY</Typography>
              <Typography variant="body2">{currentPark.city}</Typography>
            </Box>
            <Box>
              <Typography variant="h4">TRAILS</Typography>
              <Typography variant="body2">
                {currentPark.trails.length}
              </Typography>
            </Box>
          </Box>
        </CardContent>
        <Divider />
        <CardContent sx={{ height: "50%" }}>
          <Map park={currentPark} />
        </CardContent>
        <Divider />
        <CardContent sx={{ height: "50%" }}>
          <ParkDetailsTabs currentPark={currentPark} />
        </CardContent>
      </Card>
      <Snackbar
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={favError.error}
        onClose={handleCloseSnack}
        autoHideDuration={3000}
      >
        <Alert
          severity="error"
          onClose={handleCloseSnack}
          sx={{ width: "100%" }}
        >
          {favError.message}
        </Alert>
      </Snackbar>
      <Snackbar
        open={favSuccess.open}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        autoHideDuration={3000}
        onClose={handleCloseSnack}
        message={favSuccess.message}
        action={
          <Button color="primary" onClick={handleNavFavourites}>
            open
          </Button>
        }
      />
    </>
  );
};

export default ParkDetailsCard;
