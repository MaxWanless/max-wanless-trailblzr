import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import MobileDashboard from "../../components/DashBoards/MobileDashboard/MobileDashboard";
import DesktopDashboard from "../../components/DashBoards/DesktopDashBoard/DesktopDashboard";
import "./Favourites.scss";

function Favourites({ parks }) {
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down("md"));
  const [loading, setLoading] = useState(true);
  const [favourites, setFavourites] = useState([]);
  const [displayParkDetails, setDisplayParkDetails] = useState(false);
  const [currentParkID, setCurrentParkID] = useState(
    "e0d9a9f6-e65f-4dfa-ad5f-83e394cc1bca"
  );

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
      .get(`http://localhost:5050/users/favourites/${decodedUser.id}`)
      .then((response) => {
        setFavourites(response.data);
        setLoading(false);
      })
      .catch((error) => {});
  }, [displayParkDetails]);

  const handleOpenParkDetails = (parkID) => {
    setDisplayParkDetails(true);
    setCurrentParkID(parkID);
  };

  const handleCloseParkDetails = () => {
    setDisplayParkDetails(false);
  };

  if (loading) {
    return <div>...Loading</div>;
  }

  if (favourites.length === 0) {
    return (
      <Container>
        <Card>
          <CardContent>
            <Typography>
              No Favourites return to <Link to="/Dashboard">Dashboard</Link>
            </Typography>
          </CardContent>
        </Card>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ height: "100%", overflow: "hidden" }}>
      {mobileView ? (
        <MobileDashboard
          handleOpenParkDetails={handleOpenParkDetails}
          handleCloseParkDetails={handleCloseParkDetails}
          displayParkDetails={displayParkDetails}
          parks={parks.filter((park) => favourites.includes(park.id))}
          currentParkID={currentParkID}
        />
      ) : (
        <DesktopDashboard
          handleOpenParkDetails={handleOpenParkDetails}
          handleCloseParkDetails={handleCloseParkDetails}
          displayParkDetails={displayParkDetails}
          parks={parks.filter((park) => favourites.includes(park.id))}
          currentParkID={currentParkID}
        />
      )}
    </Container>
  );
}

export default Favourites;
