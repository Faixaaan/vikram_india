import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItemButton,
  ListItemText,
 
  Breadcrumbs,
  Link as MLink,
  Accordion,
  AccordionSummary,
  AccordionDetails,

  Container,
  TextField,

  Button,
} from "@mui/material";


import { Link } from "react-router-dom";
import "../../App.css";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { axiosInstance } from "../../Api/Axios/axios";
import { endpoints } from "../../Api/EndPoints/endpoints";
import { useNavigate } from "react-router-dom";


const leftMenu = ["WORKING WITH US", "APPLY NOW"];

const ApplyOnline = () => {
  const [data, setData] = useState({})
  const [errors, setErrors] = useState({});

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    country: "",
    role: "",
    state: "",
    city: "",
    pincode: "",
    address: "",
    resume: null,
    // image: null,
  });


  const [captcha, setCaptcha] = useState("");
  const [userCaptcha, setUserCaptcha] = useState("");



  const fetchCarrerData = async () => {
    try {

      const resData = await axiosInstance.get(endpoints.Career.cmsCareerData)
      setData(resData?.data?.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  // ================= CAPTCHA =================
  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    let result = "";
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(result);
  };

  // ================= INPUT CHANGE =================
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // error remove when typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // ================= SUBMIT =================
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});



    // ✅ resume validation
    if (!formData.resume) {
      setErrors((prev) => ({
        ...prev,
        resume: ["Resume is required"],
      }));
      return;
    }

    if (userCaptcha !== captcha) {
      alert("Invalid captcha ❌");
      return;
    }

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("mobile", formData.mobile);
    form.append("country", formData.country);
    form.append("resume", formData.resume);
    form.append("role", formData.role);
    form.append("state", formData.state);
    form.append("city", formData.city);
    form.append("pincode", formData.pincode);
    form.append("address", formData.address);

    // form.append("image", formData.image);

    try {
      const res = await axiosInstance.post(
        endpoints.Career.careerForm,
        form
      );

      console.log(res.data);
      navigate("/thankyou-page", {
        state: { formType: "Apply Online Form" },
      });

      // RESET
      setFormData({
        name: "",
        email: "",
        mobile: "",
        country: "",
        role: "",
        state: "",
        city: "",
        pincode: "",
        address: "",
        resume: null,
        // image: null,
      });

      setUserCaptcha("");
      generateCaptcha();

    } catch (err) {
      const apiError = err.response?.data;

      if (apiError?.errors) {
        setErrors(apiError.errors); // 👈 main logic
      }

      alert(apiError?.message || "Submission failed ❌");
    }
  };


  useEffect(() => {
    fetchCarrerData()
    generateCaptcha()
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
          <MLink component={Link} to="/home" underline="hover" color="inherit">
            Home
          </MLink>
          <Typography color="inherit" sx={{ fontSize: "14px" }}>Carrers</Typography>

          <Typography color="text.primary" sx={{ fontSize: "14px" }}>Apply Now</Typography>
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
          CAREERS
        </Typography>

        <Grid container spacing={3}>
          {/* Left Sidebar */}
          <Grid item size={{ xs: 12, md: 3 }}>


            <List sx={{ border: "1px solid #ddd" }}>
              {leftMenu.map((item) => (
                <ListItemButton
                  key={item}
                  component={Link}
                  to={`/careers/${item.toLowerCase().replace(/ /g, "-")}`}
                  sx={{
                    borderBottom: "1px solid #eee",

                    background:
                      item === "APPLY NOW"
                        ? "linear-gradient(125deg, #14b91d, #1171b0)"
                        : "transparent",

                    color: item === "APPLY NOW" ? "#fff" : "#000",

                    "&:hover": {
                      background:
                        item === "APPLY NOW"
                          ? "linear-gradient(125deg, #14b91d, #1171b0)"
                          : "#f5f5f5",
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




            <Accordion
              sx={{
                background: "#fff",
                boxShadow: "0px 2px 8px rgba(0,0,0,0.10)",
                borderRadius: "8px",
                "&:before": { display: "none" },
                mt: 0,
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
                  {/* Apply Now */}
                  {data?.apply_title}
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
                          Name <span style={{ color: "#c00" }}>*</span>
                        </Typography>
                        <TextField
                          fullWidth
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          variant="outlined"
                          size="small"
                          placeholder="Enter your Full name"
                          error={!!errors.name}
                          helperText={errors.name?.[0]}

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
                          Role <span style={{ color: "#c00" }}>*</span>
                        </Typography>
                        <TextField
                          fullWidth
                          name="role"
                          value={formData.role}
                          onChange={handleChange}
                          variant="outlined"
                          size="small"
                          placeholder="Enter your Role"

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

                          error={!!errors.email}
                          helperText={errors.email?.[0]}
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
                          type="number"
                          error={!!errors.mobile}
                          helperText={errors.mobile?.[0]}
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
                    <Grid item size={{ xs: 12, md: 4 }}>

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
                          placeholder="Type your country"

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

                    {/* STATE */}

                    <Grid item size={{ xs: 12, md: 4 }}>

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
                          State <span style={{ color: "#c00" }}>*</span>
                        </Typography>
                        <TextField
                          fullWidth

                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          variant="outlined"
                          size="small"
                          placeholder="Type your state"

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


                    {/* CITY */}

                    <Grid item size={{ xs: 12, md: 4 }}>

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
                          City <span style={{ color: "#c00" }}>*</span>
                        </Typography>
                        <TextField
                          fullWidth

                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          variant="outlined"
                          size="small"
                          placeholder="Type your city"

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


                    {/* PIN CODE */}

                    <Grid item size={{ xs: 12, md: 4 }}>

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
                          Pincode <span style={{ color: "#c00" }}>*</span>
                        </Typography>
                        <TextField
                          fullWidth
                          type="number"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleChange}
                          variant="outlined"
                          size="small"
                          placeholder="Type your pincode"

                          error={!!errors.pincode}
                          helperText={errors.pincode?.[0]}

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

                    {/* ADDRESS */}

                    <Grid item size={{ xs: 12, md: 8 }}>

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
                          Address <span style={{ color: "#c00" }}>*</span>
                        </Typography>
                        <TextField
                          fullWidth

                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          variant="outlined"
                          size="small"
                          placeholder="Type your address"

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
                          Upload Resume <span style={{ color: "#c00" }}>*</span>
                        </Typography>
                        <Button variant="outlined" component="label">
                          Upload Resume
                          <input
                            type="file"
                            hidden
                            accept=".jpg,.jpeg,.pdf"
                            onChange={(e) => {
                              setFormData((prev) => ({
                                ...prev,
                                resume: e.target.files[0],
                              }));

                              // clear error
                              setErrors((prev) => ({
                                ...prev,
                                resume: "",
                              }));
                            }}
                          />
                        </Button>

                        <Typography variant="caption">
                          {formData.resume?.name || "No file selected"}
                        </Typography>
                        {/* 👇 ERROR MESSAGE */}
                        {errors.resume && (
                          <Typography color="error" variant="caption" sx={{ display: "block", mt: 1 }}>
                            {errors.resume[0]}
                          </Typography>
                        )}
                      </Box>
                    </Grid>

                    {/* Verification Row */}
                    <Grid item size={{ xs: 12 }}>
                      <Box
                        sx={{
                          p: 2,
                          backgroundColor: "#f9f9f9",
                          borderRadius: "6px",
                          border: "1px solid #eee",
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            mb: 2,
                            fontWeight: 600,
                            color: "#444",
                            fontSize: "14px",
                          }}
                        >
                          Security Verification{" "}
                          <span style={{ color: "#c00" }}>*</span>
                        </Typography>

                        {/* Image Verification */}
                        {/* <Box sx={{ mb: 2 }}>
                          <Typography
                            variant="body2"
                            sx={{
                              mb: 1.5,
                              fontWeight: 600,
                              color: "#555",
                              fontSize: "13px",
                            }}
                          >
                            Upload Your Image:
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 2,
                              flexWrap: { xs: "wrap", sm: "nowrap" },
                            }}
                          >
                            <Button variant="outlined" component="label">
                              Upload Image
                              <input
                                type="file"
                                hidden
                                accept="image/*"
                                onChange={(e) =>
                                  setFormData((prev) => ({
                                    ...prev,
                                    image: e.target.files[0],
                                  }))
                                }
                              />
                            </Button>

                            <Typography variant="caption">
                              {formData.image?.name || "No image selected"}
                            </Typography>

                          </Box>
                        </Box> */}

                        {/* CAPTCHA Section */}
                        <Box sx={{ mb: 3 }}>
                          <Typography
                            variant="body2"
                            sx={{
                              mb: 1.5,
                              fontWeight: 600,
                              color: "#555",
                              fontSize: "13px",
                            }}
                          >
                            Type the code as shown:
                          </Typography>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 2,
                              flexWrap: { xs: "wrap", sm: "nowrap" },
                            }}
                          >
                            <Grid item xs={12}>
                              <TextField
                                placeholder="Enter captcha"
                                value={userCaptcha}
                                onChange={(e) => setUserCaptcha(e.target.value)}
                              />

                              <Box
                                onClick={generateCaptcha}
                                sx={{
                                  mt: 1,
                                  p: 1,
                                  border: "1px solid #ccc",
                                  display: "inline-block",
                                  cursor: "pointer",
                                }}
                              >
                                <Typography sx={{ fontFamily: "monospace" }}>
                                  {captcha}
                                </Typography>
                              </Box>
                            </Grid>
                            <Typography
                              variant="caption"
                              sx={{
                                color: "#666",
                                fontSize: "12px",
                                fontStyle: "italic",
                              }}
                            >
                              (Case sensitive)
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Grid>

                    {/* Buttons */}
                    <Grid item size={{ xs: 12 }}>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          gap: 3,
                          mt: 3,
                          pt: 2,
                          borderTop: "1px solid #eee",
                        }}
                      >
                        <Button
                          variant="contained"
                          type="submit"
                          sx={{
                            alignSelf: { xs: "stretch", sm: "flex-start" },
                            // mt: 2,
                            px: 4,
                            py: 1.4,
                            px: { xs: 1.8, sm: 2.2, md: 2.4 },
                            py: { xs: 0.7, sm: 0.8 },
                            fontSize: { xs: "16px", sm: "17px" },
                            fontWeight: 600,

                            position: "relative",
                            overflow: "hidden",

                            background: "#bd2304",
                            minWidth: "140px",



                            zIndex: 1,

                            "& span": {
                              position: "relative",
                              zIndex: 2,
                            },


                            "&:before": {
                              content: '""',
                              position: "absolute",
                              left: "50%",
                              top: "50%",
                              width: 0,
                              height: 0,
                              background: "#000",
                              borderRadius: "50%",
                              transform: "translate(-12%, -50%)",
                              transition: "all 1s ease",
                              zIndex: 0,
                            },

                            "&:hover:before": {
                              width: "300%",
                              height: "300%",
                            },

                            "&:hover": {
                              background: "#bd2304",
                            },
                          }}

                        >
                          <span>Submit</span>
                        </Button>


                        <Button
                          variant="outlined"
                          sx={{
                            border: "2px solid #c00",
                            color: "#c00",
                            borderRadius: "6px",
                            padding: "6px 40px",
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

export default ApplyOnline;
