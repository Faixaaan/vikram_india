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
    Button,
} from "@mui/material";

import { Link } from "react-router-dom";
import '../../App.css'


import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { axiosInstance } from "../../Api/Axios/axios";
import { endpoints } from "../../Api/EndPoints/endpoints";
import EnquiryForm from "../HotDipGalvanization/Components/EnquiryForm";



const leftMenu = [
    "INFRASTRUCTURE & MACHINERY",
    "PRODUCT & PORTFOLIO",
    "PROFILE AVAILABILITY",
    "TECHNICAL SPECIFICATION",
    "QUALITY & SAFETY",


];



const Manufacturing = () => {

  
    const [data, setData] = useState([])
    const [openEnquiry, setOpenEnquiry] = useState(false);
    console.log(data, 'porduct_portfolio')


    const fetchImageData = async () => {
        try {

            const resData = await axiosInstance.get(endpoints.ModuleMounting.product_portfolio)
            setData(resData?.data?.data)


        }
        catch (err) {
            console.log(err)
        }
    }




    useEffect(() => {
        fetchImageData()
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);
    return (
        <Box sx={{ padding: { xs: 2, md: 4 }, mt: "100px"  }}>
            <Container maxWidth='xl'>
                {/* Breadcrumb */}
                <Breadcrumbs sx={{ mb: 2, fontSize: "15px" }}>
                    <MLink component={Link} to="/home" underline="hover" color="inherit">
                        Home
                    </MLink>
                    <Typography color="inherit" sx={{ fontSize: "15px" }}>Product & Services</Typography>
                    <Typography color="text.primary" sx={{ fontSize: "15px" }}>Module Mounting Structure</Typography>
                    <Typography color="text.primary" sx={{ fontSize: "15px" }}>Product & Portfolio</Typography>
                </Breadcrumbs>

                {/* PAGE TITLE */}




                <Grid container spacing={3}>
                    {/* Left Sidebar */}
                    <Grid item size={{ xs: 12, md: 3 }} sx={{ mt: 2 }}>
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
                                    to={`/products/mms/${item.toLowerCase().replace(/ /g, "-")}`}


                                    sx={{
                                        borderBottom: "1px solid #eee",

                                        background:
                                            item === "PRODUCT & PORTFOLIO"
                                                ? "linear-gradient(125deg, #14b91d, #1171b0)"
                                                : "transparent",

                                        color: item === "PRODUCT & PORTFOLIO" ? "#fff" : "#000",

                                        "&:hover": {
                                            background:
                                                item === "PRODUCT & PORTFOLIO"
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
                                            fontFamily: "Roboto"
                                        }}
                                    />
                                </ListItemButton>
                            ))}
                        </List>
                        <Box sx={{ mt: 4 }}>
                            <Button variant="contained" sx={{
                                padding: "8px 15px!important",
                                fontSize: "16px",
                                fontWeight: "500",
                                fontFamily: "Roboto",

                                background: "linear-gradient(125deg, #b92d14, #1171b0)",

                                boxShadow: "none",

                                "&:hover": {
                                    background: "linear-gradient(125deg, #b92d14, #1171b0)",
                                    boxShadow: "none",
                                },
                            }} fullWidth onClick={() => setOpenEnquiry(true)}>
                                Enquiry Form
                            </Button>
                        </Box>
                    </Grid>

                    {/* Right Content Section */}
                    <Grid item size={{ xs: 12, md: 9 }} sx={{ mt: 3 }}>




                        {/* Introduction */}


                        <Box>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, md: 12 }}>
                                    <Typography sx={{ fontSize: "16px", fontFamily: "Roboto", textAlign: "justify" }}>
                                        {data?.mouting_desc}
                                    </Typography>
                                </Grid>

                            </Grid>






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
                                    <Typography
                                        sx={{
                                            fontSize: { md: "20px", xs: "16px" },
                                            fontWeight: 500,
                                            fontFamily: "Roboto"
                                        }}
                                    >
                                        {data?.section1_title}
                                    </Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Box>
                                        <Grid container spacing={2}>
                                            {/* RIGHT IMAGE */}
                                            <Grid item size={{ xs: 12, md: 4 }}>
                                                <img src={data?.section1_image} alt="" style={{ width: "100%" }} />
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
                                                        __html: data?.section1_description
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
                                    <Typography
                                        sx={{
                                            fontSize: { md: "20px", xs: "16px" },
                                            fontWeight: 500,
                                            fontFamily: "Roboto"
                                        }}
                                    >
                                        {data?.section2_title}
                                    </Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Box>
                                        <Grid container spacing={2}>
                                            {/* RIGHT IMAGE */}
                                            <Grid item size={{ xs: 12, md: 4 }}>
                                                <img src={data?.section2_image} alt="" style={{ width: "100%" }} />
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
                                                        __html: data?.section2_description
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
                                    <Typography
                                        sx={{
                                            fontSize: { md: "20px", xs: "16px" },
                                            fontWeight: 500,
                                            fontFamily: "Roboto"
                                        }}
                                    >
                                        {data?.section3_title}
                                    </Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Box>
                                        <Grid container spacing={2}>
                                            {/* RIGHT IMAGE */}
                                            <Grid item size={{ xs: 12, md: 4 }}>
                                                <img src={data?.section3_image} alt="" style={{ width: "100%" }} />
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
                                                        __html: data?.section3_description
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
                                    <Typography
                                        sx={{
                                            fontSize: { md: "20px", xs: "16px" },
                                            fontWeight: 500,
                                            fontFamily: "Roboto"
                                        }}
                                    >
                                        {data?.section4_title}
                                    </Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Box>
                                        <Grid container spacing={2}>
                                            {/* RIGHT IMAGE */}
                                            <Grid item size={{ xs: 12, md: 4 }}>
                                                <img src={data?.section4_image} alt="" style={{ width: "100%" }} />
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
                                                        __html: data?.section4_description
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
                                    <Typography
                                        sx={{
                                            fontSize: { md: "20px", xs: "16px" },
                                            fontWeight: 500,
                                            fontFamily: "Roboto"
                                        }}
                                    >
                                        {data?.section5_title}
                                    </Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Box>
                                        <Grid container spacing={2}>
                                            {/* RIGHT IMAGE */}
                                            <Grid item size={{ xs: 12, md: 4 }}>
                                                <img src={data?.section5_image} alt="" style={{ width: "100%" }} />
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
                                                        __html: data?.section5_description
                                                    }}
                                                >



                                                </Typography>



                                            </Grid>



                                            {/* BOTTOM FULL WIDTH CONTENT */}


                                        </Grid>
                                    </Box>
                                </AccordionDetails>
                            </Accordion>


                        </Box>

                    </Grid>
                </Grid>
            </Container>
            <EnquiryForm
                open={openEnquiry}
                onClose={() => setOpenEnquiry(false)}
            />
        </Box>
    );
};

export default Manufacturing;
