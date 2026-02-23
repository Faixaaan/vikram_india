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

import { Tabs, Tab } from "@mui/material";

import { Link } from "react-router-dom";
import '../../App.css'

import { axiosInstance } from "../../Api/Axios/axios";
import { endpoints } from "../../Api/EndPoints/endpoints";


import { useTheme, useMediaQuery } from "@mui/material";




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



const Clientele = () => {




    const [page, setPage] = useState(1);


    const [clientData, setClientData] = useState([])
    const [data, setData] = useState({})


    const fetchImageData = async () => {
        try {
            const res = await axiosInstance.get(endpoints.AboutUs.clientImage)
            const dataRes = await axiosInstance.get(endpoints.AboutUs.clientele)
            setData(dataRes?.data?.data)
            setClientData(res?.data?.data)
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


    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    const staticTabs = [
        "Module Mounting Structure",
        "Hot Dip Galvanizing",
        "Tea Processing Machinery",
        "Transmission Towers",

    ];


    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    const isMobile678 = useMediaQuery("(max-width:1100px)");

    return (
        <Box sx={{ padding: { xs: 2, md: 4 } }}>
            <Container maxWidth='xl'>
                {/* Breadcrumb */}
                <Breadcrumbs sx={{ mb: 2, fontSize: "15px" }}>
                    <MLink component={Link} to="/" underline="hover" color="inherit">
                        Home
                    </MLink>
                    <Typography color="inherit" sx={{ fontSize: "15px" }}>About Us</Typography>

                    <Typography color="text.primary" sx={{ fontSize: "15px" }}>Clientele</Typography>
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
                            {leftMenu.map((item) => {
                                const isActive = item === "CLIENTELE";

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
                    <Grid item size={{ xs: 12, md: 9 }} sx={{ mt: 3 }}>

                        {/* Page Main Heading */}
                        <Box
                            sx={{
                                textAlign: "center",
                                mb: 5,
                                position: "relative",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontSize: { xs: "26px", md: "34px" },
                                    fontWeight: 700,
                                    fontFamily: "Roboto",
                                    color: "#1a1a1a",
                                    letterSpacing: "1px",
                                    textTransform: "uppercase",
                                }}
                            >
                                Our Esteemed Clientele
                            </Typography>

                            {/* Green underline accent */}
                            <Box
                                sx={{
                                    width: "80px",
                                    height: "4px",
                                    background: "linear-gradient(90deg, #1BAA63, #276f9e)",
                                    margin: "12px auto 0",
                                    borderRadius: "4px",
                                }}
                            />

                            <Typography
                                sx={{

                                    fontSize: { xs: "13px", md: "15px" },
                                    color: "#666",
                                    maxWidth: "600px",
                                    margin: "10px auto 0",
                                    fontFamily: "Roboto",
                                }}
                            >
                                We proudly collaborate with leading organizations across industries,
                                delivering excellence through innovation and quality.
                            </Typography>
                        </Box>

                        {/* Static Tabs */}
                        <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
                            {isMobile678 ? (
                                // ===== MOBILE (≤678px) =====
                                <Grid container spacing={2} sx={{ maxWidth: 400, justifyContent: "center", }}>
                                    {staticTabs.map((tab, index) => (
                                        <Grid item xs={6} key={index}>
                                            <Box
                                                onClick={() => setTabIndex(index)}
                                                sx={{
                                                    cursor: "pointer",
                                                    textAlign: "center",
                                                    padding: "10px",
                                                    borderRadius: "8px",
                                                    fontSize: "13px",
                                                    fontWeight: 600,
                                                    background:
                                                        tabIndex === index
                                                            ? "#1BAA63"
                                                            : "#f5f5f5",
                                                    color: tabIndex === index ? "#fff" : "#000",
                                                    transition: "0.3s",
                                                }}
                                            >
                                                {tab}
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>
                            ) : (
                                // ===== TAB & DESKTOP =====
                                <Tabs
                                    value={tabIndex}
                                    onChange={handleTabChange}
                                    textColor="inherit"
                                    sx={{
                                        minHeight: "auto",
                                        "& .MuiTabs-indicator": {
                                            height: "100%",
                                            borderRadius: "10px",
                                            backgroundColor: "#1BAA63",
                                            zIndex: 0,

                                        },
                                        boxShadow: "1px 1px 6px 4px rgba(0,0,0,0.08)",
                                        padding: "4px",
                                        borderRadius: "10px",
                                    }}
                                >
                                    {staticTabs.map((tab, index) => (
                                        <Tab
                                            key={index}
                                            label={tab}
                                            sx={{
                                                textTransform: "capitalize",
                                                fontWeight: 600,
                                                fontSize: "14px",
                                                padding: "10px 14px",
                                                borderRadius: "10px",
                                                minHeight: "auto",
                                                position: "relative",
                                                zIndex: 1,

                                                "&.Mui-selected": {
                                                    color: "#fff !important",
                                                },
                                            }}
                                        />
                                    ))}
                                </Tabs>
                            )}
                        </Box>

                        {/* Introduction */}


                        <Box>

                            {/* <Box sx={{ mt: 4 }}>
                                <Grid container spacing={2} mt={2}>
                                    <Grid size={{ xs: 12, md: 3.4 }} sx={{ display: "flex", justifyContent: "center" }} >
                                        <img src={data?.section1_img} />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 8.6 }} >
                                        <Typography sx={{ fontFamily: "", fontSize: { sm: "18px", xs: "16px" }, lineHeight: "120%", marginBottom: "15px", fontWeight: "500", color: "#121111ff" }}
                                            dangerouslySetInnerHTML={{ __html: data?.section1_desc }}

                                        >

                                        </Typography>

                                    </Grid>
                                </Grid>

                            </Box> */}


                            {/* profile picture box */}
                            <Box sx={{ mt: 6 }}>
                                <Typography
                                    sx={{
                                        fontSize: "22px",
                                        fontWeight: 600,
                                        mb: 2,
                                        fontFamily: "Roboto",
                                        textTransform: "capitalize",
                                    }}
                                >
                                    The list includes the following
                                </Typography>

                                <Grid container spacing={3}>
                                    {clientData
                                        .slice(
                                            (page - 1) * (isMobile ? 4 : 12),
                                            (page - 1) * (isMobile ? 4 : 12) + (isMobile ? 4 : 12)
                                        )
                                        .map((item, index) => (
                                            <Grid
                                                item
                                                size={{ xs: 6, sm: 4, md: 3 }}
                                                key={index}
                                                sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                                            >
                                                {/* Logo Box */}
                                                <Box
                                                    sx={{
                                                        width: "100%",
                                                        maxWidth: "150px",
                                                        p: 2,
                                                        borderRadius: "10px",
                                                        background: "#fff",
                                                        boxShadow: "0 4px 12px rgba(0,0,0,0.10)",
                                                        textAlign: "center",
                                                        transition: "0.3s",
                                                        "&:hover": {
                                                            transform: "translateY(-5px)",
                                                            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                                                        },
                                                    }}
                                                >
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        style={{
                                                            width: "100%",
                                                            height: "80px",
                                                            objectFit: "contain",
                                                        }}
                                                    />
                                                </Box>

                                                {/* Title BELOW the box */}
                                                <Typography
                                                    sx={{
                                                        fontSize: "14px",
                                                        mt: 1.5,
                                                        textAlign: "center",
                                                        fontFamily: "Roboto",
                                                        width: "100%",
                                                        maxWidth: "180px",
                                                    }}
                                                >
                                                    {item.title}
                                                </Typography>
                                            </Grid>
                                        ))}
                                </Grid>


                                {/* PAGINATION */}
                                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                                    <Pagination
                                        count={Math.ceil(clientData.length / (isMobile ? 4 : 12))}
                                        page={page}
                                        onChange={(e, value) => setPage(value)}
                                        color="primary"
                                        size="large"
                                        shape="rounded"
                                    />
                                </Box>
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

export default Clientele;
