import Grid from "@mui/material/Grid";
import ParkList from "../../ParkList/ParkList";
import ParkDetailsCard from "../../ParkDetailsCard/DesktopParkDetailsCard/DesktopParkDetailsCard";

const DesktopDashboard = ({ handleOpenParkDetails, parks, currentParkID }) => {
  return (
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      <Grid item md={4}>
        <ParkList parks={parks} handleChange={handleOpenParkDetails} />
      </Grid>
      <Grid item md={8}>
        <ParkDetailsCard currentParkID={currentParkID} />
      </Grid>
    </Grid>
  );
};

export default DesktopDashboard;
