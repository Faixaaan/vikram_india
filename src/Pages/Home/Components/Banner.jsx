import React, { useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import BannerImg from "../../../Assets/Banner.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const headings = [
    { title: "Module Mounting Structure", no: "01" },
    { title: "Module Mounting Structure", no: "02" },
    { title: "Tea Processing Machinery", no: "03" }
];

const Banner = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Swiper
            modules={[Autoplay, Navigation]}
            autoplay={{ delay: 3000 }}
            navigation       
            loop
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            style={{ width: "100%", height: "100%" }}
        >
            {headings.map((item, index) => (
                <SwiperSlide key={index}>
                    <Box
                        sx={{
                            width: "100%",
                            height: { xs: "420px", sm: "480px", md: "520px" },
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
                                flexDirection: { xs: "column", md: "row" },
                                alignItems: { xs: "flex-start", md: "center" },
                                justifyContent: { xs: "flex-start", md: "space-between" },
                                px: { xs: 2, md: 6 },
                                pt: { xs: 4, md: 0 },
                            }}
                        >
                            {/* LEFT — 3 Headings */}
                            <Box sx={{ color: "#fff", zIndex: 2, width: { xs: "100%", md: "auto" } }}>
                                {headings.map((h, i) => (
                                    <Box sx={{ mb: "22px" }} key={i}>
                                        <Typography
                                            sx={{
                                                fontSize: { xs: "16px", md: "20px" },
                                                fontFamily: "Alexandria",
                                                lineHeight: "100%",
                                                mb: 1,
                                                fontWeight: 400,
                                                color: activeIndex === i ? "red" : "#fff",
                                            }}
                                        >
                                            {h.title}
                                        </Typography>

                                        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                                            <Box
                                                sx={{
                                                    flexGrow: 1,
                                                    borderBottom:
                                                        activeIndex === i
                                                            ? "1px solid red"
                                                            : "1px solid #fff",
                                                }}
                                            ></Box>

                                            <Typography
                                                sx={{
                                                    fontSize: { xs: "12px", md: "14px" },
                                                    fontWeight: 400,
                                                    color: activeIndex === i ? "red" : "#fff",
                                                    fontFamily: "Alexandria",
                                                }}
                                            >
                                                {h.no}
                                            </Typography>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>

                            {/* CENTER CONTENT */}
                            <Box
                                sx={{
                                    textAlign: { xs: "left", sm: "center", md: "center" },
                                    color: "#000",
                                    position: { md: "absolute" },
                                    top: { md: "43%" },
                                    left: { md: "55%" },
                                    transform: { md: "translate(-50%, -50%)" },
                                    zIndex: 2,
                                    mt: { xs: 4, md: 0 },
                                    width: { xs: "100%", md: "auto" },
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: { xs: "20px", sm: "26px", md: "40px" },
                                        fontWeight: 400,
                                        minWidth: { md: "800px" },
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

                        {/* SWIPER ARROWS STYLE FIX: RESPONSIVE */}
                        <style>{`
                            .swiper-button-next,
                            .swiper-button-prev {
                                color: #fff;
                                top: 50%;
                                transform: translateY(-50%);
                                scale: 0.5;
                            }

                            @media (max-width: 600px) {
                                .swiper-button-next,
                                .swiper-button-prev {
                                    scale: 0.5;
                                }
                            }
                        `}</style>
                    </Box>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Banner;
