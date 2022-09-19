import FacebookIcon from "@mui/icons-material/Facebook";
import { Typography, Box, IconButton } from "@mui/material";
import "./ParkDetailsTab.scss";

const ParkDetailsTab = ({ park }) => {
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
          <Typography fontSize={"11px"} lineHeight={"16px"} fontWeight={"600"}>
            CITY
          </Typography>
          <Typography fontSize={"13px"} lineHeight={"20px"} fontWeight={"400"}>
            Huntsville
          </Typography>
        </Box>
        <Box>
          <Typography fontSize={"11px"} lineHeight={"16px"} fontWeight={"600"}>
            ESTABLISHED
          </Typography>
          <Typography fontSize={"13px"} lineHeight={"20px"} fontWeight={"400"}>
            1945
          </Typography>
        </Box>
        <Box>
          <Typography fontSize={"11px"} lineHeight={"16px"} fontWeight={"600"}>
            PHONE
          </Typography>
          <Typography fontSize={"13px"} lineHeight={"20px"} fontWeight={"400"}>
            1234567890
          </Typography>
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
          <Typography fontSize={"11px"} lineHeight={"16px"} fontWeight={"600"}>
            ADDRESS
          </Typography>
          <Typography fontSize={"13px"} lineHeight={"20px"} fontWeight={"400"}>
            ~~~~~~~~~~~~~~
          </Typography>
        </Box>
        <Box sx={{ mr: "1rem" }}>
          <Typography fontSize={"11px"} lineHeight={"16px"} fontWeight={"600"}>
            SOCIAL
          </Typography>
          <IconButton size="small">
            <FacebookIcon fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ParkDetailsTab;
