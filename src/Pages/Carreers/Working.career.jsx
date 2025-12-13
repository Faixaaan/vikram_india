import React, { useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Breadcrumbs,
  Link as MLink,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Container,
} from "@mui/material";

import { Link } from "react-router-dom";
import mmsStructure from "../../Assets/contact-ban.jpg"; // update your image
import "../../App.css";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import group2 from "../../Assets/working-01.jpg";
import group3 from '../../Assets/working-02.jpg'
import group4 from '../../Assets/working-03.jpg'

const leftMenu = ["WORKING WITH US", "APPLY NOW"];

const WorkingCareer = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Box sx={{ padding: { xs: 2, md: 4 } }}>
      <Container maxWidth="xl">
        {/* Breadcrumb */}
        <Breadcrumbs sx={{ mb: 2, fontSize: "14px" }}>
          <MLink component={Link} to="/" underline="hover" color="inherit">
            Home
          </MLink>
          <Typography color="inherit">Careers</Typography>

          <Typography color="text.primary">Working With Us</Typography>
        </Breadcrumbs>

        {/* PAGE TITLE */}
        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: 700,
            mb: 1,
            color: "#000",
            textTransform: "uppercase",
            fontFamily: "Open Sans",
          }}
        >
          CAREERS
        </Typography>

        <Grid container spacing={3}>
          {/* Left Sidebar */}
          <Grid item size={{ xs: 12, md: 3 }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "15px",
                mb: 2,
                textTransform: "uppercase",
                fontFamily: "Open Sans",
              }}
            >
              Working With Us
            </Typography>

            <Divider sx={{ mb: 2 }} />

            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "14px",
                mb: 1,
                color: "#d32f2f",
                fontFamily: "Open Sans",
              }}
            >
              CAREERS
            </Typography>

            <List sx={{ border: "1px solid #ddd" }}>
              {leftMenu.map((item) => (
                <ListItemButton
                  key={item}
                  component={Link}
                  to={`/careers/${item.toLowerCase().replace(/ /g, "-")}`}
                  sx={{
                    borderBottom: "1px solid #eee",
                    backgroundColor:
                      item === "WORKING WITH US" ? "green" : "transparent",
                    color: item === "WORKING WITH US" ? "#fff" : "#000",
                    "&:hover": {
                      backgroundColor:
                        item === "WORKING WITH US" ? "green" : "#f5f5f5",
                    },
                    fontFamily: "Open Sans",
                  }}
                >
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      fontSize: "14px",
                      fontWeight: 500,
                      fontFamily: "Open Sans",
                    }}
                  />
                </ListItemButton>
              ))}
            </List>
          </Grid>

          {/* Right Content Section */}
          <Grid item size={{ xs: 12, md: 9 }}>
            <Typography
              sx={{
                fontSize: "28px",
                fontWeight: 600,
                lineHeight: "120%",
                fontFamily: "Open Sans",
              }}
            >
              Working with Us
            </Typography>
            <Typography
              sx={{
                color: "#df0000",
                fontSize: "14px",
                fontFamily: "Open Sans",
                fontWeight: "400",
              }}
            >
              Producing a team of leaders
            </Typography>

            {/* Introduction */}

            <Box
              sx={{
                mt: 4,
                boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
                borderRadius: "12px",
                p: 0,

                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundColor: "#fff", // fallback
                padding: "20px 20px 0px 20px",
              }}
            >
              <Grid container spacing={2} mt={4}>
                <Grid
                  size={{ xs: 12, md: 4 }}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <img src={group2} />
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                  <Typography
                    sx={{
                      fontFamily: "",
                      fontSize: "18px",
                      lineHeight: "120%",
                      marginBottom: "15px",
                      fontWeight: "500",
                      color: "#121111ff",
                    }}
                  >
                    In keeping with the mission, values and operating principles
                    of Vikram Group, we believe in creating a work environment
                    that values and respects every member of our team.
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "",
                      fontSize: "18px",
                      textAlign: "justify",
                      marginTop: "15px!important",
                      fontWeight: "400",
                      lineHeight: "120%",
                      color: "#121111ff",
                    }}
                  >
                    Over the years it has been our constant endeavour to ensure
                    continual development of our team members - spiritually,
                    physically, emotionally and intellectually.
                  </Typography>
                </Grid>
              </Grid>
            </Box>

            {/* next card */}
             <Box
              sx={{
                mt: 4,
                boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
                borderRadius: "12px",
                p: 0,

                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundColor: "#fff", // fallback
                padding: "20px 20px 0px 20px",
              }}
            >
              <Grid container spacing={2} mt={4}>
                <Grid
                  size={{ xs: 12, md: 4 }}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <img src={group3} />
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                  <Typography
                    sx={{
                      fontFamily: "",
                      fontSize: "18px",
                      lineHeight: "120%",
                      marginBottom: "15px",
                      fontWeight: "500",
                      color: "#121111ff",
                    }}
                  >
                   We aim at producing leaders and not mere workers. By providing the platform to learn through a comprehensive framework of training and employee engagement initiatives, we provide perfect opportunity for personal and professional growth.
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "",
                      fontSize: "18px",
                      textAlign: "justify",
                      marginTop: "15px!important",
                      fontWeight: "400",
                      lineHeight: "120%",
                      color: "#121111ff",
                    }}
                  >
                   Our employees get to take on daily challenges, new responsibilities and work with professionals from across the globe.

                  </Typography>
                </Grid>
              </Grid>
            </Box>

            {/* third card */}
            <Box
              sx={{
                mt: 4,
                boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
                borderRadius: "12px",
                p: 0,

                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundColor: "#fff", // fallback
                padding: "20px 20px 0px 20px",
              }}
            >
              <Grid container spacing={2} mt={4}>
                <Grid
                  size={{ xs: 12, md: 4 }}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <img src={group4} />
                </Grid>
                <Grid size={{ xs: 12, md: 8 }}>
                  <Typography
                    sx={{
                      fontFamily: "",
                      fontSize: "18px",
                      lineHeight: "120%",
                      marginBottom: "15px",
                      fontWeight: "500",
                      color: "#121111ff",
                    }}
                  >
                   At Vikram we believe in nurturing and retaining the best talent by inculcating a culture of learning, performing, developing creativity and teamwork.
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "",
                      fontSize: "18px",
                      textAlign: "justify",
                      marginTop: "15px!important",
                      fontWeight: "400",
                      lineHeight: "120%",
                      color: "#121111ff",
                    }}
                  >
                   Here you would not just be working for a living; you will be a part of the global team that is focused on making a difference in the everyday lives of people. If you think you embody these values then this is the place for you and your career.



                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WorkingCareer;
