import Grid from "@mui/material/Grid";
import ParkList from "../../ParkList/ParkList";
import ParkDetailsCard from "../../ParkDetailsCard/ParkDetailsCard";

const DesktopDashboard = ({ handleOpenParkDetails, parks, currentParkID }) => {
  return (
    <Grid container spacing={2} sx={{ flexGrow: 1, height: "100%" }}>
      <Grid item md={4} sx={{ height: "100%" }}>
        <ParkList
          parks={parks}
          handleChange={handleOpenParkDetails}
          currentParkID={currentParkID}
        />
      </Grid>
      <Grid item md={8} sx={{ height: "100%" }}>
        <ParkDetailsCard currentParkID={currentParkID} />
      </Grid>
    </Grid>
  );
};

export default DesktopDashboard;
