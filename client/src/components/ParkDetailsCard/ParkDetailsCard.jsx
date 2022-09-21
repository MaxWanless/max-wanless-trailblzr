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
import SwipeableViews from "react-swipeable-views";
import parksIcon from "../../assets/logos/parks-logo.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
// import BookmarkIcon from "@mui/icons-material/Bookmark";
import ParkDetailsTab from "../DetailsTabs/ParkDetailsTab/ParkDetailsTab";
import ParkHighlightsTab from "../DetailsTabs/ParkHighlightsTab/ParkHighlightsTab";
import ParkTrailsTab from "../DetailsTabs/ParkTrailsTab/ParkTrailsTab";
import "./ParkDetailsCard.scss";

const ParkDetailsCard = ({ handleChange, currentPark }) => {
  const theme = useTheme();
  const [activePark, setActivePark] = useState({});
  const [activeTab, setActiveTab] = useState(0);
  const [openSnack, setOpenSnack] = useState(false);
  const [navFavourites, setNavFavourites] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:5050/parks/${currentPark.id}`)
  //     .then((response) => {
  //       setActivePark(response.data);
  //     });
  // }, [currentPark]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleTabSwipe = (index) => {
    setActiveTab(index);
  };

  const handleOpen = () => {
    setOpenSnack(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnack(false);
  };

  const slideDown = (props) => {
    return <Slide {...props} direction="down" />;
  };

  const handleNavFavoutites = () => {
    setNavFavourites(true);
  };

  if (navFavourites) {
    return <Navigate to="/favourites" />;
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
                <IconButton onClick={handleOpen}>
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
              <Typography variant="body2">{currentPark.trailCount}</Typography>
            </Box>
          </Box>
        </CardContent>
        <Divider />
        <CardContent sx={{ backgroundColor: "#e0e5dd", height: "100%" }}>
          <Tabs value={activeTab} onChange={handleTabChange} centered>
            <Tab label="Details" />
            <Tab label="Highlights" />
            <Tab label="Trails" />
          </Tabs>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeTab}
            onChangeIndex={handleTabSwipe}
          >
            <ParkDetailsTab
              value={activeTab}
              index={2}
              dir={theme.direction}
              currentPark={currentPark}
            />
            <Box value={activeTab} index={0} dir={theme.direction}>
              {currentPark ? (
                <ParkHighlightsTab currentPark={currentPark} />
              ) : (
                <Skeleton variant="rounded" width={"100%"} height={"7rem"} />
              )}
            </Box>
            <ParkTrailsTab
              value={activeTab}
              index={1}
              dir={theme.direction}
              currentPark={currentPark}
            />
          </SwipeableViews>
        </CardContent>
      </Card>
      <Snackbar
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
      ></Snackbar>
    </>
  );
};

export default ParkDetailsCard;
