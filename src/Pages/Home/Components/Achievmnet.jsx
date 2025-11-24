import React from 'react'
import AchievmentBanner from '../../../Assets/Achievment-Banner.png'
import { Box, Container, Typography, Button } from '@mui/material'
import '../../../App.css'

const Achievmnet = () => {
    return (
        <>
            <Box sx={{
                width: '100%',
                overflow: 'hidden',
                backgroundImage: `url(${AchievmentBanner})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: { xs: "60px 0px", md: "80px 40px 60px 40px" },
                borderTop: "1px solid #1E1E1E",
                minHeight: { xs: "500px", md: "600px" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
            }}>
                {/* Banner Section */}
                <Container maxWidth='lg'>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: { xs: 'flex-start', md: 'center' },
                        justifyContent: { xs: 'center', md: 'flex-end' },
                        minHeight: { xs: '400px', md: '450px' }
                    }}>
                        {/* Content Box - Positioned on right side */}
                        <Box sx={{
                            width: { xs: '100%', md: '50%', lg: '45%' },
                            textAlign: { xs: 'left', md: 'right' },
                            padding: { xs: '0', md: '0 0 0 40px' },
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: { xs: 'flex-start', md: 'flex-start' },
                            gap: { xs: 3, md: 4 }
                        }}>
                            {/* Title */}
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '44px' },
                                    fontWeight: 'bold',
                                    color: '#000',
                                    lineHeight: { xs: '1.2', md: '1.1' },
                                    fontFamily: 'Open Sans',
                                    display: "inline-block",
                                    pb: "10px",
                                    position: "relative",
                                    "&::after": {
                                        content: "''",
                                        position: "absolute",
                                        left: "0%",           // centers the 70% line
                                        bottom: 0,
                                        width: "70%",          // <-- Your required border width
                                        height: "2px",
                                        backgroundColor: "#000",
                                    }
                                }}
                            >
                                Our Achievements
                            </Typography>


                            {/* Content/Description */}
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: { xs: '1rem', sm: '1.1rem', md: '20px' },
                                    color: '#000',
                                    lineHeight: { xs: '1.6', md: '100%' },

                                    fontFamily: 'Open Sans',
                                    maxWidth: { xs: '100%', md: '90%', lg: '120%' },
                                    marginBottom: { xs: 1, md: 0 },
                                    textAlign: "left",
                                    fontWeight: "400"
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Vivamus elit elit, cursus quis nibh hendrerit, aliquam
                                placerat lacus. Suspendisse non quam a quam males
                                uada viverra. Nunc vestibulum neque ac ex hendrerit
                                gravida. Praesent ac turpis risus. Ut eget rutrum quam.
                                Aliquam tempor enim aliquet consectetur tincidunt.
                                Integer rutrum congue nisi ut tincidunt.
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    fontSize: { xs: '1rem', sm: '1.1rem', md: '20px' },
                                    color: '#000',
                                    lineHeight: { xs: '1.6', md: '100%' },

                                    fontFamily: 'Open Sans',
                                    maxWidth: { xs: '100%', md: '90%', lg: '120%' },
                                    marginBottom: { xs: 1, md: 0 },
                                    textAlign: "left",
                                    fontWeight: "400"
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Vivamus elit elit, cursus quis nibh hendrerit, aliquam
                                placerat lacus.
                            </Typography>

                            {/* Know More Button */}
                            <Button
                                variant="contained"
                                sx={{
                                    background: "#1E1E1E",
                                    
                                    padding: { xs: "10px 30px", md: "12px 35px" },
                                    textTransform: "none",
                                    fontSize: { xs: "14px", md: "16px" },
                                    fontWeight: "600",
                                    fontFamily: 'Open Sans',
                                    '&:hover': {
                                        background: "linear-gradient(to bottom, #000, #EE1D25)",
                                        transform: 'translateY(-2px)',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
                                    },
                                    transition: 'all 0.3s ease-in-out',
                                    marginTop: { xs: 1, md: 2 }
                                }}
                            >
                                Know More
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default Achievmnet