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

const leftMenu = ["ADDRESSES", "QUERY FORM"];

const Adresses = () => {
  
  


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
          <Typography color="inherit">Contact Us</Typography>

          <Typography color="text.primary">Adresses</Typography>
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
          CONTACT US
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
              ADRESSES
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
              CONTACT US
            </Typography>

            <List sx={{ border: "1px solid #ddd" }}>
              {leftMenu.map((item) => (
                <ListItemButton
                  key={item}
                  component={Link}
                  to={`/contact/${item.toLowerCase().replace(/ /g, "-")}`}
                  sx={{
                    borderBottom: "1px solid #eee",
                    backgroundColor:
                      item === "ADDRESSES" ? "green" : "transparent",
                    color: item === "ADDRESSES" ? "#fff" : "#000",
                    "&:hover": {
                      backgroundColor:
                        item === "ADDRESSES" ? "green" : "#f5f5f5",
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
              ADRESSES
            </Typography>
            <Typography
              sx={{
                color: "#df0000",
                fontSize: "14px",
                fontFamily: "Open Sans",
                fontWeight: "400",
              }}
            >
              Our network across the globe
            </Typography>

            {/* Introduction */}

            <Accordion
              sx={{
                background: "#fff",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.10)",
                borderRadius: "8px",
                "&:before": { display: "none" },
                mt: 4,
              }}
            >
              <AccordionSummary
                sx={{
                  backgroundColor: "#f8f8f8",
                  borderBottom: "1px solid #eee",
                  borderRadius: "8px",
                }}
                expandIcon={<ExpandMoreIcon sx={{ color: "#c00" }} />}
              >
                <Typography
                  sx={{ fontSize: { md: "20px", xs: "16px" }, fontWeight: 600 }}
                >
                  Addresses
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Box sx={{ paddingBottom: "10px" }}>
                  <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 5 }}>
                      <img
                        src={mmsStructure}
                        alt=""
                        style={{
                          width: "100%",
                          borderRadius: "6px",
                          height: "300px",
                        }}
                      />
                    </Grid>
                    <Grid
                      item
                      size={{ xs: 12, md: 7 }}
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontFamily: "Open Sans",
                          textAlign: "justify",
                        }}
                      >
                        With foot prints across India and beyond, Vikram India
                        has a comprehensive network of various departments and
                        offices that together aim to deliver the best.
                      </Typography>
                    </Grid>
                  </Grid>

                  
                </Box>
              </AccordionDetails>
            </Accordion>

            {/* map  */}
            <Accordion
              sx={{
                background: "#fff",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.10)",
                borderRadius: "8px",
                "&:before": { display: "none" },
                mt: 4,
              }}
            >
              <AccordionSummary
                sx={{
                  backgroundColor: "#f8f8f8",
                  borderBottom: "1px solid #eee",
                  borderRadius: "8px",
                }}
                expandIcon={<ExpandMoreIcon sx={{ color: "#c00" }} />}
              >
                <Typography
                  sx={{ fontSize: { md: "20px", xs: "16px" }, fontWeight: 600 }}
                >
                  Corporate Office
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Box>
                  <Typography></Typography>
                  <Grid container spacing={2} sx={{ mt: 4 }}>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: "600",
                          fontFamily: "Open Sans",
                        }}
                      >
                        Tobacco House
                      </Typography>
                      <ul style={{ padding: "0px" }}>
                        <li
                          style={{
                            listStyle: "none",
                            fontSize: "16px",
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            marginTop: "8px",
                          }}
                        >
                          1, Old Court House Corner Kolkata-700 001 West Bengal
                          India
                        </li>

                        <li
                          style={{
                            listStyle: "none",
                            fontSize: "16px",
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            marginTop: "8px",
                          }}
                        >
                          Phone No. + 91 33 2230 7299 (4 lines)
                        </li>
                        <li
                          style={{
                            listStyle: "none",
                            fontSize: "16px",
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            marginTop: "8px",
                          }}
                        >
                          Email:{" "}
                          <span style={{ color: "red" }}>
                            info@vikramindia.in
                          </span>
                        </li>
                      </ul>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: "600",
                          fontFamily: "Open Sans",
                        }}
                      >
                        Office/Works
                      </Typography>
                      <ul style={{ padding: "0px" }}>
                        <li
                          style={{
                            listStyle: "none",
                            fontSize: "16px",
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            marginTop: "8px",
                          }}
                        >
                          Vill : Jaladhulaguri, N.D.T. Complex
                        </li>

                        <li
                          style={{
                            listStyle: "none",
                            fontSize: "16px",
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            marginTop: "8px",
                          }}
                        >
                          New Karala P.O. Dhulaguri P.S. Sankarail Dist. Howrah
                          -711 302 West Bengal India
                        </li>
                        <li
                          style={{
                            listStyle: "none",
                            fontSize: "16px",
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            marginTop: "8px",
                          }}
                        >
                          Email:{" "}
                          <span style={{ color: "red" }}>
                            sales@vikramindia.in
                          </span>
                        </li>
                      </ul>
                    </Grid>
                  </Grid>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                background: "#fff",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.10)",
                borderRadius: "8px",
                "&:before": { display: "none" },
                mt: 4,
              }}
            >
              <AccordionSummary
                sx={{
                  backgroundColor: "#f8f8f8",
                  borderBottom: "1px solid #eee",
                  borderRadius: "8px",
                }}
                expandIcon={<ExpandMoreIcon sx={{ color: "#c00" }} />}
              >
                <Typography
                  sx={{ fontSize: { md: "20px", xs: "16px" }, fontWeight: 600 }}
                >
                  Regional Offices
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Box>
                  <Typography></Typography>
                  <Grid container spacing={2} sx={{ mt: 4 }}>
                    <Grid size={{ xs: 12, md: 4 }}>
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: "600",
                          fontFamily: "Open Sans",
                        }}
                      >
                        Siliguri Office
                      </Typography>
                      <ul style={{ padding: "0px" }}>
                        <li
                          style={{
                            listStyle: "none",
                            fontSize: "16px",
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            marginTop: "8px",
                          }}
                        >
                          Mr. Sachin Kansal Green Town, D-3, Bankimnagar
                          Sarkarpara, 2nd Mile, Sevoke Road Siliguri - 734001,
                          District : Darjeeling West Bengal
                        </li>

                        <li
                          style={{
                            listStyle: "none",
                            fontSize: "16px",
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            marginTop: "8px",
                          }}
                        >
                          Phone No. +9733078213
                        </li>
                        <li
                          style={{
                            listStyle: "none",
                            fontSize: "16px",
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            marginTop: "8px",
                          }}
                        >
                          Email:{" "}
                          <span style={{ color: "red" }}>
                            sachin.kansal@vikramindia.in ,sales@vikramindia.in
                          </span>
                        </li>
                      </ul>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: "600",
                          fontFamily: "Open Sans",
                        }}
                      >
                        Tinsukia Office
                      </Typography>
                      <ul style={{ padding: "0px" }}>
                        <li
                          style={{
                            listStyle: "none",
                            fontSize: "16px",
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            marginTop: "8px",
                          }}
                        >
                          Mr. P K Verma Makum Road, Udyog Nagar, District :
                          Tinsukia P. O. : Sukhanpukhuri - 786 146 Assam
                        </li>

                        <li
                          style={{
                            listStyle: "none",
                            fontSize: "16px",
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            marginTop: "8px",
                          }}
                        >
                          Mobile : 9435037404
                        </li>
                        <li
                          style={{
                            listStyle: "none",
                            fontSize: "16px",
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            marginTop: "8px",
                          }}
                        >
                          Email:{" "}
                          <span style={{ color: "red" }}>
                            prakash.verma@vikramindia.in, sales@vikramindia.in
                          </span>
                        </li>
                      </ul>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: "600",
                          fontFamily: "Open Sans",
                        }}
                      >
                       Coimbatore office
                      </Typography>
                      <ul style={{ padding: "0px" }}>
                        <li
                          style={{
                            listStyle: "none",
                            fontSize: "16px",
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            marginTop: "8px",
                          }}
                        >
                            Mr. A.Jagathesan
