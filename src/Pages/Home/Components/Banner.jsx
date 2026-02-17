// import React, { useState, useRef, useEffect } from "react";
// import { Box, Button, Container, Typography } from "@mui/material";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import { axiosInstance } from "../../../Api/Axios/axios";
// import { endpoints } from "../../../Api/EndPoints/endpoints";
// import { useNavigate } from "react-router-dom";

// /* ===== SAFE SMOOTH ANIMATION (DESIGN UNCHANGED) ===== */
// const animations = {
//   "@keyframes fadeSlideUp": {
//     "0%": {
//       opacity: 0,
//       transform: "translateY(30px)",
//     },
//     "100%": {
//       opacity: 1,
//       transform: "translateY(0)",
//     },
//   },
// };

// const Banner = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const swiperRef = useRef(null);
//   const [data, setData] = useState([]);
//   const navigate = useNavigate();

//   const fetchData = async () => {
//     try {
//       const res = await axiosInstance.get(endpoints.Banner.getBanner);
//       setData(res?.data?.data || []);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleClick = () => {
//     navigate("/contact/query-form");
//   };

//   return (
//     <Box sx={{ position: "relative" }}>
//       <Swiper
//         modules={[Pagination]}
//         pagination={{ clickable: true }}
//         speed={900} // ✅ smooth slide
//         onSwiper={(swiper) => (swiperRef.current = swiper)}
//         onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//         loop={false}
//         style={{ width: "100%", height: "100%" }}
//       >
//         {data.map((item, index) => (
//           <SwiperSlide key={index}>
//             <Box
//               sx={{
//                 width: "100%",
//                 height: { xs: "420px", sm: "480px", md: "520px" },
//                 backgroundImage: `url(${item.image})`,
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 position: "relative",
//               }}
//             >
//               <Container
//                 maxWidth="xl"
//                 sx={{
//                   height: "100%",
//                   position: "relative",
//                   display: "flex",
//                   flexDirection: { xs: "column", md: "row" },
//                   alignItems: { xs: "flex-start", md: "center" },
//                   justifyContent: { xs: "flex-start", md: "space-between" },
//                   px: { xs: 2, md: 6 },
//                   pt: { xs: 4, md: 0 },
//                 }}
//               >
//                 {/* LEFT MENU (UNCHANGED) */}
//                 <Box
//                   sx={{
//                     color: "#fff",
//                     zIndex: 2,
//                     width: { xs: "100%", md: "auto" },
//                     display: { xs: "none", md: "block" },
//                     marginTop: "64px",
//                   }}
//                 >
//                   {data.map((h, i) => (
//                     <Box
//                       key={i}
//                       sx={{ mb: "22px", cursor: "pointer" }}
//                       onClick={() => {
//                         swiperRef.current.slideTo(i);
//                         setActiveIndex(i);
//                       }}
//                     >
//                       <Typography
//                         sx={{
//                           fontSize: { xs: "16px", md: "20px" },
//                           fontFamily: "Roboto",
//                           lineHeight: "100%",
//                           mb: 1,
//                           fontWeight: 400,
//                           color: activeIndex === i ? "red" : "#fff",
//                           width: "250px",
//                           animation: "fadeSlideUp 1.1s ease forwards",

//                         }}
//                       >
//                         {h.subtitle}
//                       </Typography>

//                       <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//                         <Box
//                           sx={{
//                             flexGrow: 1,
//                             borderBottom:
//                               activeIndex === i
//                                 ? "1px solid red"
//                                 : "1px solid #fff",
//                           }}
//                         />
//                         <Typography
//                           sx={{
//                             fontSize: { xs: "12px", md: "14px" },
//                             fontWeight: 400,
//                             color: activeIndex === i ? "red" : "#fff",
//                             fontFamily: "Roboto",
//                           }}
//                         >
//                           {h.no}
//                         </Typography>
//                       </Box>
//                     </Box>
//                   ))}
//                 </Box>

