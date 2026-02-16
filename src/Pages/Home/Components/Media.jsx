// import React, { useState } from 'react'
// import MediaBanner from '../../../Assets/MediaBanner.png'
// import { Box, Typography, Grid, Card, CardContent, Button, Container } from "@mui/material";

// // Sample images - replace with your actual images
// import CardImage1 from '../../../Assets/mediaCard1.png'
// import CardImage2 from '../../../Assets/mediaCard2.png'
// import CardImage3 from '../../../Assets/mediaCard3.png'
// import CardImage4 from '../../../Assets/mediaCard4.png'
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import { useNavigate } from 'react-router-dom';
// import { axiosInstance } from '../../../Api/Axios/axios';
// import { endpoints } from '../../../Api/EndPoints/endpoints';
// import { useEffect } from 'react';

// const Media = () => {
//     // Sample data for cards
//     const cardsData = [
//         {
//             id: 1,
//             image: CardImage1,
//             title: "Media Coverage 1",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//             date: "January 15, 2024",
//             buttonText: "Read More"
//         },
//         {
//             id: 2,
//             image: CardImage2,
//             title: "Media Coverage 2",
//             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..",
//             date: "February 20, 2024",
//             buttonText: "View Details"
//         },
//         {
//             id: 3,
//             image: CardImage3,
//             title: "Media Coverage 3",
//             description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//             date: "March 10, 2024",
//             buttonText: "Learn More"
//         },
//         {
//             id: 4,
//             image: CardImage4,
//             title: "Media Coverage 4",
//             description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//             date: "April 5, 2024",
//             buttonText: "Explore"
//         }
//     ];

//     const navigatee = useNavigate()
//     const [mediaData, setMediaData] = useState([])

//     const fetchMediaData = async () => {
//         try {
//             const res = await axiosInstance.get(endpoints.homeMedia.getHomeMediaData)
//             setMediaData(res?.data?.data)
//         }
//         catch (err) {
//             console.log(err)
//         }
//     }
//     useEffect(() => {
//         fetchMediaData()
//     }, [])

//     const handleClick = () => {
//         navigatee('/page-coming-soon');
//     };

//     return (
//         <>
//             {/* Main Container */}
//             <Box sx={{
//                 width: '100%', overflow: 'hidden', backgroundImage: `url(${MediaBanner})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 padding: { xs: "30px 0px", md: "60px 0px 60px 0px" },
//                 borderTop: "1px solid #1E1E1E",
//                 minHeight: "400px",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "center",
//                 alignItems: "center"

//             }}>

//                 {/* Banner Section - FIXED */}
//                 <Container maxWidth='lg'>
//                     <Typography
//                         variant="h1"
//                         sx={{
//                             color: "white",
//                             fontSize: { xs: "2rem", md: "40px" },
//                             fontWeight: "bold",
//                             textAlign: "center",
//                             mb: 6,
//                             fontFamily: "Roboto",
//                             lineHeight: "100%",
//                             background: "linear-gradient(to left, #1BAA63 0%, #276f9e 100%)",
//                             WebkitBackgroundClip: "text",
//                             WebkitTextFillColor: "transparent",
//                         }}
//                     >
//                         Media
//                     </Typography>



//                     <Grid container spacing={4}>
//                         {mediaData?.map((card) => (
//                             <Grid item size={{ xs: 12, sm: 6 }} key={card.id}>
//                                 <Card
//                                     sx={{
//                                         display: 'flex',
//                                         flexDirection: { xs: 'column', md: 'row' },

//                                         boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
//                                         overflow: 'hidden',
//                                         transition: 'transform 0.3s ease-in-out',
//                                         '&:hover': {
//                                             transform: 'translateY(-5px)',
//                                             boxShadow: '0 8px 30px rgba(0,0,0,0.15)'
//                                         },
//                                         width: { md: "520px", xs: "100%" }
//                                     }}

