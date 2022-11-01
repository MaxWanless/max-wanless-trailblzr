import ParkListCard from "../ParkListCard/ParkListCard";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import "./ParkList.scss";

const ParkList = ({ parks, handleChange, currentParkID, window }) => {
  return (
    <Container
      disableGutters
      sx={{ height: "100%", overflow: "auto" }}
    >
      <List disablePadding sx={{ maxHeight: "100%" }} className="park-list">
        {parks?.map((park) => (
          <ParkListCard
            park={park}
            key={park.name}
            handleChange={handleChange}
            currentParkID={currentParkID}
          />
        ))}
      </List>
    </Container>
  );
};

export default ParkList;
