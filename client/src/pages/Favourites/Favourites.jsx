import { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Container from "@mui/material/Container";
import ParkList from "../../components/ParkList/ParkList";
import "./Favourites.scss";

function Favourites({ parks }) {
  const [loading, setLoading] = useState(true);
  const [favourites, setFavourites] = useState([]);
  const [displayParkDetails, setDisplayParkDetails] = useState(false);
  const [currentPark, setCurrentPark] = useState({});
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
      .then((response) => {
        setFavourites(response.data);
        setLoading(false);
      })
      .catch((error) => {});
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
      <ParkList
        parks={parks.filter((park) => favourites.includes(park.id))}
        handleChange={handleOpenParkDetails}
      />
    </Container>
  );
}

export default Favourites;
