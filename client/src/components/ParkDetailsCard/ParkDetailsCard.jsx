import { useState, useEffect } from "react";
import { useTheme } from "@emotion/react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Snackbar from "@mui/material/Snackbar";
import Button from "@mui/material/Button";
import Slide from "@mui/material/Slide";
import Skeleton from "@mui/material/Skeleton";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import parksIcon from "../../assets/logos/parks-logo.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
import ParkDetailsTab from "../DetailsTabs/ParkDetailsTab/ParkDetailsTab";
import ParkHighlightsTab from "../DetailsTabs/ParkHighlightsTab/ParkHighlightsTab";
import ParkTrailsTab from "../DetailsTabs/ParkTrailsTab/ParkTrailsTab";
import "./ParkDetailsCard.scss";

const ParkDetailsCard = ({ handleChange, currentParkID }) => {
  const theme = useTheme();
  // const [openSnack, setOpenSnack] = useState(false);
  const [currentPark, setCurrentPark] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("0");
  const [navFavourites, setNavFavourites] = useState(false);

  if (currentParkID) {
    axios
      .get(`http://localhost:5050/parks/${currentParkID}`)
      .then((response) => {
        setCurrentPark(response.data);
        setIsLoading(false);
      });
  }

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // const handleOpen = () => {
  //   setOpenSnack(true);
  // };

  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }
  //   setOpenSnack(false);
  // };

  // const slideDown = (props) => {
  //   return <Slide {...props} direction="down" />;
  // };
  // const handleNavFavoutites = () => {
  //   setNavFavourites(true);
  // };

  const handleSubmitFavourite = () => {};

  if (navFavourites) {
    return <Navigate to="/favourites" />;
  }

  if (isLoading) {
    return <div>...Loading</div>;
  }

  return (
    <>
      <Card
        className="ParkDetails"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton onClick={handleChange}>
              <ArrowBackIcon />
            </IconButton>
            <Avatar alt="Parks logo" variant="square" src={parksIcon} />
            <Typography variant="h2" color="primary" marginLeft={"1rem"}>
              {currentPark.name}
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}
            >
              <Tooltip title="Favourite">
                <IconButton onClick={handleSubmitFavourite}>
                  <BookmarkBorderIcon />
                </IconButton>
              </Tooltip>
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
              <Typography variant="body2">{currentPark.city}</Typography>
            </Box>
            <Box>
              <Typography variant="h4">TRAILS</Typography>
              <Typography variant="body2">
                {currentPark.trails.length}
              </Typography>
            </Box>
          </Box>
        </CardContent>
        <Divider />
        <CardContent sx={{ backgroundColor: "#e0e5dd", height: "100%" }}>
          <TabContext value={activeTab} sx={{ padding: "0" }}>
            <TabList onChange={handleTabChange} centered>
              <Tab label="Details" value="2" />
              <Tab label="Highlights" value="0" />
              <Tab label="Trails" value="1" />
            </TabList>
            <TabPanel value="2" sx={{ padding: "0" }}>
              <ParkDetailsTab currentPark={currentPark} />
            </TabPanel>
            <TabPanel value="0" sx={{ padding: "0" }}>
              <ParkHighlightsTab currentPark={currentPark} />
            </TabPanel>
            <TabPanel value="1" sx={{ padding: "0" }}>
              <ParkTrailsTab />
            </TabPanel>
          </TabContext>
        </CardContent>
      </Card>
      {/* <Snackbar
        open={openSnack}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={3000}
        message="Added to favourites"
        TransitionComponent={slideDown}
        action={
          <Button color="primary" size="small" onClick={handleNavFavoutites}>
            Open
          </Button>
        }
      ></Snackbar> */}
    </>
  );
};

export default ParkDetailsCard;
