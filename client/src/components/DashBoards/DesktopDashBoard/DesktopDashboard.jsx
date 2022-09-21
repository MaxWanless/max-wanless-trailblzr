import React from "react";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import Grid from "@mui/material/Grid";
import ParkList from "../../ParkList/ParkList";
import ParkDetailsCard from "../../ParkDetailsCard/ParkDetailsCard";

const DesktopDashboard = ({
  handleChange,
  displayParkDetails,
  parks,
  currentPark,
}) => {
  const slideRef = React.useRef(null);
  return (
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid item md={6}>
        <ParkList parks={parks} handleChange={handleChange} />
      </Grid>
      <Grid item md={6} ref={slideRef}>
        <ParkDetailsCard
          handleChange={handleChange}
          currentPark={currentPark}
        />
      </Grid>
    </Grid>
  );
};

export default DesktopDashboard;