//                 {/* CENTER CONTENT (DESIGN UNCHANGED) */}
//                 <Box
//                   sx={{
//                     textAlign: "center",
//                     color: "#fff",
//                     position: { md: "absolute" },
//                     top: { md: "43%", xs: "80px" },
//                     left: { md: "55%" },
//                     transform: { md: "translate(-50%, -50%)" },
//                     zIndex: 2,
//                     mt: { xs: "85px", md: 0, sm: "150px" },
//                     width: { xs: "100%", md: "auto" },
//                     mx: { xs: "auto", sm: "auto", md: "0" },
//                     ...animations,
//                   }}
//                 >
//                   {/* TITLE */}
//                   <Typography
//                     key={`title-${activeIndex}`}
//                     sx={{
//                       fontSize: { xs: "31px", sm: "26px", md: "40px" },
//                       fontWeight: 700,
//                       fontFamily: "Roboto",
//                       lineHeight: "120%",
//                       color: "#fff",
//                       textShadow: "6px 6px 6px rgba(0,0,0,0.9)",
//                       margin: "0 auto",

//                       opacity: 0,
//                       animation: "fadeSlideUp 0.9s ease forwards",
//                     }}
//                   >
//                     {item.title}
//                   </Typography>

//                   {/* BUTTON */}
//                   {/* <Button
//                     key={`${activeIndex}-btn`}
//                     variant="contained"
//                     sx={{
//                       mt: 3,
//                       background:
//                         "linear-gradient(to bottom, #EE1D25, #000)",
//                       "&:hover": {
//                         background:
//                           "linear-gradient(to bottom, #a00000, #600000)",
//                         transform: "translateY(-2px)",
//                       },
//                       borderRadius: "15px",
//                       padding: "9px 12px",
//                       fontSize: { xs: "14px", md: "15px" },
//                       fontFamily: "Roboto",
//                       textTransform: "capitalize",

//                       opacity: 0,
//                       animation: "fadeSlideUp 1.1s ease forwards",

//                     }}
//                     onClick={handleClick}
//                   >
//                     Get a Quote
//                   </Button> */}

//                   <Button
//                     variant="contained"
//                       key={`${activeIndex}-btn`}
//                     sx={{
//                       alignSelf: { xs: "stretch", sm: "flex-start" },
//                       mt: 2,
//                       px: 4,
//                       py: 1.4,
//                       borderRadius: "30px",
//                       textTransform: "none",
//                       fontWeight: 600,
//                       fontSize: "18px",

//                       position: "relative",
//                       overflow: "hidden",

//                       background: "#c40613",

//                       // text always on top
//                       zIndex: 1,

//                       "& span": {
//                         position: "relative",
//                         zIndex: 2,
//                       },

//                       // center burst layer
//                       "&:before": {
//                         content: '""',
//                         position: "absolute",
//                         left: "50%",
//                         top: "50%",
//                         width: 0,
//                         height: 0,
//                         background: "#000",
//                         borderRadius: "50%",
//                         transform: "translate(-12%, -50%)",
//                         transition: "all 1s ease",
//                         zIndex: 0,
//                       },

//                       "&:hover:before": {
//                         width: "300%",
//                         height: "300%",
//                       },

//                       "&:hover": {
//                         background: "#c40613",
//                       },
//                     }}
//                     onClick={handleClick}
//                   >
//                     <span>Know More</span>
//                   </Button>

//                 </Box>
//               </Container>
//             </Box>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* PAGINATION (UNCHANGED) */}
//       <style>{`
//         .swiper-pagination {
//           bottom: 15px !important;
//         }
//         .swiper-pagination-bullet {
//           width: 10px;
//           height: 10px;
//           background: #fff;
//           opacity: 0.5;
//         }
//         .swiper-pagination-bullet-active {
//           background: red !important;
//           opacity: 1 !important;
//         }
//       `}</style>
//     </Box>
//   );
// };

// export default Banner;

