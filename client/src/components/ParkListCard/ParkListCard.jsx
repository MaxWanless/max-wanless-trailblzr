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
          <Typography
            fontSize={"32px"}
            lineHeight={"40px"}
            fontWeight={"600"}
            color={"#697E59"}
            marginLeft={"1rem"}
          >
            Park Name
          </Typography>
          <Box
            sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}
          >
            <IconButton onClick={""}>
              <ArrowForwardIcon />
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
            <Typography
              fontSize={"11px"}
              lineHeight={"16px"}
              fontWeight={"600"}
            >
              CITY
            </Typography>
            <Typography
              fontSize={"13px"}
              lineHeight={"20px"}
              fontWeight={"400"}
            >
              Huntsville
            </Typography>
          </Box>
          <Box>
            <Typography
              fontSize={"11px"}
              lineHeight={"16px"}
              fontWeight={"600"}
            >
              TRAILS
            </Typography>
            <Typography
              fontSize={"13px"}
              lineHeight={"20px"}
              fontWeight={"400"}
            >
              3
            </Typography>
          </Box>
        </Box>
      </StyledCardContent>
    </Card>
  );
};

export default ParkListCard;
