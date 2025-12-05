import React, { useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import ModuleImage from '../../../Assets/Module_img.png';
import TeaProcessing from '../../../Assets/tea-processing.jpg';
import Galvanization from '../../../Assets/galvanization.jpg';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const ModuleMounting = () => {
    // All slides have SAME content for now (easy to change later)
    const slides = [
        {
            id: 1,
            title: "Module Mounting Structure",
            image: ModuleImage,
            features: [
                "Single and Double pole structure",
                "Double pole structure with struts",
                "Seasonal structure with unique turn buckle mechanism tilting",
                "Solar parking structure",
                "Pre-galvanized structure for solar projects",
                "Double pole seasonal tilting and static structure with struts"
            ]
        },
        {
            id: 2,
            title: "Tea Processing Machineries",
            image: TeaProcessing,
            features: [
                "Withering troughs for controlled leaf moisture reduction",
                "CTC and orthodox rolling machines for precise leaf shaping",
                "Fluid bed and conventional dryers for uniform tea drying",
                "Sorting, grading & cleaning systems for quality refinement",
                "Tea fermentation units ensuring optimal oxidation",
                "Flavor-locking packaging and sealing equipment"
            ]
        },
        {
            id: 3,
            title: "Hot Dip Galvanization",
            image: Galvanization,
            features: [
                "Corrosion-resistant coating for long-lasting metal protection",
                "High-temperature zinc immersion ensuring complete surface coverage",
                "Superior durability against harsh weather and chemical exposure",
                "Uniform metallurgical bonding for enhanced structural strength",
                "Ideal for industrial, construction, and outdoor applications",
                "Low-maintenance, cost-effective protection with extended service life"
            ]
        }
    ];

    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        if (index < slides.length - 1) setIndex(index + 1);
    };

    const prevSlide = () => {
        if (index > 0) setIndex(index - 1);
    };

    return (
        <Box sx={{ position: "relative", overflow: "hidden" }}>

            {/* SLIDER MAIN WRAPPER */}
            <Box
                sx={{
                    display: "flex",
                    width: `${slides.length * 100}%`,
                    transform: `translateX(-${index * (100 / slides.length)}%)`,
                    transition: "all 0.6s ease"
                }}
            >
                {slides.map((slide, i) => (
                    <Grid
                        key={slide.id}
                        container
                        sx={{
                            width: `${100 / slides.length}%`,
                            flexShrink: 0
                        }}
                    >
                        {/* LEFT TEXT SECTION */}
                        <Grid size={{ xs: 12, sm: 6 }} sx={{ backgroundColor: "#000000B5" }}>
                            <Box
                                sx={{
                                    minHeight: "440px",
                                    padding: "30px 0px",
                                    marginLeft: { md: "35px", xs: "0px" },
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center"
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: { md: "40px", xs: "34px" },
                                        color: "#fff",
                                        fontWeight: "700",
                                        fontFamily: "Open Sans",
                                        textAlign:{xs:"center",md:"left"},
                                        marginBottom:{xs:"20px",md:"0px"}
                                    }}
                                >
                                    {slide.title}
                                </Typography>

                                <ul>
                                    {slide.features.map((feature, idx) => (
                                        <li key={idx} style={liStyle}>{feature}</li>
                                    ))}
                                </ul>
                            </Box>
                        </Grid>

                        {/* RIGHT IMAGE SECTION */}
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Box sx={{ height: "500px" }}>
                                <Box
                                    component="img"
                                    src={slide.image}
                                    alt="Module Mounting Structure"
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover"
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                ))}
            </Box>

            {/* LEFT ARROW - Only show when NOT on first slide (index > 0) */}
            {index > 0 && (
                <Box
                    onClick={prevSlide}
                    sx={arrowLeft}
                >
                   <ChevronLeftIcon sx={{fontSize:"42px"}}/>
                </Box>
            )}

            {/* RIGHT ARROW - Only show when NOT on last slide (index < slides.length - 1) */}
            {index < slides.length - 1 && (
                <Box
                    onClick={nextSlide}
                    sx={arrowRight}
                >
                    <ChevronRightIcon sx={{fontSize:"42px"}}/> 
                </Box>
            )}
        </Box>
    );
};

const liStyle = {
    color: "#fff",
    fontSize: {md:"20px",xs:"18px"},
    fontFamily: "Open Sans",
    paddingBottom: "10px",
    fontWeight: "600",
    fontStyle: "italic",
    marginTop:{xs:"20px",md:"0px"}
};

const arrowLeft = {
    position: "absolute",
    bottom: {md:"28px",xs:"58px"},
    left: {md:"35%",xs:"38%"},
    fontSize: "42px",
    cursor: "pointer",
    color: "#fff"
};

const arrowRight = {
    position: "absolute",
    bottom: {md:"28px",xs:"58px"},
    left: {md:"38%",xs:"48%"},
    fontSize: "42px",
    cursor: "pointer",
    color: "#fff"
};

export default ModuleMounting;