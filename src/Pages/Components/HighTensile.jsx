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
} from "@mui/material";

import { Link } from "react-router-dom";
import mmsStructure from "../../Assets/mms-structure.jpg"; // update your image
import '../../App.css'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import structure1 from '../../Assets/tensile-1.jpg'
import structure2 from '../../Assets/tensile-2.jpg'

import structure4 from '../../Assets/tensile-03.jpg'
import { axiosInstance } from "../../Api/Axios/axios";
import { endpoints } from "../../Api/EndPoints/endpoints";


const leftMenu = [
    "INTRODUCTION",
    "MANUFACTURING AND QUALITY",
    "MANUFACTURING WITH HIGH TENSILE IS PROJECT",
    "PRODUCTS",
    "SOLAR PUMPS (AC PUMPS)",

];

const img = [
    { img: structure1 },
    { img: structure2 },

]

const HighTensile = () => {
    
     const [imageData ,setImageData] = useState([])
    
    
        const fetchImageData = async()=>{
            try{
                const res = await axiosInstance.get(endpoints.ModuleMounting.getHighTensile)
                
                setImageData(res?.data?.data)
            }
            catch(err){
                console.log(err)
            }
        }
    


    useEffect(() => {
        fetchImageData()
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);
    return (
        <Box sx={{ padding: { xs: 2, md: 4 } }}>
            <Container maxWidth='xl'>
                {/* Breadcrumb */}
                <Breadcrumbs sx={{ mb: 2, fontSize: "14px" }}>
                    <MLink component={Link} to="/" underline="hover" color="inherit">
                        Home
                    </MLink>
                    <Typography color="inherit">Product & Services</Typography>
                    <Typography color="text.primary">Module Mounting Structure</Typography>
                    <Typography color="text.primary">MANUFACTURING WITH HIGH TENSILE IS PROJECT</Typography>
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
                    MANUFACTURING WITH HIGH TENSILE IS PROJECT
                </Typography>

                <Typography sx={{ fontSize: "15px", mb: 3, color: "#d32f2f", fontFamily: "Open Sans" }}>
                    Setting global benchmarks in tea processing machinery industry
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
                                fontFamily: "Open Sans"
                            }}
                        >
                            Product & Services
                        </Typography>

                        <Divider sx={{ mb: 2 }} />

                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: "14px",
                                mb: 1,
                                color: "#d32f2f",
                                fontFamily: "Open Sans"
                            }}
                        >
                            MANUFACTURING WITH HIGH TENSILE IS PROJECT
                        </Typography>

                        <List sx={{ border: "1px solid #ddd" }}>
                            {leftMenu.map((item) => (
                                <ListItemButton
                                    key={item}
                                    component={Link}
                                    to={`/products/${item.toLowerCase().replace(/ /g, "-")}`}
                                    sx={{
                                        borderBottom: "1px solid #eee",
                                        backgroundColor: item === "MANUFACTURING WITH HIGH TENSILE IS PROJECT" ? "green" : "transparent",
                                        color: item === "MANUFACTURING WITH HIGH TENSILE IS PROJECT" ? "#fff" : "#000",
                                        "&:hover": {
                                            backgroundColor: item === "MANUFACTURING WITH HIGH TENSILE IS PROJECT" ? "green" : "#f5f5f5",
                                        },
                                        fontFamily: "Open Sans"
                                    }}
                                >
                                    <ListItemText
                                        primary={item}
                                        primaryTypographyProps={{
                                            fontSize: "14px",
                                            fontWeight: 500,
                                            fontFamily: "Open Sans"
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
                                fontSize: "24px",
                                fontWeight: 600,
                                mb: 2,
                                fontFamily: "Open Sans"
                            }}
                        >
                            MANUFACTURING WITH HIGH TENSILE IS PROJECT
                        </Typography>


                        {/* Introduction */}


                        <Box>



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
                                }} expandIcon={<ExpandMoreIcon sx={{ color: "#c00" }} />}>
                                    <Typography
                                        sx={{
                                            fontSize: {md:"20px",xs:"16px"},
                                            fontWeight: 500,
                                            fontFamily: "Open Sans"
                                        }}
                                    >
                                        Broaching Machine Features
                                    </Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                    {/* CONTENT INSIDE ACCORDION */}
                                    <Typography sx={headingStyle}>
                                        <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                        We are equipped with highly new technology broaching machines and band saw
                                        machine at our plant. These machines give us strength to do any kind of
                                        slotting based on design in high tensile steel products.
                                    </Typography>

                                    <Typography sx={headingStyle}>
                                        <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                        Rate of production is very high with properly applied broaches, fixtures and
                                        machines, more pieces can be turned out per hour by broaching than by any
                                        other means.
                                    </Typography>

                                    <Typography sx={headingStyle}>
                                        <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                        Our machines have high accuracy and high class of precision finish is possible.
                                        A tolerance of ±0.0075 mm can be easily obtained in broaching.
                                    </Typography>

                                    <Typography sx={headingStyle}>
                                        <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                        Both roughing and finishing cuts are completed in one pass of the tool.
                                    </Typography>

                                    <Typography sx={headingStyle}>
                                        <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                        The process can be used for either internal or external surface operation.
                                    </Typography>

                                    <Typography sx={headingStyle}>
                                        <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                        Any form that can be reproduced on a broaching can be machined.
                                    </Typography>

                                    <Typography sx={headingStyle}>
                                        <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                        Cutting fluid may be readily applied where it is most effective because a
                                        broach tends to draw the fluid into the cut.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

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
                                }} expandIcon={<ExpandMoreIcon sx={{ color: "#c00" }} />}>
                                    <Typography
                                        sx={{
                                            fontSize: {md:"20px",xs:"16px"},
                                            fontWeight: 500,
                                            fontFamily: "Open Sans"
                                        }}
                                    >
                                        Images
                                    </Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Grid container spacing={2}>
                                        {imageData?.map((item, index) => (
                                            <Grid item size={{ xs: 12, md: 4 }} key={index}>
                                                <img
                                                    src={item.image}
                                                    style={{ width: "100%", borderRadius: "8px" }}
                                                />
                                            </Grid>
                                        ))}
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>

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
                                }} expandIcon={<ExpandMoreIcon sx={{ color: "#c00" }} />}>
                                    <Typography
                                        sx={{
                                            fontSize: {md:"20px",xs:"16px"},
                                            fontWeight: 500,
                                            fontFamily: "Open Sans"
                                        }}
                                    >
                                        Galvanizing Unit
                                    </Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Grid container spacing={2}>

                                        {/* LEFT CONTENT */}
                                        <Grid item size={{ xs: 12, md: 8 }}>
                                            <Typography sx={headingStyle}>
                                                <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                                We purchase Special High Grade ( SHG ) quality of Zinc for our
                                                galvanizing plant. Mainly from Hindustan Zinc Limited.
                                            </Typography>

                                            <Typography sx={headingStyle}>
                                                <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                                Our Galvanizing plant tank size is 9 x 1.1 x 1.6 meter.
                                            </Typography>
                                        </Grid>

                                        {/* RIGHT IMAGE */}
                                        <Grid item size={{ xs: 12, md: 4 }}>
                                            <img src={structure4} style={{ width: "100%" }} />
                                        </Grid>

                                        {/* FULL WIDTH CONTENT BELOW */}
                                        <Grid item size={{ xs: 12 }}>
                                            <Typography sx={headingStyle}>
                                                <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                                Our galvanizing tanks are ultra modern type and can perform at high
                                                temperature.
                                            </Typography>

                                            <Typography sx={headingStyle}>
                                                <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                                Durability – a permanently bonded tough coating
                                            </Typography>

                                            <Typography sx={headingStyle}>
                                                <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                                Hygienic – easy to clean surface
                                            </Typography>

                                            <Typography sx={headingStyle}>
                                                <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                                Long Life – maintenance free
                                            </Typography>
                                        </Grid>

                                    </Grid>
                                </AccordionDetails>
                            </Accordion>

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

export default HighTensile;
