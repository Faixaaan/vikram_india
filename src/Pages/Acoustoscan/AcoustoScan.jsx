import React from "react";

import MapPoints from "./MapPoints";
import mapImage from "../../Assets/map/banner-map4.jpg";

const AcoustoScan = () => {
  return (
    <div className="map-container">
      <img
        src={mapImage}
        alt="world map"
        className="map-image"
      />

      {/* Pins */}
      <MapPoints />
    </div>
  );
};

export default AcoustoScan;