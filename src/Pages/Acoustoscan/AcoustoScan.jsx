import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../Api/Axios/axios";
import { endpoints } from "../../Api/EndPoints/endpoints";

const AcoustoScan = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);

  const locations = useSelector(
    (state) => state.acoustoScan.locations
  );

  const fetchData = async () => {
    try {
      const res = await axiosInstance.get(endpoints.HomeCms.getHomeCms);
      setdata(res?.data?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
     
      }}
    >

      
       <Box sx={{
        position: "absolute",
        color: "#fff",
       
       }}>
        <h2>Our Global Presence</h2>
       </Box>
      
     
      <img
        src={data?.sec4img}
        alt=""
        style={{
          width: "100%",
          display: "block",
        }}
      />

      

      {locations.map((item) => (
        <Box
          key={item.id}
          sx={{
            position: "absolute",
            top: item.position.top,
            left: item.position.left,
            transform: "translate(-50%,-50%)",
          }}
        >
          {/* Pulse Effect */}
          <Box
            sx={{
              position: "absolute",
              width: 20,
              height: 20,
              borderRadius: "50%",
              background: "rgba(0, 255, 0, 0.8)",
              animation: "pulse 2s infinite",
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",

              pointerEvents: "none",
            }}
          />

          {/* Clickable Marker Only */}
          <img
            src={item.markerIcon}
            alt={item.countryName}
            width={27}
            style={{
              cursor: "pointer",
              position: "relative",
              zIndex: 2,
            }}
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/acousto-scan/${item.slug}`);
            }}
          />
        </Box>
      ))}
    </Box>
  );
 
};

export default AcoustoScan;