// import React, { useEffect, useState } from 'react';
// import { Box, Typography, Card, CardContent, IconButton, Avatar, Button, Modal } from "@mui/material";
// import { ChevronLeft, ChevronRight } from "@mui/icons-material";
// import '../../../App.css'
// import avatar1 from '../../../Assets/Ellipse 14.png'
// import avatar2 from '../../../Assets/Ellipse 15.png'
// import avatar3 from '../../../Assets/Ellipse 16.png'
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import { axiosInstance } from '../../../Api/Axios/axios';
// import { endpoints } from '../../../Api/EndPoints/endpoints';

// const Testimonial = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [openModal, setOpenModal] = useState(false);
//   const [selectedTestimonial, setSelectedTestimonial] = useState(null);
//   const [touchStartX, setTouchStartX] = useState(null);
//   const [touchEndX, setTouchEndX] = useState(null);


//   const handleTouchStart = (e) => {
//     setTouchStartX(e.touches[0].clientX);
//   };

//   const handleTouchMove = (e) => {
//     setTouchEndX(e.touches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     if (!touchStartX || !touchEndX) return;

//     const distance = touchStartX - touchEndX;
//     const minSwipeDistance = 50; // sensitivity

//     if (distance > minSwipeDistance) {
//       // swipe left
//       nextSlide();
//     } else if (distance < -minSwipeDistance) {
//       // swipe right
//       prevSlide();
//     }

//     setTouchStartX(null);
//     setTouchEndX(null);
//   };





//   const [data, setData] = useState([])

//   const fetchTestimonialData = async () => {
//     try {
//       const res = await axiosInstance.get(endpoints.Testimonials.getTestimonialsData)
//       setData(res?.data?.data || [])
//     }
//     catch (err) {
//       console.log(err)
//     }
//   }

//   useEffect(() => {
//     fetchTestimonialData()
//   }, [])

//   // Responsive cards per view
//   const getCardsPerView = () => {
//     if (typeof window === 'undefined') return 4;
//     const width = window.innerWidth;
//     if (width < 600) return 1;    // Mobile: 1 card
//     if (width < 960) return 2;    // Tablet: 2 cards
//     return 4;                     // Desktop: 4 cards
//   };

//   const [cardsPerView, setCardsPerView] = useState(4);

//   React.useEffect(() => {
//     const handleResize = () => {
//       setCardsPerView(getCardsPerView());
//     };

//     handleResize(); // Set initial value
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const totalSlides = Math.ceil((data?.length || 0) / cardsPerView);


//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex >= totalSlides - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex <= 0 ? totalSlides - 1 : prevIndex - 1
//     );
//   };

//   const renderStars = (rating) => {
//     return (
//       <Box sx={{ display: 'flex', gap: 0.5 }}>
//         {[...Array(5)].map((_, index) => (
//           <Box
//             key={index}
//             sx={{
//               color: index < rating ? '#FFD700' : '#ddd',
//               fontSize: { xs: '14px', md: '16px' }
//             }}
//           >
//             ★
//           </Box>
//         ))}
//       </Box>
//     );
//   };





//   return (
//     <Box sx={{
//       padding: { xs: "30px 15px", md: "60px 40px" },
//       backgroundColor: "#fff",
//       position: 'relative'
//     }}>
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           mb: "50px",
//         }}
//       >
//         <Box sx={{ textAlign: "center" }}>
//           <Typography
//             variant="h2"
//             sx={{
//               fontSize: { xs: "1.9rem", md: "2.6rem" },
//               fontWeight: 700,
//               letterSpacing: "1px",
//               fontFamily: "'Poppins', 'Roboto', sans-serif",
//               background: "linear-gradient(90deg, #1BAA63, #276f9e)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               position: "relative",
//               display: "inline-block",
//             }}
//           >
//             Testimonials
//           </Typography>

//           <Box
//             sx={{
//               width: 80,
//               height: 4,
//               margin: "14px auto 0",
//               borderRadius: "10px",
//               background: "linear-gradient(90deg, #1BAA63, #276f9e)",
//             }}
//           />
//         </Box>
//       </Box>




//       {/* Carousel Container */}
//       <Box sx={{ position: 'relative', maxWidth: '1200px', margin: '0 auto' }}>

//         {/* Navigation Buttons - Hide on mobile when only 1 card */}
//         {cardsPerView > 1 && (
//           <>
//             <IconButton
//               onClick={prevSlide}
//               sx={{
//                 position: 'absolute',
//                 left: { xs: '-5px', sm: '-13px', md: '-40px' },
//                 top: '50%',
//                 transform: 'translateY(-50%)',
//                 backgroundColor: 'white',
//                 boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//                 zIndex: 2,
//                 '&:hover': {
//                   backgroundColor: '#f5f5f5'
//                 },
//                 display: { xs: cardsPerView === 1 ? 'none' : 'flex', sm: 'flex' }
//               }}
//             >
//               <ChevronLeft />
//             </IconButton>

