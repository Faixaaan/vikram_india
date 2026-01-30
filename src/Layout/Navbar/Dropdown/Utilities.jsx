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
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Container,
} from "@mui/material";

import { Link } from "react-router-dom";
import DryingImag from "../../../Assets/Drying_img.jpg"; // update your image
import '../../../App.css'
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CFM from '../../../Assets/sorting_batch.jpg'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import speed_fiber from '../../../Assets/slow-speed.jpg'
import vibro_screen from '../../../Assets/vibro-screen.jpg'


const leftMenu = [
    "WITHERING",
    "ROLLING",
    "FERMENTING",
    "DRYING",
    "SORTING",
    "PACKING",
    "WORKSHOP EQUIPMENT",
    "QUALITY CONTROL EQUIPMENT",
    "UTILITIES",
];

const Utilities = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);


    return (
        <Box sx={{ padding: { xs: 2, md: 4 } }}>
            <Container maxWidth='xl'>
                {/* Breadcrumb */}
                <Breadcrumbs sx={{ mb: 2, fontSize: "15px" }}>
                    <MLink component={Link} to="/" underline="hover" color="inherit">
                        Home
                    </MLink>
                    <Typography color="inherit" sx={{  fontSize: "15px" }}>Product & Services</Typography>
                    <Typography color="text.primary" sx={{  fontSize: "15px" }}>CTC Tea Processing Machinery</Typography>
                    <Typography color="text.primary" sx={{  fontSize: "15px" }}>Utilities</Typography>
                </Breadcrumbs>

               


                <Grid container spacing={3}>
                    {/* Left Sidebar */}
                    <Grid item size={{ xs: 12, md: 3 }} sx={{mt:2}}>
                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: "15px",
                                mb: 2,
                                textTransform: "uppercase",
                                fontFamily: "Roboto"
                            }}
                        >
                            Product & Services
                        </Typography>

                        

                        <List sx={{ border: "1px solid #ddd" }}>
                            {leftMenu.map((item) => (
                                <ListItemButton
                                    key={item}
                                    component={Link}
                                    to={`/products/ctc/${item.toLowerCase().replace(/ /g, "-")}`}
                                    sx={{
                                        borderBottom: "1px solid #eee",
                                        backgroundColor: item === "UTILITIES" ? "green" : "transparent",
                                        color: item === "UTILITIES" ? "#fff" : "#000",
                                        "&:hover": {
                                            backgroundColor: item === "UTILITIES" ? "green" : "#f5f5f5",
                                        },
                                        fontFamily: "Roboto"
                                    }}
                                >
                                    <ListItemText
                                        primary={item}
                                        primaryTypographyProps={{
                                            fontSize: "14px",
                                            fontWeight: 500,
                                            fontFamily: "Roboto"
                                        }}
                                    />
                                </ListItemButton>
                            ))}
                        </List>
                    </Grid>

                    {/* Right Content Section */}
                    <Grid item size={{ xs: 12, md: 9 }} sx={{mt:6}}>
                        <Typography
                            sx={{
                                fontSize: "24px",
                                fontWeight: 600,
                                mb: 0,
                                fontFamily: "Roboto",
                                color:"red"
                            }}
                        >
                            UTILITIES
                        </Typography>
                        



                        {/* Technical Specification Table */}
                        {/* Technical Specifications */}
                        <Typography
                            sx={
                                headingStyle
                            }
                        >
                            <ChevronRightIcon sx={{ color: "red", fontSize: "34px" }} />  Digital Weighing Scale
                        </Typography>

                        <Typography
                            sx={headingStyle}
                        >
                            <ChevronRightIcon sx={{ color: "red", fontSize: "34px" }} /> Tea Conveyor Systems
                        </Typography>


                        <Typography
                            sx={headingStyle}

                        >
                            <ChevronRightIcon sx={{ color: "red", fontSize: "34px" }} />   Log Chain Saw
                        </Typography>
                        <Typography
                            sx={headingStyle}
                        >
                            <ChevronRightIcon sx={{ color: "red", fontSize: "34px" }} />   High Pressure Water Jet
                        </Typography>
                        <Typography
                            sx={headingStyle}

                        >
                            <ChevronRightIcon sx={{ color: "red", fontSize: "34px" }} />   Log Electrical Welding Set
                        </Typography>
                        <Typography
                            sx={headingStyle}
                        >
                            <ChevronRightIcon sx={{ color: "red", fontSize: "34px" }} />   High Electrical Welding Set
                        </Typography>
                        <Typography
                            sx={headingStyle}
                        >
                            <ChevronRightIcon sx={{ color: "red", fontSize: "34px" }} />   High Pressure Water Jet
                        </Typography>
                        <Typography
                            sx={headingStyle}

                        >
                            <ChevronRightIcon sx={{ color: "red", fontSize: "34px" }} />   Log Electrical Welding Set
                        </Typography>
                        <Typography
                            sx={headingStyle}
                        >
                            <ChevronRightIcon sx={{ color: "red", fontSize: "34px" }} />   High red Leaf Plucking Machine
                        </Typography>



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


export default Utilities;
