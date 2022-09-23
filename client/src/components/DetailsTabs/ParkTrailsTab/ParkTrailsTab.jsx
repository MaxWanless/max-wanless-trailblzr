import Box from "@mui/material/Box";
import TrailCard from "./TrailCard";

const ParkTrailsTab = ({ currentPark }) => {
  return (
    <Box>
      <TrailCard trail={currentPark.trails[0]} />
    </Box>
  );
};

export default ParkTrailsTab;