//             <IconButton
//               onClick={nextSlide}
//               sx={{
//                 position: 'absolute',
//                 right: { xs: '-5px', sm: '-10px', md: '-40px' },
//                 top: '50%',
//                 transform: 'translateY(-50%)',
//                 backgroundColor: 'white',
//                 boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//                 zIndex: 2,
//                 '&:hover': {
//                   backgroundColor: '#f5f5f5'
//                 },
//                 display: { xs: cardsPerView === 1 ? 'none' : 'flex', sm: 'flex' }
//               }}
//             >
//               <ChevronRight />
//             </IconButton>
//           </>
//         )}

//         {/* Carousel Content */}
//         <Box
//           sx={{
//             overflow: 'hidden',
//             width: '100%',
//             padding: '10px 0',
//             touchAction: 'pan-y'
//           }}
//           onTouchStart={handleTouchStart}
//           onTouchMove={handleTouchMove}
//           onTouchEnd={handleTouchEnd}

//         >
//          <Box
//   sx={{
//     display: "flex",
//     transition: "transform 0.5s ease-in-out",
//     transform: `translateX(-${currentIndex * 100}%)`,
//     width: `${(data.length / cardsPerView) * 100}%`,
//   }}
// >

//             {data.map((testimonial) => (
//               <Box
//                 key={testimonial.id}
//                 sx={{
//                   flex: `0 0 ${100 / (totalSlides * cardsPerView)}%`,
//                   padding: { xs: '0 8px', sm: '0 19px', md: '0 15px' },
//                   boxSizing: 'border-box'
//                 }}
//               >
//                 <Card
//                   sx={{
//                     borderRadius: '12px',
//                     backgroundColor: "#0A0A0DD6",
//                     padding: { xs: '15px', sm: '20px' },
//                     height: { xs: 'auto', sm: '250px' },
//                     display: 'flex',
//                     flexDirection: 'column',
//                     transition: 'transform 0.3s ease-in-out',
//                     '&:hover': {
//                       transform: 'translateY(-5px)',
//                       boxShadow: '0 8px 30px rgba(0,0,0,0.15)'
//                     },
//                     width: { sm: "290px", xs: "90%", md: "230px" }
//                   }}
//                 >
//                   {/* First Section: Left Image + Right Info */}
//                   <Box sx={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: { xs: '12px', sm: '15px' },
//                     marginBottom: { xs: '15px', sm: '20px' }
//                   }}>
//                     {/* Left Side - Image */}
//                     <Avatar
//                       src={testimonial.image}
//                       alt={testimonial.name}
//                       sx={{
//                         width: { xs: 50, sm: 60, md: 70 },
//                         height: { xs: 50, sm: 60, md: 70 }
//                       }}
//                     />

//                     {/* Right Side - Name, Country, Ratings */}
//                     <Box sx={{ flex: 1 }}>
//                       <Typography
//                         variant="h6"
//                         sx={{
//                           fontWeight: 'bold',
//                           color: '#FFFFFF',
//                           fontSize: { xs: '14px', sm: '16px', md: '18px' },
//                           marginBottom: '4px',
//                           fontFamily: "Kaisei Decol",
//                           fontFamily: "Roboto"
//                         }}
//                       >
//                         {testimonial.name}
//                       </Typography>

//                       <Typography
//                         variant="body2"
//                         sx={{
//                           color: '#fff',
//                           fontSize: { xs: '12px', sm: '13px', md: '14px' },
//                           marginBottom: '8px',
//                           fontFamily: "Kaisei Decol",
//                           fontFamily: "Roboto"
//                         }}
//                       >
//                         {testimonial.country}
//                       </Typography>

//                       {/* Ratings */}
//                       {renderStars(testimonial.rating)}
//                     </Box>
//                   </Box>

//                   {/* Second Section: Content */}
//                   <CardContent sx={{
//                     padding: 0,
//                     flexGrow: 1,
//                     display: 'flex',
//                     flexDirection: 'column',
//                     justifyContent: 'space-between'
//                   }}>
//                     <Typography
//                       variant="body2"
//                       sx={{
//                         color: '#fff',

//                         lineHeight: { xs: '1.4', sm: '1.6' },
//                         display: '-webkit-box',
//                         WebkitLineClamp: { xs: 3, sm: 4 },
//                         WebkitBoxOrient: 'vertical',
//                         overflow: 'hidden',
//                         fontSize: { xs: '13px', sm: '14px', md: '15px' },
//                         flexGrow: 1,
//                         fontFamily: "Kaisei Decol",
//                         fontFamily: "Roboto"
//                       }}
//                     >
//                       {testimonial.msg}
//                     </Typography>

