import { useState } from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  InfoWindowF,
} from "@react-google-maps/api";
import logo from "../../assets/logos/parks-logo.png";
import MapDetailsCard from "../../components/Map/MapDetailsCard";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const options = {
  disableDefaultUI: true,
  zoomControl: true,
};

const center = {
  lat: 50.185293,
  lng: -85.917334,
};

const Map = ({ parks, user }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const [selected, setSelected] = useState(null);

  if (loadError) return <div>Load Error</div>;

  if (!isLoaded) return <div>Loading</div>;

  return (
    <Container maxWidth="lg" sx={{ height: "100%", paddingBottom: "1rem" }}>
      <Card sx={{ height: "100%" }}>
        <CardContent
          sx={{ height: "100%", borderRadius: "4px", overflow: "hidden" }}
        >
          <Box height={"100%"} sx={{ borderRadius: "4px", overflow: "hidden" }}>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              zoom={6}
              center={center}
              options={options}
            >
              {parks?.map((park) => {
                return (
                  <MarkerF
                    title={park.name}
                    key={park.id}
                    icon={{
                      url: `${logo}`,
                      scaledSize: new window.google.maps.Size(30, 30),
                      origin: new window.google.maps.Point(0, 0),
                      anchor: new window.google.maps.Point(15, 15),
                    }}
                    position={{
                      lat: parseFloat(park.lat),
                      lng: parseFloat(park.lng),
                    }}
                    onClick={() => {
                      setSelected(park);
                      console.log(selected);
                    }}
                  />
                );
              })}
              {selected ? (
                <InfoWindowF
                  position={{
                    lat: parseFloat(selected.lat),
                    lng: parseFloat(selected.lng),
                  }}
                  onCloseClick={() => {
                    setSelected(null);
                  }}
                >
                  <MapDetailsCard currentParkID={selected.id} user={user} />
                </InfoWindowF>
              ) : null}
            </GoogleMap>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Map;
