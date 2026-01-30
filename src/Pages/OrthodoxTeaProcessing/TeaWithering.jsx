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

import '../../App.css'
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { axiosInstance } from "../../../src/Api/Axios/axios";
import { endpoints } from "../../../src/Api/EndPoints/endpoints";
import controllerImage from "../../../src/Assets/rolling.jpg";


const leftMenu = [
  "WITHERING",
  "ROLLING",
  "FERMENTING",
  "DRYING",
  "SORTING",
  "PACKING",

];

const specifications = [
  { label: "Type", value: "4 Wheel bi-planner chains (Opened/Closed)" },
  { label: "Unit Load Capacity", value: "30–60 Kgs. (Maximum) Each Hook" },
  { label: "Working Tension", value: "700 Kgs" },
  { label: "Breaking Strength", value: "6000 Kgs." },
  {
    label: "Tracks",
    value:
      "Standard Track made of 4 / 3.15 mm thick covered section of Material MS (IS-2062).",
  },
  {
    label: "Wheels",
    value:
      "Material Alloy steel with C3 Clearance. Lubricated & Sealed for Life.",
  },
  {
    label: "Chain Link Plate",
    value:
      "32 x 4 mm Thick made of Carbon Steel duly heat treated.",
  },
  { label: "Pitch", value: '12" / 15"' },
  {
    label: "Axles",
    value: "Made of Carbon Steel duly Heat Treated.",
  },
  {
    label: "Drive Chain",
    value: "1.5\" Pitch American Standard Dog Chain.",
  },
  {
    label: "Drive Sprocket",
    value:
      "1.5\" Pitch suitable no. of teeth, 2 Nos. simplex sprocket.",
  },
];


