import React, { useEffect, useState } from "react";
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
import { axiosInstance } from "../../Api/Axios/axios";
import { endpoints } from "../../Api/EndPoints/endpoints";

const leftMenu = ["NEWS", "PHOTO GALLERY", "DOWNLOAD"];

const News = () => {
  
    const [data,setData] = useState({})

    const fetchMediaData =  async () =>{
        try{
           const res = await axiosInstance.get(endpoints.Media.cmsMedia)
           setData(res?.data?.data)
        }
        catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        fetchMediaData()
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

                    <Typography color="text.primary">NEWS</Typography>
                </Breadcrumbs>

                {/* PAGE TITLE */}
                <Typography
                    sx={{
                        fontSize: "26px",
                        fontWeight: 700,
                        mb: 1,
                        color: "#000",
                        textTransform: "uppercase",
                        fontFamily: "Roboto",
                    }}
                >
                    MEDIA
                </Typography>

                <Grid container spacing={3}>
                    {/* Left Sidebar */}
                    <Grid item size={{ xs: 12, md: 3 }}>
                        

                        

                        <List sx={{ border: "1px solid #ddd" }}>
                            {leftMenu.map((item) => (
                                <ListItemButton
                                    key={item}
                                    component={Link}
                                    to={`/media/${item.toLowerCase().replace(/ /g, "-")}`}
                                    sx={{
                                        borderBottom: "1px solid #eee",
                                        backgroundColor:
                                            item === "NEWS" ? "green" : "transparent",
                                        color: item === "NEWS" ? "#fff" : "#000",
                                        "&:hover": {
                                            backgroundColor:
                                                item === "NEWS" ? "green" : "#f5f5f5",
                                        },
                                        fontFamily: "Roboto",
                                    }}
                                >
                                    <ListItemText
                                        primary={item}
                                        primaryTypographyProps={{
                                            fontSize: "14px",
                                            fontWeight: 500,
                                            fontFamily: "Roboto",
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
                                fontFamily: "Roboto",
                                color:"#1A73E8"
                            }}
                        >
                            {data?.category1_title}
                        </Typography>
                        

                        {/* Introduction */}

                        <Box sx={{
                            paddingBottom: "10px", mt: 4, boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
                            borderRadius: "12px",
                            p: 0,

                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundColor: "#fff", // fallback
                            padding: "20px 20px 20px 20px",
                        }}>
                            <Grid container spacing={2}>
                                <Grid item size={{ xs: 12, md: 4 }}>
                                    <img
                                        src={data?.category1_sec1_image}
                                        alt=""
                                        style={{
                                            width: "100%",
                                            borderRadius: "6px",
                                            height: "auto",
                                        }}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    size={{ xs: 12, md: 8 }}
                                    sx={{ display: "flex", alignItems: "center" }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "20px",
                                            fontFamily: "Roboto",
                                            textAlign: "justify",
                                        }}
                                    >
                                    {data?.category1_sec1_desc}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                        <Accordion sx={{
                            background: "#fff",
                            boxShadow: "0px 2px 8px rgba(0,0,0,0.10)",
                            borderRadius: "8px",
                            "&:before": { display: "none" },
                            mt: 4
                        }}>
                            <AccordionSummary sx={{
                                backgroundColor: "#f8f8f8",
                                borderBottom: "1px solid #eee",
                                borderRadius: "8px"
                            }} expandIcon={<ExpandMoreIcon sx={{ color: "red" }} />}>
                                <Typography
                                    sx={{
                                        fontSize: { md: "20px", xs: "16px" },
                                        fontWeight: 500,
                                        fontFamily: "Roboto"
                                    }}
                                >
                                    Vikram India Limited 
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Grid item xs={12}>

                                    <Typography sx={headingStyle}>
                                        <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                         Vikram India Limited has been awarded with the EEPCINDIA Awards (Eastern Region) for being the STAR PERFORMER 2012-2013 in exports
                                    </Typography>

                                    <Typography sx={headingStyle}>
                                        <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                        Awarded turnkey project from Government of Tripura at Mohanpur, Tripura got CTC Tea Processing Factory with annual capacity of 6 lacs.
                                    </Typography>

                                    <Typography sx={headingStyle}>
                                        <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                        Successful commissioning of latest machine from R & D
                                    </Typography>

                                    <Typography sx={headingStyle}>
                                        <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                        Vikram India bags the EEPC Star Performer Award 2011-2012 <br />
                                        Jansatta, 19 December
                                    </Typography>

                                    <Typography sx={headingStyle}>
                                        <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                        Vikram India bags the EEPC Star Performer Award 2011-2012 <br />
                                        The Echo of India, 18 December
                                    </Typography>

                                    <Typography sx={headingStyle}>
                                        <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                        Tea factory owned by Panbari's small tea growers' self-help group inaugurated on the 9th of December
                                        <br />
                                        Times of India, 23 December 2012


                                    </Typography>

                                    <Typography sx={headingStyle}>
                                        <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />

                                        Vikram ties up with McLeod Russel to initiate Green Power in the Indian Tea industry
                                    </Typography>

                                </Grid>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

const headingStyle = {
    fontSize: "20px",
    fontWeight: 600,
    mt: 4,
    mb: 2,
    fontFamily: "Roboto",
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


export default News;