//                                 >
//                                     {/* Left Side - Image */}
//                                     <Box
//                                         sx={{
//                                             width: { xs: '100%', md: '60%' },
//                                             height: { xs: '250px', md: 'auto' },
//                                             minHeight: { md: '280px' }
//                                         }}
//                                     >
//                                         <img
//                                             src={card.image}
//                                             alt={card.title}
//                                             style={{
//                                                 width: '100%',
//                                                 height: '100%',
//                                                 objectFit: 'cover'
//                                             }}
//                                         />
//                                     </Box>

//                                     {/* Right Side - Content */}
//                                     <Box
//                                         sx={{
//                                             width: { xs: 'auto', md: '60%' },
//                                             padding: { xs: '20px', md: '30px' },
//                                             display: 'flex',
//                                             flexDirection: 'column',
//                                             justifyContent: 'space-between'
//                                         }}
//                                     >
//                                         <CardContent sx={{ padding: 0 }}>
//                                             <Typography
//                                                 variant="h5"
//                                                 component="h2"
//                                                 sx={{
//                                                     fontWeight: 'bold',
//                                                     marginBottom: '10px',
//                                                     color: '#333',
//                                                     fontSize: { xs: '1.25rem', md: '1.5rem' },
//                                                     fontFamily: "Roboto"
//                                                 }}
//                                             >
//                                                 {card.title}
//                                             </Typography>

//                                             <Typography
//                                                 variant="body2"
//                                                 sx={{
//                                                     color: '#666',
//                                                     marginBottom: '15px',
//                                                     fontSize: { xs: '0.9rem', md: '1rem' },
//                                                     fontFamily: "Roboto"
//                                                 }}
//                                             >
//                                                 {card.description}
//                                             </Typography>

//                                             <Typography
//                                                 variant="caption"
//                                                 sx={{
//                                                     color: '#999',
//                                                     display: 'block',
//                                                     marginBottom: '0px',
//                                                     fontFamily: "Roboto"
//                                                 }}
//                                             >
//                                                 {card.date}
//                                             </Typography>
//                                         </CardContent>

//                                         {/* <Button
//                                             variant="contained"
//                                             sx={{
//                                                 background: "linear-gradient(to bottom, #EE1D25, #000)",
//                                                 borderRadius: "25px",
//                                                 padding: "8px 25px",
//                                                 textTransform: "none",
//                                                 fontSize: "14px",
//                                                 fontWeight: "600",
//                                                 alignSelf: 'flex-start',
//                                                 '&:hover': {
//                                                     background: "linear-gradient(to bottom, #000, #EE1D25)",
//                                                 }
//                                             }}
//                                         >
//                                             {card.buttonText}
//                                         </Button> */}
//                                     </Box>
//                                 </Card>
//                             </Grid>
//                         ))}
//                     </Grid>

//                     <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
//                         <Button
//                             variant="contained"
//                             sx={{
//                                 alignSelf: { xs: "stretch", sm: "flex-start" },
//                                 mt: 2,
//                                 px: 4,
//                                 py: 1.4,
//                                 borderRadius: "30px",
//                                 textTransform: "none",
//                                 fontWeight: 600,
//                                 fontSize: "18px",

//                                 position: "relative",
//                                 overflow: "hidden",

//                                 background: "#c40613",

//                                 // text always on top
//                                 zIndex: 1,

//                                 "& span": {
//                                     position: "relative",
//                                     zIndex: 2,
//                                 },

//                                 // center burst layer
//                                 "&:before": {
//                                     content: '""',
//                                     position: "absolute",
//                                     left: "50%",
//                                     top: "50%",
//                                     width: 0,
//                                     height: 0,
//                                     background: "#000",
//                                     borderRadius: "50%",
//                                     transform: "translate(-12%, -50%)",
//                                     transition: "all 1s ease",
//                                     zIndex: 0,
//                                 },

//                                 "&:hover:before": {
//                                     width: "300%",
//                                     height: "300%",
//                                 },

//                                 "&:hover": {
//                                     background: "#c40613",
//                                 },
//                             }}
//                             onClick={handleClick}
//                         >
//                             <span>Know More</span>
//                         </Button>
//                     </Box>
//                 </Container>

//             </Box>
//         </>
//     )
// }

// export default Media



import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Container,
} from "@mui/material";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";

