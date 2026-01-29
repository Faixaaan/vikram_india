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
import structure4 from '../../Assets/mm-structure-04.jpg'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { axiosInstance } from "../../Api/Axios/axios";
import { endpoints } from "../../Api/EndPoints/endpoints";


const leftMenu = [
  "INFRASTRUCTURE & MACHINERY",
  "PRODUCT & PORTFOLIO",
  "TECHNICAL SPECIFICATION",
  "QUALITY & SAFETY",


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
          <Typography color="text.primary">INFRASTRUCTURE & MACHINERY</Typography>
        </Breadcrumbs>

        



        <Grid container spacing={3}>
          {/* Left Sidebar */}
          <Grid item size={{ xs: 12, md: 3 }} sx={{mt:2}}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "15px",
                mb: 2,
                textTransform: "uppercase",
                fontFamily: "Roboto"
              }}
            >
              Product & Services
            </Typography>


            <List sx={{ border: "1px solid #ddd" }}>
              {leftMenu.map((item) => (
                <ListItemButton
                  key={item}
                  component={Link}
                  to={`/products/${item.toLowerCase().replace(/ /g, "-")}`}
                  sx={{
                    borderBottom: "1px solid #eee",
                    backgroundColor: item === "INFRASTRUCTURE & MACHINERY" ? "#1A73E8" : "transparent",
                    color: item === "INFRASTRUCTURE & MACHINERY" ? "#fff" : "#000",
                    "&:hover": {
                      backgroundColor: item === "INFRASTRUCTURE & MACHINERY" ? "#1A73E8" : "#f5f5f5",
                    },
                    fontFamily: "Roboto"
                  }}
                >
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      fontSize: "14px",
                      fontWeight: 500,
                      fontFamily: "Roboto"
                    }}
                  />
                </ListItemButton>
              ))}
            </List>
          </Grid>

          {/* Right Content Section */}
          <Grid item size={{ xs: 12, md: 9 }} sx={{mt:5}}>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: 600,
                mt: 1,
                fontFamily: "Roboto",
                color:"#1A73E8"
              }}
            >
              INFRASTRUCTURE & MACHINERY
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
              }} expandIcon={<ExpandMoreIcon sx={{ color: "#1A73E8" }} />}>
                <Typography sx={{ fontSize: { md: "20px", xs: "16px" }, fontWeight: 500 }}>
                  Roll Forming Lines
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Box>
                  <Grid container spacing={2}>
                    {/* RIGHT IMAGE */}
                    <Grid item size={{ xs: 12, md: 4 }}>
                      <img src={structure4} style={{ width: "100%" }} />
                    </Grid>

                    {/* LEFT CONTENT */}
                    <Grid item size={{ xs: 12, md: 8 }}>

                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontFamily: "Roboto",
                          textAlign: "justify",
                          mt: 0
                        }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repudiandae magnam cupiditate rerum at aliquam? Soluta esse dolor alias commodi, temporibus quidem illo aliquam nobis assumenda est voluptatum hic aspernatur atque ab. Eveniet natus, enim vel iure minus, est reprehenderit aspernatur veritatis omnis eum maiores illum quasi delectus aliquid quidem.


                      </Typography>



                    </Grid>



                    {/* BOTTOM FULL WIDTH CONTENT */}


                  </Grid>
                </Box>
              </AccordionDetails>
            </Accordion>
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
              }} expandIcon={<ExpandMoreIcon sx={{ color: "#1A73E8" }} />}>
                <Typography sx={{ fontSize: { md: "20px", xs: "16px" }, fontWeight: 500 }}>
                  CNC Punching & Cutting
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box>
                  <Grid container spacing={2}>
                    {/* RIGHT IMAGE */}
                    <Grid item size={{ xs: 12, md: 4 }}>
                      <img src={structure4} style={{ width: "100%" }} />
                    </Grid>

                    {/* LEFT CONTENT */}
                    <Grid item size={{ xs: 12, md: 8 }}>

                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontFamily: "Roboto",
                          textAlign: "justify",
                          mt: 0
                        }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repudiandae magnam cupiditate rerum at aliquam? Soluta esse dolor alias commodi, temporibus quidem illo aliquam nobis assumenda est voluptatum hic aspernatur atque ab. Eveniet natus, enim vel iure minus, est reprehenderit aspernatur veritatis omnis eum maiores illum quasi delectus aliquid quidem.


                      </Typography>



                    </Grid>



                    {/* BOTTOM FULL WIDTH CONTENT */}


                  </Grid>
                </Box>
              </AccordionDetails>

            </Accordion>
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
              }} expandIcon={<ExpandMoreIcon sx={{ color: "#1A73E8" }} />}>
                <Typography sx={{ fontSize: { md: "20px", xs: "16px" }, fontWeight: 500 }}>
                  Raw Material & Decoiling
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Box>
                  <Grid container spacing={2}>
                    {/* RIGHT IMAGE */}
                    <Grid item size={{ xs: 12, md: 4 }}>
                      <img src={structure4} style={{ width: "100%" }} />
                    </Grid>

                    {/* LEFT CONTENT */}
                    <Grid item size={{ xs: 12, md: 8 }}>

                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontFamily: "Roboto",
                          textAlign: "justify",
                          mt: 0
                        }}
                      >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repudiandae magnam cupiditate rerum at aliquam? Soluta esse dolor alias commodi, temporibus quidem illo aliquam nobis assumenda est voluptatum hic aspernatur atque ab. Eveniet natus, enim vel iure minus, est reprehenderit aspernatur veritatis omnis eum maiores illum quasi delectus aliquid quidem.


                      </Typography>



                    </Grid>



                    {/* BOTTOM FULL WIDTH CONTENT */}


                  </Grid>
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
