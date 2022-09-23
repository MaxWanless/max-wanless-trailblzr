import Box from "@mui/material/Box";
import TrailCard from "./TrailCard";

const ParkTrailsTab = ({ currentPark }) => {
  return (
    <Box>
      {currentPark.trails?.map((trail) => (
        <TrailCard trail={trail} />
      ))}
    </Box>
  );
};

export default ParkTrailsTab;
