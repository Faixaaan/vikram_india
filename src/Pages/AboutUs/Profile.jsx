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
} from "@mui/material";

import { Link } from "react-router-dom";
import '../../App.css'
import group1 from '../../Assets/group-profile-01.jpg'
import group2 from '../../Assets/group-profile-02.jpg'
import { endpoints } from "../../Api/EndPoints/endpoints";
import { axiosInstance } from '../../Api/Axios/axios';




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
    


];



const GroupProfile = () => {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const res = await axiosInstance.get(endpoints.AboutUs.groupPofile)
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
                    <MLink component={Link} to="/" underline="hover" color="inherit" >
                        Home
                    </MLink>
                    <Typography color="inherit" sx={{  fontSize: "15px" }}>About Us</Typography>

                    <Typography color="text.primary" sx={{  fontSize: "15px" }}>Group Profile</Typography>
                </Breadcrumbs>
  



                <Grid container spacing={3}>
                    {/* Left Sidebar */}
                    <Grid item size={{ xs: 12, md: 3 }} sx={{mt:2}}>
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
                            {leftMenu.map((item) => {
                                const isActive = item === "GROUP PROFILE";

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
                                );
                            })}
                        </List>

                    </Grid>

                    {/* Right Content Section */}
                    <Grid item size={{ xs: 12, md: 9 }} sx={{mt:6}}>
                        <Typography
                            sx={{
                                fontSize: "24px",
                                fontWeight: 600,
                                mb: 2,
                                fontFamily: "Roboto",
                                textTransform: "uppercase",
                                color:"#1A73E8"
                            }}
                        >
                            {data?.title}
                        </Typography>
                    


                        {/* Introduction */}


                        <Box>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, md: 12 }}>
                                    <Typography sx={{ fontSize: "16px", fontFamily: "Roboto", textAlign: "justify",fontWeight:"600" }}>
                                        {data?.group_desc}
                                    </Typography>
                                </Grid>

                            </Grid>

                            {/* profile picture box */}

                            <Box sx={{ mt: 4 }}>
                                <Grid container spacing={2} mt={2}>
                                    <Grid size={{ xs: 12, md: 3.4 }} sx={{ display: "flex", justifyContent: "center" }} >
                                        <img src={data?.section1_img} />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 8.6 }} >
                                        <Typography sx={{ fontFamily: "", fontSize: "18px", lineHeight: "120%", marginBottom: "15px", fontWeight: "500", color: "#121111ff" }}>
                                            {data?.section1_title}
                                        </Typography>
                                        <Typography variant="p" sx={{ fontFamily: "", fontSize: "18px", textAlign: "justify", marginTop: "15px!important", fontWeight: "400", lineHeight: "120%", color: "#121111ff" }}>
                                            {data?.section1_desc}
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={2} mt={4}>
                                    <Grid size={{ xs: 12, md: 3.4 }} sx={{ display: "flex", justifyContent: "center" }} >
                                        <img src={data?.section2_img} />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 8.6 }} >
                                        <Typography sx={{ fontFamily: "", fontSize: "18px", lineHeight: "120%", marginBottom: "15px", fontWeight: "500", color: "#121111ff" }}>
                                            {data?.section2_title}
                                        </Typography>
                                        <Typography variant="p" sx={{ fontFamily: "", fontSize: "18px", textAlign: "justify", marginTop: "15px!important", fontWeight: "400", lineHeight: "120%", color: "#121111ff" }}>
                                            {data?.section2_desc}
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
    fontFamily: "Roboto",
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
