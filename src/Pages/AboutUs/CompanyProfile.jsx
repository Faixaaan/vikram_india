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
import group1 from '../../Assets/company-ring.jpg'
import group2 from '../../Assets/earning-image.png'
import BgImage from '../../Assets/earning-background.jpg'
import QMS from '../../Assets/Qms.jpg'
import EMS from '../../Assets/ems.jpg'
import OHSAS from '../../Assets/ohsas.jpg'




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



const CompanyProfile = () => {


    const Imgee =[
      {src:QMS,alt:"qms"},
      {src:EMS,alt:"ems"},
      {src:OHSAS,alt:"ohsas"}
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

                    <Typography color="text.primary">COMPANY PROFILE</Typography>
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
                    COMPANY PROFILE
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
                            COMPANY PROFILE
                        </Typography>

                        <List sx={{ border: "1px solid #ddd" }}>
                            {leftMenu.map((item) => (
                                <ListItemButton
                                    key={item}
                                    component={Link}
                                    to={`/about/${item.toLowerCase().replace(/ /g, "-")}`}
                                    sx={{
                                        borderBottom: "1px solid #eee",
                                        backgroundColor: item === "COMPANY PROFILE" ? "green" : "transparent",
                                        color: item === "COMPANY PROFILE" ? "#fff" : "#000",
                                        "&:hover": {
                                            backgroundColor: item === "COMPANY PROFILE" ? "green" : "#f5f5f5",
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
                                mb: 2,
                                fontFamily: "Open Sans",
                                textTransform: "uppercase"
                            }}
                        >
                            COMPANY PROFILE
                        </Typography>


                        {/* Introduction */}


                        <Box>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, md: 12 }}>
                                    <Typography sx={{ fontSize: "18px", fontFamily: "Open Sans", textAlign: "justify", fontWeight: "600", lineHeight: "120%" }}>
                                        Vikram India, an ISO 9001:2008 certified company, has been on a path of continuous growth and progress since its inception, consolidating its position through product innovation and commitment to excellence.
                                    </Typography>
                                </Grid>

                            </Grid>

                            {/* profile picture box */}

                            <Box sx={{
                                mt: 4,
                                boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
                                borderRadius: "12px",
                                p: 3,
                                background: "#fff"
                            }}>
                                <Grid container spacing={2} mt={2}>

                                    <Grid size={{ xs: 12, md: 8.6 }} >
                                        <Typography variant="h6" sx={{ fontFamily: "", fontSize: "20px", lineHeight: "120%", marginBottom: "15px", fontWeight: "500", color: "#121111ff" }}>
                                            Started as a forging plant manufacturing stainless steel segments for CTC rollers used in the indigenous tea industry in 1974, Vikram Group
                                        </Typography>
                                        <Typography variant="p" sx={{ fontFamily: "", fontSize: "16px", textAlign: "justify", marginTop: "15px!important", fontWeight: "300", lineHeight: "120%", color: "#121111ff" }}>
                                            has established itself as a quality driven, service oriented and performance focused Indian conglomerate with a distinct international edge. Through strategic global expansion and investments in latest technology to drive the business forward, the Group has created a strong position worldwide.
                                        </Typography>
                                        <Typography variant="h6" sx={{ fontFamily: "", fontSize: "20px", lineHeight: "120%", marginTop: "15px", fontWeight: "500", color: "#121111ff" }}>
                                            Started as a forging plant manufacturing stainless steel segments for CTC rollers used in the indigenous tea industry in 1974, Vikram Group
                                        </Typography>
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 3.4 }} sx={{ display: "flex", justifyContent: "center" }} >
                                        <img src={group1} />
                                    </Grid>
                                </Grid>

                            </Box>
                            <Box sx={{
                                mt: 4,
                                boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
                                borderRadius: "12px",
                                p: 0,
                                backgroundImage: `url(${BgImage})`,
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundColor: "#fff", // fallback
                                padding: "20px 20px 0px 20px"
                            }}>
                                <Grid container spacing={2} mt={4}>
                                    <Grid size={{ xs: 12, md: 3.4 }} sx={{ display: "flex", justifyContent: "center" }} >
                                        <img src={group2} />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 8.6 }} >
                                        <Typography variant="h6" sx={{ fontFamily: "", fontSize: "20px", lineHeight: "120%", marginBottom: "15px", fontWeight: "500", color: "#121111ff" }}>
                                            Earning the trust and confidence of people for the last four decades, Vikram India has established a strong position within the tea machinery industry.
                                        </Typography>
                                        <Typography variant="p" sx={{ fontFamily: "", fontSize: "18px", textAlign: "justify", marginTop: "15px!important", fontWeight: "400", lineHeight: "120%", color: "#121111ff" }}>
                                            From setting up its first plant in Ghusuri, Howrah near Kolkata, the Company has come a long way. With the help of its panel of experienced engineers and tea technocrats, Vikram India offers complete solution - from plucking to packaging, to its prestigious clients worldwide.


                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Box>

                            {/* text */}

                            <Box sx={{mt:4}}>

                                <Typography sx={{fontSize:"18px",fontWeight:"400",fontFamily:"Open Sans",lineHeight:"120%"}}>
                                    Vikram India's unwavering focus on providing premium quality products to its customers is one of the key drivers for its remarkable success.
                                </Typography>
                                  <Typography sx={{fontSize:"20px",fontWeight:"600",fontFamily:"Open Sans",lineHeight:"120%",marginTop:"20px"}}>
                                    Using state-of-the-art technology, its dedicated R&D team helps the Company in product innovation and incorporation of efficient manufacturing techniques.
                                </Typography>
                                <Typography sx={{fontSize:"18px",fontWeight:"400",fontFamily:"Open Sans",lineHeight:"120%",marginTop:"20px"}}>
                                    Vikram India also offers customized Project Consultancy Services and Training Packages to its clients. It has successfully completed prestigious turnkey projects from concept to commissioning covering civil, electrical and tea blending equipment and also provided technical know-how for various projects in India and all over the world. As its operations expand and spread, the Company through its ethical practices and social commitments continues to contribute towards the development of tea industry worldwide.
                                </Typography>
                            </Box>

                            {/* image  */}

                            <Grid container spacing={2} mt={6}>
                               {
                                Imgee.map((img)=>{
                                    return(
                                        <Grid size={{xs:12,sm:4}}>
                                            <Link to=''>
                                          <img src={img.src} alt={img.alt} />
                                          </Link>
                                        </Grid>
                                    )
                                })
                               }
                            </Grid>


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

export default CompanyProfile;
