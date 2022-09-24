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
import parksIcon from "../../../assets/logos/parks-logo.png";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ParkDetailsTabs from "./ParkDetailsTabs";
import Map from "../../Map/Map";

const ParkDetailsCard = ({ currentParkID }) => {
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

  useEffect(() => {
    axios
      .get(`http://localhost:5050/parks/${currentParkID}`)
      .then((response) => {
        setCurrentPark(response.data);
        setIsLoading(false);
      });
  }, [currentParkID]);

  const handleSubmitFavourite = () => {};

  if (isLoading) {
    return <div>...Loading</div>;
  }

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <CardContent>
        <Box sx={{ display: "flex", alignItems: "center" }}>
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
            <Typography variant="body2">{currentPark.trails.length}</Typography>
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
  );
};

export default ParkDetailsCard;
