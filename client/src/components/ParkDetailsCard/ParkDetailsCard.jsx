import { useState } from "react";
import {
  Avatar,
  Card,
  CardContent,
  IconButton,
  Tooltip,
  Typography,
  Box,
} from "@mui/material";
import parksIcon from "../../assets/logos/parks-logo.png";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import "./ParkDetailsCard.scss";

const ParkDetailsCard = () => {
  return (
    <Card className="ParkDetails">
      <CardContent>
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
        <Avatar alt="Parks logo" variant="square" src={parksIcon} />
        <Typography variant="h2" color="primary" marginLeft={"1rem"}>
          Park Name
        </Typography>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}>
          <Tooltip title="Favourite">
            <IconButton onClick={""}>
              <BookmarkBorderIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ParkDetailsCard;
