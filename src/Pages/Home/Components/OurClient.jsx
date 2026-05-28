

import React, { useEffect, useState } from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { endpoints } from "../../../Api/EndPoints/endpoints";
import { axiosInstance } from "../../../Api/Axios/axios";

const OurClient = () => {
  const navigatee = useNavigate();
  const [data, setData] = useState([]);

  const fetchClientData = async () => {
    try {
      const res = await axiosInstance.get(endpoints.HomeCms.client);
      setData(res?.data?.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchClientData();
  }, []);

  const handleComingsoon = () => {
    navigatee("/about/clientele");
  };

  // duplicate for infinite loop
  // split data into 2 rows
  const firstRow = data.slice(0, Math.ceil(data.length / 2));
  const secondRow = data.slice(Math.ceil(data.length / 2));

  const loopFirst = [...firstRow, ...firstRow];
  const loopSecond = [...secondRow, ...secondRow];

  return (
    <Box
      id="our-client-section"
      sx={{
        width: "100%",
        py: { md: 8, xs: 5 },
        background:
          "radial-gradient(circle at top, rgba(238,29,37,0.12), transparent 45%), linear-gradient(180deg, #fafafa 0%, #ffffff 50%, #f5f5f5 100%)",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1800px",
          px: { xs: 2, md: 4 },
        }}
      >


        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: "10px",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.9rem", md: "2.6rem" },
                fontWeight: 700,
                letterSpacing: "1px",
                fontFamily: "'Poppins', 'Roboto', sans-serif",
                background: "linear-gradient(90deg, #1BAA63, #276f9e)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                position: "relative",
                display: "inline-block",
              }}
            >
              Our Trusted Clients
            </Typography>

           
            <Box
              sx={{
                width: 80,
                height: 4,
                margin: "14px auto 0",
                borderRadius: "10px",
                background: "linear-gradient(90deg, #1BAA63, #276f9e)",
              }}
            />
          </Box>
        </Box>




        {/* Slider Wrapper */}
        {/* Slider Wrapper */}
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "20px",
            py: { xs: 2, sm: 3, md: 5 },
            mt: { xs: "60px", md: "80px" },
            background: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 20px 50px rgba(0,0,0,.08)",
          }}
        >
          {/* fade edges */}
          <Box
            sx={{
              pointerEvents: "none",
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg,#fff 0%,transparent 10%,transparent 90%,#fff 100%)",
              zIndex: 2,
            }}
          />

          {/* First Line (Right → Left) */}
          <Box
            sx={{
              display: "flex",
              width: "max-content",
              animation: "scrollLeft 200s linear infinite",
              mb: 4,

              "&:hover": {
                animationPlayState: "paused",
              },
            }}
          >
            {loopFirst.map((logo, index) => (
              <Box
                key={index}
                sx={{
                  minWidth: { xs: 150, sm: 200 },
                  mx: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  transition: ".3s",

                  "&:hover": {
                    transform: "scale(1.08)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={logo?.image}
                  alt="client"
                  sx={{
                    maxWidth: 140,
                    maxHeight: 80,
                    objectFit: "contain",
                  }}
                />
              </Box>
            ))}
          </Box>

          {/* Second Line (Left → Right) */}
          <Box
            sx={{
              display: "flex",
              width: "max-content",
              animation: "scrollRight 200s linear infinite",

              "&:hover": {
                animationPlayState: "paused",
              },
            }}
          >
            {loopSecond.map((logo, index) => (
              <Box
                key={index}
                sx={{
                  minWidth: { xs: 150, sm: 200 },
                  mx: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  transition: ".3s",

                  "&:hover": {
                    transform: "scale(1.08)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={logo?.image}
                  alt="client"
                  sx={{
                    maxWidth: 140,
                    maxHeight: 80,
                    objectFit: "contain",
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Button */}
        <Box sx={{ textAlign: "center", mt: 4 }} >
          <Button
            variant="contained"
            sx={{
              alignSelf: { xs: "stretch", sm: "flex-start" },
              mt: 2,
              px: { xs: 1.8, sm: 2.2, md: 2.4 },
              py: { xs: 0.7, sm: 0.8 },
              fontSize: { xs: "16px", sm: "17px" },
              borderRadius: "30px",
              textTransform: "none",
              fontWeight: 600,

              position: "relative",
              overflow: "hidden",

              background: "#bd2304",


              zIndex: 1,

              "& span": {
                position: "relative",
                zIndex: 2,
              },


              "&:before": {
                content: '""',
                position: "absolute",
                left: "50%",
                top: "50%",
                width: 0,
                height: 0,
                background: "#000",
                borderRadius: "50%",
                transform: "translate(-12%, -50%)",
                transition: "all 1s ease",
                zIndex: 0,
              },

              "&:hover:before": {
                width: "300%",
                height: "300%",
              },

              "&:hover": {
                background: "#bd2304",
              },
            }}
            onClick={handleComingsoon}
          >
            <span>Know More</span>
          </Button>

        </Box>

      </Container>

      {/* Keyframes */}
      <style>
        {`
    @keyframes scrollLeft {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(-50%);
      }
    }

    @keyframes scrollRight {
      from {
        transform: translateX(-50%);
      }
      to {
        transform: translateX(0);
      }
    }
  `}
      </style>
    </Box>
  );
};

export default OurClient;