//                     <Box sx={{
//                       display: "flex", justifyContent: "flex-start", alignItems: "center", mt: 2, width: "150px", height: "40px", backgroundColor: "rgba(255, 255, 255, 0.15)", // Glassy white tint
//                       backdropFilter: "blur(10px)", // Glass blur effect
//                       border: "1px solid rgba(255, 255, 255, 0.25)", padding: "1px 5px", borderRadius: "20px",
//                       cursor: "pointer",
//                       '&:hover': {
//                         backgroundColor: "rgba(255, 255, 255, 0.25)", // Slightly more opaque on hover
//                       }

//                     }} onClick={() => {
//                       setSelectedTestimonial(testimonial);
//                       setOpenModal(true);
//                     }}>
//                       <div
//                         style={{
//                           width: 35,
//                           height: 35,
//                           borderRadius: "50%",
//                           background: "#fff",
//                           display: "flex",
//                           justifyContent: "center",
//                           alignItems: "center",
//                           cursor: "pointer",


//                         }}


//                         onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
//                         onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//                       >
//                         <PlayArrowIcon sx={{ color: "#c00", fontSize: 22 }} />
//                       </div>
//                       <Typography sx={{ fontSize: "14px", color: "#fff", fontFamily: "Roboto", ml: 1 }}>
//                         Watch Review
//                       </Typography>
//                     </Box>


//                   </CardContent>
//                 </Card>
//               </Box>
//             ))}
//           </Box>
//         </Box>

//         {/* Dots Indicator */}
//         <Box sx={{
//           display: 'flex',
//           justifyContent: 'center',
//           gap: '8px',
//           marginTop: '30px'
//         }}>
//           {[...Array(totalSlides)].map((_, index) => (
//             <Box
//               key={index}
//               onClick={() => setCurrentIndex(index)}
//               sx={{
//                 width: { xs: '8px', sm: '10px' },
//                 height: { xs: '8px', sm: '10px' },
//                 borderRadius: '50%',
//                 backgroundColor: currentIndex === index ? '#EE1D25' : '#ddd',
//                 cursor: 'pointer',
//                 transition: 'background-color 0.3s ease'
//               }}
//             />
//           ))}
//         </Box>
//       </Box>

//       {/* POPUP MODAL */}
//       <Modal
//         open={openModal}
//         onClose={() => setOpenModal(false)}
//         aria-labelledby="testimonial-modal"
//         aria-describedby="testimonial-video"
//       >
//         <Box sx={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           width: { xs: '90%', sm: '80%', md: '60%' },
//           bgcolor: 'white',
//           borderRadius: '10px',
//           boxShadow: 24,
//           p: { xs: 2, sm: 2 },
//         }}>

//           {/* Close Button */}
//           <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
//             <Button
//               onClick={() => setOpenModal(false)}
//               sx={{ fontWeight: "bold", color: "#fff", backgroundColor: "#CA0B00", borderRadius: "12%" }}
//             >
//               X
//             </Button>
//           </Box>

//           {/* NAME + COUNTRY */}
//           {selectedTestimonial && (
//             <Box sx={{ textAlign: "center", mb: 2 }}>
//               <Typography variant="h5" sx={{ fontFamily: "Kaisei Decol", fontWeight: "bold" }}>
//                 {selectedTestimonial.name}
//               </Typography>
//               <Typography variant="body1" sx={{ fontFamily: "Kaisei Decol", color: "#555" }}>
//                 {selectedTestimonial.country}
//               </Typography>
//             </Box>
//           )}

//           {/* VIDEO RESPONSIVE */}
//           <Box sx={{
//             position: "relative",
//             width: "100%",
//             paddingTop: "56.25%", // 16:9 ratio
//             borderRadius: "10px",
//             overflow: "hidden",
//             background: "#000"
//           }}>
//             {selectedTestimonial && (
//               <video
//                 src='https://www.w3schools.com/html/mov_bbb.mp4'
//                 controls
//                 autoPlay
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "100%"
//                 }}
//               />
//             )}
//           </Box>

//         </Box>
//       </Modal>

//     </Box>
//   );
// };

// export default Testimonial;

import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Modal,
  IconButton,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CloseIcon from "@mui/icons-material/Close";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";



import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { axiosInstance } from "../../../Api/Axios/axios";
import { endpoints } from "../../../Api/EndPoints/endpoints";

