import React, { useEffect, useRef, useState } from "react";

import {
  Box,
  Typography,
  Button,
  Container,
} from "@mui/material";

import { motion } from "framer-motion";

import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { axiosInstance } from "../../../Api/Axios/axios";
import { endpoints } from "../../../Api/EndPoints/endpoints";

gsap.registerPlugin(ScrollTrigger);

const MotionBox = motion(Box);

const Media = () => {
  const [mediaData, setMediaData] = useState([]);
  const [heading, setHeading] = useState({});

  const navigate = useNavigate();

  const sectionRef = useRef(null);
  const sliderRef = useRef(null);

  const isMobile = useMediaQuery("(max-width:900px)");

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

  /* ================= GSAP HORIZONTAL SCROLL ================= */

  useEffect(() => {
    if (isMobile) return;

    const section = sectionRef.current;
    const slider = sliderRef.current;

    if (!section || !slider) return;

    const totalScroll =
      slider.scrollWidth - window.innerWidth;

    const ctx = gsap.context(() => {
      gsap.to(slider, {
        x: -totalScroll,
        ease: "none",

        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${totalScroll}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, [mediaData, isMobile]);

  return (
    <Box

      sx={{
        position: "relative",

        background: "#fff",

        overflow: "hidden",

        py: {
          xs: 8,
          md: 0,
        },
      }}
    >
      {/* ================= HEADER ================= */}

      <Box
        sx={{
          textAlign: "center",

          mb: {
            xs: 3,
            md: 4,
          },
          pt: 6
        }}
      >
        <Container maxWidth="lg">
          <Box maxWidth="850px" mx="auto">
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


          </Box>
        </Container>
      </Box>

      {/* ================= SLIDER ================= */}

      <Box
        ref={sectionRef}
        sx={{
          position: "relative",

          height: {
            xs: "auto",
            md: "760px",
          },

          display: "flex",
          alignItems: "flex-start",

          overflow: "hidden",
          pt: {
            xs: 1,
            md: 10,
          },
        }}

      >
        <Box
          ref={sliderRef}
          sx={{
            display: "flex",

            gap: {
              xs: 3,
              md: 4,
            },

            px: {
              xs: 2,
              md: 6,
            },

            width: "max-content",

            overflowX: {
              xs: "auto",
              md: "visible",
            },

            WebkitOverflowScrolling: "touch",

            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {mediaData.map((card) => (
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

                height: {
                  xs: "auto",
                  md: "620px",
                },

                borderRadius: "32px",

                overflow: "hidden",

                flexShrink: 0,

                display: "flex",
                flexDirection: "column",

                background: "#000",

                border:
                  "1px solid rgba(255,255,255,0.08)",

                boxShadow:
                  "0 20px 60px rgba(0,0,0,.18)",
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
        </Box>
      </Box>
    </Box>
  );
};

export default Media;