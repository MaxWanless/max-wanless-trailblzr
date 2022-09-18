import { Container } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import ParkList from "../../components/ParkList/ParkList";
import "./Dashboard.scss";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [parks, setParks] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:5050/parks")
      .then((response) => {
        setParks(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (loading) {
    return <div>...Loading</div>;
  }
  return (
    <Container maxWidth="lg" sx={{ height: "100%" }}>
      <ParkList parks={parks} />
    </Container>
  );
}

export default Dashboard;
