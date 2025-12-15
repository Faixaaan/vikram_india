import React, { useEffect } from "react";
import {
    Box,
    Grid,
    Typography,
    List,
    ListItemButton,
    ListItemText,
    Divider,
    Breadcrumbs,
    Link as MLink,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Paper,
    Container,
    TextField,
    InputAdornment,
    Button,
} from "@mui/material";

import SelectIcon from "@mui/icons-material/ArrowDropDown";

import { Link } from "react-router-dom";
import mmsStructure from "../../Assets/news-ban.jpg"; // update your image
import "../../App.css";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import client1 from '../../Assets/mm-structure-brochure.jpg'
import client2 from '../../Assets/tea-machinery-division.jpg'




const leftMenu = ["NEWS", "PHOTO GALLERY", "DOWNLOAD"];


const Download = () => {

    const clientLogos = [
        { img: client1, name: "Receiving Export Excellence Award for 2016-17 ",link: "https://www.vikramindia.in/media/images/mm-structure-brochure.pdf"   },
        { img: client2, name: "Receiving Export Excellence Award for 2014-15 from Hon'ble Governer of Tripura ",link: "https://www.vikramindia.in/media/images/mm-structure-brochure.pdf"   },
       
       
    ];
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);
    return (
        <Box sx={{ padding: { xs: 2, md: 4 } }}>
            <Container maxWidth="xl">
                {/* Breadcrumb */}
                <Breadcrumbs sx={{ mb: 2, fontSize: "14px" }}>
                    <MLink component={Link} to="/" underline="hover" color="inherit">
                        Home
                    </MLink>
                    <Typography color="inherit">Media</Typography>

                    <Typography color="text.primary">DOWNLOAD</Typography>
                </Breadcrumbs>

                {/* PAGE TITLE */}
                <Typography
                    sx={{
                        fontSize: "28px",
                        fontWeight: 700,
                        mb: 1,
                        color: "#000",
                        textTransform: "uppercase",
                        fontFamily: "Open Sans",
                    }}
                >
                    MEDIA
                </Typography>

                <Grid container spacing={3}>
                    {/* Left Sidebar */}
                    <Grid item size={{ xs: 12, md: 3 }}>
                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: "15px",
                                mb: 2,
                                textTransform: "uppercase",
                                fontFamily: "Open Sans",
                            }}
                        >
                            DOWNLOAD
                        </Typography>

                        <Divider sx={{ mb: 2 }} />

                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: "14px",
                                mb: 1,
                                color: "#d32f2f",
                                fontFamily: "Open Sans",
                            }}
                        >
                            MEDIA
                        </Typography>

                        <List sx={{ border: "1px solid #ddd" }}>
                            {leftMenu.map((item) => (
                                <ListItemButton
                                    key={item}
                                    component={Link}
                                    to={`/media/${item.toLowerCase().replace(/ /g, "-")}`}
                                    sx={{
                                        borderBottom: "1px solid #eee",
                                        backgroundColor:
                                            item === "DOWNLOAD" ? "green" : "transparent",
                                        color: item === "DOWNLOAD" ? "#fff" : "#000",
                                        "&:hover": {
                                            backgroundColor:
                                                item === "DOWNLOAD" ? "green" : "#f5f5f5",
                                        },
                                        fontFamily: "Open Sans",
                                    }}
                                >
                                    <ListItemText
                                        primary={item}
                                        primaryTypographyProps={{
                                            fontSize: "14px",
                                            fontWeight: 500,
                                            fontFamily: "Open Sans",
                                        }}
                                    />
                                </ListItemButton>
                            ))}
                        </List>
                    </Grid>

                    {/* Right Content Section */}
                    <Grid item size={{ xs: 12, md: 9 }}>
                        <Typography
                            sx={{
                                fontSize: "28px",
                                fontWeight: 600,
                                lineHeight: "120%",
                                fontFamily: "Open Sans",
                            }}
                        >
                            DOWNLOAD
                        </Typography>
                        <Typography
                            sx={{
                                color: "#df0000",
                                fontSize: "14px",
                                fontFamily: "Open Sans",
                                fontWeight: "400",
                            }}
                        >
                            Our heritage captured in photographs
                        </Typography>

                        {/* Introduction */}

                        <Box sx={{ mt: 6 }}>
                            <Typography
                                sx={{
                                    fontSize: "22px",
                                    fontWeight: 600,
                                    mb: 2,
                                    fontFamily: "Open Sans",
                                    textTransform: "capitalize",
                                }}
                            >
                                Click on the thumbnails to Download
                            </Typography>

                            <Grid container spacing={3}>
                                {clientLogos.map((item, index) => (
                                    <Grid
                                        item
                                        size={{ xs: 12, sm: 4, md: 4 }}
                                        key={index}
                                        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                                    >
                                        {/* Logo Box */}
                                        <Box
                                        onClick={() => window.open(item.link, "_blank")}
                                            sx={{
                                                width: "auto",
                                                maxWidth: "250px",
                                                p: 2,
                                                borderRadius: "10px",
                                                background: "#fff",
                                                boxShadow: "0 4px 12px rgba(0,0,0,0.10)",
                                                textAlign: "center",
                                                transition: "0.3s",
                                                "&:hover": {
                                                    transform: "translateY(-5px)",
                                                    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                                                },
                                                cursor:"pointer"
                                            }}
                                        >
                                            <img
                                                src={item.img}
                                                alt={item.name}
                                                style={{
                                                    width: "250px",
                                                    height: "150px",
                                                    objectFit: "contain",
                                                }}
                                            />
                                        </Box>

                                        {/* Title BELOW the box */}
                                        <Typography
                                            sx={{
                                                fontSize: "14px",
                                                mt: 1.5,
                                                textAlign: "center",
                                                fontFamily: "Open Sans",
                                                width: "100%",
                                                maxWidth: "180px",
                                            }}
                                        >
                                            {item.name}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

const headingStyle = {
    fontSize: "16px",
    fontWeight: 400,
    mt: 2,
    mb: 2,
    fontFamily: "Open Sans",
    display: "flex",
    alignItems: "center",
    gap: 1,
    px: 2,
    py: 1.5,
    borderTop: "3px solid #e5e5e5",
    borderBottom: "3px solid #e5e5e5",
    boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
    borderRadius: "6px",
    background: "#fff"
};


export default Download;
