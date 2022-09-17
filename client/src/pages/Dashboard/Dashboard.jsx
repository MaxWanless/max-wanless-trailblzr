import { Container } from "@mui/material";
import ParkList from "../../components/ParkList/ParkList";
import "./Dashboard.scss";

function Dashboard() {
  return (
    <Container maxWidth="lg">
      <ParkList />
    </Container>
  );
}

export default Dashboard;
