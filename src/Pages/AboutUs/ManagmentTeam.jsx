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
import group1 from '../../Assets/hk-chaudhary.png'
import group2 from '../../Assets/anil-chowdhury.png'
import group3 from '../../Assets/ulpi-gupta.png'
import group4 from '../../Assets/soumen-chatterjee.png'
import group5 from '../../Assets/subir-chawdhury.png'
import group6 from '../../Assets/somenath-saharoy.png'
import BgImage from '../../Assets/vision-bg.jpg'
import QMS from '../../Assets/Qms.jpg'
import EMS from '../../Assets/ems.jpg'
import OHSAS from '../../Assets/ohsas.jpg'
import signature from '../../Assets/signature.jpg'
import { axiosInstance } from "../../Api/Axios/axios";
import { endpoints } from "../../Api/EndPoints/endpoints";




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



const ManagementTeam = () => {


    const [managementData, setManagementData] = useState([])


    const fetchImageData = async () => {
        try {
            const res = await axiosInstance.get(endpoints.AboutUs.ManagmentTeamData)
            console.log(res?.data?.data,'aboutus')
            setManagementData(res?.data?.data)
        }
        catch (err) {
            console.log(err)
        }
    }



    const Imgee = [
        { src: QMS, alt: "qms" },
        { src: EMS, alt: "ems" },
        { src: OHSAS, alt: "ohsas" }
    ]

    useEffect(() => {
        fetchImageData()
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

                    <Typography color="text.primary" >Manangement Team</Typography>
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
                    MANAGEMENT TEAM
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
                            MANAGEMENT TEAM
                        </Typography>

                        <List sx={{ border: "1px solid #ddd" }}>
                            {leftMenu.map((item) => {
                                const isActive = item === "MANAGEMENT TEAM";

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
                            MANAGEMENT TEAM
                        </Typography>

                        <Typography
                            sx={{
                                fontSize: "20px",
                                fontWeight: 600,
                                mb: 2,
                                fontFamily: "Open Sans",
                                textTransform: "uppercase",
                                color: "#ee1d25"
                            }}>
                            Board Members
                        </Typography>


                        {/* Introduction */}


                        <Box>


                            {/* profile picture box */}

                            {
                                managementData?.map((item,i) => {
                                    return (
                                        <Box sx={{
                                            mt: 4,
                                            boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
                                            borderRadius: "12px",
                                            p: 3,
                                            background: "#fff"
                                        }}
                                        key={i}
                                        >
                                            <Grid container spacing={2} mt={2}>
                                                <Grid size={{ xs: 12, md: 3 }} sx={{ display: "flex", justifyContent: { xs: "center", md: "" }, alignItems: "flex-start" }} >
                                                    <img src={item?.profile_pic} style={{height:"auto",width:"100%"}} />
                                                </Grid>

                                                <Grid size={{ xs: 12, md: 9 }} sx={{bgcolor:"#B5BEB2"}} >
                                                    

                                                    <Typography variant="h6" sx={{ fontFamily: "", fontSize: "16px", lineHeight: "140%", marginTop: "15px", fontWeight: "400", color: "#121111ff",padding:"10px 20px" }}>
                                                         {item?.profile_desc?.replace(/<[^>]*>/g, "")}
                                                    </Typography>
                                                    <Box sx={{pt:4,background: 'linear-gradient(90deg, #1BAA63 0%, #276f9e 100%)',padding:"10px 20px"}}>
                                                    <Typography variant="h6" sx={{ fontFamily: "", fontSize: "20px", lineHeight: "120%", marginBottom: "2px", fontWeight: "600", color: "#fff" }}>
                                                       {item?.name}
                                                    </Typography>
                                                    <Typography variant="" sx={{ fontFamily: "", fontSize: "14px", lineHeight: "120%", marginBottom: "15px", fontWeight: "400", color: "#fff", backgroundColor: "blue", padding: "2px 4px" }}>
                                                        {item?.designation} <br />

                                                    </Typography>
                                                    <Typography variant="" sx={{ fontFamily: "", fontSize: "14px", lineHeight: "120%", marginBottom: "15px", fontWeight: "400", color: "#fff", }}>

                                                        Vikram Group
                                                    </Typography>
                                                    </Box>
                                                    


                                                </Grid>

                                            </Grid>

                                        </Box>
                                    )
                                })
                            }







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

export default ManagementTeam;
