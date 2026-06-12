


import React, { useState, useRef, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../Api/Axios/axios";
import { endpoints } from "../../Api/EndPoints/endpoints";





const MotionBox = motion(Box);

export default function Landing() {
  const [open, setOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(true);
  const navigate = useNavigate();
  const [data, setData] = useState({});

  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const [cmsData, setCmsData] = useState({});



  const handleEnter = () => {
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
    }

    setOpen(true);

    setTimeout(() => {
      navigate("/home");
    }, 1200);
  };

  useEffect(() => {
    const fetchHomeCms = async () => {
      try {
        const res = await axiosInstance.get(endpoints.HomeCms.getHomeCms);
        setCmsData(res?.data?.data || {});

      } catch (err) {
        console.log(err);
      }
    };

    fetchHomeCms();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(endpoints.pageSetting.navFooter);
        const settingData = res?.data?.data || {};
        setData(settingData);

      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const landvideo =
    cmsData?.intro_video ||
    "https://res.cloudinary.com/deqx8t3wr/video/upload/v1770867858/landingvideo_yt5ypz.mp4";

  useEffect(() => {
    const unlockAudio = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.play().catch(() => { });
      }
      window.removeEventListener("click", unlockAudio);
    };

    window.addEventListener("click", unlockAudio);

    return () => {
      window.removeEventListener("click", unlockAudio);
    };
  }, []);

  const toggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };




  return (
    <Box sx={{ height: "100vh", overflow: "hidden", position: "relative" }}>

      {/* Background Video */}
      {showVideo && landvideo && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          src={landvideo}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />


      )}


      {/* Logo */}
      <Box
        sx={{
          position: "absolute",
          top: 30,
          zIndex: 5,


          left: { xs: "50%", md: 40 },
          transform: { xs: "translateX(-50%)", md: "none" },

          px: { xs: 1, md: 2 },

          borderRadius: "20px",
          background: "rgb(255, 255, 255)",

          boxShadow:
            "0 8px 32px rgba(0,0,0,.35), inset 0 0 20px rgba(255,255,255,.15)",
          border: "1px solid rgba(255,255,255,.25)",
          transition: ".4s ease",
        }}
      >
        <img
          src={data?.logo}
          alt="logo"
          style={{
            width: "100%",
            maxWidth: "200px",
            height: "auto",
          }}
        />
      </Box>

      {/* Button */}
      <Box
        sx={{
          position: "absolute",
          zIndex: 5,

          top: { xs: "50%", md: 30 },
          right: { xs: "auto", md: 40 },
          left: { xs: "50%", md: "auto" },

          transform: {
            xs: "translate(-50%, -50%)",
            md: "none",
          },
        }}
      >
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Button
            variant="contained"
            onClick={handleEnter}
            sx={{
              position: "relative",
              overflow: "hidden",

              px: { xs: 3, md: 4 },
              py: 1.4,

              borderRadius: "60px",

              background: "linear-gradient(125deg, #14b91d , #1171b0)",

             
              WebkitBackdropFilter: "blur(20px)",

              border: "1px solid rgba(255,255,255,.25)",

              color: "#fff",

              fontWeight: 700,
              fontSize: {
                xs: "16px",
                md: "18px",
              },

              letterSpacing: "0.5px",
              textTransform: "none",

              boxShadow:
                "0 20px 40px rgba(0,0,0,.25)",

              transition: "all .4s ease",

              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: "-150%",
                width: "60%",
                height: "100%",

                background:
                  "linear-gradient(90deg, transparent, rgba(255,255,255,.8), transparent)",

                transform: "skewX(-25deg)",

                transition: "1s ease",
              },

              "&:hover": {
                transform: "translateY(-4px)",
                // background: "rgba(255,255,255,.18)",

                boxShadow:
                  "0 30px 60px rgba(0,0,0,.35)",
              },

              "&:hover::before": {
                left: "150%",
              },
            }}
          >
            Visit Our Website
          </Button>
        </Box>

      </Box>


      <Button
        onClick={toggleAudio}
        variant="contained"
        sx={{
          position: "absolute",
          zIndex: 5,


          bottom: 30,
          left: { xs: "50%", md: "auto" },
          right: { xs: "auto", md: 40 },
          transform: { xs: "translateX(-50%)", md: "none" },

          px: { xs: 1.4, md: 1.8 },
          py: 0.8,
          borderRadius: "40px",
          fontWeight: 700,
          fontSize: "16px",
          textTransform: "none",
          letterSpacing: "1px",

          background: isMuted
            ? "linear-gradient(135deg, #ff416c, #ff4b2b)"
            : "linear-gradient(135deg, #00bcc6, #4facfe)",

          color: "#fff",

          boxShadow: isMuted
            ? "0 0 20px rgba(255,65,108,0.7)"
            : "0 0 20px rgba(79,172,254,0.7)",

          transition: "all .4s ease",
          animation: "pulse 2s infinite",

          "&:hover": {
            transform: {
              xs: "translateX(-50%) scale(1.08)",
              md: "scale(1.08)",
            },
            boxShadow: isMuted
              ? "0 0 35px rgba(255,65,108,1)"
              : "0 0 35px rgba(79,172,254,1)",
          },

          "@keyframes pulse": {
            "0%": {
              boxShadow: isMuted
                ? "0 0 10px rgba(255,65,108,0.5)"
                : "0 0 10px rgba(79,172,254,0.5)",
            },
            "50%": {
              boxShadow: isMuted
                ? "0 0 25px rgba(255,65,108,0.9)"
                : "0 0 25px rgba(79,172,254,0.9)",
            },
            "100%": {
              boxShadow: isMuted
                ? "0 0 10px rgba(255,65,108,0.5)"
                : "0 0 10px rgba(79,172,254,0.5)",
            },
          },
        }}
      >
        {isMuted ? "🔊 Turn Audio On" : "🔇 Turn Audio Off"}
      </Button>




      {/* Black Split Animation */}
      <AnimatePresence>
        {open && (
          <>
            <MotionBox
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              sx={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "50%",
                height: "100%",
                background: "#000",
                zIndex: 10,
              }}
            />

            <MotionBox
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              sx={{
                position: "absolute",
                right: 0,
                top: 0,
                width: "50%",
                height: "100%",
                background: "#000",
                zIndex: 10,
              }}
            />
          </>
        )}
      </AnimatePresence>
    </Box>
  );
}
