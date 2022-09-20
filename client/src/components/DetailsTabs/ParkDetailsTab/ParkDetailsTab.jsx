import FacebookIcon from "@mui/icons-material/Facebook";
import { Typography, Box, IconButton } from "@mui/material";
import "./ParkDetailsTab.scss";

const ParkDetailsTab = ({ currentPark }) => {
  return (
    <Box>
      {/* Details Top Row */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: "4px",
        }}
      >
        <Box sx={{ mr: "1rem" }}>
          <Typography variant="h4">CITY</Typography>
          <Typography variant="body2">{currentPark.city}</Typography>
        </Box>
        <Box>
          <Typography variant="h4">ESTABLISHED</Typography>
          <Typography variant="body2">{currentPark.established}</Typography>
        </Box>
        <Box>
          <Typography variant="h4">PHONE</Typography>
          <Typography variant="body2">{currentPark.phone}</Typography>
        </Box>
      </Box>
      {/* Details Bottom Row */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mt: "22px",
        }}
      >
        <Box sx={{ mr: "1rem", width: "150px" }}>
          <Typography variant="h4">ADDRESS</Typography>
          <Typography variant="body2">{currentPark.address}</Typography>
        </Box>
        <Box sx={{ mr: "1rem" }}>
          <Typography variant="h4">SOCIAL</Typography>
          <IconButton size="small" type="a" href={currentPark.social}>
            <FacebookIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ParkDetailsTab;
