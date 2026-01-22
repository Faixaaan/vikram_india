import React, { useState, useRef, useEffect } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { axiosInstance } from "../../../Api/Axios/axios";
import { endpoints } from "../../../Api/EndPoints/endpoints";
import { useNavigate } from "react-router-dom";

/* ========= SAFE KEYFRAMES (DO NOT TOUCH LAYOUT) ========= */
const animations = {
  "@keyframes textFromLeft": {
    from: {
      opacity: 0,
      transform: "translateX(-40px)",
    },
    to: {
      opacity: 1,
      transform: "translateX(0)",
    },
  },
};

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await axiosInstance.get(endpoints.Banner.getBanner);
      setData(res?.data?.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    navigate("/contact/query-form");
  };

  return (
    <Box sx={{ position: "relative" }}>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        loop={false}
        style={{ width: "100%", height: "100%" }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Box
              sx={{
                width: "100%",
                height: { xs: "420px", sm: "480px", md: "520px" },
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}
            >
              <Container
                maxWidth="xl"
                sx={{
                  height: "100%",
                  position: "relative",
                  display: "flex",
                  flexDirection: { xs: "column", md: "row" },
                  alignItems: { xs: "flex-start", md: "center" },
                  justifyContent: { xs: "flex-start", md: "space-between" },
                  px: { xs: 2, md: 6 },
                  pt: { xs: 4, md: 0 },
                }}
              >
                {/* LEFT MENU (UNCHANGED) */}
                <Box
                  sx={{
                    color: "#fff",
                    zIndex: 2,
                    width: { xs: "100%", md: "auto" },
                    display: { xs: "none", md: "block" },
                    marginTop: "64px",
                  }}
                >
                  {data.map((h, i) => (
                    <Box
                      key={i}
                      sx={{ mb: "22px", cursor: "pointer" }}
                      onClick={() => {
                        swiperRef.current.slideTo(i);
                        setActiveIndex(i);
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: { xs: "16px", md: "20px" },
                          fontFamily: "Open Sans",
                          lineHeight: "100%",
                          mb: 1,
                          fontWeight: 400,
                          color: activeIndex === i ? "red" : "#fff",
                          width: "250px",
                        }}
                      >
                        {h.subtitle}
                      </Typography>

                      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                        <Box
                          sx={{
                            flexGrow: 1,
                            borderBottom:
                              activeIndex === i
                                ? "1px solid red"
                                : "1px solid #fff",
                          }}
                        />
                        <Typography
                          sx={{
                            fontSize: { xs: "12px", md: "14px" },
                            fontWeight: 400,
                            color: activeIndex === i ? "red" : "#fff",
                            fontFamily: "Open Sans",
                          }}
                        >
                          {h.no}
                        </Typography>
                      </Box>
                    </Box>
                  ))}
                </Box>

                {/* CENTER CONTENT (LAYOUT UNTOUCHED) */}
                <Box
                  sx={{
                    textAlign: "center",
                    color: "#fff",
                    position: { md: "absolute" },
                    top: { md: "43%", xs: "80px" },
                    left: { md: "55%" },
                    transform: { md: "translate(-50%, -50%)" },
                    zIndex: 2,
                    mt: { xs: "85px", md: 0, sm: "150px" },
                    width: { xs: "100%", md: "auto" },
                    mx: { xs: "auto", sm: "auto", md: "0" },
                    ...animations, // only for keyframes
                  }}
                >
                  {/* TITLE */}
                  <Typography
                    key={activeIndex}
                    sx={{
                      fontSize: { xs: "31px", sm: "26px", md: "40px" },
                      fontWeight: 700,
                      minWidth: { md: "850px", sm: "75%" },
                      maxWidth: { md: "850px", sm: "75%" },
                      fontFamily: "Open Sans",
                      lineHeight: "120%",
                      color: "#fff",
                      textShadow: "6px 6px 6px rgba(0, 0, 0, 0.9)",
                      margin: "0px auto",

                      /* ✅ SAFE ANIMATION */
                      opacity: 0,
                      animation: "textFromLeft 0.9s ease forwards",
                    }}
                  >
                    {item.title}
                  </Typography>

                  {/* BUTTON */}
                  <Button
                    key={`${activeIndex}-btn`}
                    variant="contained"
                    sx={{
                      mt: 3,
                      background:
                        "linear-gradient(to bottom, #EE1D25, #000)",
                      "&:hover": {
                        background:
                          "linear-gradient(to bottom, #a00000, #600000)",
                      },
                      borderRadius: "15px",
                      padding: "9px 12px",
                      fontSize: { xs: "14px", md: "15px" },
                      fontFamily: "Open Sans",
                      textTransform: "capitalize",

                      /* ✅ SAFE ANIMATION */
                      opacity: 0,
                      animation: "textFromLeft 1.1s ease forwards",
                    }}
                    onClick={handleClick}
                  >
                    Get a Quote
                  </Button>
                </Box>
              </Container>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* PAGINATION (UNCHANGED) */}
      <style>{`
        .swiper-pagination {
          bottom: 15px !important;
        }
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #fff;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: red !important;
          opacity: 1 !important;
        }
      `}</style>
    </Box>
  );
};

export default Banner;
