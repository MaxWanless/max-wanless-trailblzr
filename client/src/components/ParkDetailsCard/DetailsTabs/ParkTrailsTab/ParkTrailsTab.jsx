import Box from "@mui/material/Box";
import TrailCard from "./TrailCard";

const ParkTrailsTab = ({ currentPark }) => {
  return (
    <Box sx={{ overflowY: "scroll" }}>
      {currentPark.trails?.map((trail) => (
        <TrailCard key={trail.name} trail={trail} />
      ))}
    </Box>
  );
};

export default ParkTrailsTab;
