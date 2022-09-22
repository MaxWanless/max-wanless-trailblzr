import { useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import mapStyles from "./mapStyles";
import logo from "../../assets/logos/parks-logo.png";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 50.429213,
  lng: -85.857796,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const Map = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  if (loadError) return <div>Load Error</div>;
  if (!isLoaded) return <div>Loading</div>;

  return (
    <Card sx={{ height: "100%" }}>
      <CardContent sx={{ height: "100%" }}>
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={5}
          center={center}
          options={options}
        >
          <Marker
            position={{ lat: 45.391486, lng: -79.214673 }}
            icon={{
              url: `${logo}`,
              scaledSize: new window.google.maps.Size(30, 30),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(15, 15),
            }}
          />
        </GoogleMap>
      </CardContent>
    </Card>
  );
};

export default Map;