// import { Box, Typography } from "@mui/material";
// import React, { useEffect, useRef, useState } from "react";
// import BackgroundImage from "../../../images/bannerimage/hero2.png";
// import SettingImage from "../../../images/bannerimage/Setting.png";
// import mobilebanner from "../../../images/bannerimage/mobilebanner.png";
// import vikramindialogo from "../../../images/bannerimage/vikramindialogo.png";

// import { useNavigate } from "react-router-dom";
// import { axiosInstance } from "../../../Api/Axios/axios";
// import { endpoints } from "../../../Api/EndPoints/endpoints";

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Banner = () => {
//   const [data, setData] = useState([]);
//   const navigate = useNavigate();

//   const containerRef = useRef(null);
//   const logoRef = useRef(null);
//   const cardsRef = useRef([]);

//   /* ================= FETCH DATA ================= */
//   useEffect(() => {
//     axiosInstance
//       .get(endpoints.Banner.getBanner)
//       .then((res) => setData(res?.data?.data || []))
//       .catch(console.log);
//   }, []);

//   /* ================= DESKTOP ANIMATION ONLY ================= */
//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       if (!logoRef.current) return;

//       gsap.fromTo(
//         logoRef.current,
//         { scale: 0.6, opacity: 0 },
//         { scale: 1, opacity: 1, duration: 1.4, ease: "power3.out" }
//       );

//       gsap.from(cardsRef.current, {
//         y: 80,
//         opacity: 0,
//         stagger: 0.25,
//         duration: 1.2,
//         ease: "power3.out",
//       });

//       cardsRef.current.forEach((card, i) => {
//         gsap.to(card, {
//           y: i % 2 === 0 ? -16 : 16,
//           duration: 3 + i,
//           repeat: -1,
//           yoyo: true,
//           ease: "sine.inOut",
//         });
//       });

//       gsap.to(cardsRef.current, {
//         y: -80,
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top top",
//           end: "bottom top",
//           scrub: 1,
//         },
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   const top = data.find((i) => i.counter === 1);
//   const left = data.find((i) => i.counter === 2);
//   const right = data.find((i) => i.counter === 3);

//   return (
//     <Box
//       ref={containerRef}
//       sx={{
//         width: "100%",
//         position: "relative",
//         overflow: "hidden",

//         minHeight: {
//           xs: "70vh",
//           sm: "75vh",
//           md: "100vh",
//           xl: "110vh",
//         },

//         backgroundImage: {
//           xs: `url(${mobilebanner})`,
//           sm: `url(${mobilebanner})`,
//           md: `url(${BackgroundImage})`,
//         },
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* ================= DESKTOP ONLY ================= */}
//       <Box
//         sx={{
//           position: "relative",
//           zIndex: 1,
//           minHeight: "100vh",
//           display: { xs: "none", md: "block" },
//           px: "10px"
//         }}
//       >
//         {/* CENTER LOGO */}
//         <Box
//           ref={logoRef}
//           sx={{
//             position: "absolute",
//             top: "50%",
//             left: "50%",
//             transform: "translate(-50%,-50%)",
//             zIndex: 5,
//             pointerEvents: "none",
//           }}
//         >
//           <Box
//             sx={{
//               position: "absolute",
//               inset: -40,
//               borderRadius: "50%",
//               background:
//                 "radial-gradient(circle, rgba(0,255,255,0.35) 0%, rgba(0,255,255,0.15) 40%, transparent 70%)",
//               filter: "blur(25px)",
//               animation: "pulseGlow 4s ease-in-out infinite",
//               zIndex: -1,
//             }}
//           />

//           <Box
//             sx={{
//               position: "absolute",
//               inset: -18,
//               borderRadius: "50%",
//               border: "2px solid rgba(0,255,255,0.8)",
//               boxShadow:
//                 "0 0 25px rgba(0,255,255,0.8), inset 0 0 20px rgba(0,255,255,0.6)",
//               animation: "spinSlow 20s linear infinite",
//               zIndex: -1,
//             }}
//           />

