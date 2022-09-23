import { useState, useEffect } from "react";
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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ParkDetailsTabs from "./ParkDetailsTabs";

const ParkDetailsCard = ({ handleChange, currentParkID }) => {
  // const [openSnack, setOpenSnack] = useState(false);
  // const [navFavourites, setNavFavourites] = useState(false);
  const [currentPark, setCurrentPark] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  let token = "";
  let decodedUser = {};

  if (sessionStorage.getItem("authorization")) {
    token = sessionStorage.getItem("authorization").split(" ")[1];
    decodedUser = jwt_decode(token);
  } else if (localStorage.getItem("authorization")) {
    token = localStorage.getItem("authorization").split(" ")[1];
    decodedUser = jwt_decode(token);
  }

  if (currentParkID) {
    axios
      .get(`http://localhost:5050/parks/${currentParkID}`)
      .then((response) => {
        setCurrentPark(response.data);
        setIsLoading(false);
      });
  }

  // const handleOpen = () => {
  //   setOpenSnack(true);
  // };
  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }
  //   setOpenSnack(false);
  // }
  // const slideDown = (props) => {
  //   return <Slide {...props} direction="down" />;
  // };
  // const handleNavFavoutites = () => {
  //   setNavFavourites(true);
  // };
  // if (navFavourites) {
  //     return <Navigate to="/favourites" />;
  //   }

  const handleSubmitFavourite = () => {};

  if (isLoading) {
    return <div>...Loading</div>;
  }

  return (
    <>
      <Card sx={{ display: "flex", flexDirection: "column" }}>
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
              <Tooltip title="Favourite">
                <IconButton onClick={handleSubmitFavourite}>
                  <BookmarkBorderIcon />
                </IconButton>
              </Tooltip>
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
        <ParkDetailsTabs currentPark={currentPark} />
      </Card>
      {/* <Snackbar
        open={openSnack}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
        message="Added to favourites"
        TransitionComponent={slideDown}
        action={
          <Button color="primary" size="small" onClick={handleNavFavoutites}>
            Open
          </Button>
        }
      ></Snackbar> */}
    </>
  );
};

export default ParkDetailsCard;
