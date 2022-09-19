import { Container, Slide, Box } from "@mui/material";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import ParkList from "../../components/ParkList/ParkList";
import ParkDetailsCard from "../../components/ParkDetailsCard/ParkDetailsCard";
import "./Dashboard.scss";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [parks, setParks] = useState(true);
  const [displayParkDetails, setDisplayParkDetails] = useState(false);
  const [currentParkID, setCurrentParkID] = useState("");
  const mobileRef = useRef(null);
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

  const handleDisplayParkDetails = (parkID) => {
    setDisplayParkDetails(!displayParkDetails);
    setCurrentParkID(parkID);
  };

  if (loading) {
    return <div>...Loading</div>;
  }

  return (
    <Container maxWidth="lg" sx={{ height: "100%" }}>
      <Box
        ref={mobileRef}
        sx={{ position: "relative", display: { xs: "block", md: "none" } }}
      >
        <Slide direction="right" in={!displayParkDetails}>
          <Box>
            <ParkList parks={parks} handleChange={handleDisplayParkDetails} />
          </Box>
        </Slide>
        <Slide
          direction="left"
          in={displayParkDetails}
          container={mobileRef.current}
        >
          <Box sx={{ position: "absolute", top: "0px", width: "100%" }}>
            <ParkDetailsCard />
          </Box>
        </Slide>
      </Box>
    </Container>
  );
}

export default Dashboard;
