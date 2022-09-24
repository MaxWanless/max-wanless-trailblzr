import { useState } from "react";
import { useTheme } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container";
import MobileDashboard from "../../components/DashBoards/MobileDashboard/MobileDashboard";
import DesktopDashboard from "../../components/DashBoards/DesktopDashBoard/DesktopDashboard";
import "./Dashboard.scss";

function Dashboard({ parks }) {
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down("md"));
  const [displayParkDetails, setDisplayParkDetails] = useState(false);
  const [currentParkID, setCurrentParkID] = useState(
    "5ac78553-299d-419e-81dd-efa6a7f31999"
  );

  const handleOpenParkDetails = (parkID) => {
    setDisplayParkDetails(true);
    setCurrentParkID(parkID);
  };

  const handleCloseParkDetails = () => {
    setDisplayParkDetails(false);
  };

  return (
    <Container maxWidth="lg" sx={{ height: "100%" }}>
      {mobileView ? (
        <MobileDashboard
          handleOpenParkDetails={handleOpenParkDetails}
          handleCloseParkDetails={handleCloseParkDetails}
          displayParkDetails={displayParkDetails}
          parks={parks}
          currentParkID={currentParkID}
        />
      ) : (
        <DesktopDashboard
          handleOpenParkDetails={handleOpenParkDetails}
          handleCloseParkDetails={handleCloseParkDetails}
          displayParkDetails={displayParkDetails}
          parks={parks}
          currentParkID={currentParkID}
        />
      )}
    </Container>
  );
}

export default Dashboard;