//           <Box
//             component="img"
//             src={vikramindialogo}
//             alt="logo"
//             sx={{
//               width: 220,
//               padding: 2,
//               borderRadius: "50%",
//               background: "rgba(255,255,255,0.95)",
//               boxShadow:
//                 "0 0 10px rgba(0,255,255,0.9), 0 20px 60px rgba(0,0,0,0.6)",
//             }}
//           />
//         </Box>

//         <GlassCard
//           ref={(el) => (cardsRef.current[0] = el)}
//           data={top}
//           onClick={() => navigate("/products/mms-learnMore")}
//           sx={{ top: "12%", left: "50%", transform: "translateX(-50%)" }}
//         />

//         <GlassCard
//           ref={(el) => (cardsRef.current[1] = el)}
//           data={left}
//           onClick={() => navigate("/products/hot-dip")}
//           sx={{ top: "55%", left: "6%", transform: "translateY(-50%)" }}
//         />

//         <GlassCard
//           ref={(el) => (cardsRef.current[2] = el)}
//           data={right}
//           onClick={() => navigate("/products/processing-card")}
//           sx={{ top: "55%", right: "6%", transform: "translateY(-50%)" }}
//         />
//       </Box>

//       {/* ================= MOBILE + TABLET ================= */}
//       <Box
//         sx={{
//           position: "relative",
//           zIndex: 1,
//           display: { xs: "flex", md: "none" },
//           flexDirection: "column",
//           alignItems: "center",
//           gap: 3,
//           px: { xs: 2, sm: 4 },
//           py: { xs: 4, sm: 6 },
//         }}
//       >
//         {/* LOGO FIRST */}
//         <Box
//           component="img"
//           src={vikramindialogo}
//           alt="logo"
//           sx={{
//             width: { xs: 120, sm: 160 },
//             mb: 2,
//             padding: 2,
//             borderRadius: "50%",
//             background: "rgba(255,255,255,0.95)",
//             boxShadow:
//               "0 0 10px rgba(0,255,255,0.9), 0 15px 40px rgba(0,0,0,0.5)",
//           }}
//         />

//       <MobileCard
//   data={top}
//   onClick={() => navigate("/products/mms-learnMore")}
// />

// <MobileCard
//   data={left}
//   onClick={() => navigate("/products/hot-dip")}
// />

// <MobileCard
//   data={right}
//   onClick={() => navigate("/products/processing-card")}
// />

//       </Box>

//       {/* ================= KEYFRAMES ================= */}
//       <style>
//         {`
//           @keyframes pulseGlow {
//             0%,100% { transform: scale(1); opacity: .8; }
//             50% { transform: scale(1.15); opacity: 1; }
//           }
//           @keyframes spinSlow {
//             from { transform: rotate(0deg); }
//             to { transform: rotate(360deg); }
//           }
//           @keyframes spin {
//             from { transform: rotate(0deg); }
//             to { transform: rotate(360deg); }
//           }
//         `}
//       </style>
//     </Box>
//   );
// };

// export default Banner;

// /* ================= GLASS CARD ================= */
// const GlassCard = React.forwardRef(({ data, onClick, sx }, ref) => (
//   <Box ref={ref} onClick={onClick} sx={{ position: "absolute", width: 320, cursor: "pointer", ...sx }}>
//     <Box
//       component="img"
//       src={SettingImage}
//       sx={{
//         position: "absolute",
//         width: 80,
//         left: -20,
//         top: -20,
//         animation: "spin 30s linear infinite",
//       }}
//     />

//     <Box
//       sx={{
//         background:
//           "linear-gradient(145deg, rgba(0,0,0,0.9), rgba(20,40,60,0.75))",
//         backdropFilter: "blur(18px)",
//         borderRadius: "28px",
//         px: 4,
//         py: 3,
//         border: "1px solid rgba(255,255,255,0.35)",
//         boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
//         transition: "all .4s ease",
//         "&:hover": {
//           boxShadow: "0 0 40px rgba(0,200,255,0.6)",
//           transform: "scale(1.04)",
//         },
//       }}
//     >
//       <Typography sx={{ color: "#fff", fontSize: 22, fontWeight: 600, textAlign: "center" }}>
//         {data?.subtitle}
//       </Typography>
//       <Typography sx={{ color: "#ddd", fontSize: 14, textAlign: "center" }}>
//         {data?.title}
//       </Typography>
//     </Box>
//   </Box>
// ));

