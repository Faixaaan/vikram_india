import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate, useParams } from "react-router-dom";

import { axiosInstance } from "../../../Api/Axios/axios";
import { endpoints } from "../../../Api/EndPoints/endpoints";

gsap.registerPlugin(ScrollTrigger);

const MediaDetails = () => {
    const [index, setIndex] = useState(0);
    const containerRef = useRef(null);
    const autoPlayRef = useRef(null);

    const navigate = useNavigate();
    const { id } = useParams();

    // 🔥 DYNAMIC DATA STATE
    const [media, setMedia] = useState(null);
    const [images, setImages] = useState([]);

    // 🔥 FETCH DATA
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get(
                    endpoints.homeMedia.getHomeMediaData
                );

                const item = res?.data?.data?.find(
                    (i) => i.id == id
                );

                setMedia(item);

                // 🔥 IMAGE HANDLE
                if (item?.gallery_images) {
                    try {
                        const parsed = JSON.parse(item.gallery_images);
                        setImages(parsed);
                    } catch {
                        setImages([item.image]);
                    }
                } else if (item?.image) {
                    setImages([item.image]);
                }
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, [id]);

    // 🔥 NEXT / PREV
    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    // 🔥 AUTO PLAY
    useEffect(() => {
        if (images.length === 0) return;

        autoPlayRef.current = setInterval(() => {
            nextSlide();
        }, 3000);

        return () => clearInterval(autoPlayRef.current);
    }, [images]);

    // 🔥 PAUSE ON HOVER
    const stopAutoPlay = () => clearInterval(autoPlayRef.current);
    const startAutoPlay = () => {
        autoPlayRef.current = setInterval(nextSlide, 3000);
    };

    // 🔥 SCROLL TOP
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    // 🔥 GSAP ENTRY
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
    }, [images]);

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

 
    if (!media) {
        return <div style={{ color: "#fff", textAlign: "center" }}>Loading...</div>;
    }

    return (
        <Box
            ref={containerRef}
            sx={{
                minHeight: "80vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background:
                    "linear-gradient(90deg, #1BAA63 0%, #276f9e 100%)",
                // p: { xs: 1, md: 3 },
                pt: "100px"
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    maxWidth: "1200px",
                    borderRadius: "30px",
                    p: { xs: 2, md: 6 },
                    background:
                        "linear-gradient(135deg, rgba(28, 28, 58, 0.9), rgba(10,10,20,0.95))",
                    color: "#fff",
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    justifyContent: "center",
                    height: { xs: "800px", md: "400px" },
                    gap: 4,
                    position: "relative",
                    overflow: "hidden",
                    perspective: "1200px",
                    alignItems: "center"
                }}
            >
                {/* LEFT */}
                <Box className="left-content" sx={{ flex: 1, position: "relative", zIndex: 10 }}>

                    <Typography
                        variant="h2"
                        sx={{ fontWeight: "bold", mt: { xs: 0, md: 2 }, fontSize: { xs: "1.6rem", sm: "2.5rem", md: "3rem" } }}
                    >
                        {media.title}
                    </Typography>

                    <Typography sx={{ mt: { xs: 2, md: 3 }, opacity: 0.9, color: "#ffffff" }}>
                        {media.description}
                    </Typography>

                    <Button
                        onClick={() => navigate("/home", { state: { scrollTo: "media" } })}
                        sx={{
                            mt: { xs: 1, md: 6 },
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
                        zIndex: 1,
                    }}
                >
                    {images.map((img, i) => (
                        <motion.img
                            key={i}
                            src={img}
                            drag="x"
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
                        opacity: 0.9,
                    }}
                >
                    {media.date}
                </Typography>
            </Box>
        </Box>
    );
};

export default MediaDetails;