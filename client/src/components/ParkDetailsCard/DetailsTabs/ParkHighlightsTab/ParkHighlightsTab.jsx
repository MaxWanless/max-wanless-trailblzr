import { Box, List, ListItem } from "@mui/material";
import "./ParkHighlightsTab.scss";

const ParkHighlightsTab = ({ currentPark }) => {
  return (
    <Box>
      <List sx={{ listStyleType: "disc", pl: 2 }}>
        {currentPark.highlights.map((highlight, index) => (
          <ListItem
            key={index}
            sx={{ display: "list-item", paddingLeft: "0", paddingRight: "0" }}
          >
            {highlight}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ParkHighlightsTab;
