import React, { useEffect } from "react";
import {
    Box,
    Grid,
    Typography,
    
    Breadcrumbs,
    Link as MLink,
    
    Container,
    Card,
    CardContent,
    CardMedia,
} from "@mui/material";

import { Link, useNavigate } from "react-router-dom";
import FanImage from "../../Assets/mm-structure-01.jpg"; // update your image
import '../../App.css'
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";




// Card data - replace with your actual data
const cardData = [
    {
        id: 1,
        title: "Black Tea ",
        image: FanImage,
        path: "/products/tea-processing-machinery/black-tea"
    },
    {
        id: 2,
        title: "Green Tea",
        image: FanImage,
        path: "/products/ctc/greensteaming-process"
    },
    
];


const ProcessingCard = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);


    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    };



    return (
        <Box sx={{ padding: { xs: 2, md: 4 } }}>
            <Container maxWidth='xl'>
                {/* Breadcrumb */}
                <Breadcrumbs sx={{ mb: 2, fontSize: "14px" }}>
                    <MLink component={Link} to="/" underline="hover" color="inherit">
                        Home
                    </MLink>
                    <Typography color="inherit">Product & Services</Typography>
                    <Typography color="text.primary">Tea Processing Machinery</Typography>
                </Breadcrumbs>

                {/* PAGE TITLE */}
                <Typography
                    sx={{
                        fontSize: "28px",
                        fontWeight: 700,
                        mb: 1,
                        color: "#000",
                        textTransform: "uppercase",
                        fontFamily: "Open Sans"
                    }}
                >
                    Tea Processing Machinery
                </Typography>

                <Typography sx={{ fontSize: "15px", mb: 3, color: "#d32f2f", fontFamily: "Open Sans" }}>
                    Setting global benchmarks in tea processing machinery industry
                </Typography>

                <Grid container spacing={3}>
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
                                    alignItems:"center"
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
            </Container>
        </Box>
    );
};

export default ProcessingCard;