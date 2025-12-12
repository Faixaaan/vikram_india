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
    Container,
    Pagination,
} from "@mui/material";

import { Link } from "react-router-dom";
import '../../App.css'
import group1 from '../../Assets/group-profile-01.jpg'
import group2 from '../../Assets/group-profile-02.jpg'




const leftMenu = [
    "GROUP PROFILE",
    "COMPANY PROFILE",
    "VISION & MISSION",
    "MANAGEMENT TEAM",
    "ROC COMPLIANCE ANNUAL RETURN",
    "AWARD AND RECOGNITION",
    "RESEARCH AND DEVELOPMENT",
    "QUALITY POLICY",
    "CLIENTELE",
    "TESTIMONIAL",


];



const Testimonials = () => {

    const testimonials = [
        {
            text: "Very impressive setup, good workmanship and encouraging improvements in the machines.",
            name: "Mr. Ranjit Chaliha - Green Gold (Assam)"
        },
        {
            text: "Impressive manufacturing set-up with quality control.",
            name: "Mr. Alok Vira - Assam Company"
        },
        {
            text: "Good team to work with",
            name: "Mr. C. M. Khong - McLeod Russel"
        },
        {
            text: "Very impressive setup.",
            name: "Mr. J. S. Kandal - Amalgamated Plantation"
        },
        {
            text: "Very impressive setup, good workmanship and encouraging improvements in the machines.",
            name: "Mr. Ranjit Chaliha - Green Gold (Assam)"
        },
        {
            text: "Impressive manufacturing set-up with quality control.",
            name: "Mr. Alok Vira - Assam Company"
        },
        {
            text: "Good team to work with",
            name: "Mr. C. M. Khong - McLeod Russel"
        },
        {
            text: "Very impressive setup.",
            name: "Mr. J. S. Kandal - Amalgamated Plantation"
        }
    ];

    const [page, setPage] = useState(1);

    const testimonialsPerPage = 4;
    const startIndex = (page - 1) * testimonialsPerPage;
    const endIndex = startIndex + testimonialsPerPage;

    const paginatedTestimonials = testimonials.slice(startIndex, endIndex);



    useEffect(() => {
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
                    <Typography color="inherit">About Us</Typography>

                    <Typography color="text.primary">TESTIMONIAL</Typography>
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
                    TESTIMONIAL
                </Typography>

                <Typography sx={{ fontSize: "15px", mb: 3, color: "#d32f2f", fontFamily: "Open Sans" }}>
                    Creating value through diverse businesses
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
                                color: "#d32f2f",
                                fontFamily: "Open Sans"
                            }}
                        >
                            TESTIMONIAL
                        </Typography>

                        <List sx={{ border: "1px solid #ddd" }}>
                            {leftMenu.map((item) => {
                                const isActive = item === "TESTIMONIAL";

                                // Special case for PDF link
                                if (item === "ROC COMPLIANCE ANNUAL RETURN") {
                                    return (
                                        <ListItemButton
                                            key={item}
                                            component="a"
                                            href="https://www.vikramindia.in/pdf/roc-compliance-annual-return.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                borderBottom: "1px solid #eee",
                                                backgroundColor: "transparent",
                                                color: "#000",
                                                "&:hover": { backgroundColor: "#f5f5f5" },
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
                                    );
                                }

                                // Default items
                                return (
                                    <ListItemButton
                                        key={item}
                                        component={Link}
                                        to={`/about/${item.toLowerCase().replace(/ /g, "-")}`}
                                        sx={{
                                            borderBottom: "1px solid #eee",
                                            backgroundColor: isActive ? "green" : "transparent",
                                            color: isActive ? "#fff" : "#000",
                                            "&:hover": {
                                                backgroundColor: isActive ? "green" : "#f5f5f5",
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
                                );
                            })}
                        </List>

                    </Grid>

                    {/* Right Content Section */}
                    <Grid item size={{ xs: 12, md: 9 }}>
                        <Typography
                            sx={{
                                fontSize: "24px",
                                fontWeight: 600,
                                mb: 1,
                                fontFamily: "Open Sans",
                                textTransform: "uppercase",

                            }}
                        >
                            TESTIMONIAL
                        </Typography>
                        <Typography sx={{ fontSize: "16px", fontFamily: "Open Sans", textAlign: "justify", color: "#df0000" }}>
                            Helping us grow from strength to strength
                        </Typography>

                        {/* Introduction */}


                        <Box>


                            {/* profile picture box */}

                            {paginatedTestimonials.map((item, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        mt: 4,
                                        p: 3,
                                        borderRadius: "12px",
                                        background: "#ffffff",
                                        boxShadow: "0px 4px 15px rgba(0,0,0,0.10)",
                                    }}
                                >
                                    <Grid container spacing={2} mt={2}>
                                        <Grid size={{ xs: 12, md: 12 }}>
                                            <Typography
                                                sx={{
                                                    fontSize: "22px",
                                                    lineHeight: "140%",
                                                    fontWeight: "500",
                                                    color: "#121111",
                                                    fontFamily: "Open Sans",
                                                    textAlign: { xs: "center", sm: "left" }
                                                }}
                                            >
                                                “ {item.text} ”
                                            </Typography>

                                            <Typography
                                                sx={{
                                                    textAlign: { sm: "right", xs: "center" },
                                                    marginTop: "10px",
                                                    fontFamily: "Open Sans"
                                                }}
                                            >
                                                {item.name}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </Box>
                            ))}




                            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                                <Pagination
                                    count={Math.ceil(testimonials.length / testimonialsPerPage)}
                                    page={page}
                                    onChange={(e, value) => setPage(value)}
                                    color="primary"
                                    size="large"
                                    shape="rounded"
                                />
                            </Box>




                        </Box>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

const headingStyle = {
    fontSize: "16px",
    fontWeight: 400,
    mt: 2,
    mb: 2,
    fontFamily: "Open Sans",
    display: "flex",
    alignItems: "center",
    gap: 1,
    px: 2,
    py: 1.5,
    borderTop: "3px solid #e5e5e5",
    borderBottom: "3px solid #e5e5e5",
    boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
    borderRadius: "6px",
    background: "#fff"
};

export default Testimonials;
