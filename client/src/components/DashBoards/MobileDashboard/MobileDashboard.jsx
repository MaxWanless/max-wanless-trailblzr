import React from "react";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import ParkList from "../../ParkList/ParkList";
import ParkDetailsCard from "../../ParkDetailsCard/ParkDetailsCard";

const MobileDashboard = ({
  handleOpenParkDetails,
  handleCloseParkDetails,
  displayParkDetails,
  parks,
  currentParkID,
}) => {
  const mobileRef = React.useRef(null);
  return (
    <Box ref={mobileRef} sx={{ position: "relative", height: "100%" }}>
      <Slide direction="right" in={!displayParkDetails}>
        <Box height={"100%"}>
          <ParkList parks={parks} handleChange={handleOpenParkDetails} />
        </Box>
      </Slide>
      <Slide
        direction="left"
        in={displayParkDetails}
        container={mobileRef.current}
      >
        <Box
          sx={{
            position: "absolute",
            top: "0px",
            width: "100%",
            height: "100%",
          }}
        >
          <ParkDetailsCard
            handleChange={handleCloseParkDetails}
            currentParkID={currentParkID}
          />
        </Box>
      </Slide>
    </Box>
  );
};

export default MobileDashboard;