// /* ================= MOBILE CARD ================= */
// const MobileCard = ({ data, onClick }) => (
//   <Box
//     role="button"
//     onClick={onClick}
//     sx={{
//       width: "100%",

//       maxWidth: "calc(100% - 54px)",
//       mx: "auto",

//       cursor: "pointer",
//       WebkitTapHighlightColor: "transparent",

//       background:
//         "linear-gradient(145deg, rgba(0,0,0,0.9), rgba(20,40,60,0.75))",
//       backdropFilter: "blur(18px)",
//       borderRadius: "28px",

//       px: 3,
//       py: 3,

//       border: "1px solid rgba(255,255,255,0.35)",
//       boxShadow: "0 20px 60px rgba(0,0,0,0.4)",

//       transition: "transform .25s ease, box-shadow .25s ease",

//       "&:active": {
//         transform: "scale(0.97)",
//       },
//       textAlign: "center"
//     }}
//   >
//     <Typography
//       sx={{
//         color: "#fff",
//         fontWeight: 600,
//         fontSize: { xs: 16, sm: 18 },
//       }}
//     >
//       {data?.subtitle}
//     </Typography>

//     <Typography
//       sx={{
//         color: "#ddd",
//         fontSize: 14,
//         mt: 0.5,
//       }}
//     >
//       {data?.title}
//     </Typography>
//   </Box>
// );


// // const fetchData = async () => {
// //     try {
// //       const res = await axiosInstance.get(endpoints.Banner.getBanner);
// //       setData(res?.data?.data || []);
// //     } catch (err) {
// //       console.log(err);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchData();
// //   }, []);



import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../../Api/Axios/axios";
import { endpoints } from "../../../Api/EndPoints/endpoints";

