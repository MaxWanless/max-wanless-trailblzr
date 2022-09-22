import { useState } from "react";
import { useTheme } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container";
import axios from "axios";
import MobileDashboard from "../../components/DashBoards/MobileDashboard/MobileDashboard";
import DesktopDashboard from "../../components/DashBoards/DesktopDashBoard/DesktopDashboard";
import "./Dashboard.scss";

function Dashboard({ parks }) {
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down("md"));
  const [displayParkDetails, setDisplayParkDetails] = useState(false);
  const [currentPark, setCurrentPark] = useState({});

  const handleOpenParkDetails = (park) => {
    setDisplayParkDetails(true);
    setCurrentPark(park);
  };

  const handleCloseParkDetails = () => {
    setDisplayParkDetails(false);
    setCurrentPark({});
  };

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
