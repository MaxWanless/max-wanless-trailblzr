import { useState } from "react";
import { useTheme } from "@emotion/react";
import { Navigate } from "react-router-dom";
import {
  Avatar,
  Card,
  CardContent,
  IconButton,
  Tooltip,
  Typography,
  Box,
  Divider,
  Tabs,
  Tab,
  Snackbar,
  Button,
  Slide,
} from "@mui/material";
import SwipeableViews from "react-swipeable-views";
import parksIcon from "../../assets/logos/parks-logo.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import "./ParkDetailsCard.scss";
import ParkDetailsTab from "../DetailsTabs/ParkDetailsTab/ParkDetailsTab";
import ParkHighlightsTab from "../DetailsTabs/ParkHighlightsTab/ParkHighlightsTab";
import ParkTrailsTab from "../DetailsTabs/ParkTrailsTab/ParkTrailsTab";

const ParkDetailsCard = ({ handleChange }) => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [openSnack, setOpenSnack] = useState(false);
  const [navFavourites, setNavFavourites] = useState(false);
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
              Park Name
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
              <Typography variant="body2">Cityname</Typography>
            </Box>
            <Box>
              <Typography variant="h4">TRAILS</Typography>
              <Typography variant="body2">~</Typography>
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
            <ParkDetailsTab value={activeTab} index={2} dir={theme.direction} />
            <ParkHighlightsTab
              value={activeTab}
              index={0}
              dir={theme.direction}
            />
            <ParkTrailsTab value={activeTab} index={1} dir={theme.direction} />
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
