import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import BannerImg from "../../../Assets/Banner.png";
import '../../../App.css'

const Banner = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: { xs: "420px", sm: "480px", md: "520px" }, // mobile taller
                backgroundImage: `url(${BannerImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
            }}
        >

            <Container
                maxWidth="xl"
                sx={{
                    height: "100%",
                    position: "relative",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" }, // STACK on mobile
                    alignItems: { xs: "flex-start", md: "center" },
                    justifyContent: { xs: "flex-start", md: "space-between" },
                    px: { xs: 2, md: 6 },
                    pt: { xs: 4, md: 0 },
                }}
            >

                {/* LEFT TEXT (unchanged for desktop) */}
                <Box sx={{ color: "#fff", zIndex: 2, width: { xs: "100%", md: "auto" } }}>
                    <Box sx={{ mb: "25px" }}>
                        <Typography
                            sx={{
                                color: "red",
                                fontWeight: 400,
                                fontSize: { xs: "16px", md: "20px" },
                                fontFamily: "Alexandria",
                                lineHeight: "100%",
                                mb: 1,
                            }}
                        >
                            Tea Processing Machinery
                        </Typography>

                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                            <Box sx={{ flexGrow: 1, borderBottom: "1px solid #EE1D25" }}></Box>
                            <Typography
                                sx={{
                                    fontSize: { xs: "12px", md: "14px" },
                                    fontWeight: 400,
                                    color: "#EE1D25",
                                    fontFamily: "Alexandria",
                                }}
                            >
                                01
                            </Typography>
                        </Box>
                    </Box>

                    <Box sx={{ mb: "25px" }}>
                        <Typography
                            sx={{
                                color: "#fff",
                                fontWeight: 400,
                                fontSize: { xs: "16px", md: "20px" },
                                fontFamily: "Alexandria",
                                lineHeight: "100%",
                                mb: 1,
                            }}
                        >
                            Module Mounting Structure
                        </Typography>

                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                            <Box sx={{ flexGrow: 1, borderBottom: "1px solid #fff" }}></Box>
                            <Typography
                                sx={{
                                    fontSize: { xs: "12px", md: "14px" },
                                    fontWeight: 400,
                                    color: "#fff",
                                    fontFamily: "Alexandria",
                                }}
                            >
                                02
                            </Typography>
                        </Box>
                    </Box>

                    <Box>
                        <Typography
                            sx={{
                                color: "#FFFFFF",
                                fontWeight: 400,
                                fontSize: { xs: "16px", md: "20px" },
                                fontFamily: "Alexandria",
                                lineHeight: "100%",
                                mb: 1,
                            }}
                        >
                            Transmission Towers
                        </Typography>

                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                            <Box sx={{ flexGrow: 1, borderBottom: "1px solid #FFFFFF" }}></Box>
                            <Typography
                                sx={{
                                    fontSize: { xs: "12px", md: "14px" },
                                    fontWeight: 400,
                                    color: "#FFFFFF",
                                    fontFamily: "Alexandria",
                                }}
                            >
                                03
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                {/* CENTER TEXT — now moves BELOW on mobile */}
                <Box
                    sx={{
                        textAlign: { xs: "left", sm: "center", md: "center" },
                        color: "#000000",
                        position: { md: "absolute" },
                        top: { md: "43%" },
                        left: { md: "55%" },
                        transform: { md: "translate(-50%, -50%)" },
                        zIndex: 2,
                        mt: { xs: 4, md: 0 }, // spacing on mobile
                        width: { xs: "100%", md: "auto" }
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: "20px", sm: "26px", md: "40px" },
                            fontWeight: 400,
                            minWidth: { md: "800px" }, // only desktop
                            textAlign: { xs: "left", sm: "center", md: "center" },
                            fontFamily: "Open Sans",
                            lineHeight: "120%",
                        }}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elit.
                    </Typography>

                    <Button
                        variant="contained"
                        sx={{
                            mt: 3,
                            background: "linear-gradient(to bottom, #EE1D25, #000)",
                            "&:hover": {
                                background: "linear-gradient(to bottom, #a00000, #600000)",
                            },
                            borderRadius: "15px",
                            padding: "9px 12px",
                            fontSize: { xs: "14px", md: "15px" },
                            fontFamily: "Open Sans",
                            textTransform: "capitalize",
                        }}
                    >
                        Get a Quote
                    </Button>
                </Box>

            </Container>
        </Box>
    );
};

export default Banner;
