

import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Modal,
  IconButton,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";



import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { axiosInstance } from "../../../Api/Axios/axios";
import { endpoints } from "../../../Api/EndPoints/endpoints";

const Testimonial = () => {
  const [data, setData] = useState([]);
  const [heading, setHeading] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  /* ---------------- FETCH DATA ---------------- */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(
          endpoints.Testimonials.getTestimonialsData
        );

        const dataResHeading = await axiosInstance.get(endpoints.HomeCms.getHomeCms)


        setData(res?.data?.data || []);
        setHeading(dataResHeading?.data?.data)

      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  /* ---------------- STAR RENDER ---------------- */
  const renderStars = (rating) => (
    <Box sx={{ display: "flex", gap: "4px", mt: "4px" }}>
      {[...Array(5)].map((_, i) => (
        <Typography
          key={i}
          sx={{
            color: i < rating ? "#FFD700" : "#555",
            fontSize: "14px",
          }}
        >
          ★
        </Typography>
      ))}
    </Box>
  );

  return (
    <Box sx={{
      pt: { xs: 8, md: 10 }, pb: { xs: 0, md: 10 },
      background: "radial-gradient(circle at top left, #10131a, #0f172a 40%, #111827 100%)",
    }}>

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
            {heading?.testimonial_head}
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
      {/* -------- Slider Wrapper -------- */}
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, md: 6 },
          position: "relative",
          pb: { xs: 8, md: 0 },
        }}
      >
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}

          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}

          speed={800}

          loop={true}
          spaceBetween={20}
          slidesPerGroup={1}
          centeredSlides={false}
          breakpoints={{
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            600: {
              slidesPerView: 2,
              slidesPerGroup: 1,
            },
            960: {
              slidesPerView: 3,
              slidesPerGroup: 1,
            },
          }}
        >

          {data.map((item, index) => (
            <SwiperSlide key={index} style={{ padding: "10px 0px" }}>


              {/* <Card
                sx={{
                  height: 300,
                  borderRadius: "20px",
                  p: 3,
                  background: "linear-gradient(135deg,#2e2e33,#1f1f23)",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",

                  transition: "all 0.4s ease",
                  transformStyle: "preserve-3d",

                  "&:hover": {
                    transform: "scale(1.02) translateZ(40px)",
                    background:
                      "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",

                  },
                }}
              >


                <Box>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Avatar
                      src={item.image}
                      sx={{ width: 60, height: 60 }}
                    />
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: "18px",
                        }}
                      >
                        {item.name}
                      </Typography>
                      {renderStars(item.rating)}
                    </Box>
                  </Box>

                  <CardContent sx={{ px: 0, mt: 2 }}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        lineHeight: 1.6,
                        opacity: 0.9,
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {item.msg}
                    </Typography>
                  </CardContent>
                </Box>

                <Box
                  onClick={() => {
                    setSelectedTestimonial(item);
                    setOpenModal(true);
                  }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    width: "170px",
                    height: "44px",
                    borderRadius: "25px",
                    background:
                      "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                    border:
                      "1px solid rgba(255,255,255,0.2)",
                    cursor: "pointer",
                    px: 1,
                    "&:hover": {
                      background:
                        "rgba(255,255,255,0.2)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      bgcolor: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <PlayArrowIcon sx={{ color: "#c00" }} />
                  </Box>
                  <Typography sx={{ fontSize: 14 }}>
                    Watch Review
                  </Typography>
                </Box>
              </Card> */}

              <Card
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  minHeight: 360,
                  borderRadius: "28px",
                  p: 3,
                  background: "#ffffff",
                  border: "1px solid rgba(255,255,255,0.7)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "all .4s ease",
                  boxShadow:
                    "0 10px 40px rgba(15, 23, 42, 0.08)",

                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: -100,
                    right: -100,
                    width: 280,
                    height: 280,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, rgba(27,170,99,.12), rgba(39,111,158,.10))",
                  },

                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow:
                      "0 25px 60px rgba(15,23,42,.16)",
                  },
                }}
              >
                {/* Quote */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 15,
                    right: 15,
                    fontSize: { xs: "100px", md: "120px" },
                    color: "rgba(39, 110, 158, 0.19)",
                    fontWeight: 900,
                    lineHeight: 1,
                    fontFamily: "'Poppins', sans-serif",
                    zIndex: 0,
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                >
                  ”
                </Box>

                {/* TOP */}
                <Box sx={{ position: "relative", zIndex: 2 }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Avatar
                      src={item.image}
                      sx={{
                        width: 70,
                        height: 70,
                        border: "4px solid #fff",
                        boxShadow:
                          "0 8px 20px rgba(0,0,0,.12)",
                      }}
                    />

                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          fontSize: "20px",
                          color: "#111827",
                          mb: 0.5,
                        }}
                      >
                        {item.name}
                      </Typography>

                      <Typography
                        sx={{
                          color: "#6b7280",
                          fontSize: "13px",
                          mb: 0.5,
                        }}
                      >
                        Verified Client
                      </Typography>

                      {renderStars(item.rating)}
                    </Box>
                  </Box>

                  {/* MESSAGE */}
                  <CardContent sx={{ px: 0, pt: 3 }}>
                    <Typography
                      sx={{
                        fontSize: "15px",
                        lineHeight: 1.9,
                        color: "#4b5563",
                        display: "-webkit-box",
                        WebkitLineClamp: 5,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {item.msg}
                    </Typography>
                  </CardContent>
                </Box>

                {/* BUTTON */}
                <Box
                  onClick={() => {
                    setSelectedTestimonial(item);
                    setOpenModal(true);
                  }}
                  sx={{
                    position: "relative",
                    zIndex: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    width: "190px",
                    height: "56px",
                    borderRadius: "50px",
                    background:
                      "linear-gradient(90deg, #1BAA63, #276f9e)",
                    cursor: "pointer",
                    px: 1,
                    transition: "all .35s ease",
                    boxShadow:
                      "0 10px 20px rgba(39,111,158,.18)",

                    "&:hover": {
                      transform: "scale(1.03)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      background: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <PlayArrowIcon
                      sx={{
                        color: "#1BAA63",
                        fontSize: 24,
                        ml: "2px",
                      }}
                    />
                  </Box>

                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontSize: "15px",
                      color: "#fff",
                    }}
                  >
                    Watch Review
                  </Typography>
                </Box>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* -------- Custom Arrows -------- */}
        <Box
          className="custom-prev"
          sx={{
            position: "absolute",
            top: "45%",
            left: { md: 25 },

            transform: "translateY(-50%)",
            width: 45,
            height: 45,
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, #1BAA63, #276f9e)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 20px rgba(0,0,0,.25)",
            border: "1px solid rgba(255,255,255,.1)",

            "&:hover": {
              transform: "translateY(-3px)",
            },

            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#fff",
            zIndex: 10,
          }}
        >
          <ChevronLeftIcon />
        </Box>


        <Box
          className="custom-next"
          sx={{
            position: "absolute",
            top: "45%",
            right: { md: 25 },

            transform: "translateY(-50%)",
            width: 45,
            height: 45,
            borderRadius: "50%",
            background: "linear-gradient(90deg, #1fbf6f, #2574a9)",

            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#fff",
            zIndex: 10,
          }}
        >
          <ChevronRightIcon />
        </Box>



      </Box>

      {/* -------- Modal -------- */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform:
              "translate(-50%, -50%)",
            width: { xs: "95%", md: "700px" },
            bgcolor: "#fff",
            borderRadius: "12px",
            p: 3,
            boxShadow: 24,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={() => setOpenModal(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Typography variant="h6" sx={{ mb: 2 }}>
            {selectedTestimonial?.name}
          </Typography>

          <Box
            sx={{
              position: "relative",
              paddingTop: "56.25%",
              borderRadius: "10px",
              overflow: "hidden",
              background: "#000",
            }}
          >
            {selectedTestimonial?.video ? (
              <video
                src={selectedTestimonial.video}
                controls
                autoPlay
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              />
            ) : (
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "14px",
                }}
              >
                No Video Available
              </Box>
            )}
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Testimonial;