const Testimonial = () => {
  const [data, setData] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  /* ---------------- FETCH DATA ---------------- */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(
          endpoints.Testimonials.getTestimonialsData
        );
        setData(res?.data?.data || []);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  /* ---------------- STAR RENDER ---------------- */
  const renderStars = (rating) => (
    <Box sx={{ display: "flex", gap: "4px", mt: "4px" }}>
      {[...Array(5)].map((_, i) => (
        <Typography
          key={i}
          sx={{
            color: i < rating ? "#FFD700" : "#555",
            fontSize: "14px",
          }}
        >
          ★
        </Typography>
      ))}
    </Box>
  );

  return (
    <Box sx={{ py: 10, background: "#f5f5f5" }}>
      {/* -------- Title -------- */}
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
            Testimonials
          </Typography>

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
      {/* -------- Slider Wrapper -------- */}
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 2, md: 6 },
          position: "relative",
          pb: 8,
        }}
      >
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}

          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}

          speed={800}

          loop={true}
          spaceBetween={20}
          slidesPerGroup={1}
          centeredSlides={false}
          breakpoints={{
            0: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            600: {
              slidesPerView: 2,
              slidesPerGroup: 1,
            },
            960: {
              slidesPerView: 3,
              slidesPerGroup: 1,
            },
          }}
        >

          {data.map((item, index) => (
            <SwiperSlide key={index} style={{ padding: "10px 0px" }}>


              <Card
                sx={{
                  height: 300,
                  borderRadius: "20px",
                  p: 3,
                  background: "linear-gradient(135deg,#2e2e33,#1f1f23)",
                  color: "#fff",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",

                  transition: "all 0.4s ease",
                  transformStyle: "preserve-3d",

                  "&:hover": {
                    transform: "scale(1.02) translateZ(40px)",
                    background:
                      "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",

                  },
                }}
              >


                {/* Top */}
                <Box>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Avatar
                      src={item.image}
                      sx={{ width: 60, height: 60 }}
                    />
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 600,
                          fontSize: "18px",
                        }}
                      >
                        {item.name}
                      </Typography>
                      {renderStars(item.rating)}
                    </Box>
                  </Box>

                  <CardContent sx={{ px: 0, mt: 2 }}>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        lineHeight: 1.6,
                        opacity: 0.9,
                        display: "-webkit-box",
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {item.msg}
                    </Typography>
                  </CardContent>
                </Box>

                {/* Watch Button */}
                <Box
                  onClick={() => {
                    setSelectedTestimonial(item);
                    setOpenModal(true);
                  }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    width: "170px",
                    height: "44px",
                    borderRadius: "25px",
                    background:
                      "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                    border:
                      "1px solid rgba(255,255,255,0.2)",
                    cursor: "pointer",
                    px: 1,
                    "&:hover": {
                      background:
                        "rgba(255,255,255,0.2)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 36,
                      height: 36,
                      borderRadius: "50%",
                      bgcolor: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <PlayArrowIcon sx={{ color: "#c00" }} />
                  </Box>
                  <Typography sx={{ fontSize: 14 }}>
                    Watch Review
                  </Typography>
                </Box>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* -------- Custom Arrows -------- */}
        <Box
          className="custom-prev"
          sx={{
            position: "absolute",
            top: "45%",
            left: { md: 25 },

            transform: "translateY(-50%)",
            width: 45,
            height: 45,
            borderRadius: "50%",
            background: "linear-gradient(90deg, #1fbf6f, #2574a9)",

            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#fff",
            zIndex: 10,
          }}
        >
          <ChevronLeftIcon />
        </Box>


        <Box
          className="custom-next"
          sx={{
            position: "absolute",
            top: "45%",
            right: { md: 25 },

            transform: "translateY(-50%)",
            width: 45,
            height: 45,
            borderRadius: "50%",
            background: "linear-gradient(90deg, #1fbf6f, #2574a9)",

            display: { xs: "none", md: "flex" },
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#fff",
            zIndex: 10,
          }}
        >
          <ChevronRightIcon />
        </Box>



      </Box>

      {/* -------- Modal -------- */}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform:
              "translate(-50%, -50%)",
            width: { xs: "95%", md: "700px" },
            bgcolor: "#fff",
            borderRadius: "12px",
            p: 3,
            boxShadow: 24,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={() => setOpenModal(false)}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Typography variant="h6" sx={{ mb: 2 }}>
            {selectedTestimonial?.name}
          </Typography>

          <Box
            sx={{
              position: "relative",
              paddingTop: "56.25%",
              borderRadius: "10px",
              overflow: "hidden",
              background: "#000",
            }}
          >
            <video
              src="https://www.w3schools.com/html/mov_bbb.mp4"
              controls
              autoPlay
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Testimonial;
