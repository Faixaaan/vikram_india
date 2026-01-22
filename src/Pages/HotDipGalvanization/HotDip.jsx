import React, { useState } from "react";
import { Box, Grid, Typography, Button, IconButton } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import image1 from '../../Assets/Achievment-Banner.png'

import "swiper/css";
import "swiper/css/pagination";

const sliderData = [
    {
        title: "Professional Gardening",
        desc: "Expert lawn care and maintenance services",
        image: image1,
    },
    {
        title: "Lawn Maintenance",
        desc: "High quality grass cutting solutions",
        image: image1,
    },
    {
        title: "Garden Care",
        desc: "Complete garden maintenance services",
        image: image1,
    },
];

const HotDip = () => {
    const [swiperRef, setSwiperRef] = useState(null);

    return (
        <Box sx={{ px: { xs: 2, md: 6 }, py: 6 }}>
            <Grid container spacing={4} alignItems="flex-start">
                {/* LEFT CONTENT */}
                <Grid item size={{ xs: 12, md: 6 }}>
                    <Typography
                        variant="h4"
                        fontWeight={700}
                        sx={{
                            color:"#000",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            mb: 2,
                        }}
                    >
                        Hot Dip Galvanization
                    </Typography>

                    <Typography color="text.secondary" mb={4}>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde voluptatibus ducimus tempore facere reprehenderit debitis veritatis non, quos exercitationem est dignissimos, ipsam porro id, itaque quia nihil deserunt eum quam ut. Reprehenderit fuga incidunt eligendi, in dignissimos vitae suscipit veritatis fugiat quia tenetur error! Quaerat dicta alias placeat necessitatibus cupiditate?
                    </Typography>

                    <Button
                        variant="contained"
                        sx={{
                            px: 5,
                            py: 1.4,
                            borderRadius: 999,
                            background: "linear-gradient(to bottom, #EE1D25, #000)",
                            "&:hover": {
                                background: "linear-gradient(to bottom, #a00000, #600000)",
                            },
                        }}
                    >
                        BOOK NOW
                    </Button>
                </Grid>

                {/* RIGHT CAROUSEL */}
                <Grid item size={{ xs: 12, md: 6 }}>
                    <Box sx={{ position: "relative" }}>
                        <Swiper
                            modules={[Pagination]}
                            pagination={{ clickable: true }}
                            onSwiper={setSwiperRef}
                            style={{
                                borderRadius: "16px",
                                overflow: "hidden",
                                height: "520px"
                            }}
                        >
                            {sliderData.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Box
                                        sx={{
                                            height: { xs: 240, sm: 320, md: 450 },
                                            backgroundImage: `url(${item.image})`,
                                            backgroundSize: "cover",
                                            backgroundPosition: "center",
                                            position: "relative",
                                        }}
                                    >
                                        {/* Overlay Text */}
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                bottom: 0,
                                                width: "100%",
                                                p: 2,
                                                color: "#fff",
                                                background:
                                                    "linear-gradient(to top, rgba(0,0,0,.7), transparent)",
                                            }}
                                        >
                                            <Typography fontWeight={600}>
                                                {item.title}
                                            </Typography>
                                            <Typography variant="body2">
                                                {item.desc}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Arrows */}
                        <IconButton
                            onClick={() => swiperRef?.slidePrev()}
                            sx={{
                                position: "absolute",
                                top: "50%",
                                left: 10,
                                transform: "translateY(-50%)",
                                bgcolor: "#fff",
                                zIndex: 2,
                            }}
                        >
                            <ChevronLeftIcon />
                        </IconButton>

                        <IconButton
                            onClick={() => swiperRef?.slideNext()}
                            sx={{
                                position: "absolute",
                                top: "50%",
                                right: 10,
                                transform: "translateY(-50%)",
                                bgcolor: "#fff",
                                zIndex: 2,
                            }}
                        >
                            <ChevronRightIcon />
                        </IconButton>
                    </Box>
                </Grid>
            </Grid>

            {/* Pagination styling */}
            <style>{`
        .swiper-pagination-bullet {
          background: #fff;
          opacity: 0.5;
        }
        .swiper-pagination-bullet-active {
          background: #e91e63;
          opacity: 1;
        }
      `}</style>
        </Box>
    );
};

export default HotDip;
