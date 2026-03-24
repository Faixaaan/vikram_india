import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Button, Container } from "@mui/material";
// import BgImg from "../../Assets/Footer.png";


import { Link } from "react-router-dom";
import { axiosInstance } from "../../Api/Axios/axios";
import { endpoints } from "../../Api/EndPoints/endpoints";
import EnquiryForm from "../../Pages/HotDipGalvanization/Components/EnquiryForm";

const Footer = () => {
    const [data, setData] = useState({});
    const [openEnquiry, setOpenEnquiry] = useState(false);


    /* ================= FETCH DATA ================= */
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get(endpoints.pageSetting.navFooter);
                const settingData = res?.data?.data || {};
                setData(settingData);

            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

    const aboutLinks = [
        { label: "Mission and Vision", path: "/about/vision-&-mission" },
        { label: "Company Milestone", path: "/about/company-profile" },
        { label: "Clientele", path: "/about/clientele" },
        { label: "Awards", path: "/about/award-and-recognition" },
        { label: "Corporate Policies", path: "/about/quality-policy" },
        { label: "Case Studies", path: "/about/research-and-development" },
    ];

    const quickLinks = [
        { label: "Home", path: "/home" },
        { label: "Product and Services", path: "/products/processing-card" },
        { label: "Manufacturing Facilities", path: "/facilities" },
        // { label: "CSR", path: "/csr" },
        { label: "Media", path: "/media/news" },
        { label: "Blog", path: "/blogs" },
        { label: "Career", path: "/careers/working-with-us" },
    ];

    return (
        <>
            <Box
                sx={{
                    maxWidth: "100vw",
                    backgroundImage: `url(${data?.footer_background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    padding: { xs: "30px 15px", md: "60px 0px 30px 0px" },
                    borderTop: "1px solid #1E1E1E",
                    marginLeft: "calc(-50vw + 50%)",
                }}
            >
                <Grid container spacing={4} sx={{ width: "100%", margin: 0 }}>

                    {/* LEFT LOGO + SOCIAL */}
                    <Grid item size={{ xs: 12, md: 3 }}>
                        <Box
                            sx={{
                                width: { xs: "85%", sm: "70%", md: "100%" },
                                display: "flex",
                                flexDirection: { xs: "row", md: "column" },
                                alignItems: { xs: "flex-start", md: "center" },
                                justifyContent: { xs: "space-between", md: "center" },
                                textAlign: { xs: "left", md: "center" },
                            }}
                        >
                            <Box
                                component="img"
                                src={data.footer_logo}
                                alt="vikram india"
                                sx={{
                                    width: { xs: "180px", md: "200px" },
                                    marginBottom: { xs: "0px", md: "12px" }
                                }}
                            />


                            <Button
                                variant="contained"
                                sx={{
                                    mt: { xs: 1, md: 2 },
                                    px: { xs: 1.8, sm: 2.2, md: 2.4 },
                                    py: { xs: 0.7, sm: 0.9 },
                                    fontSize: { xs: "16px", sm: "18px" },
                                    borderRadius: "8px",
                                    textTransform: "none",
                                    fontWeight: 600,
                                    display: "flex",
                                    justifyContent: "flex-start",



                                    position: "relative",
                                    overflow: "hidden",
                                    background: "#bd2304",
                                    zIndex: 1,

                                    "& span": {
                                        position: "relative",
                                        zIndex: 2,
                                    },

                                    "&:before": {
                                        content: '""',
                                        position: "absolute",
                                        left: "50%",
                                        top: "50%",
                                        width: 0,
                                        height: 0,
                                        background: "#000",
                                        borderRadius: "50%",
                                        transform: "translate(-12%, -50%)",
                                        transition: "all 1s ease",
                                        zIndex: 0,
                                    },

                                    "&:hover:before": {
                                        width: "300%",
                                        height: "300%",
                                    },
                                }}
                                onClick={() => setOpenEnquiry(true)}

                            >
                                <span> Get a Quote </span>
                            </Button>



                        </Box>
                    </Grid>



                    {/* ABOUT US */}
                    <Grid item size={{ xs: 6, md: 3 }}>
                        <Typography
                            sx={{
                                fontWeight: 600,
                                mb: 2,
                                fontSize: { xs: "19px", md: "22px" },
                                color: "#000",
                                width: "100%",
                                fontFamily: "Roboto",
                                pb: "6px",
                                width: "fit-content",
                                position: "relative",
                                display: "inline-block",
                                "&::after": {
                                    content: "''",
                                    position: "absolute",
                                    left: 0,
                                    bottom: 0,
                                    width: "70%",
                                    height: "1px",
                                    backgroundColor: "#000",
                                },
                            }}
                        >
                            ABOUT US
                        </Typography>

                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                            {aboutLinks.map((item) => (
                                <Typography
                                    key={item.label}
                                    component={Link}
                                    to={item.path}
                                    sx={{
                                        fontSize: { xs: "14px", md: "16px" },
                                        mb: 1,
                                        cursor: "pointer",
                                        fontFamily: "Roboto",
                                        fontWeight: 400,
                                        color: "#000",
                                        textDecoration: "none",

                                        width: "fit-content",
                                        position: "relative",

                                        "&::after": {
                                            content: '""',
                                            position: "absolute",
                                            left: 0,
                                            bottom: "-3px",
                                            width: "100%",
                                            height: "2px",
                                            backgroundColor: "#EE1D25",
                                            transform: "scaleX(0)",
                                            transformOrigin: "left",
                                            transition: "transform 0.35s ease",
                                        },

                                        "&:hover": {
                                            color: "#EE1D25",
                                        },

                                        "&:hover::after": {
                                            transform: "scaleX(1)",
                                        },
                                    }}
                                >
                                    {item.label}
                                </Typography>
                            ))}
                        </Box>
                    </Grid>

                    {/* QUICK LINKS */}
                    <Grid item size={{ xs: 6, md: 3 }}>
                        <Typography
                            sx={{
                                fontWeight: 600,
                                mb: 2,
                                fontSize: { xs: "19px", md: "22px" },


                                color: "#000",
                                width: "100%",
                                fontFamily: "Roboto",
                                pb: "6px",
                                width: "fit-content",
                                position: "relative",
                                display: "inline-block",
                                "&::after": {
                                    content: "''",
                                    position: "absolute",
                                    left: 0,
                                    bottom: 0,
                                    width: "70%",
                                    height: "1px",
                                    backgroundColor: "#000",
                                },
                            }}
                        >
                            QUICK LINKS
                        </Typography>

                        <Box sx={{ display: "flex", flexDirection: "column" }}>

                            {quickLinks.map((item) => (
                                <Typography
                                    key={item.label}
                                    component={Link}
                                    to={item.path}
                                    sx={{
                                        fontSize: { xs: "14px", md: "16px" },
                                        mb: 1,
                                        cursor: "pointer",
                                        fontFamily: "Roboto",
                                        fontWeight: 400,
                                        color: "#000",
                                        textDecoration: "none",

                                        width: "fit-content",
                                        position: "relative",

                                        "&::after": {
                                            content: '""',
                                            position: "absolute",
                                            left: 0,
                                            bottom: "-3px",
                                            width: "100%",
                                            height: "2px",
                                            backgroundColor: "#EE1D25",
                                            transform: "scaleX(0)",
                                            transformOrigin: "left",
                                            transition: "transform 0.35s ease",
                                        },

                                        "&:hover": {
                                            color: "#EE1D25",
                                        },

                                        "&:hover::after": {
                                            transform: "scaleX(1)",
                                        },
                                    }}
                                >
                                    {item.label}
                                </Typography>
                            ))}
                        </Box>
                    </Grid>

                    {/* CORPORATE OFFICE */}
                    <Grid item size={{ xs: 12, md: 3 }} sx={{
                        display: { xs: "none", md: "block" }
                    }}>
                        <Typography
                            sx={{
                                fontWeight: 600,
                                mb: 2,
                                fontSize: { xs: "19px", md: "22px" },


                                color: "#000",
                                width: "100%",
                                fontFamily: "Roboto",
                                pb: "6px",
                                width: "fit-content",
                                position: "relative",
                                display: "inline-block",
                                "&::after": {
                                    content: "''",
                                    position: "absolute",
                                    left: 0,
                                    bottom: 0,
                                    width: "70%",
                                    height: "1px",
                                    backgroundColor: "#000",
                                },
                            }}
                        >
                            CORPORATE OFFICE
                        </Typography>


                        <Box sx={{ mb: 2 }}>
                            <Typography sx={{ fontWeight: 700, fontfamily: "Roboto" }}> Vill:{data?.title1}</Typography>
                            <Typography sx={{
                                fontSize: "14px", fontfamily: "Roboto"
                            }}>
                                {data?.address1}
                            </Typography>
                            <Typography sx={{ fontSize: "14px", fontfamily: "Roboto" }}>
                                Phone No. {data?.number1}
                            </Typography>
                            <Typography sx={{ fontSize: "14px", fontfamily: "Roboto" }}>
                                Email: {data?.email1}
                            </Typography>
                        </Box>

                        <Box>
                            <Typography sx={{ fontWeight: 700, fontfamily: "Roboto" }}>Office / Works</Typography>
                            <Typography sx={{ fontSize: "14px", fontfamily: "Roboto" }}>
                                Vill: {data?.address2}
                            </Typography>
                            {/* <Typography sx={{ fontSize: "14px", fontfamily: "Roboto" }}>
                                P.O: Daharpur, P.S: Sadar, Dist
                            </Typography> */}
                            {/* <Typography sx={{ fontSize: "14px", fontfamily: "Roboto" }}>
                                Howrah – 711 302 West Bengal, India
                            </Typography> */}
                            <Typography sx={{ fontSize: "14px", fontfamily: "Roboto" }}>
                                Email: {data?.email2}
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                {/* BOTTOM COPYRIGHT */}
                <Container maxWidth='xl'>
                    <Box
                        sx={{
                            borderTop: "1px solid #000",
                            mt: 4,
                            pt: 2,
                            display: "flex",
                            justifyContent: { sm: "space-between", xs: "center" },
                            flexWrap: "wrap",
                            fontSize: "14px",
                        }}
                    >
                        <Typography sx={{ textAlign: "center", mb: { xs: 1, sm: 0, fontfamily: "Roboto", fontWeight: { md: "700", xs: "600", fontSize: { xs: "14px", md: "16px" } }, color: "#000" } }}>Copyright © 2026 Vikram India. All rights reserved</Typography>
                        <Link to="" style={{ textDecoration: "none" }}>
                            <Typography sx={{ textAlign: "center", fontfamily: "Roboto", fontWeight: { md: "700", xs: "500" }, color: "#000", fontSize: { xs: "14px", md: "16px" } }}>Design and Developed by Adret Software</Typography>
                        </Link>
                    </Box>
                </Container>
                <EnquiryForm
                    open={openEnquiry}
                    onClose={() => setOpenEnquiry(false)}
                />
            </Box >
        </>
    );
};

export default Footer;
