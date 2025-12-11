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



const GroupProfile = () => {

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

                    <Typography color="text.primary">Group Profile</Typography>
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
                    GROUP PROFILE
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
                            GROUP PROFILE
                        </Typography>

                        <List sx={{ border: "1px solid #ddd" }}>
                            {leftMenu.map((item) => (
                                <ListItemButton
                                    key={item}
                                    component={Link}
                                    to={`/about/${item.toLowerCase().replace(/ /g, "-")}`}
                                    sx={{
                                        borderBottom: "1px solid #eee",
                                        backgroundColor: item === "GROUP PROFILE" ? "green" : "transparent",
                                        color: item === "GROUP PROFILE" ? "#fff" : "#000",
                                        "&:hover": {
                                            backgroundColor: item === "GROUP PROFILE" ? "green" : "#f5f5f5",
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
                            Group Profile
                        </Typography>


                        {/* Introduction */}


                        <Box>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, md: 12 }}>
                                    <Typography sx={{ fontSize: "16px", fontFamily: "Open Sans", textAlign: "justify" }}>
                                        Growing from strength to strength over the last four decades, <strong> the Vikram Group is inspired by a strong heritage and nurtures a mission to serve the world by diversifying its business,</strong> strengthening its brand identity, exceeding customer expectations through quality and service, enriching its production and promoting itself as a responsible corporate citizen.
                                    </Typography>
                                </Grid>

                            </Grid>

                            {/* profile picture box */}

                            <Box sx={{mt: 4}}>
                                <Grid container spacing={2} mt={2}>
                                    <Grid size={{ xs: 12, md: 3.4 }} sx={{display:"flex",justifyContent:"center"}} >
                                        <img src={group1} />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 8.6 }} >
                                       <Typography variant="h6" sx={{fontFamily:"",fontSize:"20px",lineHeight:"120%",marginBottom:"15px",fontWeight:"500",color:"#121111ff"}}>
                                        Started as a forging plant manufacturing stainless steel segments for CTC rollers used in the indigenous tea industry in 1974, Vikram Group
                                       </Typography>
                                       <Typography variant="p" sx={{fontFamily:"",fontSize:"18px",textAlign:"justify",marginTop:"15px!important",fontWeight:"400",lineHeight:"120%",color:"#121111ff"}}>
                                       has established itself as a quality driven, service oriented and performance focused Indian conglomerate with a distinct international edge. Through strategic global expansion and investments in latest technology to drive the business forward, the Group has created a strong position worldwide.
                                       </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2} mt={4}>
                                    <Grid size={{ xs: 12, md: 3.4 }} sx={{display:"flex",justifyContent:"center"}} >
                                        <img src={group2} />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 8.6 }} >
                                       <Typography variant="h6" sx={{fontFamily:"",fontSize:"20px",lineHeight:"120%",marginBottom:"15px",fontWeight:"500",color:"#121111ff"}}>
                                        Vikram Group is manned by a highly capable team of professionals which has supported its momentous growth.
                                       </Typography>
                                       <Typography variant="p" sx={{fontFamily:"",fontSize:"18px",textAlign:"justify",marginTop:"15px!important",fontWeight:"400",lineHeight:"120%",color:"#121111ff"}}>
                                       Through its state-of-the-art research facilities and product innovations and a network of offices and distributors across the globe, Vikram Group has diversified into different business sectors such as manufacturing of Tea Processing Machinery, Textiles, EPC Solutions and the green industry of Solar Power. Balancing the interests of shareholders, employees and civil society, the Group has successfully created a business empire.
                                       </Typography>
                                    </Grid>
                                </Grid>
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

export default GroupProfile;
