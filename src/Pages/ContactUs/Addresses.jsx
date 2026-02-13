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
import { axiosInstance } from "../../Api/Axios/axios";
import { endpoints } from "../../Api/EndPoints/endpoints";

const leftMenu = ["ADDRESSES", "QUERY FORM"];

const Adresses = () => {

  const [contactData, setContactData] = useState([])
  const [data, setData] = useState({})

  const fetchContactData = async () => {
    try {
      const res = await axiosInstance.get(endpoints.contactUs.getContactUsData);
      const resData = await axiosInstance.get(endpoints.contactUs.cmsContact)
      setData(resData?.data?.data)
      setContactData(res?.data?.data)
    }
    catch (err) {
      console.log(err)
    }
  }




  useEffect(() => {
    fetchContactData()
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Box sx={{ padding: { xs: 2, md: 4 } }}>
      <Container maxWidth="xl">
        {/* Breadcrumb */}
        <Breadcrumbs sx={{ mb:3, fontSize: "14px" }}>
          <MLink component={Link} to="/" underline="hover" color="inherit">
            Home
          </MLink>
          <Typography color="inherit" sx={{fontSize: "14px"}}>Contact Us</Typography>

          <Typography color="text.primary" sx={{fontSize: "14px"}} >Adresses</Typography>
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
          CONTACT US
        </Typography>

        <Grid container spacing={3}>
          {/* Left Sidebar */}
          <Grid item size={{ xs: 12, md: 3 }}>
            

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
            
          

            {/* Introduction */}

            <Accordion
              sx={{
                background: "#fff",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.10)",
                borderRadius: "8px",
                "&:before": { display: "none" },
                mt: 0,
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
                 {data?.adresses_title}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Box sx={{ paddingBottom: "10px" }}>
                  <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, md: 5 }}>
                      <img
                        src={data?.adresses_image}
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
                          fontFamily: "Roboto",
                          textAlign: "justify",
                        }}
                      >
                        {data?.adresses_descripion}
                      </Typography>
                    </Grid>
                  </Grid>


                </Box>
              </AccordionDetails>
            </Accordion>

            {/* map  */}
            {
              contactData?.map((item) => {
                return (
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
                        {item?.category}
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
                                fontFamily: "Roboto",
                              }}
                            >
                              {item?.name}
                            </Typography>
                            <ul style={{ padding: "0px" }}>
                              <li
                                style={{
                                  listStyle: "none",
                                  fontSize: "16px",
                                  fontFamily: "Roboto",
                                  fontWeight: "600",
                                  marginTop: "8px",
                                }}
                              >
                                {item?.location}
                              </li>

                              <li
                                style={{
                                  listStyle: "none",
                                  fontSize: "16px",
                                  fontFamily: "Roboto",
                                  fontWeight: "600",
                                  marginTop: "8px",
                                }}
                              >
                                Phone No. + 91 33 2230 7299
                              </li>
                              <li
                                style={{
                                  listStyle: "none",
                                  fontSize: "16px",
                                  fontFamily: "Roboto",
                                  fontWeight: "600",
                                  marginTop: "8px",
                                }}
                              >
                                Email:{" "}
                                <span style={{ color: "red" }}>
                                  {item?.email}
                                </span>
                              </li>
                            </ul>
                          </Grid>
                          <Grid size={{ xs: 12, md: 6 }}>
                            <Typography
                              sx={{
                                fontSize: "20px",
                                fontWeight: "600",
                                fontFamily: "Roboto",
                              }}
                            >
                              Office/Works
                            </Typography>
                            <ul style={{ padding: "0px" }}>
                              <li
                                style={{
                                  listStyle: "none",
                                  fontSize: "16px",
                                  fontFamily: "Roboto",
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
                                  fontFamily: "Roboto",
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
                                  fontFamily: "Roboto",
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
                )
              })
            }


          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Adresses;
