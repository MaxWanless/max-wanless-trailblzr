import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../hooks/userContext";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import axios from "axios";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import MobileDashboard from "../../components/DashBoards/MobileDashboard/MobileDashboard";
import DesktopDashboard from "../../components/DashBoards/DesktopDashBoard/DesktopDashboard";
import "./Favourites.scss";

function Favourites({ parks }) {
  const { user } = useContext(UserContext);
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down("md"));
  const [loading, setLoading] = useState(true);
  const [favourites, setFavourites] = useState([]);
  const [noFavourites, setNoFavourites] = useState(false);
  const [displayParkDetails, setDisplayParkDetails] = useState(false);
  const [currentParkID, setCurrentParkID] = useState("");

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/users/favourites/${user.id}`)
      .then((response) => {
        setFavourites(response.data);
        if (currentParkID === "" && response.data.length) {
          setCurrentParkID(
            parks.filter((park) => response.data.includes(park.id))[0].id
          );
        } else if (!response.data.length) {
          setNoFavourites(true);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [displayParkDetails, user.id, currentParkID, parks]);

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
  if (noFavourites) {
    return (
      <Card sx={{ margin: " 0 1rem" }}>
        <CardContent>
          No favourites back to
          <Link to="/Dashboard">Dashboard</Link>
        </CardContent>
      </Card>
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
          user={user}
        />
      ) : (
        <DesktopDashboard
          handleOpenParkDetails={handleOpenParkDetails}
          handleCloseParkDetails={handleCloseParkDetails}
          displayParkDetails={displayParkDetails}
          parks={parks.filter((park) => favourites.includes(park.id))}
          currentParkID={currentParkID}
          user={user}
        />
      )}
    </Container>
  );
}

export default Favourites;
