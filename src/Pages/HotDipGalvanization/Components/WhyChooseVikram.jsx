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
    Button,
} from "@mui/material";

import { Link } from "react-router-dom";

import '../../../App.css'
import structure4 from '../../../Assets/mm-structure-04.jpg'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { axiosInstance } from "../../../Api/Axios/axios";
import { endpoints } from "../../../Api/EndPoints/endpoints";
import EnquiryForm from "./EnquiryForm";


const leftMenu = [
    "INTRODUCTION",
    "SERVICE CAPABILITIES",
    "TECHNICAL SPECIFICATION & INFRASTRUCTURE",
    "THE GALVANIZING PROCESS",
    "QUALITY ASSURANCE & LAB FACILITIES",
    "WHY CHOOSE US",


];

const WhyChooseVikramIndia = () => {

    const [data, setData] = useState([]);
    const [openEnquiry, setOpenEnquiry] = useState(false);



    const fetchData = async () => {
        try {
            const res = await axiosInstance.get(endpoints.HotDipGalvanization.WhyChooseUs)
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
                <Breadcrumbs sx={{ mb: 2, fontSize: "15px" }}>
                    <MLink component={Link} to="/" underline="hover" color="inherit">
                        Home
                    </MLink>
                    <Typography color="inherit" sx={{ fontSize: "15px" }}>Product & Services</Typography>
                    <Typography color="text.primary" sx={{ fontSize: "15px" }}>Hot Dip Galvanization</Typography>
                    <Typography color="text.primary" sx={{ fontSize: "15px" }}>Why Choose Us</Typography>
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
                                    to={`/products/${item.toLowerCase().replace(/ /g, "-")}`}
                                    sx={{
                                        borderBottom: "1px solid #eee",
                                        backgroundColor: item === "WHY CHOOSE US" ? "#1A73E8" : "transparent",
                                        color: item === "WHY CHOOSE US" ? "#fff" : "#000",
                                        "&:hover": {
                                            backgroundColor: item === "WHY CHOOSE US" ? "#1A73E8" : "#f5f5f5",
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

                        <Box sx={{ mt: 4 }}>
                            <Button variant="contained" sx={{ padding: "8px 15px!important", fontSize: "16px", fontWeight: "500" }} fullWidth onClick={() => setOpenEnquiry(true)}>
                                Enquiry Form
                            </Button>
                        </Box>
                    </Grid>

                    {/* Right Content Section */}
                    <Grid item size={{ xs: 12, md: 9 }} sx={{ mt: 5 }}>
                        <Typography
                            sx={{
                                fontSize: "24px",
                                fontWeight: 700,
                                mt: 1,
                                fontFamily: "Roboto",
                                color: "#1A73E8"
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
                            }} expandIcon={<ExpandMoreIcon sx={{ color: "#1A73E8" }} />}>
                                <Typography sx={{ fontSize: { md: "20px", xs: "16px" }, fontWeight: 600 }}>
                                    {data?.section1_title}
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Box>
                                    <Grid container spacing={2}>


                                        {/* LEFT CONTENT */}
                                        <Grid item size={{ xs: 12 }}>



                                            <Typography
                                                sx={{
                                                    fontSize: "16px",
                                                    fontFamily: "Roboto",
                                                    textAlign: "justify",
                                                    mt: 0
                                                }}
                                                dangerouslySetInnerHTML={{
                                                    __html: `
      ${data?.section1_description}
    `
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
                                <Typography sx={{ fontSize: { md: "20px", xs: "16px" }, fontWeight: 600 }}>
                                    {data?.section2_title}
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Box>
                                    <Grid container spacing={2}>


                                        {/* LEFT CONTENT */}
                                        <Grid item size={{ xs: 12 }}>



                                            <Typography
                                                sx={{
                                                    fontSize: "16px",
                                                    fontFamily: "Roboto",
                                                    textAlign: "justify",
                                                    mt: 0
                                                }}
                                                dangerouslySetInnerHTML={{
                                                    __html: `
      ${data?.section2_description}
    `
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
                                <Typography sx={{ fontSize: { md: "20px", xs: "16px" }, fontWeight: 600 }}>
                                    {data?.section3_title}
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Box>
                                    <Grid container spacing={2}>


                                        {/* LEFT CONTENT */}
                                        <Grid item size={{ xs: 12 }}>



                                            <Typography
                                                sx={{
                                                    fontSize: "16px",
                                                    fontFamily: "Roboto",
                                                    textAlign: "justify",
                                                    mt: 0
                                                }}
                                                dangerouslySetInnerHTML={{
                                                    __html: `
      ${data?.section3_description}
    `
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
                                <Typography sx={{ fontSize: { md: "20px", xs: "16px" }, fontWeight: 600 }}>
                                    {data?.section4_title}
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Box>
                                    <Grid container spacing={2}>


                                        {/* LEFT CONTENT */}
                                        <Grid item size={{ xs: 12 }}>



                                            <Typography
                                                sx={{
                                                    fontSize: "16px",
                                                    fontFamily: "Roboto",
                                                    textAlign: "justify",
                                                    mt: 0
                                                }}
                                                dangerouslySetInnerHTML={{
                                                    __html: `
      ${data?.section4_description}
    `
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
            <EnquiryForm
                open={openEnquiry}
                onClose={() => setOpenEnquiry(false)}
            />
        </Box>
    );
};

export default WhyChooseVikramIndia;
