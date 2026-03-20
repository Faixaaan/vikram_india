


import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Container,
} from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

import MediaBanner from "../../../Assets/MediaBanner.png";
import { axiosInstance } from "../../../Api/Axios/axios";
import { endpoints } from "../../../Api/EndPoints/endpoints";

const MotionCard = motion(Card);


const StackedCard = ({ card, index }) => {
  const { scrollYProgress } = useScroll();
  const navigate = useNavigate();
  

  const handleClick = () => {
    navigate("/media/details", {
      state: { fromMedia: true }   // 🔥 IMPORTANT
    });
  };




  const start = index * 0.15;
  const end = start + 0.25;

  const y = useTransform(scrollYProgress, [start, end], [100, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

  return (
    <MotionCard
      style={{
        y,
        scale,
        opacity,
        position: "sticky",
        top: window.innerWidth < 900 ? 80 : 120,
        zIndex: 20 + index,
      }}
      sx={{
        mb: { xs: 4, md: 6 },

        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        borderRadius: "22px",
        overflow: "hidden",


        background: "linear-gradient(145deg, #238d58, #1a1a1a)",
        border: "1px solid rgb(255, 255, 255)",
        boxShadow: "0 25px 50px rgba(0,0,0,0.7)",
        transition: "all 0.4s ease",

        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 35px 70px rgba(0,0,0,0.8)",
          border: "1px solid #1baa6366",
        }

      }}
    >
      {/* IMAGE */}
      <Box
        sx={{
          width: { xs: "100%", md: "45%" },
          height: { xs: 200, sm: 230, md: "auto" },
        }}
      >
        <img
          src={card.image}
          alt={card.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* CONTENT */}
      <Box
        sx={{
          width: { xs: "100%", md: "55%" },
          p: { xs: 2, md: 4 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <CardContent sx={{ p: 0 }}>
          <Typography
            sx={{
              fontSize: "0.75rem",
              color: "#ffffff",
              letterSpacing: "1.5px",
              fontWeight: 600,
              mb: 1,
              textTransform: "uppercase",
            }}
          >
            {card.date}
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1.3rem", md: "1.6rem" },
              fontWeight: 800,
              mb: 2,
              lineHeight: 1.3,
              background: "linear-gradient(70deg, #00ff80, #00c3ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            {card.title}
          </Typography>

          <Typography
            sx={{
              color: "rgb(255, 255, 255)",
              lineHeight: 1.7,
              fontSize: "0.95rem",
            }}
          >
            {card.description}
          </Typography>
        </CardContent>

        <Box sx={{ display: "flex", justifyContent: "flex-start", mt: { xs: 1.8, md: 4 } }}>
          <Button
            variant="contained"
            sx={{
              alignSelf: { xs: "stretch", sm: "flex-start" },
              px: { xs: 1.8, sm: 2.2, md: 2.4 },
              py: { xs: 0.7, sm: 0.8 },
              fontSize: { xs: "16px", sm: "17px" },
              borderRadius: "30px",
              textTransform: "none",
              fontWeight: 600,

              position: "relative",
              overflow: "hidden",

              background: "#971d05",

              // text always on top
              zIndex: 1,

              "& span": {
                position: "relative",
                zIndex: 2,
              },

              // center burst layer
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
                background: "#971d05",
              },
            }}
            onClick={handleClick}
          >
            <span>Know More</span>
          </Button>
        </Box>
      </Box>
    </MotionCard>
  );
};

/* ===================== MAIN MEDIA ===================== */
const Media = () => {

  const [mediaData, setMediaData] = useState([]);
  const [heading, setHeading] = useState([]);


  const fetchMediaData = async () => {
    try {
      const res = await axiosInstance.get(
        endpoints.homeMedia.getHomeMediaData
      );

      const dataResHeading = await axiosInstance.get(endpoints.HomeCms.getHomeCms)
      setHeading(dataResHeading?.data?.data)

      setMediaData(res?.data?.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMediaData();
  }, []);


  return (
    <Box
      id="media-section"
      sx={{
        width: "100%",
        position: "relative",
        backgroundImage: `url(${MediaBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: { xs: 6, md: 10 },
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.92) 100%)",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: "50px",
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
              {heading?.media_head}
            </Typography>

            {/* Subtle underline accent */}
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

        {/* STACKED SCROLL SECTION */}
        <Box
          sx={{
            position: "relative",
            pb: { xs: 2 },
          }}
        >
          {mediaData.map((card, index) => (
            <StackedCard key={card.id} card={card} index={index} />
          ))}
        </Box>

      </Container>
    </Box>
  );
};

export default Media;