16, Vetrivelava Nagar
Sengalipalayam, NGGO colony P.O.
Via -Thudiyalur, Coimbatore - 641022,
Tamil Nadu
                        </li>

                        <li
                          style={{
                            listStyle: "none",
                            fontSize: "16px",
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            marginTop: "8px",
                          }}
                        >
                          Mobile :  9843021965
                        </li>
                        <li
                          style={{
                            listStyle: "none",
                            fontSize: "16px",
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            marginTop: "8px",
                          }}
                        >
                          Email:{" "}
                          <span style={{ color: "red" }}>
                             a.jagathesan@vikramindia.in, sales@vikramindia.in
                          </span>
                        </li>
                      </ul>
                    </Grid>
                  </Grid>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion
              sx={{
                background: "#fff",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.10)",
                borderRadius: "8px",
                "&:before": { display: "none" },
                mt: 4,
              }}
            >
              <AccordionSummary
                sx={{
                  backgroundColor: "#f8f8f8",
                  borderBottom: "1px solid #eee",
                  borderRadius: "8px",
                }}
                expandIcon={<ExpandMoreIcon sx={{ color: "#c00" }} />}
              >
                <Typography
                  sx={{ fontSize: { md: "20px", xs: "16px" }, fontWeight: 600 }}
                >
                  Liasioning Offices
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Box>
                  <Typography></Typography>
                  <Grid container spacing={2} sx={{ mt: 4 }}>
                    <Grid size={{ xs: 12, md: 4 }}>
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: "600",
                          fontFamily: "Open Sans",
                        }}
                      >
                        Dhaka, Bangladesh
                      </Typography>
                      <ul style={{ padding: "0px" }}>
                        <li
                          style={{
                            listStyle: "none",
                            fontSize: "16px",
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            marginTop: "8px",
                          }}
                        >
                          Contact Person : Mr. Iqbal Chowdhury
                        </li>

                        <li
                          style={{
                            listStyle: "none",
                            fontSize: "16px",
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            marginTop: "8px",
                          }}
                        >
                          Mobile: + 880 2 9119078
                        </li>
                        <li
                          style={{
                            listStyle: "none",
                            fontSize: "16px",
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            marginTop: "8px",
                          }}
                        >
                          Email:{" "}
                          <span style={{ color: "red" }}>
                            sales@vikramindia.in
                          </span>
                        </li>
                      </ul>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: "600",
                          fontFamily: "Open Sans",
                        }}
                      >
                        Nairobi, Kenya
                      </Typography>
                      <ul style={{ padding: "0px" }}>
                        <li
                          style={{
                            listStyle: "none",
                            fontSize: "16px",
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            marginTop: "8px",
                          }}
                        >
                          Contact Person : Boniface Kinyua
                        </li>

                        <li
                          style={{
                            listStyle: "none",
                            fontSize: "16px",
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            marginTop: "8px",
                          }}
                        >
                          Mobile : +254 725218142, 734455650
                        </li>
                        <li
                          style={{
                            listStyle: "none",
                            fontSize: "16px",
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            marginTop: "8px",
                          }}
                        >
                          Email:{" "}
                          <span style={{ color: "red" }}>
                            boniface.kinyua@vikramindia.in, sales@vikramindia.in
                          </span>
                        </li>
                      </ul>
                    </Grid>
                    <Grid size={{ xs: 12, md: 4 }}>
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: "600",
                          fontFamily: "Open Sans",
                        }}
                      >
                       Colombo, Sri Lanka
                      </Typography>
                      <ul style={{ padding: "0px" }}>
                        <li
                          style={{
                            listStyle: "none",
                            fontSize: "16px",
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            marginTop: "8px",
                          }}
                        >
                           Contact Person : Mr. Upali Abeywickrema - MD
                        </li>

                        <li
                          style={{
                            listStyle: "none",
                            fontSize: "16px",
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            marginTop: "8px",
                          }}
                        >
                          Mobile :   + 94 4 515660
                        </li>
                        <li
                          style={{
                            listStyle: "none",
                            fontSize: "16px",
                            fontFamily: "Open Sans",
                            fontWeight: "600",
                            marginTop: "8px",
                          }}
                        >
                          Email:{" "}
                          <span style={{ color: "red" }}>
                             sales@vikramindia.in
                          </span>
                        </li>
                      </ul>
                    </Grid>
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

export default Adresses;
