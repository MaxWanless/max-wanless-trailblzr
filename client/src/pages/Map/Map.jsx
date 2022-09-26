import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import logo from "../../assets/logos/parks-logo.png";

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

const Map = ({ parks }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  if (loadError) return <div>Load Error</div>;

  if (!isLoaded) return <div>Loading</div>;

  return (
    <Container maxWidth="lg" sx={{ height: "100%" }}>
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
                />;
              })}
            </GoogleMap>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Map;
