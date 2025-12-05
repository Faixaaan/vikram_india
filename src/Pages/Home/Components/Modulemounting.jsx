import React, { useState } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import ModuleImage from '../../../Assets/Module_img.png';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const ModuleMounting = () => {
    // You want 3 slides but SAME content
    const slides = [1, 2, 3];

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
                {slides.map((_, i) => (
                    <Grid
                        key={i}
                        container
                        sx={{
                            width: `${100 / slides.length}%`, // FIX: Each slide should take equal width
                            flexShrink: 0
                        }}
                    >
                        {/* LEFT TEXT SECTION */}
                        <Grid size={{ xs: 12, sm: 6 }} sx={{ backgroundColor: "#000000B5" }}>
                            <Box
                                sx={{
                                    minHeight: "440px",
                                    padding: "30px 0px",
                                    marginLeft: { md: "35px", xs: "15px" },
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center"
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: { md: "40px", xs: "36px" },
                                        color: "#fff",
                                        fontWeight: "700",
                                        fontFamily: "Open Sans"
                                    }}
                                >
                                    Module Mounting Structure
                                </Typography>

                                <ul>
                                    <li style={liStyle}>Single and Double pole structure</li>
                                    <li style={liStyle}>Double pole structure with struts</li>
                                    <li style={liStyle}>Seasonal structure with unique turn buckle mechanism tilting</li>
                                    <li style={liStyle}>Solar parking structure</li>
                                    <li style={liStyle}>Pre-galvanized structure for solar projects</li>
                                    <li style={liStyle}>Double pole seasonal tilting and static structure with struts</li>
                                </ul>
                            </Box>
                        </Grid>

                        {/* RIGHT IMAGE SECTION */}
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <Box sx={{ height: "500px" }}>
                                <Box
                                    component="img"
                                    src={ModuleImage}
                                    alt=""
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
    fontSize: "20px",
    fontFamily: "Open Sans",
    paddingBottom: "10px",
    fontWeight: "600",
    fontStyle: "italic"
};

const arrowLeft = {
    position: "absolute",
    bottom: "28px",
    left: {md:"35%",xs:"38%"},
    fontSize: "42px",
    cursor: "pointer",
    color: "#fff"
};

const arrowRight = {
    position: "absolute",
    bottom: "28px",
    left: {md:"38%",xs:"48%"},
    fontSize: "42px",
    cursor: "pointer",
    color: "#fff"
};

export default ModuleMounting;