import BackgroundImage from "../../../images/bannerimage/hero2.png";
import SettingImage from "../../../images/bannerimage/Setting.png";
import vikramindialogo from "../../../images/bannerimage/vikramindialogo.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
  const [data, setData] = useState([]);
  const [[current, direction], setCurrent] = useState([0, 0]);

  const navigate = useNavigate();
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const cardsRef = useRef([]);


  /* ================= FETCH DATA ================= */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(endpoints.Banner.getBanner);
        setData(res?.data?.data || []);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  /* ================= MOBILE AUTO SLIDE ================= */
  useEffect(() => {
    if (!data.length) return;

    const interval = setInterval(() => {
      setCurrent(([prev]) => [
        (prev + 1) % data.length,
        1,
      ]);
    }, 5000);

    return () => clearInterval(interval);
  }, [data]);

  const nextSlide = () => {
    setCurrent(([prev]) => [
      (prev + 1) % data.length,
      1,
    ]);
  };

  const prevSlide = () => {
    setCurrent(([prev]) => [
      (prev - 1 + data.length) % data.length,
      -1,
    ]);
  };


  const getRouteByCounter = (counter) => {
    switch (counter) {
      case 1:
        return "/products/mms-learnMore";
      case 2:
        return "/products/hot-dip";
      case 3:
        return "/products/processing-card";
      default:
        return "/products";
    }
  };



  /* ================= DESKTOP ANIMATION ================= */
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!logoRef.current) return;

      gsap.fromTo(
        logoRef.current,
        { scale: 0.6, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.4 }
      );

      gsap.from(cardsRef.current, {
        y: 80,
        opacity: 0,
        stagger: 0.25,
        duration: 1.2,
      });

      cardsRef.current.forEach((card, i) => {
        gsap.to(card, {
          y: i % 2 === 0 ? -16 : 16,
          duration: 3 + i,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const top = data.find((i) => i.counter === 1);
  const left = data.find((i) => i.counter === 2);
  const right = data.find((i) => i.counter === 3);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 80;
      const y = (e.clientY / innerHeight - 0.5) * 80;

      gsap.to(containerRef.current, {
        backgroundPosition: `${50 + x}% ${50 + y}%`,
        duration: 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);


  return (
    <Box
      ref={containerRef}
      sx={{
        width: "100%",
        position: "relative",
        overflow: "hidden",
        minHeight: { xs: "100vh" },

        backgroundImage: { md: `url(${BackgroundImage})` },
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ================= DESKTOP ================= */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          minHeight: "100vh",
          position: "relative",

          "@keyframes spinSlow": {
            "0%": {
              transform: "rotate(0deg)",
            },
            "100%": {
              transform: "rotate(360deg)",
            },
          },

          "@keyframes pulseGlow": {
            "0%": { opacity: 0.6, transform: "scale(1)" },
            "50%": { opacity: 1, transform: "scale(1.1)" },
            "100%": { opacity: 0.6, transform: "scale(1)" },
          },
        }}
      >

   
        {/* CENTER LOGO */}
        <Box
          ref={logoRef}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: 5,
            pointerEvents: "none",

            "@keyframes floatGlow": {
              "0%": { transform: "scale(1)" },
              "50%": { transform: "scale(1.2)" },
              "100%": { transform: "scale(1)" },
            },
          }}
        >

          {/* 🔥 NEW GLOW LAYER */}
          <Box
            sx={{
              position: "absolute",
              width: 300,
              height: 300,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(0,255,255,0.25) 0%, transparent 70%)",
              animation: "floatGlow 6s ease-in-out infinite",
              zIndex: -2,
            }}
          />

          {/* Existing pulse glow */}
          <Box
            sx={{
              position: "absolute",
              inset: -40,
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(0,255,255,0.35) 0%, rgba(0,255,255,0.15) 40%, transparent 70%)",
              filter: "blur(25px)",
              animation: "pulseGlow 4s ease-in-out infinite",
              zIndex: -1,
            }}
          />

          {/* Existing spinning ring */}
          <Box
            sx={{
              position: "absolute",
              inset: -18,
              borderRadius: "50%",
              border: "2px solid rgba(0,255,255,0.8)",
              boxShadow:
                "0 0 25px rgba(0,255,255,0.8), inset 0 0 20px rgba(0,255,255,0.6)",
              animation: "spinSlow 20s linear infinite",
              zIndex: -1,
            }}
          />

          {/* Logo */}
          <Box
            component="img"
            src={vikramindialogo}
            alt="logo"
            sx={{
              width: 220,
              padding: 2,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.95)",
              boxShadow:
                "0 0 10px rgba(0,255,255,0.9), 0 20px 60px rgba(0,0,0,0.6)",
            }}
          />
        </Box>


        <GlassCard
          ref={(el) => (cardsRef.current[0] = el)}
          data={top}
          onClick={() => navigate("/products/mms-learnMore")}
          sx={{ top: "12%", left: "50%", transform: "translateX(-50%)" }}
        />

        <GlassCard
          ref={(el) => (cardsRef.current[1] = el)}
          data={left}
          onClick={() => navigate("/products/hot-dip")}
          sx={{ top: "55%", left: "6%" }}
        />

        <GlassCard
          ref={(el) => (cardsRef.current[2] = el)}
          data={right}
          onClick={() => navigate("/products/processing-card")}
          sx={{ top: "55%", right: "6%" }}
        />
      </Box>

      {/* ================= MOBILE + TABLET SLIDER ================= */}
      <Box sx={{
        display: { xs: "block", md: "none" }, height: { xs: "100vh" }
        , overflow: "hidden", position: "relative"
      }}>


        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            initial={{ x: direction > 0 ? "100%" : "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: direction > 0 ? "-100%" : "100%" }}
            transition={{ duration: 0.8 }}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          >

            <Box
              component="img"
              src={data[current]?.image}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />


            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.55)",
              }}
            />


            <Box
              sx={{
                position: "absolute",
                top: "25%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "#fff",
                width: "90%",
                zIndex: 5,
              }}
            >
              <Typography
                sx={{
                  fontSize: 26,
                  fontWeight: 700,
                  mb: 1,
                }}
              >
                {data[current]?.subtitle}
              </Typography>

              <Typography
                sx={{
                  fontSize: 16,
                  mb: 4,
                  opacity: 0.9,
                }}
              >
                {data[current]?.title}
              </Typography>

              {/* Green Button */}
              <Box
                onClick={() =>
                  navigate(getRouteByCounter(data[current]?.counter))
                }
                sx={{
                  alignSelf: { xs: "stretch", sm: "flex-start" },
                  mt: 2,
                  px: 5,
                  py: 1.6,
                  borderRadius: "50px",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  fontSize: "17px",
                  letterSpacing: 1,

                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                  display: "inline-block",

                  color: "#fff",

                  // 🔥 Gradient background
                  background: "linear-gradient(135deg, #c40613, #ff1e2d, #8b0000)",
                  backgroundSize: "200% 200%",
                  animation: "gradientMove 5s ease infinite",

                  boxShadow:
                    "0 0 15px rgba(196,6,19,0.6), 0 8px 25px rgba(0,0,0,0.4)",

                  transition: "all 0.4s ease",

                  "&:hover": {
                    transform: "translateY(-4px) scale(1.05)",
                    boxShadow:
                      "0 0 25px rgba(255,30,45,0.9), 0 12px 35px rgba(0,0,0,0.6)",
                  },

                  "&:active": {
                    transform: "scale(0.95)",
                  },

                  // ✨ Shine effect
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: "-75%",
                    width: "50%",
                    height: "100%",
                    background:
                      "linear-gradient(120deg, transparent, rgba(255,255,255,0.4), transparent)",
                    transform: "skewX(-25deg)",
                    transition: "0.7s",
                  },

                  "&:hover::before": {
                    left: "130%",
                  },

                  "@keyframes gradientMove": {
                    "0%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                    "100%": { backgroundPosition: "0% 50%" },
                  },
                }}
              >
                EXPLORE SERVICES →
              </Box>

            </Box>

            {/* Prev Button */}
            <Box
              onClick={prevSlide}
              sx={{
                position: "absolute",
                top: "50%",
                left: 10,
                transform: "translateY(-50%)",
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "rgba(0,0,0,0.6)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                cursor: "pointer",
                zIndex: 6,
              }}
            >
              ‹
            </Box>

            {/* Next Button */}
            <Box
              onClick={nextSlide}
              sx={{
                position: "absolute",
                top: "50%",
                right: 10,
                transform: "translateY(-50%)",
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "rgba(0,0,0,0.6)",
                color: "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                cursor: "pointer",
                zIndex: 6,
              }}
            >
              ›
            </Box>
          </motion.div>
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default Banner;

/* ================= GLASS CARD ================= */
const GlassCard = React.forwardRef(({ data, onClick, sx }, ref) => (
  <Box
    ref={ref}
    onClick={onClick}
    sx={{
      position: "absolute",
      width: 320,
      cursor: "pointer",
      ...sx,
    }}
  >
    <Box
      component="img"
      src={SettingImage}
      sx={{
        position: "absolute",
        width: 80,
        left: -20,
        top: -20,
        animation: "spinGear 12s linear infinite",

        "@keyframes spinGear": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      }}
    />


    <Box
      sx={{
        background:
          "linear-gradient(145deg, rgba(0,0,0,0.9), rgba(20,40,60,0.75))",
        backdropFilter: "blur(18px)",
        borderRadius: "28px",
        px: 4,
        py: 3,
        border: "1px solid rgba(255,255,255,0.35)",
        transition: ".4s",
        "&:hover": { transform: "scale(1.05)" },
      }}
    >
      <Typography sx={{ color: "#fff", fontSize: 22, fontWeight: 600 }}>
        {data?.subtitle}
      </Typography>
      <Typography sx={{ color: "#ddd", fontSize: 14 }}>
        {data?.title}
      </Typography>
    </Box>
  </Box>
));
