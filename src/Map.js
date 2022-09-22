import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import RecenterAutomatically from "./Receneter";
import {HeatmapLayer} from "react-leaflet-heatmap-layer-v3";
import { data } from "./geoJson";
const Map = ({ position, zoom }) => {
  const ref = useRef();
  return (
    <MapContainer
      center={position}
      zoom={zoom}
      //   scrollWheelZoom={true}
      style={{ width: "100vw", height: "500px" }}
    >
        <HeatmapLayer
          fitBoundsOnLoad
          fitBoundsOnUpdate
          points={data.features}
          longitudeExtractor={(m) => m.geometry.coordinates[1]}
          latitudeExtractor={(m) => m.geometry.coordinates[0]}
          intensityExtractor={(m) => parseFloat(m.geometry.coordinates[2])}
        />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <Marker position={position}></Marker> */}
      <RecenterAutomatically
        lat={position[0]}
        lng={position[1]}
        zoom={zoom}
        animateRef={ref}
      />
    </MapContainer>
  );
};

export default Map;
