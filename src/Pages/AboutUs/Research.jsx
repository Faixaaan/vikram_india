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
    Container,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";

import { Link } from "react-router-dom";
import '../../App.css'
import group1 from '../../Assets/research.jpg'
import group2 from '../../Assets/group-profile-02.jpg'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import ChevronRightIcon from '@mui/icons-material/ChevronRight';




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



const Research = () => {

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

                    <Typography color="text.primary">Research And Development</Typography>
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
                    RESEARCH AND DEVELOPMENT
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
                            RESEARCH AND DEVELOPMENT
                        </Typography>

                        <List sx={{ border: "1px solid #ddd" }}>
                            {leftMenu.map((item) => {
                                const isActive = item === "RESEARCH AND DEVELOPMENT";

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
                                mb: 0,
                                fontFamily: "Open Sans",
                                textTransform: "uppercase"
                            }}
                        >
                            RESEARCH AND DEVELOPMENT
                        </Typography>
                        <Typography sx={{ color: "#df0000", fontFamily: "Open Sans", borderBottom: "1px solid #000", pb: 2 }}>
                            Combining knowledge and technology
                        </Typography>


                        {/* Introduction */}


                        <Box sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, md: 12 }}>
                                    <Typography sx={{ fontSize: "16px", fontFamily: "Open Sans", textAlign: "justify", marginBottom: "15px" }}>
                                        Vikram India takes pride in its spirit of innovation and product development processes, setting high quality standards to build the brand that consumers trust. Vikram India's R&D motto is -
                                    </Typography>
                                    <Typography sx={{ fontSize: "22px", fontFamily: "Open Sans", textAlign: "justify", marginBottom: "15px", fontWeight: "600" }}>
                                        "Technological improvements must satisfy the related scientific objectives."
                                    </Typography>
                                    <Typography sx={{ fontSize: "16px", fontFamily: "Open Sans", textAlign: "justify", marginBottom: "15px" }}>
                                        Using state-of-the-art technology, the Company's R&D Department is manned by highly proficient and skilled engineers, each backed up with years of hands-on experience in design, development, operation and maintenance of tea processing machinery.
                                    </Typography>
                                </Grid>

                            </Grid>

                            {/* profile picture box */}

                            <Box sx={{ mt: 4 }}>
                                <Grid container spacing={2} mt={2}>
                                    <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex", justifyContent: { xs: "center", md: "left" } }} >
                                        <img src={group1} />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 8 }} >
                                        <Typography sx={{ fontFamily: "", fontSize: "18px", lineHeight: "120%", marginBottom: "15px", fontWeight: "600", color: "#121111ff" }}>
                                            The Company's dedicated R&D team constantly engages in knowledge exchange programs with various tea research institutes across India and abroad for scientific inputs, to improve its products and processes.
                                        </Typography>
                                        <Typography sx={{ fontFamily: "", fontSize: "18px", textAlign: "justify", marginTop: "15px!important", fontWeight: "400", lineHeight: "120%", color: "#121111ff", marginBottom: "25px" }}>
                                            It collects and analyses the feedback received from existing customers as well as technicians who operate Vikram India's machines, to ensure delivery of premium quality products to its customers.
                                        </Typography>
                                        <Typography sx={{ fontFamily: "", fontSize: "18px", textAlign: "justify", marginTop: "15px!important", fontWeight: "400", lineHeight: "120%", color: "#121111ff" }}>
                                            Vikram India's well-organized and efficient R&D platform has helped its research team to set several significant benchmarks in the tea processing machinery segment.
                                        </Typography>
                                    </Grid>
                                </Grid>

                            </Box>

                            <Accordion sx={{
                                background: "#fff",
                                boxShadow: "0px 2px 8px rgba(0,0,0,0.10)",
                                borderRadius: "8px",
                                "&:before": { display: "none" },
                                mt: 8
                            }}>
                                <AccordionSummary sx={{
                                    backgroundColor: "#f8f8f8",
                                    borderBottom: "1px solid #eee",
                                    borderRadius: "8px"
                                }} expandIcon={<ExpandMoreIcon sx={{ color: "#c00" }} />}>
                                    <Typography
                                        sx={{
                                            fontSize: { md: "20px", xs: "16px" },
                                            fontWeight: 500,
                                            fontFamily: "Open Sans"
                                        }}
                                    >
                                        Latest success on R&D
                                    </Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                    {/* CONTENT INSIDE ACCORDION */}
                                    <Typography sx={headingStyle}>
                                        <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                        Use of optical imaging in roller matching inspection unit
                                    </Typography>

                                    <Typography sx={headingStyle}>
                                        <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                        CNC fully automatic Milling cum Grooving machine of CTC Rollers
                                    </Typography>

                                    <Typography sx={headingStyle}>
                                        <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                        Manufacturing of Auto Milling Machine with conventional chasing attachment
                                    </Typography>

                                    <Typography sx={headingStyle}>
                                        <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                        Application of intelligent monitoring and controlling systems during maceration, fermentation and drying processes
                                    </Typography>

                                    <Typography sx={headingStyle}>
                                        <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                        Manufacturing of customized fermenting machines to suit different operational methods
                                    </Typography>

                                    <Typography sx={headingStyle}>
                                        <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                        Manufacturing of widest [56"] CTC machines with vibration amplitude reduced to almost zero
                                    </Typography>

                                    <Typography sx={headingStyle}>
                                        <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                        Manufacturing of specially designed Auto Tracking System for CFMs for improved and hygienic operation through zero adjustment and negligible spillage
                                    </Typography>
                                    <Typography sx={headingStyle}>
                                        <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                        Manufacturing of wide (60") Vibro Screen for more output and better grading
                                    </Typography>
                                    <Typography sx={headingStyle}>
                                        <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                        Manufacturing of Continuous Withering Machine for both Physical and Chemical Withering
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>




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

export default Research;
