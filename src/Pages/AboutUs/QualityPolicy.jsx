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
} from "@mui/material";

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



const QualityPolicy = () => {


    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const res = await axiosInstance.get(endpoints.AboutUs.qualityPolicy)
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
                    <MLink component={Link} to="/home" underline="hover" color="inherit">
                        Home
                    </MLink>
                    <Typography color="inherit" sx={{ fontSize: "15px" }}>About Us</Typography>

                    <Typography color="text.primary" sx={{ fontSize: "15px" }}>Quality Policy</Typography>
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
                                const isActive = item === "QUALITY POLICY";

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
                    <Grid item size={{ xs: 12, md: 9 }} sx={{ mt: 3 }}>

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
                                    <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" }, alignItems: "flex-start" }} >
                                        <img
                                            src={data?.image}
                                            alt=""
                                            style={{
                                                width: "100%",
                                                maxWidth: "280px",
                                                height: "280px",
                                                objectFit: "cover",
                                                borderRadius: "10px",
                                            }}
                                        />
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 8 }} >

                                        <Typography sx={{ fontFamily: "Roboto", fontSize: { xs: "18px", md: "20px" }, textAlign: "justify", marginTop: "15px!important", fontWeight: "500", lineHeight: "120%", color: "#121111ff" }}
                                            dangerouslySetInnerHTML={{ __html: data?.q_policy_desc }}
                                        >

                                        </Typography>


                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                                alignItems: { xs: "flex-start", md: "center" },
                                                mt: 5,
                                                flexDirection: { xs: "column", md: "row" },
                                                gap: 2,
                                            }}
                                        >
                                            <Typography sx={{ fontFamily: "Roboto", fontSize: "14px", lineHeight: "120%" }}>
                                                {data?.left_text}
                                            </Typography>
                                            <Box sx={{ marginTop: { xs: "20px", sm: "0px" } }}>
                                                <img
                                                    src={data?.sign_img}
                                                    alt="signature"
                                                    style={{
                                                        width: "120px",
                                                        height: "auto",
                                                        objectFit: "contain",
                                                    }}
                                                />
                                            </Box>
                                        </Box>
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

export default QualityPolicy;
