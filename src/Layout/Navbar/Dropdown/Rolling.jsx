import React from "react";
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
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";

import { Link } from "react-router-dom";
import FanImage from "../../../Assets/logo 1.png"; // update your image
import '../../../App.css'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import controllerImage from "../../../Assets/rolling.jpg";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import humidation1 from "../../../Assets/regulate1.png";
import humidation2 from "../../../Assets/regulate2.png";
import leafSizer from '../../../Assets/leaf-sizer.jpg'

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

const Rolling = () => {
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
                <Breadcrumbs sx={{ mb: 2, fontSize: "14px" }}>
                    <MLink component={Link} to="/" underline="hover" color="inherit">
                        Home
                    </MLink>
                    <Typography color="inherit">Product & Services</Typography>
                    <Typography color="text.primary">CTC Tea Processing Machinery</Typography>
                    <Typography color="text.primary">ROLLING</Typography>
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
                    CTC Tea Processing Machinery
                </Typography>

                <Typography sx={{ fontSize: "15px", mb: 3, color: "#d32f2f", fontFamily: "Open Sans" }}>
                    Setting global benchmarks in tea processing machinery industry
                </Typography>

                <Grid container spacing={3}>
                    {/* Left Sidebar */}
                    <Grid item size={{ xs: 12, md: 3 }}>    ``
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
                            CTC Tea Processing Machinery
                        </Typography>

                        <List sx={{ border: "1px solid #ddd" }}>
                            {leftMenu.map((item) => (
                                <ListItemButton
                                    key={item}
                                    component={Link}
                                    to={`/products/ctc/${item.toLowerCase().replace(/ /g, "-")}`}
                                    sx={{
                                        borderBottom: "1px solid #eee",
                                        backgroundColor: item === "ROLLING" ? "green" : "transparent",
                                        color: item === "ROLLING" ? "#fff" : "#000",
                                        "&:hover": {
                                            backgroundColor: item === "ROLLING" ? "green" : "#f5f5f5",
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
                            ROLLING
                        </Typography>

                        <Grid container spacing={2}>
                            {/* Left Description */}
                            <Grid item xs={12} md={8}>
                                <Typography sx={{ mb: 2, fontSize: "15px", lineHeight: "24px", fontFamily: "Open Sans" }}>
                                    The aero-dynamically designed Axial Flow Fans from Vikram India are
                                    made of high quality aluminium alloy and are suitable for different
                                    sizes of withering troughs. These fans ensure uniformity of withering,
                                    reduce power consumption and are tested for vibration, noise levels,
                                    air delivery and static pressure.
                                </Typography>

                                <Typography sx={{ mb: 3, fontSize: "15px", lineHeight: "24px", fontFamily: "Open Sans" }}>
                                    Vikram also offers Centrifugal Fans and Induced Draught Fans in
                                    different sizes as per the customer's requirement.
                                </Typography>
                            </Grid>

                            {/* Right Image */}
                            <Grid item xs={12} md={4}>
                                <Box
                                    component="img"
                                    src={FanImage}
                                    alt="Axial Flow Fan"
                                    sx={{
                                        width: "100%",
                                        borderRadius: "4px",
                                        border: "1px solid #ddd",
                                    }}
                                />
                            </Grid>
                        </Grid>

                        {/* Technical Specification Table */}
                        <Typography
                            sx={{
                                fontSize: "20px",
                                fontWeight: 600,
                                mt: 4,
                                mb: 2,
                                fontFamily: "Open Sans"
                            }}
                        >
                            Rolling
                        </Typography>

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
                                    variant="h6"
                                    sx={{ fontWeight: 700, fontFamily: "Open Sans" }}
                                >
                                    Weigh Feeder
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                {/* TOP SECTION : TEXT + IMAGE */}
                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }}>
                                        <Typography sx={{ fontFamily: "Open Sans", color: "#333", textAlign: "justify" }}>
                                            The invention was carried out with an objective of automating the dryer to facilitate minimal operator intervention, consistency of drying and Energy efficiency.


                                        </Typography>
                                    </Grid>

                                    {/* RIGHT IMAGE */}
                                    <Grid item size={{ xs: 12, md: 4 }} textAlign="right">
                                        <Box
                                            component="img"
                                            src={controllerImage}
                                            alt="VFBD Machine"
                                            sx={{
                                                width: "100%",
                                                maxWidth: "260px",
                                                borderRadius: "8px",
                                            }}
                                        />
                                    </Grid>
                                </Grid>

                                {/* SPACING */}
                                <Box mt={3} />

                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Automatic, Exposure Control, Temperature Control and Moisture Control to ensure consistent quality.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        High precision sensor load cells improve weighing accuracy.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Skirt board avoids flooding and spillage of material.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>
                                        Volumetric feed provision in case of emergency.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>
                                        Feed setting possible from main panel as well as from local panel at field.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        All parameters can be viewed on HMI screen.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Due to double stage of weigh feeder, the 1st stage can receive excessive uneven load, resulting 2nd stage can maintain high accuracy level.
                                    </Typography>

                                </Box>


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
                                    variant="h6"
                                    sx={{ fontWeight: 700, fontFamily: "Open Sans" }}
                                >
                                   Regulated Feed Unit

                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                {/* TOP SECTION : TEXT + IMAGE */}

                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 6 }} textAlign="center">
                                        <Box
                                            component="img"
                                            src={humidation1}
                                            alt="VFBD Machine"
                                            sx={{
                                                width: "100%",
                                                maxWidth: "250px",
                                                borderRadius: "8px",
                                            }}
                                        />
                                        <Typography sx={{fontFamily:"Open Sans"}}>
                                            Drawing of Gravimetric Weigh Feeder
                                        </Typography>
                                    </Grid>

                                    {/* RIGHT IMAGE */}
                                    <Grid item size={{ xs: 12, md: 6 }} textAlign="center">
                                        <Box
                                            component="img"
                                            src={humidation2}
                                            alt="VFBD Machine"
                                            sx={{
                                                width: "100%",
                                                maxWidth: "250px",
                                                borderRadius: "8px",
                                            }}
                                        />
                                         <Typography sx={{fontFamily:"Open Sans"}}>
                                            Picture of Gravimetric Weigh Feeder

                                        </Typography>
                                    </Grid>
                                </Grid>


                                {/* SPACING */}
                                <Box mt={3} />



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
                                    variant="h6"
                                    sx={{ fontWeight: 700, fontFamily: "Open Sans" }}
                                >
                                    Leaf Sizer
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                {/* TOP SECTION : TEXT + IMAGE */}
                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }}>
                                        <Typography sx={{ fontFamily: "Open Sans", color: "#333", textAlign: "justify" }}>
                                            Leaf Sizer used for shredding tea leaves consists of a cylinder in which the main shaft with knives (blades) rotates at a speed of 2500 rpm. Shredding reduces volume of tea leaves and enables manufacturers to load larger quantity of leaves into the Rotor Vane, making the process more cost-effective. The machine also helps in the efficient mixing of RC material with the withered leaf, especially in the CTC type of processing.


                                        </Typography>
                                    </Grid>

                                    {/* RIGHT IMAGE */}
                                    <Grid item size={{ xs: 12, md: 4 }} textAlign="right">
                                        <Box
                                            component="img"
                                            src={leafSizer}
                                            alt="VFBD Machine"
                                            sx={{
                                                width: "100%",
                                                maxWidth: "260px",
                                                borderRadius: "8px",
                                            }}
                                        />
                                    </Grid>
                                </Grid>

                                {/* SPACING */}
                                <Box mt={3} />

                                


                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Rolling;
