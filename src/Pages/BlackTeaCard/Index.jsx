import React, { useState } from "react";
import { Box, Typography, Button, Container, Grid, Card, CardMedia, CardContent } from "@mui/material";
import bannerImg from "../../Assets/Module_mounting_banner.jpg"; // change if needed
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../Api/Axios/axios";
import { endpoints } from "../../Api/EndPoints/endpoints";
import { useEffect } from "react";
import FanImage from "../../Assets/mm-structure-01.jpg"; // update your image


const cardData = [
    {
        id: 1,
        title: "CTC ",
        image: FanImage,
        path: "/products/ctc/withering-process"
    },
    {
        id: 2,
        title: "ORTHODOX",
        image: FanImage,
        path: "/products/ctc/teawithering-process"
    },
    
];

const ProcessingCard = () => {

    const navigate = useNavigate()
    const [data, setData] = useState([])

    const getData = async () => {
        try {
            const res = await axiosInstance.get(endpoints.ModuleMounting.Introduction);
            setData(res?.data?.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])


     const handleClick = (path) => {
        navigate(path);
    };



    return (
        <>
            {/* ================= BANNER ================= */}
            <Box
                sx={{
                    width: "100%",
                    height: { xs: "220px", sm: "300px", md: "380px" },
                    backgroundImage: `url(${data?.banner})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                }}
            >
                {/* Overlay */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(0,0,0,0.55)",
                    }}
                />

                {/* Banner Content */}
                <Box
                    sx={{
                        position: "relative",
                        zIndex: 1,
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        px: 2,
                    }}
                >
                    {/* <Typography
            sx={{
              color: "#fff",
              fontSize: { xs: "26px", sm: "34px", md: "44px" },
              fontWeight: 700,
              fontFamily: "Roboto",
              textAlign: "center",
            }}
          >
            Module Mounting Structure
          </Typography> */}
                </Box>
            </Box>

            {/* ================= CONTENT ================= */}
            <Container maxWidth="xl">
                <Box
                    sx={{
                        textAlign: "center",
                        py: { xs: 4, sm: 5, md: "60px" },
                        px: { xs: 2, sm: 3 },
                        paddingBottom: "150px!important"
                    }}
                >
                    {/* Title */}
                    <Typography
                        sx={{
                            fontSize: { xs: "22px", sm: "28px", md: "40px" },
                            fontWeight: 700,
                            fontFamily: "Roboto",
                            mb: 6,
                            color: "#1A73E8",
                        }}
                    >
                        Black Tea Machinery
                    </Typography>

                    {/* Subtitle */}
                   

                    {/* Learn More Button */}
                    <Grid container spacing={3} justifyContent="center"   >
                        {/* Four Responsive Cards */}
                        {cardData.map((card) => (
                            <Grid
                                item
                                size={{ xs: 12, sm: 6, md: 3 }}
                                key={card.id}

                            >
                                <Card
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                        transition: 'transform 0.3s, box-shadow 0.3s',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: '0 8px 16px rgba(0,0,0,0.15)',
                                        },
                                        cursor: "pointer",
                                        alignItems: "center",
                                        justifyContent: "center"
                                    }}
                                    onClick={() => handleClick(card.path)}
                                >
                                    {/* Card Image */}
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={card.image}
                                        alt={card.title}
                                        sx={{

                                            width: '100%',
                                        }}
                                    />

                                    {/* Card Content */}
                                    <CardContent sx={{
                                        flexGrow: 1, p: 2, '&:hover': {
                                            backgroundColor: "#e5e5e5"
                                        },
                                    }}>
                                        <Typography
                                            gutterBottom
                                            variant="h6"
                                            component="div"
                                            sx={{
                                                fontWeight: 600,
                                                fontSize: { xs: '16px', md: '18px' },
                                                fontFamily: 'Open Sans',
                                                color: '#333',
                                                mb: 1,
                                                textAlign: 'center'

                                            }}
                                        >
                                            {card.title}
                                        </Typography>


                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                </Box>
            </Container>
        </>
    );
};

export default ProcessingCard;
