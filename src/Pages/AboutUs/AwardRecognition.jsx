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
    Container,
    Pagination,
} from "@mui/material";

import { useTheme, useMediaQuery } from "@mui/material";

import { Link } from "react-router-dom";
import '../../App.css'

import { axiosInstance } from "../../Api/Axios/axios";
import { endpoints } from "../../Api/EndPoints/endpoints";






const leftMenu = [
    "GROUP PROFILE",
    "COMPANY PROFILE",
    "VISION & MISSION",
    "MANAGEMENT TEAM",
    "ROC COMPLIANCE ANNUAL RETURN",
    "CERTIFICATES",
    "AWARDS AND RECOGNITIONS",
    "RESEARCH AND DEVELOPMENT",
    "QUALITY POLICY",
    "CLIENTELE",
];



const AwardRecognition = () => {

    const [page, setPage] = useState(1);
    const [pagee, setPagee] = useState(1);
    const [cmsData, setCmsData] = useState([])
    const [secondCmsData, setCmsSecondData] = useState([])
    const [ImageData, setImageData] = useState([])


    const fetchImageData = async () => {
        try {
            const res = await axiosInstance.get(
                endpoints.AboutUs.getAwardRecognitionCmsData
            );

            const imageRes = await axiosInstance.get(endpoints.AboutUs.getAwardRecognition)

            setImageData(imageRes?.data?.data)

            const apiArray = res?.data?.data || [];

            // Convert array → object
            const cmsObject = apiArray.length ? apiArray[0] : null;

            const cmssobject = apiArray.length ? apiArray[1] : null;
            setCmsSecondData(cmssobject)
            setCmsData(cmsObject);

            console.log(cmsObject, 'cmsObject');
        } catch (err) {
            console.log(err);
        }
    };



    useEffect(() => {
        fetchImageData()
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isVerySmall = useMediaQuery("(max-width:420px)");



    return (
        <Box sx={{ padding: { xs: 2, md: 4 }, mt: "100px"  }}>
            <Container maxWidth='xl'>
                {/* Breadcrumb */}
                <Breadcrumbs sx={{ mb: 2, fontSize: "15px" }}>
                    <MLink component={Link} to="/home" underline="hover" color="inherit">
                        Home
                    </MLink>
                    <Typography color="inherit" sx={{ fontSize: "15px" }}>About Us</Typography>

                    <Typography color="text.primary" sx={{ fontSize: "15px" }}>Award & Recognition</Typography>
                </Breadcrumbs>

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
                                const isActive = item === "AWARDS AND RECOGNITIONS";

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
                                            background: isActive
                                                ? "linear-gradient(125deg, #14b91d, #1171b0)"
                                                : "transparent",
                                            color: isActive ? "#fff" : "#000",

                                            "&:hover": {
                                                background: isActive
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
                                );
                            })}
                        </List>

                    </Grid>

                    {/* Right Content Section */}
                    <Grid item size={{ xs: 12, md: 9 }} sx={{ mt: 4 }}>

                        {/* Introduction */}


                        <Box sx={{ mt: 2, }}>

                            <Typography sx={{ fontWeight: "600", fontSize: "20px", fontFamily: "Roboto" }}>
                                {cmsData?.category_title}
                            </Typography>
                            <Typography sx={{ fontWeight: "400", fontSize: "16px", fontFamily: "Roboto!important", marginTop: "10px" }}
                                dangerouslySetInnerHTML={{
                                    __html: cmsData?.category_desc
                                }}

                            >

                            </Typography>


                            {/* profile picture box */}

                            <Box sx={{ mt: 4 }}>

                                <Grid container spacing={3}>
                                    {ImageData
                                        .slice(
                                            (page - 1) * (isMobile ? 4 : 8),
                                            (page - 1) * (isMobile ? 4 : 8) + (isMobile ? 4 : 8)
                                        ).slice((page - 1) * 4, (page - 1) * 4 + 4)
                                        .map((item, index) => (
                                            <Grid
                                                item
                                                size={{
                                                    xs: isVerySmall ? 12 : 6, // 🔥 main logic
                                                    sm: 4,
                                                    md: 3
                                                }}
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
                                                            height: "120px",
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
                                                    {item.award_title}
                                                </Typography>
                                            </Grid>
                                        ))}
                                </Grid>
                                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                                    <Pagination
                                        count={Math.ceil(ImageData.length / 4)}
                                        page={page}
                                        onChange={(e, value) => setPage(value)}
                                        color="primary"
                                        size="large"
                                        shape="rounded"
                                    />
                                </Box>
                            </Box>

                            <Box sx={{ mt: 6 }}>
                                <Typography sx={{ fontWeight: "600", fontSize: "20px", fontFamily: "Roboto" }}>
                                    {secondCmsData?.category_title}
                                </Typography>



                                {/* profile picture box */}

                                <Box sx={{ mt: 4 }}>

                                    <Grid container spacing={3}>
                                        {ImageData
                                            .slice((pagee - 1) * 4, (pagee - 1) * 4 + 4)
                                            .map((item, index) => (
                                                <Grid
                                                    item
                                                    size={{
                                                        xs: isVerySmall ? 12 : 6, // 🔥 main logic
                                                        sm: 4,
                                                        md: 3
                                                    }}
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
                                                                height: "120px",
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
                                                        {item.name}
                                                    </Typography>
                                                </Grid>
                                            ))}
                                    </Grid>
                                </Box>
                            </Box>



                            {/* PAGINATION */}
                            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                                <Pagination
                                    count={Math.ceil(ImageData.length / 4)}
                                    page={pagee}
                                    onChange={(e, value) => setPagee(value)}
                                    color="primary"
                                    size="large"
                                    shape="rounded"
                                />
                            </Box>




                            {/* text */}






                        </Box>

                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};


export default AwardRecognition;
