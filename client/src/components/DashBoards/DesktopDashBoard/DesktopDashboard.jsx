import React from "react";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import Grid from "@mui/material/Grid";
import ParkList from "../../ParkList/ParkList";
import ParkDetailsCard from "../../ParkDetailsCard/ParkDetailsCard";
import Map from "../../Map/Map";

const DesktopDashboard = ({
  handleOpenParkDetails,
  handleCloseParkDetails,
  displayParkDetails,
  parks,
  currentPark,
}) => {
  const slideRef = React.useRef(null);
  return (
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid item md={6}>
        <ParkList parks={parks} handleChange={handleOpenParkDetails} />
      </Grid>
      <Grid
        item
        md={6}
        ref={slideRef}
        sx={{ overflow: "hidden", position: "relative" }}
      >
        <Slide
          direction="left"
          in={!displayParkDetails}
          container={slideRef.current}
        >
          <Box sx={{ overflow: "hidden", height: "100%" }}>
            <Map parks={parks} />
          </Box>
        </Slide>

        <Slide
          direction="right"
          in={displayParkDetails}
          container={slideRef.current}
        >
          <Box
            sx={{
              overflow: "hidden",
            }}
          >
            <ParkDetailsCard
              handleChange={handleCloseParkDetails}
              currentPark={currentPark}
            />
          </Box>
        </Slide>
      </Grid>
    </Grid>
  );
};

export default DesktopDashboard;
