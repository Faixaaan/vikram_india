import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const images = [
    "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    "https://images.unsplash.com/photo-1495567720989-cebdbdd97913",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba",
];

const MediaDetails = () => {
    const [index, setIndex] = useState(0);
    const containerRef = useRef(null);
    const autoPlayRef = useRef(null);

    const navigate = useNavigate();

    // 🔥 NEXT / PREV
    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    // 🔥 AUTO PLAY
    useEffect(() => {
        autoPlayRef.current = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(autoPlayRef.current);
    }, []);

    // 🔥 PAUSE ON HOVER
    const stopAutoPlay = () => clearInterval(autoPlayRef.current);
    const startAutoPlay = () => {
        autoPlayRef.current = setInterval(nextSlide, 3000);
    };


    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    // 🔥 GSAP ENTRY ANIMATION
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".left-content",
                { opacity: 0, y: 80 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.2,
                    ease: "power4.out",
                }
            );

            gsap.fromTo(
                ".carousel-item",
                { opacity: 0, scale: 0.7 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power4.out",
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    // 🔥 POSITION LOGIC
    const getStyle = (i) => {
        const diff = (i - index + images.length) % images.length;

        if (diff === 0) {
            return {
                x: 0,
                scale: 1,
                rotateY: 0,
                zIndex: 5,
                opacity: 1,
            };
        }
        if (diff === 1) {
            return {
                x: 160,
                scale: 0.8,
                rotateY: -40,
                zIndex: 3,
                opacity: 0.7,
            };
        }
        if (diff === images.length - 1) {
            return {
                x: -160,
                scale: 0.8,
                rotateY: 40,
                zIndex: 3,
                opacity: 0.7,
            };
        }

        return {
            opacity: 0,
            scale: 0.5,
            zIndex: 0,
        };
    };

    return (
        <Box
            ref={containerRef}
            sx={{
                minHeight: "80vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                    "linear-gradient(135deg, #2c2f6b, #3b1c4f, #1b3c4f)",
                p: 3,
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1200px",
                    borderRadius: "30px",
                    p: 6,
                    background:
                        "linear-gradient(135deg, rgba(28, 28, 58, 0.9), rgba(10,10,20,0.95))",
                    color: "#fff",
                    display: "flex",
                    gap: 4,
                    position: "relative",
                    overflow: "hidden",
                    perspective: "1200px", // 🔥 3D DEPTH
                }}
            >
                {/* LEFT */}
                <Box className="left-content" sx={{
                    flex: 1, position: "relative",
                    zIndex: 10
                }}>


                    <Typography
                        variant="h2"
                        sx={{ fontWeight: "bold", mt: 2 }}
                    >
                        Media Details <br /> Title
                    </Typography>

                    <Typography sx={{ mt: 3, opacity: 0.7 }}>
                        Loree ipsum dolor sit amet, consectetur adipiscing elit. Loree ipsum dolor sit amet,
                        consectetur adipiscing elit.Loree ipsum dolor sit amet, consectetur adipiscing elit.
                        Loree ipsum dolor sit amet, consectetur adipiscing elit. Loree ipsum dolor sit amet,
                        consectetur adipiscing elit. Loree ipsum dolor sit amet,
                        consectetur adipiscing elit.Loree ipsum dolor sit amet, consectetur adipiscing elit.
                        Loree ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>

                    <Button
                        onClick={() => navigate("/home", { state: { scrollTo: "media" } })}
                        sx={{
                            mt: 6,
                            borderRadius: "30px",
                            background: "rgba(255,255,255,0.1)",
                            color: "#fff",
                            display: "flex",
                            gap: 1,
                            p: "5px 20px"
                        }}
                    >
                        <IoMdArrowBack /> Back
                    </Button>
                </Box>

                {/* RIGHT CAROUSEL */}
                <Box
                    onMouseEnter={stopAutoPlay}
                    onMouseLeave={startAutoPlay}
                    sx={{
                        flex: 1,
                        position: "relative",
                        height: "350px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 1
                    }}
                >
                    {images.map((img, i) => (
                        <motion.img
                            key={i}
                            src={img}
                            drag="x" // 🔥 DRAG ENABLE
                            dragConstraints={{ left: 0, right: 0 }}
                            onDragEnd={(e, info) => {
                                if (info.offset.x < -50) nextSlide();
                                if (info.offset.x > 50) prevSlide();
                            }}
                            animate={getStyle(i)}
                            transition={{ duration: 0.7 }}
                            className="carousel-item"
                            style={{
                                position: "absolute",
                                width: "350px",
                                height: "310px",
                                borderRadius: "20px",
                                objectFit: "cover",
                                boxShadow: "0 10px 50px rgba(20, 20, 20, 0.6)",
                            }}
                        />
                    ))}

                    {/* BUTTONS */}
                    <IconButton
                        onClick={prevSlide}
                        sx={{ position: "absolute", left: "-40px", color: "#fff" }}
                    >
                        <ArrowBackIosNewIcon />
                    </IconButton>

                    <IconButton
                        onClick={nextSlide}
                        sx={{ position: "absolute", right: "-40px", color: "#fff" }}
                    >
                        <ArrowForwardIosIcon />
                    </IconButton>
                </Box>

                {/* DATE */}
                <Typography
                    sx={{
                        position: "absolute",
                        top: 20,
                        right: 30,
                        opacity: 0.7,
                    }}
                >
                    January 15, 2024
                </Typography>
            </Box>
        </Box>
    );
};

export default MediaDetails;