import MediaBanner from "../../../Assets/MediaBanner.png";
import { axiosInstance } from "../../../Api/Axios/axios";
import { endpoints } from "../../../Api/EndPoints/endpoints";

const MotionCard = motion(Card);


const StackedCard = ({ card, index }) => {
  const { scrollYProgress } = useScroll();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/page-coming-soon");
  };



  const start = index * 0.15;
  const end = start + 0.25;

  const y = useTransform(scrollYProgress, [start, end], [100, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [0.92, 1]);
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

  return (
    <MotionCard
      style={{
        y,
        scale,
        opacity,
        position: "sticky",
        top: window.innerWidth < 900 ? 80 : 120,
        zIndex: 20 + index,
      }}
      sx={{
        mb: { xs: 4, md: 6 },

        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        borderRadius: "22px",
        overflow: "hidden",
      

        background: "linear-gradient(145deg, #1baa63, #1a1a1a)",
        border: "1px solid rgb(255, 255, 255)",
        boxShadow: "0 25px 50px rgba(0,0,0,0.7)",
        transition: "all 0.4s ease",

        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 35px 70px rgba(0,0,0,0.8)",
          border: "1px solid #1baa6366",
        }

      }}
    >
      {/* IMAGE */}
      <Box
        sx={{
          width: { xs: "100%", md: "45%" },
          height: { xs: 200, sm: 230, md: "auto" },
        }}
      >
        <img
          src={card.image}
          alt={card.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>

      {/* CONTENT */}
      <Box
        sx={{
          width: { xs: "100%", md: "55%" },
          p: { xs: 2, md: 4 },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <CardContent sx={{ p: 0 }}>
          <Typography
            sx={{
              fontSize: "0.75rem",
              color: "#ffffff",
              letterSpacing: "1.5px",
              fontWeight: 600,
              mb: 1,
              textTransform: "uppercase",
            }}
          >
            {card.date}
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "1.3rem", md: "1.6rem" },
              fontWeight: 700,
              color: "#fff",
              mb: 2,
              lineHeight: 1.3,
            }}
          >
            {card.title}
          </Typography>

          <Typography
            sx={{
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.7,
              fontSize: "0.95rem",
            }}
          >
            {card.description}
          </Typography>
        </CardContent>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            variant="contained"
            sx={{
              alignSelf: { xs: "stretch", sm: "flex-start" },
              mt: 2,
              px: 4,
              py: 1.4,
              borderRadius: "30px",
              textTransform: "none",
              fontWeight: 600,
              fontSize: "18px",

              position: "relative",
              overflow: "hidden",

              background: "#c40613",

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
                background: "#c40613",
              },
            }}
            onClick={handleClick}
          >
            <span>Know More</span>
          </Button>
        </Box>
      </Box>
    </MotionCard>
  );
};

/* ===================== MAIN MEDIA ===================== */
const Media = () => {

  const [mediaData, setMediaData] = useState([]);

  const fetchMediaData = async () => {
    try {
      const res = await axiosInstance.get(
        endpoints.homeMedia.getHomeMediaData
      );
      setMediaData(res?.data?.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMediaData();
  }, []);


  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        backgroundImage: `url(${MediaBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: { xs: 6, md: 10 },
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.92) 100%)",
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: "50px",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.9rem", md: "2.6rem" },
                fontWeight: 700,
                letterSpacing: "1px",
                fontFamily: "'Poppins', 'Roboto', sans-serif",
                background: "linear-gradient(90deg, #1BAA63, #276f9e)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                position: "relative",
                display: "inline-block",
              }}
            >
              Media
            </Typography>

            {/* Subtle underline accent */}
            <Box
              sx={{
                width: 80,
                height: 4,
                margin: "14px auto 0",
                borderRadius: "10px",
                background: "linear-gradient(90deg, #1BAA63, #276f9e)",
              }}
            />
          </Box>
        </Box>

        {/* STACKED SCROLL SECTION */}
        <Box
          sx={{
            position: "relative",
            pb: { xs: 2 },
          }}
        >
          {mediaData.map((card, index) => (
            <StackedCard key={card.id} card={card} index={index} />
          ))}
        </Box>


      </Container>
    </Box>
  );
};

export default Media;
