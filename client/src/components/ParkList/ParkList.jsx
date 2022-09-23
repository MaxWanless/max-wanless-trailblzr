import { Container, List } from "@mui/material";
import ParkListCard from "../ParkListCard/ParkListCard";
import "./ParkList.scss";

const ParkList = ({ parks, handleChange }) => {
  return (
    <Container disableGutters sx={{ height: "100%", overflow: "auto" }}>
      <List disablePadding sx={{ maxHeight: "100%" }}>
        {parks?.map((park) => (
          <ParkListCard
            park={park}
            key={park.name}
            handleChange={handleChange}
          />
        ))}
      </List>
    </Container>
  );
};

export default ParkList;
