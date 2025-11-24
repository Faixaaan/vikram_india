import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import BgImg from "../../Assets/Footer.png";
import Logo from '../../Assets/logo 1.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <>
            <Box
                sx={{
                    maxWidth: "100vw",
                    backgroundImage: `url(${BgImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    padding: { xs: "30px 15px", md: "60px 40px 30px 40px" },
                    borderTop: "1px solid #1E1E1E",
                    marginLeft: "calc(-50vw + 50%)",
                }}
            >
                <Grid container spacing={4} sx={{ width: "100%", margin: 0 }}>

                    {/* LEFT LOGO + SOCIAL */}
                    <Grid item size={{ xs: 12, md: 3 }}>
                        <Box
                            sx={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",    // <-- CENTER EVERYTHING
                                justifyContent: "center",
                                textAlign: "center",
                            }}
                        >
                            <img
                                src={Logo}
                                alt="vikram india"
                                style={{ width: "250px", marginBottom: "12px" }}
                            />

                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    mb: 1,
                                    fontSize: "20px",
                                    color: "#000",
                                    fontFamily: "Open Sans",
                                    pb: "6px",
                                    position: "relative",
                                    display: "inline-block",
                                    "&::after": {
                                        content: "''",
                                        position: "absolute",
                                        left: "15%",         // center the 70% border
                                        bottom: 0,
                                        width: "70%",
                                        height: "1px",
                                        backgroundColor: "#000",
                                    },
                                }}
                            >
                                Follow us on
                            </Typography>

                            {/* CENTERED ICONS */}
                            <Box
                                sx={{
                                    display: "flex",
                                    gap: 2,
                                    justifyContent: "center",
                                    mt: 1,
                                    mb: 2,
                                }}
                            >
                                {[
                                    <FacebookIcon />,
                                    <InstagramIcon />,
                                    <LinkedInIcon />,
                                ].map((Icon, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            fontSize: "28px",
                                            transition: "0.3s",
                                            cursor: "pointer",
                                            "&:hover": {
                                                transform: "scale(1.2)",
                                                color: "#EE1D25",
                                            },
                                        }}
                                    >
                                        {Icon}
                                    </Box>
                                ))}
                            </Box>

                            <Button
                                variant="contained"
                                sx={{
                                    mt: 2,
                                    background: "linear-gradient(to bottom,#EE1D25,#000)",
                                    borderRadius: "15px",
                                    padding: "8px 25px",
                                    textTransform: "none",
                                    fontSize: "15px",
                                }}
                            >
                                Get a Quote
                            </Button>
                        </Box>
                    </Grid>



                    {/* ABOUT US */}
                    <Grid item size={{ xs: 6, md: 3 }}>
                        <Typography
                            sx={{
                                fontWeight: 600,
                                mb: 2,
                                fontSize: "24px",
                                color: "#000",
                                width: "100%",
                                fontFamily: "Open Sans",
                                pb: "6px",                // space between text & border
                                width: "fit-content",     // so border matches text width
                                position: "relative",
                                display: "inline-block",
                                "&::after": {
                                    content: "''",
                                    position: "absolute",
                                    left: 0,
                                    bottom: 0,
                                    width: "70%",           // <-- your 70% border
                                    height: "1px",
                                    backgroundColor: "#000",
                                },
                            }}
                        >
                            ABOUT US
                        </Typography>


                        {[
                            "Mission and Vision",
                            "Company Milestone",
                            "Clientele",
                            "Awards",
                            "Corporate Policies",
                            "Case Studies",
                        ].map((item) => (
                            <Typography
                                key={item}
                                sx={{
                                    fontSize: "17px",
                                    mb: 1,
                                    cursor: "pointer",
                                    "&:hover": { color: "#EE1D25" },
                                    fontfamily: "Open Sans",
                                    fontWeight: "400"
                                }}
                            >
                                {item}
                            </Typography>
                        ))}
                    </Grid>

                    {/* QUICK LINKS */}
                    <Grid item size={{ xs: 6, md: 3 }}>
                        <Typography
                            sx={{
                                fontWeight: 600,
                                mb: 2,
                                fontSize: "24px",
                                color: "#000",
                                width: "100%",
                                fontFamily: "Open Sans",
                                pb: "6px",                // space between text & border
                                width: "fit-content",     // so border matches text width
                                position: "relative",
                                display: "inline-block",
                                "&::after": {
                                    content: "''",
                                    position: "absolute",
                                    left: 0,
                                    bottom: 0,
                                    width: "70%",           // <-- your 70% border
                                    height: "1px",
                                    backgroundColor: "#000",
                                },
                            }}
                        >
                            QUICK LINKS
                        </Typography>


                        {[
                            "Home",
                            "Product and Services",
                            "Manufacturing Facilities",
                            "CSR",
                            "Media",
                            "Career",
                        ].map((item) => (
                            <Typography
                                key={item}
                                sx={{
                                    fontSize: "17px",
                                    mb: 1,
                                    cursor: "pointer",
                                    "&:hover": { color: "#EE1D25" },
                                    fontfamily: "Open Sans",
                                    fontWeight: "400"
                                }}
                            >
                                {item}
                            </Typography>
                        ))}
                    </Grid>

                    {/* CORPORATE OFFICE */}
                    <Grid item size={{ xs: 12, md: 3 }}>
                        <Typography
                            sx={{
                                fontWeight: 600,
                                mb: 2,
                                fontSize: "24px",
                                color: "#000",
                                width: "100%",
                                fontFamily: "Open Sans",
                                pb: "6px",                // space between text & border
                                width: "fit-content",     // so border matches text width
                                position: "relative",
                                display: "inline-block",
                                "&::after": {
                                    content: "''",
                                    position: "absolute",
                                    left: 0,
                                    bottom: 0,
                                    width: "70%",           // <-- your 70% border
                                    height: "1px",
                                    backgroundColor: "#000",
                                },
                            }}
                        >
                            CORPORATE OFFICE
                        </Typography>


                        <Box sx={{ mb: 2 }}>
                            <Typography sx={{ fontWeight: 700, fontfamily: "Open Sans" }}>Tobacco House</Typography>
                            <Typography sx={{
                                fontSize: "15px", fontfamily: "Open Sans"
                            }}>
                                1, Old Court House Corner, Kolkata - 700 001
                            </Typography>
                            <Typography sx={{ fontSize: "15px", fontfamily: "Open Sans" }}>
                                Phone No. +91 33 2230 7299 (4 lines)
                            </Typography>
                            <Typography sx={{ fontSize: "15px", fontfamily: "Open Sans" }}>
                                Email: info@vikramindia.in
                            </Typography>
                        </Box>

                        <Box>
                            <Typography sx={{ fontWeight: 700, fontfamily: "Open Sans" }}>Office / Works</Typography>
                            <Typography sx={{ fontSize: "15px", fontfamily: "Open Sans" }}>
                                Vill: Jathgidhari, N.D.T. Complex, New Karala
                            </Typography>
                            <Typography sx={{ fontSize: "15px", fontfamily: "Open Sans" }}>
                                P.O: Daharpur, P.S: Sadar, Dist
                            </Typography>
                            <Typography sx={{ fontSize: "15px", fontfamily: "Open Sans" }}>
                                Howrah – 711 302 West Bengal, India
                            </Typography>
                            <Typography sx={{ fontSize: "15px", fontfamily: "Open Sans" }}>
                                Email: sales@vikramindia.in
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>

                {/* BOTTOM COPYRIGHT */}
                <Box
                    sx={{
                        borderTop: "1px solid #000",
                        mt: 4,
                        pt: 2,
                        display: "flex",
                        justifyContent: {md:"space-between",xs:"center"},
                        flexWrap: "wrap",
                        fontSize: "14px",
                    }}
                >
                    <Typography sx={{textAlign:"center",mb:{xs:1,sm:0,fontfamily:"Open Sans",fontWeight:{md:"700",xs:"600"},color:"#000"}}}>Copyright © 2026 Vikram India. All rights reserved</Typography>
                    <Typography sx={{fontfamily:"Open Sans",fontWeight:{md:"700",xs:"600"},color:"#000"}}>Design and Developed by Adret Software</Typography>
                </Box>
            </Box >
        </>
    );
};

export default Footer;
