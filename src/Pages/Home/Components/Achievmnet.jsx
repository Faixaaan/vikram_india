import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../Api/Axios/axios";
import { endpoints } from "../../../Api/EndPoints/endpoints";
import { motion } from "framer-motion";

const Achievmnet = () => {
    const navigatee = useNavigate();
    const [data, setdata] = useState([]);

    const handleComingsoon = () => {
        navigatee("/page-coming-soon");
    };

    const fetchData = async () => {
        try {
            const res = await axiosInstance.get(endpoints.HomeCms.getHomeCms);
            setdata(res?.data?.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Box
            sx={{
                width: "100%",
                overflow: "hidden",
                backgroundImage: `url(${data?.sec4img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: { xs: "scroll", md: "fixed" },

                padding: { xs: "30px 0", sm: "40px 0", md: "80px 0 60px" },
                borderTop: "1px solid #1E1E1E",
                minHeight: { xs: "auto", md: "600px" },

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        minHeight: { xs: "auto", md: "450px" },
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        alignItems: "center",
                        justifyContent: { xs: "center", md: "flex-end" },

                        // push only on bigger screens
                        mr: { xs: 0, md: "-70px", lg: "-80px", xl: "-130px" },
                        background: {
                            xs: "linear-gradient(180deg, #00743a 0%, #276f9e 100%)", // mobile (full background)
                            sm: "linear-gradient(140deg,  #00743a 70%, #276f9e 100%)", // tablet
                            md: "linear-gradient(100deg, #ffffff00, #00743a22, #00743a, #176ba3)", // desktop
                            lg: "linear-gradient(100deg, #ffffff00, #ffffff00, #006030, #176ba3)", // large
                        },

                        borderRadius: { xs: "20px", md: "32px" },
                        p: { xs: 2, sm: 3, md: 4 },
                    }}
                >
                    {/* Glass Card */}
                    <Box
                        sx={{
                            width: {
                                xs: "100%",
                                sm: "90%",
                                md: "55%",
                                lg: "45%",
                                xl: "40%",
                            },

                            p: { xs: "20px", sm: "24px", md: "40px" },
                            borderRadius: "24px",

                            background: "rgba(255,255,255,0.15)",
                            backdropFilter: "blur(16px)",
                            WebkitBackdropFilter: "blur(16px)",

                            border: "1px solid rgba(255,255,255,0.3)",
                            boxShadow: "0 20px 50px rgba(0,0,0,0.15)",

                            display: "flex",
                            flexDirection: "column",
                            gap: { xs: 2, md: 3.5 },
                        }}
                    >
                        {/* Title */}
                        <Box sx={{ position: "relative", display: "inline-block" }}>
                            {/* Animated Left Bar */}
                            <Box
                                component={motion.div}
                                animate={{ height: ["40%", "80%", "40%"] }}
                                transition={{
                                    duration: 1.6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                sx={{
                                    position: "absolute",
                                    left: 0,
                                    top: "50%",
                                    transform: "translateY(-50%)",
                                    width: "5px",
                                    borderRadius: "10px",
                                    background: "#dc301d",
                                }}
                            />

                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: {
                                        xs: "1.8rem",
                                        sm: "2.2rem",
                                        md: "2.2rem",
                                        lg: "38px",
                                    },
                                    fontWeight: 700,
                                    lineHeight: 1.15,
                                    letterSpacing: "-0.03em",

                                    backgroundImage:
                                        "linear-gradient(90deg, #ffdede 20%, #ff9898 100%)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",

                                    position: "relative",
                                    padding: { xs: "14px 18px", md: "18px 26px" },
                                    paddingLeft: "32px",
                                    display: "inline-block",

                                    backgroundColor: "#ffffff",
                                    borderRadius: "16px",
                                    boxShadow: "0 0px 40px rgba(0,0,0,0.12)",

                                    fontFamily: "'DM Sans', 'Inter', sans-serif",
                                }}
                            >
                                {data?.sec4title}
                            </Typography>
                        </Box>

                        {/* Description */}
                        <Typography
                            sx={{
                                fontSize: { xs: "14px", sm: "15px", md: "18px" },
                                color: "#eaeaea",
                                lineHeight: 1.8,
                                maxWidth: { xs: "100%", md: "520px" },
                            }}
                        >
                            {data?.sec4description}
                        </Typography>

                        {/* Button */}
                        <Button
                            variant="contained"
                            sx={{
                                alignSelf: { xs: "stretch", sm: "flex-start" },
                                mt: 2,
                                px: { xs: 1.8, sm: 2.2, md: 2.4 },
                                py: { xs: 0.7, sm: 0.8 },
                                fontSize: { xs: "16px", sm: "17px" },
                                borderRadius: "30px",
                                textTransform: "none",
                                fontWeight: 600,

                                position: "relative",
                                overflow: "hidden",

                                background: "#bd2304",

                                // text always on top
                                zIndex: 1,

                                "& span": {
                                    position: "relative",
                                    zIndex: 2,
                                },

                                // center burst layer
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

                                "&:hover": {
                                    background: "#bd2304",
                                },
                            }}
                            onClick={handleComingsoon}
                        >
                            <span>Know More</span>
                        </Button>

                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Achievmnet;