import React, { useEffect, useState } from "react";
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
import { axiosInstance } from "../../Api/Axios/axios";
import { endpoints } from "../../Api/EndPoints/endpoints";

const leftMenu = ["WORKING WITH US", "APPLY NOW"];

const WorkingCareer = () => {

  const [carrerData, setCarrerData] = useState([])
  const [data, setData] = useState({})

  const fetchCarrerData = async () => {
    try {
      const res = await axiosInstance.get(endpoints.Career.getCarrers)
      const resData = await axiosInstance.get(endpoints.Career.cmsCareerData)
      setData(resData?.data?.data)
      
      setCarrerData(res?.data?.data)
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
              {data?.contect1_main_title}
            </Typography>
            <Typography
              sx={{
                color: "#df0000",
                fontSize: "14px",
                fontFamily: "Open Sans",
                fontWeight: "400",
              }}
            >
              {data?.contect1_sub_title}
            </Typography>

            {/* Introduction */}

            {
              carrerData?.map((item, i) => {
                return (
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
                    key={i}
                  >
                    <Grid container spacing={2} mt={4}>
                      <Grid
                        size={{ xs: 12, md: 4 }}
                        sx={{ display: "flex", justifyContent: "center" }}
                      >
                        <img src={item?.image} />
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
                          {item?.description}
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
                )
              })
            }



          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WorkingCareer;
