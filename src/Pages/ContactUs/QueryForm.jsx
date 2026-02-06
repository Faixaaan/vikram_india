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
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";

import SelectIcon from "@mui/icons-material/ArrowDropDown";

import { Link } from "react-router-dom";
import mmsStructure from "../../Assets/contact-ban.jpg"; // update your image
import "../../App.css";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { axiosInstance } from "../../Api/Axios/axios";
import { endpoints } from "../../Api/EndPoints/endpoints";

const leftMenu = ["ADDRESSES", "QUERY FORM"];

const QueryForm = () => {

  const [data, setData] = useState({})
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    mobile: "",
    email: "",
    country: "",
    query: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Cms Data fetch for Query Form

  const fetchContactData = async () => {
    try {

      const resData = await axiosInstance.get(endpoints.contactUs.cmsContact)
      setData(resData?.data?.data)

    }
    catch (err) {
      console.log(err)
    }
  }

  // Query Form Submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const res = await axiosInstance.post(endpoints.contactUs.queryForm,formData)

      alert("Form submitted");
    }
    catch (err) {
      console.log(err)
    }


  };


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
        <Breadcrumbs sx={{ mb: 3, fontSize: "14px" }}>
          <MLink component={Link} to="/" underline="hover" color="inherit">
            Home
          </MLink>
          <Typography color="inherit" sx={{ fontSize: "14px" }}>Contact Us</Typography>

          <Typography color="text.primary" sx={{ fontSize: "14px" }} >Query Form</Typography>
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
                      item === "QUERY FORM" ? "green" : "transparent",
                    color: item === "QUERY FORM" ? "#fff" : "#000",
                    "&:hover": {
                      backgroundColor:
                        item === "QUERY FORM" ? "green" : "#f5f5f5",
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
            <Typography
              sx={{
                fontSize: "28px",
                fontWeight: 600,
                lineHeight: "120%",
                fontFamily: "Roboto",
                color: "#1A73E8"
              }}
            >
              {data?.query_form_title}
            </Typography>


            {/* Introduction */}


            <Accordion
              sx={{
                background: "#fff",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.10)",
                borderRadius: "8px",
                "&:before": { display: "none" },
                mt: 4,
                border: "1px solid #eee",
              }}
              defaultExpanded
            >
              <AccordionSummary
                sx={{
                  backgroundColor: "#f8f8f8",
                  borderBottom: "1px solid #eee",
                  borderRadius: "8px 8px 0 0",
                  minHeight: "60px",
                  "&.Mui-expanded": { minHeight: "60px" },
                }}
                expandIcon={
                  <ExpandMoreIcon sx={{ color: "#c00", fontSize: "28px" }} />
                }
              >
                <Typography
                  sx={{
                    fontSize: { md: "20px", xs: "16px" },
                    fontWeight: 600,
                    color: "#333",
                  }}
                >
                  Contact Form
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ p: 0 }}>
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  sx={{
                    p: { xs: 2, md: 3 },
                    background:
                      "linear-gradient(135deg, #fafafa 0%, #ffffff 100%)",
                    borderRadius: "0 0 8px 8px",
                  }}
                >
                  <Grid container spacing={3}>
                    {/* First Row */}
                    <Grid item size={{ xs: 12, md: 6 }}>
                      <Box sx={{ position: "relative" }}>
                        <Typography
                          variant="body2"
                          sx={{
                            mb: 1.5,
                            fontWeight: 600,
                            color: "#444",
                            fontSize: "14px",
                          }}
                        >
                          First Name <span style={{ color: "#c00" }}>*</span>
                        </Typography>
                        <TextField
                          fullWidth
                          name="first_name"
                          value={formData.first_name}
                          onChange={handleChange}
                          variant="outlined"
                          size="small"
                          placeholder="Enter your first name"
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "6px",
                              "&:hover fieldset": {
                                borderColor: "#c00",
                              },
                            },
                          }}
                        />
                      </Box>
                    </Grid>

                    <Grid item size={{ xs: 12, md: 6 }}>
                      <Box sx={{ position: "relative" }}>
                        <Typography
                          variant="body2"
                          sx={{
                            mb: 1.5,
                            fontWeight: 600,
                            color: "#444",
                            fontSize: "14px",
                          }}
                        >
                          Last Name <span style={{ color: "#c00" }}>*</span>
                        </Typography>
                        <TextField
                          fullWidth
                          name="last_name"
                          value={formData.last_name}
                          onChange={handleChange}
                          variant="outlined"
                          size="small"
                          placeholder="Enter your last name"
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "6px",
                              "&:hover fieldset": {
                                borderColor: "#c00",
                              },
                            },
                          }}
                        />
                      </Box>
                    </Grid>

                    {/* Second Row */}
                    <Grid item size={{ xs: 12, md: 6 }}>
                      <Box sx={{ position: "relative" }}>
                        <Typography
                          variant="body2"
                          sx={{
                            mb: 1.5,
                            fontWeight: 600,
                            color: "#444",
                            fontSize: "14px",
                          }}
                        >
                          Mobile <span style={{ color: "#c00" }}>*</span>
                        </Typography>
                        <TextField
                          fullWidth
                          name="mobile"
                           value={formData.mobile}
                          onChange={handleChange}
                          variant="outlined"
                          size="small"
                          placeholder="Enter mobile number"
                          type="tel"
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "6px",
                              "&:hover fieldset": {
                                borderColor: "#c00",
                              },
                            },
                          }}
                        />
                      </Box>
                    </Grid>

                    <Grid item size={{ xs: 12, md: 6 }}>
                      <Box sx={{ position: "relative" }}>
                        <Typography
                          variant="body2"
                          sx={{
                            mb: 1.5,
                            fontWeight: 600,
                            color: "#444",
                            fontSize: "14px",
                          }}
                        >
                          Email <span style={{ color: "#c00" }}>*</span>
                        </Typography>
                        <TextField
                          fullWidth
                          name="email"
                           value={formData.email}
                          onChange={handleChange}
                          variant="outlined"
                          size="small"
                          placeholder="Enter email address"
                          type="email"
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "6px",
                              "&:hover fieldset": {
                                borderColor: "#c00",
                              },
                            },
                          }}
                        />
                      </Box>
                    </Grid>

                    {/* Country Field */}
                    <Grid item size={{ xs: 12 }}>
                      <Box sx={{ position: "relative" }}>
                        <Typography
                          variant="body2"
                          sx={{
                            mb: 1.5,
                            fontWeight: 600,
                            color: "#444",
                            fontSize: "14px",
                          }}
                        >
                          Country <span style={{ color: "#c00" }}>*</span>
                        </Typography>
                        <TextField
                          fullWidth
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          variant="outlined"
                          size="small"
                          placeholder="Select your country"
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "6px",
                              "&:hover fieldset": {
                                borderColor: "#c00",
                              },
                            },
                          }}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <SelectIcon
                                  sx={{ color: "#666", cursor: "pointer" }}
                                />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Box>
                    </Grid>

                    {/* Query Field */}
                    <Grid item size={{ xs: 12 }}>
                      <Box sx={{ position: "relative" }}>
                        <Typography
                          variant="body2"
                          sx={{
                            mb: 1.5,
                            fontWeight: 600,
                            color: "#444",
                            fontSize: "14px",
                          }}
                        >
                          Query <span style={{ color: "#c00" }}>*</span>
                        </Typography>
                        <TextField
                          fullWidth
                          value={formData.query}
                          onChange={handleChange}
                          variant="outlined"
                          multiline
                          rows={4}
                          placeholder="Type your query here (maximum 500 characters)"
                          inputProps={{ maxLength: 500 }}
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderRadius: "6px",
                              "&:hover fieldset": {
                                borderColor: "#c00",
                              },
                            },
                          }}
                        />
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            mt: 1,
                            px: 1,
                          }}
                        >
                          <Typography
                            variant="caption"
                            sx={{ color: "#666", fontSize: "12px" }}
                          >
                            Maximum 500 characters
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              color: "#666",
                              fontSize: "12px",
                              fontWeight: 500,
                            }}
                          >
                            0/500
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>

                    {/* Verification Row */}


                    {/* Buttons */}
                    <Grid item size={{ xs: 12 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          gap: 3,
                          mt: 3,
                          pt: 2,

                        }}
                      >
                        <Button
                          variant="contained"
                          type="submit"
                          sx={{
                            backgroundColor: "#c00",
                            borderRadius: "6px",
                            padding: "10px 40px",
                            fontSize: "15px",
                            fontWeight: 600,
                            textTransform: "none",
                            boxShadow: "0 2px 8px rgba(192,0,0,0.2)",
                            "&:hover": {
                              backgroundColor: "#a00",
                              boxShadow: "0 4px 12px rgba(192,0,0,0.3)",
                              transform: "translateY(-1px)",
                            },
                            transition: "all 0.2s ease",
                            minWidth: "140px",
                          }}
                        >
                          Submit
                        </Button>
                        <Button
                          variant="outlined"
                          sx={{
                            border: "2px solid #c00",
                            color: "#c00",
                            borderRadius: "6px",
                            padding: "10px 40px",
                            fontSize: "15px",
                            fontWeight: 600,
                            textTransform: "none",
                            "&:hover": {
                              borderColor: "#a00",
                              color: "#a00",
                              backgroundColor: "rgba(192,0,0,0.04)",
                              transform: "translateY(-1px)",
                            },
                            transition: "all 0.2s ease",
                            minWidth: "140px",
                          }}
                        >
                          Reset
                        </Button>
                      </Box>
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

export default QueryForm;
