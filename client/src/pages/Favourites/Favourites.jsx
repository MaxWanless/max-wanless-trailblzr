import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Container from "@mui/material/Container";
import ParkList from "../../components/ParkList/ParkList";
import "./Favourites.scss";

function Favourites() {
  const [parks, setParks] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [displayParkDetails, setDisplayParkDetails] = useState(false);
  const [currentPark, setCurrentPark] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5050/users/favourites/3")
      .then((favouriteList) => {
        setFavourites(favouriteList.data);
      })
      .then(() => {
        axios
          .get("http://localhost:5050/parks")
          .then((response) => {
            setParks(
              response.data.filter((park) => favourites.includes(park.id))
            );
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
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
