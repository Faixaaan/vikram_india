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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
} from "@mui/material";

import { Link } from "react-router-dom";
import FanImage from "../../../Assets/logo 1.png"; // update your image
import '../../../App.css'
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { axiosInstance } from "../../../Api/Axios/axios";
import { endpoints } from "../../../Api/EndPoints/endpoints";
import image1 from '../../../Assets/machine-big-03.jpg'


const leftMenu = [
  "WITHERING PROCESS",
  "ROLLING PROCESS",
  "OXIDATION PROCESS",
  "DRYING PROCESS",
  "SORTING,CLEANING,GRADING AND STORAGE SYSTEM",
  "WORKSHOP MACHINERY",

];

const Rolling = () => {

  const [data, setData] = useState([])
  const [tableData, setTableData] = useState([])
  console.log(tableData, 'tableData')

  const fetchDryingData = async () => {
    try {
      const res = await axiosInstance.get(endpoints.teaProcessingMachinery.rolling);
      setData(res?.data?.data)
      if (res?.data.data) {
        const parsedData = JSON.parse(res?.data?.data?.table_data);
        setTableData(parsedData)
      }
    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchDryingData()
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);
  return (
    <Box sx={{ padding: { xs: 2, md: 4 } }}>
      <Container maxWidth='xl'>
        {/* Breadcrumb */}
        <Breadcrumbs sx={{ mb: 2, fontSize: "15px" }}>
          <MLink component={Link} to="/" underline="hover" color="inherit">
            Home
          </MLink>
          <Typography color="inherit" sx={{ fontSize: "15px" }}>Product & Services</Typography>
          <Typography color="text.primary" sx={{ fontSize: "15px", textDecoration: "none" }} component={Link} underline="hover" to="/products/tea-processing-machinery/black-tea">CTC Tea Processing Machinery</Typography>
          <Typography color="text.primary" sx={{ fontSize: "15px" }}>Rolling Process</Typography>
        </Breadcrumbs>





        <Grid container spacing={3}>
          {/* Left Sidebar */}
          <Grid item size={{ xs: 12, md: 3 }} sx={{ mt: 2 }} >
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
                  to={`/products/ctc/${item.toLowerCase().replace(/ /g, "-")}`}
                  sx={{
                    borderBottom: "1px solid #eee",
                    backgroundColor: item === "ROLLING PROCESS" ? "Green" : "transparent",
                    color: item === "ROLLING PROCESS" ? "#fff" : "#000",
                    "&:hover": {
                      backgroundColor: item === "ROLLING PROCESS" ? "Green" : "#f5f5f5",
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
          <Grid item size={{ xs: 12, md: 9 }} sx={{ mt: 3 }}>





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
                  {data?.section1_title}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Box>
                  <Grid container spacing={2}>
                    {/* RIGHT IMAGE */}
                    <Grid item size={{ xs: 12, md: 4 }}>
                      <img src={data?.section1_image} style={{ width: "100%" }} />
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
                        dangerouslySetInnerHTML={{
                          __html: data?.section1_desc || ""
                        }}

                      >



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
                  {data?.section2_title}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Box>
                  <Grid container spacing={2}>
                    {/* RIGHT IMAGE */}
                    <Grid item size={{ xs: 12, md: 4 }}>
                      <img src={data?.section2_image} style={{ width: "100%" }} />
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
                        dangerouslySetInnerHTML={{
                          __html: data?.section2_desc || ""
                        }}

                      >



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
                  {data?.section3_title}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Box>
                  <Grid container spacing={2}>
                    {/* RIGHT IMAGE */}
                    <Grid item size={{ xs: 12, md: 4 }}>
                      <img src={data?.section3_image} style={{ width: "100%" }} />
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
                        dangerouslySetInnerHTML={{
                          __html: data?.section3_desc || ""
                        }}

                      >



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
                  {data?.section4_title}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Box>
                  <Grid container spacing={2}>
                    {/* RIGHT IMAGE */}
                    <Grid item size={{ xs: 12, md: 4 }}>
                      <img src={data?.section4_image} style={{ width: "100%" }} />
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
                        dangerouslySetInnerHTML={{
                          __html: data?.section4_desc || ""
                        }}

                      >



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
                  {data?.section5_title}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Box>
                  <Grid container spacing={2}>
                    {/* RIGHT IMAGE */}
                    <Grid item size={{ xs: 12, md: 4 }}>
                      <img src={data?.section5_image} style={{ width: "100%" }} />
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
                        dangerouslySetInnerHTML={{
                          __html: data?.section5_desc || ""
                        }}

                      >



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
                  {data?.section6_title}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Box>
                  <Grid container spacing={2}>
                    {/* RIGHT IMAGE */}
                    <Grid item size={{ xs: 12, md: 4 }}>
                      <img src={data?.section6_image} style={{ width: "100%" }} />
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
                        dangerouslySetInnerHTML={{
                          __html: data?.section6_desc || ""
                        }}

                      >



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

export default Rolling;
