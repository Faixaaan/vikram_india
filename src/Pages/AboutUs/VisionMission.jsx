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
} from "@mui/material";

import { Link } from "react-router-dom";
import '../../App.css'
import group1 from '../../Assets/chairman.jpg'
import group2 from '../../Assets/vision-boy.png'
import BgImage from '../../Assets/vision-bg.jpg'
import QMS from '../../Assets/Qms.jpg'
import EMS from '../../Assets/ems.jpg'
import OHSAS from '../../Assets/ohsas.jpg'
import signature from '../../Assets/signature.jpg'




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



const VisionMission = () => {


    const Imgee = [
        { src: QMS, alt: "qms" },
        { src: EMS, alt: "ems" },
        { src: OHSAS, alt: "ohsas" }
    ]

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

                    <Typography color="text.primary">VISION & MISSION</Typography>
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
                    VISION & MISSION
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
                            VISION & MISSION
                        </Typography>

                        <List sx={{ border: "1px solid #ddd" }}>
                            {leftMenu.map((item) => {
                                const isActive = item === "VISION & MISSION";

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
                                mb: 2,
                                fontFamily: "Open Sans",
                                textTransform: "uppercase"
                            }}
                        >
                            VISION & MISSION
                        </Typography>


                        {/* Introduction */}


                        <Box>


                            {/* profile picture box */}

                            <Box sx={{
                                mt: 4,
                                boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
                                borderRadius: "12px",
                                p: 3,
                                background: "#fff"
                            }}>
                                <Grid container spacing={2} mt={2}>
                                    <Grid size={{ xs: 12, md: 3.4 }} sx={{ display: "flex", justifyContent: { xs: "center", md: "" }, alignItems: "flex-start" }} >
                                        <img src={group1} />
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 8.6 }} >
                                        <Typography variant="h6" sx={{ fontFamily: "", fontSize: "20px", lineHeight: "120%", marginBottom: "15px", fontWeight: "600", color: "#ee1d25" }}>
                                            Our Mission
                                        </Typography>
                                        <Typography sx={{ fontFamily: "Open Sans", fontSize: "16px", textAlign: "justify", marginTop: "15px!important", fontWeight: "400", lineHeight: "120%", color: "#121111ff" }}>
                                            Our aim is to combine technology, managerial skills, innovation, experience, judgment and responsibility to provide the added value which ensures customer satisfaction.
                                        </Typography>
                                        <Typography variant="h6" sx={{ fontFamily: "", fontSize: "16px", lineHeight: "120%", marginTop: "15px", fontWeight: "400", color: "#121111ff" }}>
                                            In harmony with our strategic vision, pioneering spirit, engineering skills, knowledge accumulated through collective learning and bench-marking against global leaders, we will endeavour to ensure excellence in performance in all areas relating to design, research, development, manufacturing, sales and customer service.
                                        </Typography>
                                        <Typography variant="h6" sx={{ fontFamily: "", fontSize: "16px", lineHeight: "120%", marginTop: "15px", fontWeight: "400", color: "#121111ff" }}>
                                            We are committed to ensure the progressive evolution of tea processing machinery by continuously interacting with tea industry and on-going research and development in tea technology around the world. We aim to keep this in sharper focus and develop in each and every member of Vikram the highest degree of self-esteem and pride, at being fortunate to serve this industry.
                                        </Typography>

                                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "60px", flexDirection: { xs: "column", md: "row" } }}>
                                            <Typography sx={{ fontFamily: "Open Sans", fontSize: "14px", lineHeight: "120%" }}>
                                                Vikram India Limited <br />
                                                April 02. 2001 <br />
                                                Kolkata, India
                                            </Typography>
                                            <Box sx={{ marginTop: { xs: "20px", sm: "0px" } }}>
                                                <img src={signature} alt="" />
                                            </Box>
                                        </Box>
                                    </Grid>

                                </Grid>

                            </Box>
                            <Box
                                sx={{
                                    mt: 4,
                                    boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
                                    borderRadius: "12px",
                                    p: 4,

                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "right bottom",
                                    backgroundColor: "#fff",
                                    minHeight: "300px",
                                }}
                            >
                                <Grid container>
                                    <Grid size={{ xs: 12, md: 8 }}>
                                        <Typography
                                            sx={{
                                                fontSize: "20px",
                                                fontWeight: 600,
                                                mb: 2,
                                                color: "#ee1d25",
                                                fontFamily: "Open Sans"
                                            }}
                                        >
                                            Group Vision
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "16px",
                                                fontWeight: 400,
                                                mb: 2,
                                                color: "#121111",
                                                fontFamily: "Open Sans"
                                            }}
                                        >
                                            To Vikram Group, 'Vision is in Action' and in order to transfer the vision to reality we have to put together - innovation, technology, skill, experience, management and analysis in perfect proportion.
                                        </Typography>

                                        <Typography
                                            sx={{
                                                fontSize: "16px",
                                                lineHeight: "140%",
                                                textAlign: "justify",
                                                fontWeight: 400,
                                                color: "#121111",
                                                fontFamily: "Open Sans"
                                            }}
                                        >
                                            Here, customer satisfaction is considered to be the stimulus as well as the working capital. Be it in tea manufacturing, textile industry, solar power or as an EPC solution provider - Vikram has acted towards an international standard of R&D and technology; has induced a high level of excellence in products and has prioritized cost, responsibility and accountability.


                                        </Typography>
                                    </Grid>

                                    {/* BOY IMAGE *BOTTOM ALIGNED* */}
                                    <Grid
                                        size={{ xs: 12, md: 4 }}
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "flex-end",
                                            alignItems: "flex-end",
                                        }}
                                    >
                                        <img src={group2} alt="" style={{ width: "100%", height: "auto", marginBottom: "0px" }} />
                                    </Grid>
                                </Grid>
                            </Box>



                            {/* text */}






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

export default VisionMission;
