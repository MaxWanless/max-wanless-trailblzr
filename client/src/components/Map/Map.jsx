import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import Box from "@mui/material/Box";
import mapStyles from "./mapStyles";
import logo from "../../assets/logos/parks-logo.png";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const Map = ({ park }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const center = {
    lat: parseFloat(park.lat),
    lng: parseFloat(park.lng),
  };

  if (loadError) return <div>Load Error</div>;

  if (!isLoaded) return <div>Loading</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={13}
      center={center}
      options={options}
    >
      <MarkerF
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
      />
    </GoogleMap>
  );
};

export default Map;
