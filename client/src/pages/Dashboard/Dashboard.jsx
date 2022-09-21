import { useState, useEffect } from "react";
import { useTheme } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container";
import axios from "axios";
import MobileDashboard from "../../components/DashBoards/MobileDashboard/MobileDashboard";
import DesktopDashboard from "../../components/DashBoards/DesktopDashBoard/DesktopDashboard";
import "./Dashboard.scss";

function Dashboard() {
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down("md"));
  const [loading, setLoading] = useState(true);
  const [parks, setParks] = useState(true);
  const [displayParkDetails, setDisplayParkDetails] = useState(false);
  const [currentPark, setCurrentPark] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5050/parks")
      .then((response) => {
        setParks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleOpenParkDetails = (park) => {
    setDisplayParkDetails(true);
    setCurrentPark(park);
  };

  const handleCloseParkDetails = () => {
    setDisplayParkDetails(false);
    setCurrentPark({});
  };

  if (loading) {
    return <div>...Loading</div>;
  }

  return (
    <Container maxWidth="lg" sx={{ height: "100%" }}>
      {mobileView ? (
        <MobileDashboard
          handleOpenParkDetails={handleOpenParkDetails}
          handleCloseParkDetails={handleCloseParkDetails}
          displayParkDetails={displayParkDetails}
          parks={parks}
          currentPark={currentPark}
        />
      ) : (
        <DesktopDashboard
          handleOpenParkDetails={handleOpenParkDetails}
          handleCloseParkDetails={handleCloseParkDetails}
          displayParkDetails={displayParkDetails}
          parks={parks}
          currentPark={currentPark}
        />
      )}
    </Container>
  );
}

export default Dashboard;
