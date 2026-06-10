import React, { useEffect, useRef, useState } from "react";

import {
  Box,
  Typography,
  Button,
  Container,
} from "@mui/material";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useMediaQuery from "@mui/material/useMediaQuery";

import { axiosInstance } from "../../../Api/Axios/axios";
import { endpoints } from "../../../Api/EndPoints/endpoints";

const MotionBox = motion(Box);

const Media = () => {
  const [mediaData, setMediaData] = useState([]);
  const [heading, setHeading] = useState({});
  const isMobile = useMediaQuery("(max-width:768px)");
  const navigate = useNavigate();

  const sliderRef = useRef(null);

  const fetchMediaData = async () => {
    try {
      const res = await axiosInstance.get(
        endpoints.homeMedia.getHomeMediaData
      );

      const headingRes = await axiosInstance.get(
        endpoints.HomeCms.getHomeCms
      );

      setHeading(headingRes?.data?.data || {});
      setMediaData(res?.data?.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMediaData();
  }, []);

  const scrollNext = () => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: 520,
      behavior: "smooth",
    });
  };

  const scrollPrev = () => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollBy({
      left: -520,
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        background: "#fff",
        py: { xs: 6, md: 8 },
      }}
    >
      {/* HEADER */}

      <Box
        sx={{
          textAlign: "center",
          mb: 8,
        }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.9rem", md: "2.6rem" },
              fontWeight: 700,
              letterSpacing: "1px",
              fontFamily: "'Poppins', 'Roboto', sans-serif",
              background:
                "linear-gradient(90deg, #1BAA63, #276f9e)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            {heading?.media_head}
          </Typography>

          <Box
            sx={{
              width: 120,
              height: 5,
              borderRadius: "20px",
              mt: 2,
              mx: "auto",
              background:
                "linear-gradient(90deg,#1BAA63,#276f9e)",
            }}
          />
        </Container>
      </Box>

      {/* CARDS */}
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1400px",
          mx: "auto",
          px: {
            xs: 2,
            md: 4,
          },
        }}
      >
        <Box
          ref={sliderRef}
          sx={{
            display: "flex",
            gap: 4,
            overflowX: "auto",
            scrollBehavior: "smooth",
            px: { xs: 2, md: 5 },

            "&::-webkit-scrollbar": {
              display: "none",
            },

            scrollbarWidth: "none",
          }}
        >
          {mediaData.map((card) => (
            <MotionBox
              key={card.id}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35 }}
              sx={{
                width: {
                  xs: "78vw",
                  sm: "300px",
                  md: "320px",
                },

                minWidth: {
                  xs: "78vw",
                  sm: "300px",
                  md: "320px",
                },

                borderRadius: "32px",
                overflow: "hidden",
                flexShrink: 0,

                background: "#000",

                boxShadow:
                  "0 20px 60px rgba(0,0,0,.18)",

                border:
                  "1px solid rgba(255,255,255,.08)",
              }}
            >
              {/* IMAGE */}

              <Box
                sx={{
                  height: {
                    xs: 180,
                    md: 220,
                  },
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={card.image}
                  alt={card.title}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: ".8s ease",

                    "&:hover": {
                      transform: "scale(1.08)",
                    },
                  }}
                />
              </Box>

              {/* CONTENT */}

              <Box
                sx={{
                  p: {
                    xs: 2,
                    md: 2.5,
                  },
                }}
              >
                <Typography
                  sx={{
                    color: "#1BAA63",
                    fontWeight: 700,
                    fontSize: "13px",
                    letterSpacing: "2px",
                    mb: 2,
                  }}
                >
                  {card.date}
                </Typography>

                <Typography
                  sx={{
                    color: "#fff",
                    fontWeight: 800,
                    lineHeight: 1.2,
                    mb: 2,
                    fontSize: {
                      xs: "1.1rem",
                      md: "1.5rem",
                    },
                  }}
                >
                  {card.title}
                </Typography>

                <Typography
                  sx={{
                    color: "rgba(255,255,255,.68)",
                    lineHeight: 1.9,
                    mb: 4,
                    fontSize: {
                      xs: "13px",
                      md: "14px",
                    },
                  }}
                >
                  {card.description}
                </Typography>


                <Button
                  variant="contained"
                  sx={{
                    mt: { xs: 1, md: 2 },
                    px: { xs: 1.8, sm: 2.2, md: 2.4 },
                    py: { xs: 0.7, sm: 0.9 },
                    fontSize: { xs: "14px", sm: "18px" },
                    borderRadius: "8px",
                    textTransform: "none",
                    fontWeight: 600,
                    display: "flex",
                    justifyContent: "flex-start",
                    minWidth: "110px",



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
                  }}
                  onClick={() =>
                    navigate(
                      `/media/details/${card.id}`
                    )
                  }

                >
                  <span> Know More </span>
                </Button>
              </Box>
            </MotionBox>
          ))}
        </Box>
      </Container>
      {/* PREV / NEXT BUTTONS */}

      {!isMobile && (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mt: 5,
          }}
        >

          <Button
            onClick={scrollPrev}
            startIcon={<ArrowBackIosNewIcon />}
            variant="contained"
            sx={{
              width: {
                xs: "130px",
                sm: "160px",
              },
              minWidth: {
                xs: "130px",
                sm: "160px",
              },
              maxWidth: {
                xs: "130px",
                sm: "160px",
              },

              mt: { xs: 1, md: 2 },
              py: { xs: 0.7, sm: 0.9 },
              fontSize: { xs: "14px", sm: "18px" },
              borderRadius: "8px",
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
            }}
          >
            <span>Previous</span>
          </Button>

          <Button
            onClick={scrollNext}
            endIcon={<ArrowForwardIosIcon />}
            variant="contained"
            sx={{
              width: {
                xs: "130px",
                sm: "160px",
              },
              minWidth: {
                xs: "130px",
                sm: "160px",
              },
              maxWidth: {
                xs: "130px",
                sm: "160px",
              },

              mt: { xs: 1, md: 2 },
              py: { xs: 0.7, sm: 0.9 },
              fontSize: { xs: "14px", sm: "18px" },
              borderRadius: "8px",
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
            }}
          >
            <span>Next</span>
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Media;