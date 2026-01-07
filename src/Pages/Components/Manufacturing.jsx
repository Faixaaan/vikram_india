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
    Container,
} from "@mui/material";

import { Link } from "react-router-dom";
import mmsStructure from "../../Assets/mms-structure.jpg"; // update your image
import '../../App.css'

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import structure1 from '../../Assets/mm-structure-01.jpg'
import structure2 from '../../Assets/mm-structure-02.jpg'
import structure3 from '../../Assets/mm-structure-03.jpg'
import structure4 from '../../Assets/mm-structure-04.jpg'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
    { img: structure3 },
]

const Manufacturing = () => {

    const [imageData ,setImageData] = useState([])


    const fetchImageData = async()=>{
        try{
            const res = await axiosInstance.get(endpoints.ModuleMounting.getModuleMountingManufaturing)
            
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
                    <Typography color="text.primary">MANUFACTURING AND QUALITY</Typography>
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
                    MANUFACTURING AND QUALITY
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
                            MANUFACTURING AND QUALITY
                        </Typography>

                        <List sx={{ border: "1px solid #ddd" }}>
                            {leftMenu.map((item) => (
                                <ListItemButton
                                    key={item}
                                    component={Link}
                                    to={`/products/${item.toLowerCase().replace(/ /g, "-")}`}
                                    sx={{
                                        borderBottom: "1px solid #eee",
                                        backgroundColor: item === "MANUFACTURING AND QUALITY" ? "green" : "transparent",
                                        color: item === "MANUFACTURING AND QUALITY" ? "#fff" : "#000",
                                        "&:hover": {
                                            backgroundColor: item === "MANUFACTURING AND QUALITY" ? "green" : "#f5f5f5",
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
                            MANUFACTURING AND QUALITY
                        </Typography>


                        {/* Introduction */}


                        <Box>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, md: 12 }}>
                                    <Typography sx={{ fontSize: "16px", fontFamily: "Open Sans", textAlign: "justify" }}>
                                        We are fully equipped with upgraded machineries in our plant to produce world class of material s per designed. With superior quality solar module mounting structure systems, fabricated in our modern manufacturing unit. we have an edge when it comes to producing product at its excellence. We boast to provides the most economical and premier quality solar structure.
                                    </Typography>
                                </Grid>

                            </Grid>


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
                                            fontSize: {md:"20px",xs:"16px"},
                                            fontWeight: 500,
                                            fontFamily: "Open Sans"
                                        }}
                                    >
                                        Our state-of-art manufacturing facility is equipped with
                                    </Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Grid item xs={12}>

                                        <Typography sx={headingStyle}>
                                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                            Cold Rolling Machine - Fully automatic high speed line.
                                        </Typography>

                                        <Typography sx={headingStyle}>
                                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                            Shearing Machine - CNC.
                                        </Typography>

                                        <Typography sx={headingStyle}>
                                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                            Press Brake - CNC.
                                        </Typography>

                                        <Typography sx={headingStyle}>
                                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                            Power Press.
                                        </Typography>

                                        <Typography sx={headingStyle}>
                                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                            Plasma Cutting - CNC.
                                        </Typography>

                                        <Typography sx={headingStyle}>
                                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                            Iron worker and other equipment to produce
                                            24,000 MT structure per annum.
                                        </Typography>

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
                                }} expandIcon={<ExpandMoreIcon sx={{ color: "red" }} />}>
                                    <Typography sx={{ fontSize: {md:"20px",xs:"16px"}, fontWeight: 500, fontFamily: "Open Sans" }}>
                                        Image Gallery
                                    </Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Grid container spacing={2}>
                                        {imageData?.map((item, i) => (
                                            <Grid item size={{xs:12,md:4}} key={i}>
                                                <img
                                                    src={item.image}
                                                    style={{ width: "100%", borderRadius: "8px" }}
                                                    alt=""
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
                                }} expandIcon={<ExpandMoreIcon sx={{ color: "red" }} />}>
                                    <Typography
                                        sx={{
                                            fontSize: {md:"20px",xs:"16px"},
                                            fontWeight: 500,
                                            fontFamily: "Open Sans"
                                        }}
                                    >
                                        Environmental and Safety
                                    </Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Box>
                                        <Grid container spacing={2}>

                                            {/* LEFT CONTENT */}
                                            <Grid item size={{ xs: 12, md: 8 }}>

                                                <Typography sx={headingStyle}>
                                                    <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                                    We adhere to statutory and legal requirement for safety, health and
                                                    environment in manufacturing process.
                                                </Typography>

                                                <Typography sx={headingStyle}>
                                                    <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                                    We enhance and upgrade technology, resources and manpower competence
                                                    to achieve total customer satisfaction.
                                                </Typography>

                                            </Grid>

                                            {/* RIGHT IMAGE */}
                                            <Grid item size={{ xs: 12, md: 4 }}>
                                                <img src={structure4} style={{ width: "100%" }} />
                                            </Grid>

                                            {/* BOTTOM FULL WIDTH CONTENT */}
                                            <Grid item size={{ xs: 12 }}>

                                                <Typography sx={headingStyle}>
                                                    <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                                    We accept customer suggestion by understanding their requirement and
                                                    need for quality improvement.
                                                </Typography>

                                                <Typography sx={headingStyle}>
                                                    <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                                    We have adopted numerous methodologies in entire value.
                                                </Typography>

                                            </Grid>

                                        </Grid>
                                    </Box>
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

export default Manufacturing;
