import React, { useEffect, useRef, useState } from "react";

import {
  Box,
  Typography,
  Button,
  Container,
} from "@mui/material";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

import { useNavigate } from "react-router-dom";



import { axiosInstance } from "../../../Api/Axios/axios";
import { endpoints } from "../../../Api/EndPoints/endpoints";

const MotionBox = motion(Box);

const Media = () => {
  const [mediaData, setMediaData] = useState([]);
  const [heading, setHeading] = useState({});

  const navigate = useNavigate();

  const sectionRef = useRef(null);

  /* ================= FETCH ================= */

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

  /* ================= SCROLL ================= */

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // smoother horizontal scroll
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-40%"]
  );

  return (
    <Box
      ref={sectionRef}
      sx={{
        position: "relative",

        // IMPORTANT
        height: {
          xs: "180vh",
          md: "220vh",
        },
   

        background: "#071019",

        overflow: "clip",
      }}
    >
      {/* BG */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "#fff",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",

        }}
      />

      {/* ================= STICKY ================= */}

      <Box
        sx={{
          position: "sticky",
          top: 0,

          height: "100vh",

          overflow: "hidden",

          display: "flex",
          alignItems: "center",

          zIndex: 2,
               p: "100px 10px",
        }}
      >
        <Container maxWidth={false}>
          {/* ================= HEADER ================= */}


          <Box
            sx={{
              mb: { xs: 5, md: 8 },

              display: "flex",
              flexDirection: "column",

              justifyContent: "center",
              alignItems: "center",

              textAlign: "center",
            }}
          >
            <Box maxWidth="850px">
              <Typography
                sx={{
                  color: "#111827",

                  fontWeight: 800,

                  fontSize: {
                    xs: "2.2rem",
                    md: "4.5rem",
                  },

                  lineHeight: 1.05,

                  letterSpacing: "-2px",
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

              <Typography
                sx={{
                  mt: 3,

                  color: "#6b7280",

                  lineHeight: 1.9,

                  maxWidth: "720px",

                  mx: "auto",

                  fontSize: {
                    xs: "14px",
                    md: "18px",
                  },
                }}
              >
                Discover premium events, industrial
                achievements, media coverage and featured
                stories in an immersive modern experience.
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "#9ca3af",

                letterSpacing: "4px",

                textTransform: "uppercase",

                fontSize: "13px",

                mt: 4,
              }}
            >
              Scroll →
            </Typography>
          </Box>

          {/* ================= SLIDER ================= */}

          <MotionBox
            style={{ x }}
            sx={{
              display: "flex",

              gap: {
                xs: 3,
                md: 4,
              },

              width: "max-content",
            }}
          >
            {mediaData.map((card, index) => (
              <MotionBox
                key={card.id}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.35,
                }}
                sx={{
                  width: {
                    xs: "86vw",
                    sm: "420px",
                    md: "480px",
                  },

                  borderRadius: "32px",

                  overflow: "hidden",

                  flexShrink: 0,

                  background:
                    "rgb(0, 0, 0)",

                  backdropFilter: "blur(14px)",

                  border:
                    "1px solid rgba(255,255,255,0.08)",

                  boxShadow:
                    "0 20px 60px rgba(0,0,0,.45)",
                }}
              >
                {/* IMAGE */}
                <Box
                  sx={{
                    height: {
                      xs: 240,
                      md: 300,
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
                      xs: 2.5,
                      md: 4,
                    },
                  }}
                >
                  {/* DATE */}
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

                  {/* TITLE */}
                  <Typography
                    sx={{
                      color: "#fff",

                      fontWeight: 800,

                      lineHeight: 1.2,

                      fontSize: {
                        xs: "1.4rem",
                        md: "2rem",
                      },

                      mb: 2,
                    }}
                  >
                    {card.title}
                  </Typography>

                  {/* DESC */}
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,.68)",

                      lineHeight: 1.9,

                      fontSize: {
                        xs: "14px",
                        md: "15px",
                      },

                      mb: 4,
                    }}
                  >
                    {card.description}
                  </Typography>

                  {/* BUTTON */}
                  <Button
                    onClick={() =>
                      navigate(
                        `/media/details/${card.id}`
                      )
                    }
                    sx={{
                      px: 4,
                      py: 1.3,

                      borderRadius: "50px",

                      textTransform: "none",

                      fontWeight: 700,

                      color: "#fff",

                      background:
                        "linear-gradient(90deg,#1BAA63,#276f9e)",

                      "&:hover": {
                        background:
                          "linear-gradient(90deg,#276f9e,#1BAA63)",
                      },
                    }}
                  >
                    Explore More
                  </Button>
                </Box>
              </MotionBox>
            ))}
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
};

export default Media;