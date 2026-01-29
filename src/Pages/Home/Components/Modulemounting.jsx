import React, { useEffect, useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import moduleBackground from '../../../Assets/moduleBackground.jpg'
import { useNavigate } from 'react-router-dom';
import { axiosInstance } from '../../../Api/Axios/axios';
import { endpoints } from '../../../Api/EndPoints/endpoints';

const ModuleMounting = () => {

    const [index, setIndex] = useState(0);
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const res = await axiosInstance.get(endpoints.Banner.getBannerCarsousel);
            setData(res?.data?.data || []);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const nextSlide = () => {
        if (index < data.length - 1) setIndex(index + 1);
    };

    const prevSlide = () => {
        if (index > 0) setIndex(index - 1);
    };

    const navigatee = useNavigate();

    const handleComingsoon = () => {
        navigatee('/page-coming-soon');
    };

    return (
        <Box sx={{ position: "relative", overflow: "hidden" }}>

            {/* SLIDER MAIN WRAPPER */}
            <Box
                sx={{
                    display: "flex",
                    width: `${data.length * 100}%`,
                    transform: `translateX(-${index * (100 / data.length)}%)`,
                    transition: "all 0.6s ease"
                }}
            >
                {data.map((slide) => (
                    <Grid
                        key={slide.id}
                        container
                        sx={{
                            width: `${100 / data.length}%`,
                            flexShrink: 0
                        }}
                    >
                        {/* LEFT TEXT SECTION */}
                        <Grid
                            size={{ xs: 12, sm: 6 }}
                            sx={{
                                order: { xs: 2, sm: 1, md: 1 },
                                position: "relative",
                                overflow: "hidden",
                            }}
                        >
                            {/* Background Image */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    backgroundImage: `url(${moduleBackground})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    zIndex: 1,
                                }}
                            />

                            {/* Dark Overlay */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                    background: "rgba(0,0,0,0.7)",
                                    zIndex: 2,
                                }}
                            />

                            {/* Content */}
                            <Box
                                sx={{
                                    position: "relative",
                                    zIndex: 3,
                                    minHeight: "440px",
                                    padding: "30px 0px",
                                    marginLeft: { md: "35px", xs: "0px" },
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-start",
                                    marginTop: { md: "15px", xs: "0px" },
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: { md: "40px", xs: "34px" },
                                        color: "#fff",
                                        fontWeight: "700",
                                        fontFamily: "Roboto",
                                        textAlign: { xs: "center", md: "left" },
                                        marginBottom: { xs: "20px", md: "0px" },
                                         fontFamily: "Roboto"
                                    }}
                                >
                                    {slide.title}
                                </Typography>

                                {/* DESCRIPTION AS STRING ONLY */}
                                <ul>
                                    <li style={liStyle}>
                                        {slide.description
                                            ?.replace(/^\[|\]$/g, '')
                                            .replace(/"/g, '')}
                                    </li>
                                </ul>

                            </Box>
                        </Grid>

                        {/* RIGHT IMAGE SECTION */}
                        <Grid size={{ xs: 12, sm: 6 }} sx={{ order: { xs: 1, sm: 2, md: 2 } }}>
                            <Box sx={{
                                maxHeight: { xs: "312px", sm: "600px", md: "520px" },
                            }}>
                                <Box
                                    component="img"
                                    src={slide.image}
                                    alt={slide.title}
                                    sx={{
                                        width: "100%",
                                        height: "600px",
                                        backgroundSize: "cover",
                                        backgroundPosition: "top"
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                ))}
            </Box>

            {/* LEFT ARROW */}
            {index > 0 && (
                <Box onClick={prevSlide} sx={arrowLeft}>
                    <ChevronLeftIcon sx={{ fontSize: "42px" }} />
                </Box>
            )}

            {/* RIGHT ARROW */}
            {index < data.length - 1 && (
                <Box onClick={nextSlide} sx={arrowRight}>
                    <ChevronRightIcon sx={{ fontSize: "42px" }} />
                </Box>
            )}
        </Box>
    );
};

const liStyle = {
    color: "#fff",
    fontSize: { md: "20px", xs: "18px" },
    fontFamily: "Roboto",
    paddingBottom: "10px",
    fontWeight: "600",
    fontStyle: "italic",
    marginTop: { xs: "20px", md: "0px" }
};

const arrowLeft = {
    position: "absolute",
    bottom: { md: "28px", xs: "0px" },
    left: { md: "42%", xs: "38%" },
    cursor: "pointer",
    color: "#fff"
};

const arrowRight = {
    position: "absolute",
    bottom: { md: "28px", xs: "0px" },
    left: { md: "44%", xs: "48%", sm: "44%" },
    cursor: "pointer",
    color: "#fff"
};

export default ModuleMounting;