const TeaWithering = () => {

  const [data, setData] = useState([])

  const fetchDryingData = async () => {
    try {
      const res = await axiosInstance.get(endpoints.teaProcessingMachinery.withering);
      setData(res?.data?.data)
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
          <Typography color="inherit" sx={{  fontSize: "15px" }}>Product & Services</Typography>
          <Typography color="text.primary" sx={{  fontSize: "15px" }}>Orthodox Tea Processing Machinery</Typography>
          <Typography color="text.primary" sx={{  fontSize: "15px" }}>Withering</Typography>
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
                  to={`/products/ctc/${`tea`}${item.toLowerCase().replace(/ /g, "-")}`}
                  sx={{
                    borderBottom: "1px solid #eee",
                    backgroundColor: item === "WITHERING" ? "green" : "transparent",
                    color: item === "WITHERING" ? "#fff" : "#000",
                    "&:hover": {
                      backgroundColor: item === "WITHERING" ? "green" : "#f5f5f5",
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
          <Grid item size={{ xs: 12, md: 9 }} sx={{mt:6}}>
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: 600,
                mb: 0,
                fontFamily: "Roboto",
                color:"red"
              }}
            >
              {data?.section1_title}
            </Typography>
            

            <Grid container spacing={2}>
              {/* Left Description */}
              <Grid item xs={12} md={8}>



              </Grid>

              {/* Right Image */}
              <Grid item xs={12} md={4}>
                <Box
                  component="img"
                  src={data?.image}
                  alt="Axial Flow Fan"
                  sx={{
                    width: "100%",
                    borderRadius: "4px",
                    border: "1px solid #ddd",
                  }}
                />
              </Grid>
            </Grid>

            {/* Technical Specification Table */}
            {/* Technical Specifications */}
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                mt: 4,
                mb: 2,
                fontFamily: "Roboto",
              }}
            >
              {data?.section2_title}
            </Typography>
            

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
              }} expandIcon={<ExpandMoreIcon sx={{ color: "red" }} />}>
                <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: "Roboto" }}>
                  Axial Flow Fans
                </Typography>
              </AccordionSummary>

              <AccordionDetails>

                <Grid container spacing={3} alignItems="flex-start">

                  {/* LEFT TEXT */}
                  <Grid item size={{ xs: 12, md: 8 }} >
                    <Typography sx={{ fontFamily: "Roboto", color: "#333", textAlign: "justify" }}>
                      The aero-dynamically designed Axial Flow Fans from Vikram India are made of high quality aluminium alloy and are suitable for different sizes of withering troughs. These fans ensure uniformity of withering, reduce power consumption and are tested for vibration, noise levels, air delivery and static pressure.


                    </Typography>
                    <Typography sx={{ fontFamily: "Roboto", color: "#333", textAlign: "justify", marginTop: "20px" }}>
                      Vikram also offers Centrifugal Fans and Induced Draught Fans in different sizes as per the customer's requirement.


                    </Typography>
                  </Grid>

                  {/* RIGHT IMAGE */}
                  <Grid item size={{ xs: 12, md: 4 }} textAlign="right">
                    <Box
                      component="img"
                      src={controllerImage}
                      alt="VFBD Machine"
                      sx={{
                        width: "100%",
                        maxWidth: "260px",
                        borderRadius: "8px",
                      }}
                    />
                  </Grid>
                </Grid>

                {/* YOUR EXISTING TABLE WITHOUT ANY CHANGE */}
                <TableContainer component={Paper} sx={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)", marginTop: "20px" }}>
                  <Table sx={{ minWidth: 650 }}>
                    <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 700, fontFamily: "Roboto" }}>MODEL</TableCell>
                        <TableCell sx={{ fontWeight: 700, fontFamily: "Roboto" }}>Impeller Diameter</TableCell>
                        <TableCell sx={{ fontWeight: 700, fontFamily: "Roboto" }}>Motor</TableCell>
                        <TableCell sx={{ fontWeight: 700, fontFamily: "Roboto" }}>Air Flow Rate</TableCell>
                        <TableCell sx={{ fontWeight: 700, fontFamily: "Roboto" }}>Air Velocity</TableCell>
                        <TableCell sx={{ fontWeight: 700, fontFamily: "Roboto" }}>Static Pressure</TableCell>
                        <TableCell sx={{ fontWeight: 700, fontFamily: "Roboto" }}>Total Pressure</TableCell>
                        <TableCell sx={{ fontWeight: 700, fontFamily: "Roboto" }}>Shaft BHP</TableCell>
                      </TableRow>
                    </TableHead>

                    <TableBody>
                      <TableRow>
                        <TableCell>VAF - 403</TableCell>
                        <TableCell>106 cm</TableCell>
                        <TableCell>3 HP</TableCell>
                        <TableCell>19000 cfm</TableCell>
                        <TableCell>11.1 m/sec</TableCell>
                        <TableCell>0.75 inch</TableCell>
                        <TableCell>19.9</TableCell>
                        <TableCell>2.6 hp</TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell>VAF - 483</TableCell>
                        <TableCell>119 cm</TableCell>
                        <TableCell>3 HP</TableCell>
                        <TableCell>23500 cfm</TableCell>
                        <TableCell>9.5 m/sec</TableCell>
                        <TableCell>0.71 inch</TableCell>
                        <TableCell>18.0</TableCell>
                        <TableCell>2.9 hp</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>

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
              }} expandIcon={<ExpandMoreIcon sx={{ color: "red" }} />}>
                <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: "Roboto" }}>
                  Pre-Fabricating withering Troughs
                </Typography>
              </AccordionSummary>

              <AccordionDetails>

                <Grid container spacing={3} alignItems="flex-start">

                  {/* LEFT TEXT */}
                  <Grid item size={{ xs: 12, md: 4 }} textAlign="center">
                    <Box
                      component="img"
                      src={controllerImage}
                      alt="VFBD Machine"
                      sx={{
                        width: "100%",
                        maxWidth: "260px",
                        borderRadius: "8px",
                      }}
                    />
                    <Typography sx={{ fontWeight: "600", fontSize: "14px", marginTop: "8px" }}>
                      Pre Fabricated Trough
                    </Typography>
                  </Grid>
                  <Grid item size={{ xs: 12, md: 4 }} textAlign="center">
                    <Box
                      component="img"
                      src={controllerImage}
                      alt="VFBD Machine"
                      sx={{
                        width: "100%",
                        maxWidth: "260px",
                        borderRadius: "8px",
                      }}
                    />
                    <Typography sx={{ fontWeight: "600", fontSize: "14px", marginTop: "8px" }}>
                      Withering Trough (Brick Tyre)
                    </Typography>
                  </Grid>


                </Grid>



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
              }} expandIcon={<ExpandMoreIcon sx={{ color: "red" }} />}>
                <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: "Roboto" }}>
                  Heating Arrangment
                </Typography>
              </AccordionSummary>

              <AccordionDetails>

                <Grid container spacing={3} alignItems="flex-start">

                  {/* LEFT TEXT */}
                  <Grid item size={{ xs: 12, md: 8 }} >
                    <Typography sx={{ fontFamily: "Roboto", color: "#333", textAlign: "justify" }}>
                      Vikram's unique 'Eldora' Air Heaters have both, a heat generation unit and a heat exchanger unit ensuring better heat transfer. All cast iron parts are made of special heat resistant and superior quality castings to ensure these easily withstand rise in heat and temperature.


                    </Typography>

                  </Grid>

                  {/* RIGHT IMAGE */}
                  <Grid item size={{ xs: 12, md: 4 }} textAlign="right">
                    <Box
                      component="img"
                      src={controllerImage}
                      alt="VFBD Machine"
                      sx={{
                        width: "100%",
                        maxWidth: "260px",
                        borderRadius: "8px",
                      }}
                    />
                  </Grid>
                </Grid>

                {/* YOUR EXISTING TABLE WITHOUT ANY CHANGE */}
                <TableContainer component={Paper} sx={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)", marginTop: "20px" }}>
                  <Table sx={{ minWidth: 650 }}>
                    <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 700, fontFamily: "Roboto" }}>DESCRIPTION</TableCell>
                        <TableCell sx={{ fontWeight: 700, fontFamily: "Roboto" }}>UNIT</TableCell>
                        <TableCell sx={{ fontWeight: 700, fontFamily: "Roboto" }}>MODEL 14 V</TableCell>
                        <TableCell sx={{ fontWeight: 700, fontFamily: "Roboto" }}>MODEL 16 V</TableCell>
                        <TableCell sx={{ fontWeight: 700, fontFamily: "Roboto" }}>MODEL 18 V</TableCell>


                      </TableRow>
                    </TableHead>

                    <TableBody>
                      <TableRow>
                        <TableCell>FLUE PASSES per side </TableCell>
                        <TableCell>nos.</TableCell>
                        <TableCell>5-Pass</TableCell>
                        <TableCell>5-Pass</TableCell>
                        <TableCell>5-Pass</TableCell>

                      </TableRow>

                      <TableRow>
                        <TableCell>VAF - 483</TableCell>
                        <TableCell>119 cm</TableCell>
                        <TableCell>3 HP</TableCell>
                        <TableCell>23500 cfm</TableCell>
                        <TableCell>9.5 m/sec</TableCell>

                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>

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
              }} expandIcon={<ExpandMoreIcon sx={{ color: "red" }} />}>
                <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: "Roboto" }}>
                  Leaf Handling - Monorail / Conveyors
                </Typography>
              </AccordionSummary>

              <AccordionDetails>

                <Grid container spacing={3} alignItems="flex-start">

                  {/* LEFT TEXT */}
                  <Grid item size={{ xs: 12, md: 8 }} >
                    <Typography sx={{ fontFamily: "Roboto", color: "#333", textAlign: "justify" }}>
                      Vikram's Monorail/ Conveyors are available with open/closed tracks and also 3 wheel/ 4 wheel options. Constructed using heavy duty metals, the conveyors are durable and ensure convenient and fast handling of tea leaves.


                    </Typography>

                  </Grid>

                  {/* RIGHT IMAGE */}
                  <Grid item size={{ xs: 12, md: 4 }} textAlign="right">
                    <Box
                      component="img"
                      src={controllerImage}
                      alt="VFBD Machine"
                      sx={{
                        width: "100%",
                        maxWidth: "260px",
                        borderRadius: "8px",
                      }}
                    />
                  </Grid>
                </Grid>

                {/* YOUR EXISTING TABLE WITHOUT ANY CHANGE */}
                <Box
                  sx={{
                    border: "1px solid #e0e0e0",
                    mt: 3,
                    fontFamily: "Roboto",
                  }}
                >
                  {specifications.map((item, index) => (
                    <Grid
                      container
                      key={index}
                      sx={{
                        borderBottom:
                          index !== specifications.length - 1
                            ? "1px solid #e0e0e0"
                            : "none",
                        backgroundColor: index % 2 === 0 ? "#f7f5ee" : "#fbfaf6",
                      }}
                    >
                      {/* Left Label */}
                      <Grid
                        item
                        xs={12}
                        md={4}
                        sx={{
                          padding: "12px 16px",
                          fontWeight: 600,
                          color: "#000",
                          borderRight: { md: "1px solid #e0e0e0" },
                        }}
                      >
                        {item.label}
                      </Grid>

                      {/* Right Value */}
                      <Grid
                        item
                        xs={12}
                        md={8}
                        sx={{
                          padding: "12px 16px",
                          color: "#000",
                        }}
                      >
                        {item.value}
                      </Grid>
                    </Grid>
                  ))}
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
              }} expandIcon={<ExpandMoreIcon sx={{ color: "red" }} />}>
                <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: "Roboto" }}>
                  Continuous Withering Machine

                </Typography>
              </AccordionSummary>

              <AccordionDetails>

                <Grid container spacing={3} alignItems="flex-start">

                  {/* LEFT TEXT */}
                  <Grid item size={{ xs: 12, md: 4 }} textAlign="center">
                    <Box
                      component="img"
                      src={controllerImage}
                      alt="VFBD Machine"
                      sx={{
                        width: "100%",
                        maxWidth: "260px",
                        borderRadius: "8px",
                      }}
                    />
                    <Typography sx={{ fontWeight: "600", fontSize: "14px", marginTop: "8px" }}>
                      Continuous Chemical Withering
                    </Typography>
                  </Grid>
                  <Grid item size={{ xs: 12, md: 4 }} textAlign="center">
                    <Box
                      component="img"
                      src={controllerImage}
                      alt="VFBD Machine"
                      sx={{
                        width: "100%",
                        maxWidth: "260px",
                        borderRadius: "8px",
                      }}
                    />
                    <Typography sx={{ fontWeight: "600", fontSize: "14px", marginTop: "8px" }}>
                      Continuous Physical Withering

                    </Typography>
                  </Grid>


                </Grid>



              </AccordionDetails>
            </Accordion>


          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TeaWithering;
