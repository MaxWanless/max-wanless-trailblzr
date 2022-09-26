import { useState, useEffect } from "react";
import { useTheme } from "@emotion/react";
import axios from "axios";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container";
import MobileDashboard from "../../components/DashBoards/MobileDashboard/MobileDashboard";
import DesktopDashboard from "../../components/DashBoards/DesktopDashBoard/DesktopDashboard";
import "./Favourites.scss";

function Favourites({ parks, user }) {
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down("md"));
  const [loading, setLoading] = useState(true);
  const [favourites, setFavourites] = useState([]);
  const [displayParkDetails, setDisplayParkDetails] = useState(false);
  const [currentParkID, setCurrentParkID] = useState(
    "e0d9a9f6-e65f-4dfa-ad5f-83e394cc1bca"
  );

  useEffect(() => {
    axios
      .get(`http://localhost:5050/users/favourites/${user.id}`)
      .then((response) => {
        setFavourites(response.data);
        setLoading(false);
      })
      .catch((error) => {});
  }, [displayParkDetails, user.id]);

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
