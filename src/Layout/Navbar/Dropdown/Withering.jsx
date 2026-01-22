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


const leftMenu = [
  "WITHERING",
  "ROLLING",
  "FERMENTING",
  "DRYING",
  "SORTING",
  "PACKING",
  "WORKSHOP EQUIPMENT",
  "QUALITY CONTROL EQUIPMENT",
  "UTILITIES",
];

const Withering = () => {

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
        <Breadcrumbs sx={{ mb: 2, fontSize: "14px" }}>
          <MLink component={Link} to="/" underline="hover" color="inherit">
            Home
          </MLink>
          <Typography color="inherit">Product & Services</Typography>
          <Typography color="text.primary">CTC Tea Processing Machinery</Typography>
          <Typography color="text.primary">Withering</Typography>
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
          CTC Tea Processing Machinery
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
                color: "red",
                fontFamily: "Open Sans"
              }}
            >
              CTC Tea Processing Machinery
            </Typography>

            <List sx={{ border: "1px solid #ddd" }}>
              {leftMenu.map((item) => (
                <ListItemButton
                  key={item}
                  component={Link}
                  to={`/products/ctc/${item.toLowerCase().replace(/ /g, "-")}`}
                  sx={{
                    borderBottom: "1px solid #eee",
                    backgroundColor: item === "WITHERING" ? "Green" : "transparent",
                    color: item === "WITHERING" ? "#fff" : "#000",
                    "&:hover": {
                      backgroundColor: item === "WITHERING" ? "Green" : "#f5f5f5",
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
                mb: 0,
                fontFamily: "Open Sans"
              }}
            >
              {data?.section1_title}
            </Typography>
            <Typography sx={{ fontSize: "15px", mb: 3, color: "red", fontFamily: "Open Sans" }}>
              Setting global benchmarks in tea processing machinery industry
            </Typography>

            <Grid container spacing={2}>
              {/* Left Description */}
              <Grid item xs={12} md={8}>
                <Typography sx={{ mb: 2, fontSize: "18px", lineHeight: "24px", fontFamily: "Open Sans" }}
                  dangerouslySetInnerHTML={{ __html: data?.section1_desc }}

                >

                </Typography>


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
                fontFamily: "Open Sans",
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
                <Typography sx={{ fontWeight: 600, fontFamily: "Open Sans" }}>
                  View Technical Specifications
                </Typography>
              </AccordionSummary>

              <AccordionDetails>

                {/* YOUR EXISTING TABLE WITHOUT ANY CHANGE */}
                <TableContainer component={Paper} sx={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
                  <Table sx={{ minWidth: 650 }}>
                    <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                      <TableRow>
                        <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>MODEL</TableCell>
                        <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>Impeller Diameter</TableCell>
                        <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>Motor</TableCell>
                        <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>Air Flow Rate</TableCell>
                        <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>Air Velocity</TableCell>
                        <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>Static Pressure</TableCell>
                        <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>Total Pressure</TableCell>
                        <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>Shaft BHP</TableCell>
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

          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Withering;
