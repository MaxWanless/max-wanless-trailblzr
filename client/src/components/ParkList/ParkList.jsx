import { Container, List } from "@mui/material";
import ParkListCard from "../ParkListCard/ParkListCard";
import "./ParkList.scss";

const ParkList = () => {
  return (
    <Container
      className="PoopJunior"
      disableGutters
      sx={{ maxHeight: "100%", overflow: "auto" }}
    >
      <List disablePadding>
        <ParkListCard />
        <ParkListCard />
        <ParkListCard />
        <ParkListCard />
      </List>
    </Container>
  );
};

export default ParkList;
