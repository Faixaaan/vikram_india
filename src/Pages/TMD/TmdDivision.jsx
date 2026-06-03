import React, { useState } from "react";
import { Box, Typography, Container, Grid, Card, CardMedia, CardContent } from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../Api/Axios/axios";
import { endpoints } from "../../Api/EndPoints/endpoints";
import { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";



const TmdDivision = () => {

    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [cardDataa, setCardData] = useState([])
    const getData = async () => {
        try {
            const res = await axiosInstance.get(endpoints.ModuleMounting.Introduction);
            const CardRes = await axiosInstance.get(endpoints.TpmCard.InnerCard);
            setCardData(CardRes?.data?.data)
            setData(res?.data?.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])


    const BlackhandleClick = () => {
        navigate('/products/processing-card');
    };

    const GreenhandleClick = () => {
        navigate('/products/garden-&-plantation-equipments/harvesting-tool');
    }



    return (
        <>
            {/* ================= BANNER ================= */}
            <Box
                sx={{
                    width: "100%",
                    height: { xs: "220px", sm: "300px", md: "380px" },
                    backgroundImage: `url(${cardDataa?.main_banner})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {/* Overlay */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(0,0,0,0.6)",
                    }}
                />

                {/* Banner Content */}
                <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
                    <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>

                        {/* Title */}
                        <Typography
                            sx={{
                                color: "#fff",
                                fontSize: { xs: "24px", sm: "32px", md: "42px" },
                                fontWeight: 700,
                                fontFamily: "Roboto",
                                mb: 2,
                            }}
                        >
                            {cardDataa?.main_title}
                        </Typography>

                        {/* Breadcrumbs */}
                        <Typography sx={{ color: "#fff", fontSize: "14px" }}>
                            <Typography
                                component={Link}
                                to="/home"
                                underline="none"
                                sx={{ color: "#fff", textdecoration: "none", fontSize: "15px", }}
                            >
                                Home
                            </Typography>


                            {" / "}
                            <Typography
                                component="span"
                                sx={{ color: "#fff", fontWeight: 500 }}
                            >
                                TMD Machine Structure
                            </Typography>
                        </Typography>
                    </Box>

                </Container>
            </Box>


            {/* ================= CONTENT ================= */}
            <Container maxWidth="xl">
                <Box
                    sx={{
                        textAlign: "center",
                        py: { xs: 4, sm: 5, md: "30px" },
                        px: { xs: 2, sm: 3 },
                        paddingBottom: "150px!important",
                        marginTop: "50px"
                    }}

                >



                    {/* Learn More Button */}
                    <Grid container spacing={3} justifyContent="center"   >
                        {/* Four Responsive Cards */}
                        <Grid
                            item
                            size={{ xs: 12, sm: 6, md: 3 }}


                        >
                            <Card
                                sx={{
                                    position: "relative",
                                    overflow: "hidden",
                                    borderRadius: "24px",
                                    background:
                                        "linear-gradient(145deg, #ffffff 0%, #f8f9fb 100%)",
                                    border: "2px solid #8bd2a5d6",
                                    boxShadow:
                                        "0 15px 40px rgba(0,0,0,0.08), 0 5px 15px rgba(0,0,0,0.05)",
                                    transition: "all 0.5s ease",
                                    cursor: "pointer",
                                    height: "100%",

                                    "&::after": {
                                        content: '""',
                                        position: "absolute",
                                        width: "280px",
                                        height: "280px",
                                        borderRadius: "50%",
                                        bottom: "-180px",
                                        right: "-160px",

                                        background:
                                            "linear-gradient(135deg, rgba(10,125,52,0.12), rgba(10,125,52,0.03))",

                                        border: "1px solid rgba(10,125,52,0.08)",

                                        zIndex: 0,
                                        transition: "all .5s ease",
                                    },

                                    "&:hover": {
                                        transform: "translateY(-12px)",
                                        boxShadow:
                                            "0 25px 60px rgba(0,0,0,0.15), 0 10px 25px rgba(0,0,0,0.08)",

                                        "&:before": {
                                            left: "100%",
                                            top: "100%",
                                        },

                                        "& .card-image": {
                                            transform: "scale(1.08)",
                                        },

                                        "& .card-arrow": {
                                            transform: "translateX(8px)",
                                            opacity: 1,
                                        },
                                    },
                                }}
                                onClick={BlackhandleClick}
                            >
                                {/* Card Image */}
                                <Box
                                    sx={{
                                        overflow: "hidden",
                                        position: "relative",
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={cardDataa.image1}
                                        alt={cardDataa.title1}
                                        className="card-image"
                                        sx={{
                                            height: 260,
                                            transition: "transform 0.7s ease",
                                        }}
                                    />

                                    {/* Gradient Overlay */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            inset: 0,
                                            background:
                                                "linear-gradient(to top, rgba(0,0,0,0.55), transparent 60%)",
                                        }}
                                    />
                                </Box>

                                {/* Card Content */}
                                <CardContent
                                    sx={{
                                        p: 3,
                                        textAlign: "center",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: { xs: 18, md: 22 },
                                            fontWeight: 700,
                                            color: "#111",
                                            fontFamily: "Roboto",
                                            mb: 2,
                                            lineHeight: 1.3,
                                        }}
                                    >
                                        {cardDataa.title1}
                                    </Typography>

                                    <Box
                                        className="card-arrow"
                                        sx={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: 1,
                                            color: "#0A7D34",
                                            fontWeight: 600,

                                            transition: "all 0.4s ease",
                                        }}
                                    >
                                        Explore More →
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid
                            item
                            size={{ xs: 12, sm: 6, md: 3 }}


                        >
                            <Card
                                sx={{
                                    position: "relative",
                                    overflow: "hidden",
                                    borderRadius: "24px",
                                    background:
                                        "linear-gradient(145deg, #ffffff 0%, #f8f9fb 100%)",
                                    border: "2px solid #8bd2a5d6",
                                    boxShadow:
                                        "0 15px 40px rgba(0,0,0,0.08), 0 5px 15px rgba(0,0,0,0.05)",
                                    transition: "all 0.5s ease",
                                    cursor: "pointer",
                                    height: "100%",

                                    "&::after": {
                                        content: '""',
                                        position: "absolute",
                                        width: "280px",
                                        height: "280px",
                                        borderRadius: "50%",
                                        bottom: "-180px",
                                        right: "-160px",

                                        background:
                                            "linear-gradient(135deg, #0a7d341f, rgba(10,125,52,0.03))",

                                        border: "1px solid rgba(10,125,52,0.08)",

                                        zIndex: 0,
                                        transition: "all .5s ease",
                                    },
                                    
                                    "&:hover": {
                                        transform: "translateY(-12px)",
                                        boxShadow:
                                            "0 25px 60px rgba(0,0,0,0.15), 0 10px 25px rgba(0,0,0,0.08)",

                                        "&:before": {
                                            left: "100%",
                                            top: "100%",
                                        },

                                        "& .card-image": {
                                            transform: "scale(1.08)",
                                        },

                                        "& .card-arrow": {
                                            transform: "translateX(8px)",
                                            opacity: 1,
                                        },
                                    },
                                }}
                                onClick={GreenhandleClick}
                            >
                                {/* Card Image */}


                                <Box
                                    sx={{
                                        overflow: "hidden",
                                        position: "relative",
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={cardDataa.image2}
                                        alt={cardDataa.title2}
                                        className="card-image"
                                        sx={{
                                            height: 260,
                                            transition: "transform 0.7s ease",
                                        }}
                                    />

                                    {/* Gradient Overlay */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            inset: 0,
                                            background:
                                                "linear-gradient(to top, rgba(0,0,0,0.55), transparent 60%)",
                                        }}
                                    />
                                </Box>

                                {/* Card Content */}



                                <CardContent
                                    sx={{
                                        p: 3,
                                        textAlign: "center",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: { xs: 18, md: 22 },
                                            fontWeight: 700,
                                            color: "#111",
                                            fontFamily: "Roboto",
                                            mb: 2,
                                            lineHeight: 1.3,
                                        }}
                                    >
                                        {cardDataa.title2}
                                    </Typography>

                                    <Box
                                        className="card-arrow"
                                        sx={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: 1,
                                            color: "#0A7D34",
                                            fontWeight: 600,
                                            transition: "all 0.4s ease",
                                        }}
                                    >
                                        Explore More →
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                </Box>
            </Container>
        </>
    );
};

export default TmdDivision;
