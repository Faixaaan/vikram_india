import React from "react";
import { useNavigate } from "react-router-dom";

const MapPoints = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* INDIA */}
      <div
        className="pin india"
        onClick={() => navigate("/acousto/india")}
      />

      {/* COLOMBIA */}
      <div
        className="pin colombia"
        onClick={() => navigate("/acousto/colombia")}
      />

      {/* AUSTRALIA */}
      <div
        className="pin australia"
        onClick={() => navigate("/acousto/australia")}
      />
    </>
  );
};

export default MapPoints;