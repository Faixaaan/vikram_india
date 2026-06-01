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
  Accordion,
  AccordionSummary,
  AccordionDetails,

  Container,
} from "@mui/material";

import { Link } from "react-router-dom";
import "../../App.css";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { axiosInstance } from "../../Api/Axios/axios";
import { endpoints } from "../../Api/EndPoints/endpoints";

const leftMenu = ["WORKING WITH US", "APPLY NOW"];

const WorkingCareer = () => {


  const [data, setData] = useState({})

  const fetchCarrerData = async () => {
    try {

      const resData = await axiosInstance.get(endpoints.Career.cmsCareerData)
      setData(resData?.data?.data)

    }
    catch (err) {
      console.log(err)
    }
  }



  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    fetchCarrerData()
  }, []);
  return (
    <Box sx={{ padding: { xs: 2, md: 4 } }}>
      <Container sx={{p: 0}} maxWidth="xl">
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
          {/* <Grid item size={{ xs: 12, md: 9 }}>
            <Accordion

              sx={{
                mt: 0,
                mb: 2,
                boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
                borderRadius: "12px !important",
                "&:before": { display: "none" }, 
              }}
            >
            
              <AccordionSummary sx={{
                backgroundColor: "#f8f8f8",
                borderBottom: "1px solid #eee",
                borderRadius: "8px"
              }} expandIcon={<ExpandMoreIcon />}>
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: 600,
                  }}
                >
                  {data?.title}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Grid container spacing={2} alignItems="center">

                 
                  <Grid item size={{ xs: 12, md: 4 }} sx={{ display: "flex", justifyContent: "center" }}>
                    <img
                      src={data?.image}
                      alt=""
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "8px",
                      }}
                    />
                  </Grid>

            
                  <Grid item xs={12} md={8} size={{ xs: 12, md: 8 }}>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        lineHeight: "140%",
                        fontWeight: 500,
                        color: "#121111ff",
                        fontFamily: "Roboto"
                      }}
                      dangerouslySetInnerHTML={{ __html: data?.description }}
                    />
                  </Grid>

                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid> */}
          <Grid item size={{ xs: 12, md: 9 }}>
            <Box>

              {/* TOP LABEL */}
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
                  fontSize: { xs: "42px", md: "72px" },
                  fontWeight: 800,
                  lineHeight: 1,
                  color: "#111",
                  maxWidth: "900px",
                  mb: 3,
                }}
              >
                {data?.title}
              </Typography>

              

              {/* LARGE IMAGE */}
              <Box
                component="img"
                src={data?.image}
                alt={data?.title}
                sx={{
                  width: "100%",
                  height: { xs: "280px", md: "500px" },
                  objectFit: "cover",
                  borderRadius: "30px",
                  mb: 6,
                }}
              />

              {/* CONTENT SECTION */}
              <Grid container spacing={5}>
                <Grid item xs={12} md={4}>
                  <Typography
                    sx={{
                      fontSize: "32px",
                      fontWeight: 800,
                      lineHeight: 1.2,
                      position: "sticky",
                      top: "100px",
                    }}
                  >
                    {data?.title}
                  </Typography>
                </Grid>

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
              {/* EMPLOYEE BENEFITS */}
              <Box

                sx={{
                  mt: 12,
                  mb: 10,

                  p: { xs: 1.5, md: 6 },

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
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "3px",
                    color: "#7dd3fc",
                    textTransform: "uppercase",
                    mb: 1,
                  }}
                >
                  BENEFITS & PERKS
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "38px", md: "60px" },
                    fontWeight: 800,
                    color: "#fff",
                    mb: 2,
                  }}
                >
                  Employee Benefits
                </Typography>

                <Typography
                  sx={{
                    color: "#dadada",
                    maxWidth: "800px",
                    lineHeight: 1.9,
                    mb: 8,
                    fontSize: "17px",
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, illum commodi hic temporibus architecto illo corrupti cumque fugiat ad unde accusamus, nisi provident veniam eaque sunt quos laudantium nesciunt aut.
                </Typography>

                {[
                  {
                    title: "Career Growth",
                    description: `
        <p>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, illum commodi hic temporibus architecto illo corrupti cumque fugiat ad unde accusamus, nisi provident veniam eaque sunt quos laudantium nesciunt aut.
        </p>

        <ul>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas.</li>
        </ul>
      `,
                  },
                  {
                    title: "Learning & Development",
                    description: `
        <p>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, illum commodi hic temporibus architecto illo corrupti cumque fugiat ad unde accusamus, nisi provident veniam eaque sunt quos laudantium nesciunt aut.
        </p>

        <ul>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas.</li>
         <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas.</li>
        </ul>
      `,
                  },

                  {
                    title: "Recognition & Rewards",
                    description: `
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, illum commodi hic temporibus architecto illo corrupti cumque fugiat ad unde accusamus, nisi provident veniam eaque sunt quos laudantium nesciunt aut.

        <ul>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas.</li>
        </ul>
      `,
                  },
                  {
                    title: "Recognition & Rewards",
                    description: `
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, illum commodi hic temporibus architecto illo corrupti cumque fugiat ad unde accusamus, nisi provident veniam eaque sunt quos laudantium nesciunt aut.
        </p>

        <ul>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quas.</li>
        </ul>
      `,
                  },
                ].map((item, index) => (
                  <Box
                    key={index}
                    sx={{
                      position: "relative",
                      overflow: "hidden",

                      p: { xs: 1, md: 5 },

                      mb: 4,

                      borderRadius: "32px",

                      background: "#fff",

                      border: "1px solid rgba(0,0,0,0.06)",

                      boxShadow: "0 10px 40px rgba(0,0,0,0.05)",

                      transition: ".4s ease",

                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                      },
                    }}
                  >
                    {/* Gradient Circle */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: "-120px",
                        right: "-120px",

                        width: "280px",
                        height: "280px",

                        borderRadius: "50%",

                        background:
                          "linear-gradient(135deg,#14b91d,#1171b0)",

                        opacity: 0.08,

                        filter: "blur(10px)",
                      }}
                    />

                    {/* Number */}
                    <Typography
                      sx={{
                        position: "absolute",
                        top: 25,
                        right: 30,

                        fontSize: { xs: "50px", md: "80px" },

                        fontWeight: 800,

                        color: "rgba(0,0,0,0.05)",

                        lineHeight: 1,
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </Typography>

                    <Grid container spacing={4}>
                      {/* Left */}
                      <Grid item xs={12} md={4}>
                        <Typography
                          sx={{
                            fontSize: { xs: "28px", md: "36px" },
                            fontWeight: 800,
                            color: "#111",
                            position: "relative",
                            zIndex: 2,
                          }}
                        >
                          {item.title}
                        </Typography>
                      </Grid>

                      {/* Right */}
                      <Grid item xs={12} md={9}>
                        <Box
                          sx={{
                            position: "relative",
                            zIndex: 2,

                            color: "#555",

                            fontSize: "16px",

                            lineHeight: 2,

                            "& p": {
                              mb: 2,
                            },

                            "& ul": {
                              pl: 3,
                              mt: 2,
                            },

                            "& li": {
                              mb: 1,
                            },
                          }}
                          dangerouslySetInnerHTML={{
                            __html: item.description,
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                ))}
              </Box>

            </Box>
          </Grid>


        </Grid>
      </Container>
    </Box>
  );
};

export default WorkingCareer;
