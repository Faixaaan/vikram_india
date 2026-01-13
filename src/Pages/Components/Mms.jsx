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
import mmsStructure from "../../Assets/mms-structure.jpg"; // update your image
import '../../App.css'

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { axiosInstance } from "../../Api/Axios/axios";
import { endpoints } from "../../Api/EndPoints/endpoints";


const leftMenu = [
  "INTRODUCTION",
  "MANUFACTURING AND QUALITY",
  "MANUFACTURING WITH HIGH TENSILE IS PROJECT",
  "PRODUCTS",
  "SOLAR PUMPS (AC PUMPS)",

];

const Introduction = () => {

  const [data, setData] = useState([]);
      
          const fetchData = async () => {
              try {
                  const res = await axiosInstance.get(endpoints.ModuleMounting.Introduction)
                  setData(res?.data?.data)
              }
              catch (err) {
                  console.log(err)
              }
          }
  useEffect(() => {
    fetchData()
      window.scrollTo({
          top: 0,
          behavior: "smooth"
      });
  }, []);
  return (
    <Box sx={{ padding: { xs: 2, md: 4 } }}>
      <Container maxWidth='xl'>
        {/* Breadcrumb */}
        <Breadcrumbs sx={{ mb: 2, fontSize: "14px" }}>
          <MLink component={Link} to="/" underline="hover" color="inherit">
            Home
          </MLink>
          <Typography color="inherit">Product & Services</Typography>
          <Typography color="text.primary">Module Mounting Structure</Typography>
          <Typography color="text.primary">Introduction</Typography>
        </Breadcrumbs>

        {/* PAGE TITLE */}
        <Typography
          sx={{
            fontSize: "28px",
            fontWeight: 700,
            mb: 1,
            color: "#000",
            textTransform: "uppercase",
            fontFamily: "Open Sans"
          }}
        >
          Module Mounting Structure
        </Typography>

        <Typography sx={{ fontSize: "15px", mb: 3, color: "#d32f2f", fontFamily: "Open Sans" }}>
          Setting global benchmarks in tea processing machinery industry
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
                fontFamily: "Open Sans"
              }}
            >
              Product & Services
            </Typography>

            <Divider sx={{ mb: 2 }} />

            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "14px",
                mb: 1,
                color: "#d32f2f",
                fontFamily: "Open Sans"
              }}
            >
              Module Mounting Structure
            </Typography>

            <List sx={{ border: "1px solid #ddd" }}>
              {leftMenu.map((item) => (
                <ListItemButton
                  key={item}
                  component={Link}
                  to={`/products/${item.toLowerCase().replace(/ /g, "-")}`}
                  sx={{
                    borderBottom: "1px solid #eee",
                    backgroundColor: item === "INTRODUCTION" ? "green" : "transparent",
                    color: item === "INTRODUCTION" ? "#fff" : "#000",
                    "&:hover": {
                      backgroundColor: item === "INTRODUCTION" ? "green" : "#f5f5f5",
                    },
                    fontFamily: "Open Sans"
                  }}
                >
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      fontSize: "14px",
                      fontWeight: 500,
                      fontFamily: "Open Sans"
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
                fontSize: "24px",
                fontWeight: 600,
                mb: 2,
                fontFamily: "Open Sans"
              }}
            >
              {data?.title}
            </Typography>


            {/* Introduction */}


            <Accordion sx={{
              background: "#fff",
              boxShadow: "0px 2px 8px rgba(0,0,0,0.10)",
              borderRadius: "8px",
              "&:before": { display: "none" },
              mt: 4
            }}>
              <AccordionSummary sx={{
                backgroundColor: "#f8f8f8",
                borderBottom: "1px solid #eee",
                borderRadius: "8px"
              }} expandIcon={<ExpandMoreIcon sx={{ color: "#c00" }} />}>
                <Typography sx={{ fontSize: {md:"20px",xs:"16px"}, fontWeight: 600 }}>
                  {data?.section1_title}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>

                <Box>
                  <Grid container spacing={2}>
                    <Grid item size={{xs:12,md:7}}>
                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontFamily: "Open Sans",
                          textAlign: "justify"
                        }}
                          dangerouslySetInnerHTML={{ __html: data?.section1_desc1 }}
                      >
                       
                      </Typography>
                    </Grid>

                    <Grid item size={{xs:12,md:5}}>
                      <img src={data?.section1_image} alt=""
                        style={{ width: "100%", borderRadius: "6px" }}
                      />
                    </Grid>
                  </Grid>

                 

                  <Typography
                    sx={{
                      fontSize: "16px",
                      fontFamily: "Open Sans",
                      textAlign: "justify",
                      mt: 2
                    }}
                     dangerouslySetInnerHTML={{ __html: data?.section1_desc2 }}
                  >
                   
                  </Typography>
                </Box>

              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Introduction;
