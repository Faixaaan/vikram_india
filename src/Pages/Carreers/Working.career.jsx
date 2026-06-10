import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItemButton,
  ListItemText,

  Breadcrumbs,
  Link as MLink,


  Container,
} from "@mui/material";

import { Link } from "react-router-dom";
import "../../App.css";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";


import { axiosInstance } from "../../Api/Axios/axios";
import { endpoints } from "../../Api/EndPoints/endpoints";

const leftMenu = ["WORKING WITH US", "APPLY NOW"];

const WorkingCareer = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [data, setData] = useState({})

  const images = data?.image || [];

  const fetchCarrerData = async () => {
    try {
      const resData = await axiosInstance.get(
        endpoints.Career.cmsCareerData
      );

      setData(resData?.data?.data);
      setCurrentImage(0);
    } catch (err) {
      console.log(err);
    }
  };






  const handleNext = () => {
    if (!images.length) return;

    setCurrentImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    if (!images.length) return;

    setCurrentImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };


  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    fetchCarrerData()
  }, []);


  return (
    <Box sx={{ padding: { xs: 2, md: 4 } }}>
      <Container sx={{ p: 0 }} maxWidth="xl">
        {/* Breadcrumb */}
        <Breadcrumbs sx={{ mb: 2, fontSize: "14px" }}>
          <MLink component={Link} to="/home" underline="hover" color="inherit">
            Home
          </MLink>
          <Typography color="inherit" sx={{ fontSize: "14px" }}>Carrers</Typography>

          <Typography color="text.primary" sx={{ fontSize: "14px" }}>Working With us</Typography>
        </Breadcrumbs>

        {/* PAGE TITLE */}
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 700,
            mb: 1,
            color: "#000",
            textTransform: "uppercase",
            fontFamily: "Roboto",
          }}
        >

          careers
        </Typography>

        <Grid container spacing={3}>
          {/* Left Sidebar */}
          <Grid item size={{ xs: 12, md: 3 }}>


            <List sx={{ border: "1px solid #ddd" }}>
              {leftMenu.map((item) => (
                <ListItemButton
                  key={item}
                  component={Link}
                  to={`/careers/${item.toLowerCase().replace(/ /g, "-")}`}
                  sx={{
                    borderBottom: "1px solid #eee",

                    background:
                      item === "WORKING WITH US"
                        ? "linear-gradient(125deg, #14b91d, #1171b0)"
                        : "transparent",

                    color: item === "WORKING WITH US" ? "#fff" : "#000",

                    "&:hover": {
                      background:
                        item === "WORKING WITH US"
                          ? "linear-gradient(125deg, #14b91d, #1171b0)"
                          : "#f5f5f5",
                    },

                    fontFamily: "Roboto",
                  }}
                >
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      fontSize: "14px",
                      fontWeight: 500,
                      fontFamily: "Roboto",
                    }}
                  />
                </ListItemButton>
              ))}
            </List>
          </Grid>

          {/* Right Content Section */}

          <Grid item size={{ xs: 12, md: 9 }}>
            <Box>

              {/* TOP LABEL */}

              <Box sx={{ textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", pb: "20px" }}>

                <Typography
                  sx={{
                    color: "#14b91d",
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "3px",
                    textTransform: "uppercase",
                    mb: 2,
                  }}
                >
                  CAREERS
                </Typography>

                {/* BIG TITLE */}
                <Typography
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
                  {data?.title}
                </Typography>
              </Box>



              {/* LARGE IMAGE */}
              <Box
                sx={{
                  position: "relative",
                  mb: 6,
                }}
              >
                <Box
                  component="img"
                  src={
                    images?.length
                      ? images[currentImage]
                      : ""
                  }
                  alt={data?.title}
                  sx={{
                    width: "100%",
                    height: { xs: "280px", md: "500px" },
                    objectFit: "cover",
                    borderRadius: "30px",
                    transition: "all .4s ease",
                  }}
                />

                {/* PREVIOUS */}
                <Box
                  onClick={handlePrev}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: 20,
                    transform: "translateY(-50%)",

                    width: 60,
                    height: 60,

                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.95)",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    cursor: "pointer",

                    boxShadow: "0 12px 30px rgba(0,0,0,.15)",
                    backdropFilter: "blur(10px)",

                    transition: "all .3s ease",

                    "&:hover": {
                      transform: "translateY(-50%) scale(1.08)",
                      background: "linear-gradient(90deg, #1BAA63, #276f9e)",
                      color: "#fff",
                    },
                  }}
                >
                  <ChevronLeftIcon sx={{ fontSize: 34 }} />
                </Box>

                {/* NEXT */}
                <Box
                  onClick={handleNext}
                  sx={{
                    position: "absolute",
                    top: "50%",
                    right: 20,
                    transform: "translateY(-50%)",

                    width: 60,
                    height: 60,

                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.95)",

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",

                    cursor: "pointer",

                    boxShadow: "0 12px 30px rgba(0,0,0,.15)",
                    backdropFilter: "blur(10px)",

                    transition: "all .3s ease",

                    "&:hover": {
                      transform: "translateY(-50%) scale(1.08)",
                      background: "linear-gradient(90deg, #1BAA63, #276f9e)",
                      color: "#fff",
                    },
                  }}
                >
                  <ChevronRightIcon sx={{ fontSize: 34 }} />
                </Box>
              </Box>
              {/* CONTENT SECTION */}
              <Grid container spacing={5}>

                <Grid item xs={12} md={8}>
                  <Box
                    sx={{
                      color: "#555",
                      fontSize: "17px",
                      lineHeight: 2,
                      "& p": {
                        mb: 2,
                      },
                    }}
                    dangerouslySetInnerHTML={{
                      __html: data?.description,
                    }}
                  />
                </Grid>
              </Grid>

              {/* EMPLOYEE BENEFITS */}

              <Box
                sx={{
                  mt: 12,
                  mb: 10,

                  p: { xs: 3, md: 6 },

                  borderRadius: "40px",

                  background:
                    "linear-gradient(135deg, #00743a 0%, #276f9e 45%, #312e81 100%)",

                  position: "relative",
                  overflow: "hidden",

                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: "-120px",
                    right: "-120px",

                    width: "350px",
                    height: "350px",

                    borderRadius: "50%",

                    background:
                      "radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 70%)",
                  },

                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "-150px",
                    left: "-150px",

                    width: "400px",
                    height: "400px",

                    borderRadius: "50%",

                    background:
                      "radial-gradient(circle, rgba(20,185,29,0.12) 0%, transparent 70%)",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "32px", md: "60px" },
                    fontWeight: 800,
                    color: "#fff",
                    mb: 5,
                    textAlign: "center",
                  }}
                >
                  {data?.section1_title}
                </Typography>

                {/* SINGLE CARD */}
                <Box
                  sx={{
                    background: "#fff",
                    borderRadius: "30px",
                    p: { xs: 3, md: 6 },

                    boxShadow: "0 15px 50px rgba(0,0,0,0.12)",
                  }}
                >
                  <Grid container spacing={2}>
                    {data?.benefits_list?.map((item, index) => (
                      <Grid
                        key={index}
                        size={{
                          xs: 12,
                          sm: 6,
                          md: 4,
                          lg: 3,
                        }}
                      >
                        <Box
                          sx={{
                            position: "relative",

                            display: "flex",
                            alignItems: "center",

                            minHeight: "70px",

                            px: 3,
                            py: 2,

                            borderRadius: "16px",

                            background:
                              "rgba(255,255,255,0.85)",

                            backdropFilter: "blur(12px)",

                            border:
                              "1px solid rgba(20,185,29,0.15)",

                            boxShadow:
                              "0 8px 25px rgba(0,0,0,0.06)",

                            transition: "all .35s ease",

                            "&:hover": {
                              transform: "translateY(-4px)",
                              boxShadow:
                                "0 15px 35px rgba(0,0,0,0.12)",
                            },
                            overflow: "hidden",

                            "&:before": {
                              content: '""',
                              position: "absolute",
                              top: "-50px",
                              right: "-50px",

                              width: "120px",
                              height: "120px",

                              borderRadius: "50%",

                              background:
                                "linear-gradient(135deg,#14b91d,#1171b0)",

                              opacity: 0.08,
                            },
                          }}
                        >
                          {/* Number */}
                          <Typography
                            sx={{
                              fontSize: "14px",
                              fontWeight: 800,

                              color: "#14b91d",

                              mr: 1.5,

                              minWidth: "28px",
                            }}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </Typography>

                          {/* Title */}
                          <Typography
                            sx={{
                              fontSize: {
                                xs: "15px",
                                md: "16px",
                              },

                              fontWeight: 600,

                              color: "#111",

                              lineHeight: 1.3,
                            }}
                          >
                            {item}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Grid>


        </Grid>
      </Container>
    </Box>
  );
};

export default WorkingCareer;
