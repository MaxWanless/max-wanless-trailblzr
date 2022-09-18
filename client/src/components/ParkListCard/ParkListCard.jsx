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

const ParkListCard = () => {
  return (
    <Card sx={{ marginBottom: "0.5rem" }}>
      <StyledCardContent>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar alt="Parks logo" variant="square" src={parkIcon} />
          <Typography variant="h2" color="primary" marginLeft={"1rem"}>
            Park Name
          </Typography>
          <Box
            sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}
          >
            <IconButton onClick={""}>
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
            <Typography variant="body2">Huntsville</Typography>
          </Box>
          <Box>
            <Typography variant="h4">TRAILS</Typography>
            <Typography variant="body2">3</Typography>
          </Box>
        </Box>
      </StyledCardContent>
    </Card>
  );
};

export default ParkListCard;
