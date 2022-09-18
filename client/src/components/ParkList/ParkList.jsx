import { Container, List } from "@mui/material";
import ParkListCard from "../ParkListCard/ParkListCard";
import "./ParkList.scss";

const ParkList = ({ parks }) => {
  return (
    <Container
      className="PoopJunior"
      disableGutters
      sx={{ maxHeight: "100%", overflow: "auto" }}
    >
      <List disablePadding>
        {parks?.map((park) => (
          <ParkListCard park={park} key={park.name} />
        ))}
      </List>
    </Container>
  );
};

export default ParkList;
