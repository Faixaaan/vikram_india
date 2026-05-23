
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
  const [data, setData] = useState({});
  const [mobileBanners, setMobileBanners] = useState([]);
  const [[current, direction], setCurrent] = useState([0, 0]);

  const navigate = useNavigate();
  const containerRef = useRef(null);
  const logoRef = useRef(null);
  const cardsRef = useRef([]);


  /* ================= FETCH DATA ================= */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(endpoints.HomeCms.getHomeCms);

        const cmsData = res?.data?.data || {};

        setData(cmsData);

        // 🔥 IMPORTANT: string → array convert
        const banners = cmsData?.mobile_banners
          ? JSON.parse(cmsData.mobile_banners)
          : [];

        setMobileBanners(banners);

      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  /* ================= MOBILE AUTO SLIDE ================= */
  useEffect(() => {
    if (!mobileBanners.length) return;

    const interval = setInterval(() => {
      setCurrent(([prev]) => [
        (prev + 1) % mobileBanners.length,
        1,
      ]);
    }, 5000);

    return () => clearInterval(interval);
  }, [mobileBanners]);

  const nextSlide = () => {
    setCurrent(([prev]) => [
      (prev + 1) % mobileBanners.length,
      1,
    ]);
  };

  const prevSlide = () => {
    setCurrent(([prev]) => [
      (prev - 1 + mobileBanners.length) % mobileBanners.length,
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
        return "/products/towerline-transmission";
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
        y: 40,
        opacity: 0,
        stagger: 0.25,
        duration: 1.2,
      });

      cardsRef.current.forEach((card, i) => {
        gsap.to(card, {
          y: i % 2 === 0 ? -2 : 2,
          duration: 5 + i * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const cards = [
    { id: 1, title: data?.service1_name },
    { id: 2, title: data?.service2_name },
    { id: 3, title: data?.service3_name },
    { id: 4, title: data?.service4_name },
  ];


  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 40;
      const y = (e.clientY / innerHeight - 0.5) * 40;

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
        minHeight: { xs: "65vh", md: "85vh" },

        backgroundImage: { md: `url(${data?.banner_img})` },
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ================= DESKTOP ================= */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          minHeight: { md: "85vh", lg: "90vh" },
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
            top: "45%",
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


        {/* LEFT TOP */}
        <GlassCard
          ref={(el) => (cardsRef.current[0] = el)}
          data={{ subtitle: cards[0]?.title }}
          onClick={() => navigate(getRouteByCounter(1))}
          sx={{
            top: "20%",
            left: "15%",
          }}
        />

        {/* LEFT BOTTOM */}
        <GlassCard
          ref={(el) => (cardsRef.current[1] = el)}
          data={{ subtitle: cards[1]?.title }}
          onClick={() => navigate(getRouteByCounter(2))}
          sx={{
            bottom: "25%",
            left: "15%",
          }}
        />

        {/* RIGHT TOP */}
        <GlassCard
          ref={(el) => (cardsRef.current[2] = el)}
          data={{ subtitle: cards[2]?.title }}
          onClick={() => navigate(getRouteByCounter(3))}
          sx={{
            top: "20%",
            right: "8%",
          }}
        />

        {/* RIGHT BOTTOM */}
        <GlassCard
          ref={(el) => (cardsRef.current[3] = el)}
          data={{ subtitle: cards[3]?.title }}
          onClick={() => navigate(getRouteByCounter(4))}
          sx={{
            bottom: "25%",
            right: "8%",
          }}
        />
      </Box>

      {/* ================= MOBILE + TABLET SLIDER ================= */}

      <Box
        sx={{
          display: { xs: "block", md: "none" },
          height: { xs: "65vh" },
          overflow: "hidden",
          position: "relative",
        }}
      >
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
            {/* Background Image */}
            <Box
              component="img"
              src={mobileBanners[current]}
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />

            {/* Overlay */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.55)",
              }}
            />

            {/* Content Wrapper */}
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                textAlign: "center",
                color: "#fff",
                zIndex: 5,
                px: 3,
                py: 6,
              }}
            >
              {/* ===== Top Text ===== */}
              <Box sx={{ mt: 2 }}>
                <Typography
                  sx={{
                    fontSize: 26,
                    fontWeight: 700,
                    mb: 1,
                  }}
                >
                  {cards[current]?.title}
                </Typography>

                {/* <Typography
                  sx={{
                    fontSize: 16,
                    opacity: 0.9,
                  }}
                >
                  {data[current]?.title}
                </Typography> */}
              </Box>

              {/* ===== Bottom Button ===== */}
              <Box
                onClick={() =>
                  navigate(getRouteByCounter(data[current]?.counter))
                }
                sx={{
                  mb: 2,
                  px: 5,
                  py: 1.6,
                  borderRadius: "50px",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  fontSize: "16px",
                  letterSpacing: 1,
                  cursor: "pointer",
                  color: "#fff",
                  background:
                    "linear-gradient(135deg, #c40613, #ff1e2d, #8b0000)",
                  boxShadow:
                    "0 0 15px rgba(196,6,19,0.6), 0 8px 25px rgba(0,0,0,0.4)",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    transform: "translateY(-3px) scale(1.05)",
                    boxShadow:
                      "0 0 25px rgba(255,30,45,0.9), 0 12px 35px rgba(0,0,0,0.6)",
                  },
                }}
              >
                EXPLORE more
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
        px: 2,
        py: 1,
        border: "1px solid rgba(255,255,255,0.35)",
        transition: ".4s",
        "&:hover": { transform: "scale(1.05)" },
        textAlign: "center",
        width: "60%",
      }}
    >
      <Typography sx={{ color: "#fff", fontSize: 18, fontWeight: 600, width: "80%", textAlign: "center", mx: "auto" }}>
        {data?.subtitle}
      </Typography>

    </Box>
  </Box>
));


