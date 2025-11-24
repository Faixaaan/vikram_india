import React from 'react'
import MediaBanner from '../../../Assets/MediaBanner.png'
import { Box, Typography, Grid, Card, CardContent, Button, Container } from "@mui/material";

// Sample images - replace with your actual images
import CardImage1 from '../../../Assets/mediaCard1.png'
import CardImage2 from '../../../Assets/mediaCard2.png'
import CardImage3 from '../../../Assets/mediaCard3.png'
import CardImage4 from '../../../Assets/mediaCard4.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Media = () => {
    // Sample data for cards
    const cardsData = [
        {
            id: 1,
            image: CardImage1,
            title: "Media Coverage 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            date: "January 15, 2024",
            buttonText: "Read More"
        },
        {
            id: 2,
            image: CardImage2,
            title: "Media Coverage 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..",
            date: "February 20, 2024",
            buttonText: "View Details"
        },
        {
            id: 3,
            image: CardImage3,
            title: "Media Coverage 3",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
            date: "March 10, 2024",
            buttonText: "Learn More"
        },
        {
            id: 4,
            image: CardImage4,
            title: "Media Coverage 4",
            description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            date: "April 5, 2024",
            buttonText: "Explore"
        }
    ];

    return (
        <>
            {/* Main Container */}
            <Box sx={{
                width: '100%', overflow: 'hidden', backgroundImage: `url(${MediaBanner})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: { xs: "30px 0px", md: "60px 40px 60px 40px" },
                borderTop: "1px solid #1E1E1E",
                minHeight: "400px",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center"
                
            }}>

                {/* Banner Section - FIXED */}
               <Container maxWidth='lg'>
                    <Typography
                        variant="h1"
                        sx={{
                            color: "white",
                            fontSize: { xs: "2rem", md: "40px" },
                            fontWeight: "bold",
                            textAlign: "center",
                            mb:6,
                            fontFamily:"Open Sans",
                            lineHeight:"100%"
                        }}
                    >
                        Media 
                    </Typography>
              
                  
                
                    <Grid container spacing={4}>
                        {cardsData.map((card) => (
                            <Grid item  size={{xs:12,sm:6}} key={card.id}>
                                <Card
                                    sx={{
                                        display: 'flex',
                                        flexDirection: { xs: 'column', md: 'row' },
                                        
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                                        overflow: 'hidden',
                                        transition: 'transform 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 8px 30px rgba(0,0,0,0.15)'
                                        },
                                        width:{md:"520px",xs:"350px"}
                                    }}
                                    
                                >
                                    {/* Left Side - Image */}
                                    <Box
                                        sx={{
                                            width: { xs: '100%', md: '60%' },
                                            height: { xs: '250px', md: 'auto' },
                                            minHeight: { md: '280px' }
                                        }}
                                    >
                                        <img
                                            src={card.image}
                                            alt={card.title}
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </Box>

                                    {/* Right Side - Content */}
                                    <Box
                                        sx={{
                                            width: { xs: '100%', md: '60%' },
                                            padding: { xs: '20px', md: '30px' },
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between'
                                        }}
                                    >
                                        <CardContent sx={{ padding: 0 }}>
                                            <Typography
                                                variant="h5"
                                                component="h2"
                                                sx={{
                                                    fontWeight: 'bold',
                                                    marginBottom: '10px',
                                                    color: '#333',
                                                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                                                    fontFamily:"Open Sans"
                                                }}
                                            >
                                                {card.title}
                                            </Typography>

                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: '#666',
                                                    marginBottom: '15px',
                                                    fontSize: { xs: '0.9rem', md: '1rem' },
                                                    fontFamily:"Open Sans"
                                                }}
                                            >
                                                {card.description}
                                            </Typography>

                                            <Typography
                                                variant="caption"
                                                sx={{
                                                    color: '#999',
                                                    display: 'block',
                                                    marginBottom: '20px',
                                                    fontFamily:"Open Sans"
                                                }}
                                            >
                                                {card.date}
                                            </Typography>
                                        </CardContent>

                                        {/* <Button
                                            variant="contained"
                                            sx={{
                                                background: "linear-gradient(to bottom, #EE1D25, #000)",
                                                borderRadius: "25px",
                                                padding: "8px 25px",
                                                textTransform: "none",
                                                fontSize: "14px",
                                                fontWeight: "600",
                                                alignSelf: 'flex-start',
                                                '&:hover': {
                                                    background: "linear-gradient(to bottom, #000, #EE1D25)",
                                                }
                                            }}
                                        >
                                            {card.buttonText}
                                        </Button> */}
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                    
                    <Box sx={{display:"flex",justifyContent:"center",mt:4}}>
                    <Button sx={{color:"#fff",fontFamily:"Open Sans",fontWeight:"700",borderBottom:"1px slid white"}}>
                        Know More <ArrowDropDownIcon/>
                    </Button>
                    </Box>
                    </Container>
                
            </Box>
        </>
    )
}

export default Media