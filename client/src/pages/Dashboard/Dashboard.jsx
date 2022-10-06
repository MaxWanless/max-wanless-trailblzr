import { useState, useContext } from "react";
import { useTheme } from "@emotion/react";
import { UserContext } from "../../hooks/userContext";
import { ParksContext } from "../../hooks/parksContext";
import useMediaQuery from "@mui/material/useMediaQuery";
import Container from "@mui/material/Container";
import Skeleton from "@mui/material/Skeleton";
import MobileDashboard from "../../components/DashBoards/MobileDashboard/MobileDashboard";
import DesktopDashboard from "../../components/DashBoards/DesktopDashBoard/DesktopDashboard";

import "./Dashboard.scss";

function Dashboard() {
  const { parks, loading } = useContext(ParksContext);
  const { user } = useContext(UserContext);
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down("md"));
  const [displayParkDetails, setDisplayParkDetails] = useState(false);
  const [currentParkID, setCurrentParkID] = useState(
    "e0d9a9f6-e65f-4dfa-ad5f-83e394cc1bca"
  );

  const handleOpenParkDetails = (parkID) => {
    setDisplayParkDetails(true);
    setCurrentParkID(parkID);
  };

  const handleCloseParkDetails = () => {
    setDisplayParkDetails(false);
  };

  return loading ? (
    <Skeleton variant="rounded" height={"100%"} width={"100%"} />
  ) : (
    <Container maxWidth="lg" sx={{ height: "100%", overflow: "hidden" }}>
      {mobileView ? (
        <MobileDashboard
          handleOpenParkDetails={handleOpenParkDetails}
          handleCloseParkDetails={handleCloseParkDetails}
          displayParkDetails={displayParkDetails}
          parks={parks}
          currentParkID={currentParkID}
          user={user}
        />
      ) : (
        <DesktopDashboard
          handleOpenParkDetails={handleOpenParkDetails}
          handleCloseParkDetails={handleCloseParkDetails}
          displayParkDetails={displayParkDetails}
          parks={parks}
          currentParkID={currentParkID}
          user={user}
        />
      )}
    </Container>
  );
}

export default Dashboard;
