import { useState } from "react";
import { Navigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Avatar,
  styled,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import parkIcon from "../../assets/logos/parks-logo.png";
import "./ParkListCard.scss";

const StyledCardContent = styled(CardContent)(`
&:last-child {
  padding-bottom: 1rem;
}
`);

const ParkListCard = ({ park, handleChange }) => {
  const [navParkDetails, setNavParkDetails] = useState(false);
  const handleNavigateParkDeta = () => {
    setNavParkDetails(true);
  };

  if (navParkDetails) {
    return <Navigate to={`/dashboard/${park.id}`} />;
  }

  return (
    <Card sx={{ marginBottom: "0.5rem" }}>
      <StyledCardContent>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar alt="Parks logo" variant="square" src={parkIcon} />
          <Typography variant="h2" color="primary" marginLeft={"1rem"}>
            {park.name}
          </Typography>
          <Box
            sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}
          >
            <IconButton onClick={() => handleChange(park)}>
              <ArrowForwardIcon color="primary" />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: "4px",
          }}
        >
          <Box sx={{ mr: "1rem" }}>
            <Typography variant="h4">CITY</Typography>
            <Typography variant="body2">{park.city}</Typography>
          </Box>
          <Box>
            <Typography variant="h4">TRAILS</Typography>
            <Typography variant="body2">{park.NumberOfTrails}</Typography>
          </Box>
        </Box>
      </StyledCardContent>
    </Card>
  );
};

export default ParkListCard;
