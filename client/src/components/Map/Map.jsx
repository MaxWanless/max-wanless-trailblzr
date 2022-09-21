import { useState } from "react";
import ReactMapGL from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React from "react";

const Map = () => {
  const MAP_STYLES = {
    light: "mapbox://styles/mapbox/light-v10",
    dark: "mapbox://styles/mapbox/dark-v9",
  };

  const MAP_DEFAULT_OPTIONS = {
    style: MAP_STYLES.light,
  };

  const MAP_INITIAL_VIEWSTATE = {
    longitude: 20.762678,
    latitude: -16.208708,
    zoom: 10,
  };
  const [mapOptions, setMapOptions] = useState(MAP_DEFAULT_OPTIONS);
  const [viewState, setViewState] = useState(MAP_INITIAL_VIEWSTATE);
  const [mapRef, setMapRef] = useState([]);

  const _setMapOptions = (options) => {
    setMapOptions({
      ...mapOptions,
      ...options,
    });
  };

  return (
    <Card sx={{ height: "100%" }}>
      <CardContent sx={{ height: "100%" }}>
        <ReactMapGL
          mapStyle={mapOptions.style}
          viewPort={{
            longitude: 50.755287,
            latitude:  -85.714065,
            zoom: 1,
          }}
          mapboxApiAccessToken={
            "pk.eyJ1IjoibWFib25nIiwiYSI6ImNrMm9qN2tiYTEwc3ozZG41emx6bW9uZnQifQ.PhojWq3UwsAlPB7LBvJiTw"
          }
        />
      </CardContent>
    </Card>
  );
};

export default Map;
