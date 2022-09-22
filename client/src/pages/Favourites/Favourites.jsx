import { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Container from "@mui/material/Container";
import ParkList from "../../components/ParkList/ParkList";
import "./Favourites.scss";

function Favourites() {
  const [parks, setParks] = useState([]);
  const [displayParkDetails, setDisplayParkDetails] = useState(false);
  const [currentPark, setCurrentPark] = useState({});
  const [loading, setLoading] = useState(true);
  let token = "";
  let decodedUser = {};

  if (sessionStorage.getItem("authorization")) {
    token = sessionStorage.getItem("authorization").split(" ")[1];
    decodedUser = jwt_decode(token);
  } else if (localStorage.getItem("authorization")) {
    token = localStorage.getItem("authorization").split(" ")[1];
    decodedUser = jwt_decode(token);
  }

  useEffect(() => {
    axios
      .get(`http://localhost:5050/users/favourites/${decodedUser.id}`)
      .then((favouriteList) => {
        setParks(favouriteList.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleOpenParkDetails = (park) => {
    setDisplayParkDetails(true);
    setCurrentPark(park);
  };

  if (loading) {
    return <div>...Loading</div>;
  }

  return (
    <Container maxWidth="lg">
      <ParkList parks={parks} handleChange={handleOpenParkDetails} />
    </Container>
  );
}

export default Favourites;
