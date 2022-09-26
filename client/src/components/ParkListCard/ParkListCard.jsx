import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import parkIcon from "../../assets/logos/parks-logo.png";
import "./ParkListCard.scss";

const StyledCardContent = styled(CardContent)(`
&:last-child {
  padding-bottom: 1rem;
}
`);

const ParkListCard = ({ park, handleChange }) => {
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
            <IconButton onClick={() => handleChange(park.id)}>
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
            <Typography variant="body2">{park.trailCount}</Typography>
          </Box>
        </Box>
      </StyledCardContent>
    </Card>
  );
};

export default ParkListCard;
