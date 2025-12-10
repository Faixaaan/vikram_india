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

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { Link } from "react-router-dom";
import mmsStructure from "../../Assets/mms-structure.jpg"; // update your image
import '../../App.css'


import structure1 from '../../Assets/product-01.jpg'
import structure2 from '../../Assets/product-02.jpg'
import structure3 from '../../Assets/product-03.jpg'

import structure4 from '../../Assets/solar-01.jpg'
import structure5 from '../../Assets/solar-02.jpg'


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

const Product = () => {
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
                    <Typography color="text.primary">SOLAR PUMPS (AC PUMPS)</Typography>
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
                    SOLAR PUMPS (AC PUMPS)
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
                            SOLAR PUMPS (AC PUMPS)
                        </Typography>

                        <List sx={{ border: "1px solid #ddd" }}>
                            {leftMenu.map((item) => (
                                <ListItemButton
                                    key={item}
                                    component={Link}
                                    to={`/products/ctc/${item.toLowerCase().replace(/ /g, "-")}`}
                                    sx={{
                                        borderBottom: "1px solid #eee",
                                        backgroundColor: item === "SOLAR PUMPS (AC PUMPS)" ? "green" : "transparent",
                                        color: item === "SOLAR PUMPS (AC PUMPS)" ? "#fff" : "#000",
                                        "&:hover": {
                                            backgroundColor: item === "SOLAR PUMPS (AC PUMPS)" ? "green" : "#f5f5f5",
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
                            SOLAR PUMPS (AC PUMPS)
                        </Typography>


                        {/* Introduction */}


                        <Box>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, md: 12 }}>
                                    <Typography sx={{ fontSize: "16px", fontFamily: "Open Sans", textAlign: "justify" }}>
                                        Our AC solar pumps solution are offers submersible pumps with energy efficient duty points ranging from 1m3/hrs to 280m3/hr. Each pump size is available with an optional number of stages to match the corresponding duty point. As a standard , all the pumps and motors are made of IS2062 grade with 80 micron surface to protect the risk of rust, when pumping ordinary cold water with chlorine content. These pumps can be used in both horizontal and vertical operation, depending on the site condition.
                                    </Typography>
                                </Grid>

                            </Grid>


                            <Accordion
                                sx={{
                                    background: "#fff",
                                    boxShadow: "0px 2px 8px rgba(0,0,0,0.10)",
                                    borderRadius: "8px",
                                    "&:before": { display: "none" },
                                    mt: 4
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: "#c00" }} />}
                                    sx={{
                                        backgroundColor: "#f8f8f8",
                                        borderBottom: "1px solid #eee",
                                        borderRadius: "8px"
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "20px",
                                            fontWeight: 600,
                                            fontFamily: "Open Sans"
                                        }}
                                    >
                                        Additional Features of Vikram India Limited's Solar AC Pumps below:
                                    </Typography>
                                </AccordionSummary>

                                <AccordionDetails sx={{ padding: "20px" }}>
                                    <Grid item xs={12}>
                                        <Typography sx={headingStyle}>
                                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                            Solar Power driven AC Pumps are supported with a Solar Inverter. The Solar Inverters are incorporated with a Technique called MPPT.
                                        </Typography>

                                        <Typography sx={headingStyle}>
                                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                            MPPT stands for Maximum Power Point Tracking in which the Inverters sample the Output Power (V-I Curve) by choosing the best load to be presented to the Solar / Photo Voltaic Modules or Cells in order to get the most usable power output. To add further, these Inverters being Programmable have got all the features of Sleep Function and Wakeup Function as follows:.
                                        </Typography>

                                        <Typography sx={headingStyle}>
                                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                            The Pump will automatically stop running if it fails to pump water during times when solar intensity decreases.
                                        </Typography>

                                        <Typography sx={headingStyle}>
                                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                            If the Pump stops running due to decrease in Solar Intensity, it can be programmed with a Sleep Time after which it will wake up.
                                        </Typography>

                                        <Typography sx={headingStyle}>
                                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                            After waking up the Inverter will check for the Voltage required to pump water and then will start running for a set time and check whether it is able to further pump water out unless which the Pump again goes back to Sleep Mode.
                                        </Typography>

                                    </Grid>
                                </AccordionDetails>
                            </Accordion>




                            <Box mt={3}>


                                <Accordion  sx={{
                                    background: "#fff",
                                    boxShadow: "0px 2px 8px rgba(0,0,0,0.10)",
                                    borderRadius: "8px",
                                    "&:before": { display: "none" },
                                    mt: 4
                                }}>
                                    <AccordionSummary   sx={{
                                        backgroundColor: "#f8f8f8",
                                        borderBottom: "1px solid #eee",
                                        borderRadius: "8px"
                                    }} expandIcon={<ExpandMoreIcon sx={{ color: "#c00" }} />}>
                                        <Typography sx={{ fontSize: "20px", fontWeight: 600,fontFamily:"Open Sans" }}>
                                            Shallow Well Submersible Pumps
                                        </Typography>
                                    </AccordionSummary>

                                    <AccordionDetails>

                                        {/* YOUR FULL GRID INSIDE ACCORDION */}
                                        <Grid container spacing={2}>

                                            {/* LEFT SIDE TABLE */}
                                            <Grid item size={{xs:12,md:8}}>
                                                <TableContainer
                                                    component={Paper}
                                                    sx={{
                                                        boxShadow: "0px 2px 10px rgba(0,0,0,0.06)",
                                                        borderRadius: "10px",
                                                        overflow: "hidden"
                                                    }}
                                                >
                                                    <Table sx={{ borderCollapse: "separate", borderSpacing: 0 }}>
                                                        <TableHead>
                                                            <TableRow>
                                                                <TableCell
                                                                    colSpan={5}
                                                                    sx={{
                                                                        fontSize: "16px",
                                                                        fontWeight: 700,
                                                                        textAlign: "center",
                                                                        backgroundColor: "#e9eef6",
                                                                        padding: "14px",
                                                                        borderBottom: "2px solid #d4d4d4",
                                                                    }}
                                                                >
                                                                    Shallow Well Submersible Pumps
                                                                </TableCell>
                                                            </TableRow>
                                                        </TableHead>

                                                        <TableHead>
                                                            <TableRow sx={{ backgroundColor: "#f5f7fa" }}>
                                                                {["Description (AC)", "Model-I", "Model-II", "Model-III", "Model-IV"].map((head, i) => (
                                                                    <TableCell
                                                                        key={i}
                                                                        sx={{
                                                                            fontWeight: 700,
                                                                            borderRight: i < 4 ? "1px solid #e0e0e0" : "none",
                                                                            borderBottom: "2px solid #e0e0e0",
                                                                            fontSize: "15px"
                                                                        }}
                                                                    >
                                                                        {head}
                                                                    </TableCell>
                                                                ))}
                                                            </TableRow>
                                                        </TableHead>

                                                        <TableBody>
                                                            {[
                                                                ["PV arrary (WP)", "1200", "1800", "3000", "4800"],
                                                                ["Moter capacity (HP).", "1", "2", "3", "5"],
                                                                ["Water output (LPD)", "38,400", "57,600", "96,000", "91,200"],
                                                                ["Head (Mtrs.)", "30", "30", "30", "50"],
                                                            ].map((row, index) => (
                                                                <TableRow key={index}>
                                                                    {row.map((cell, cellIndex) => (
                                                                        <TableCell
                                                                            key={cellIndex}
                                                                            sx={{
                                                                                borderRight: cellIndex < 4 ? "1px solid #eee" : "none",
                                                                                borderBottom: "1px solid #eee",
                                                                                fontSize: "14px",
                                                                                paddingY: "10px"
                                                                            }}
                                                                        >
                                                                            {cell}
                                                                        </TableCell>
                                                                    ))}
                                                                </TableRow>
                                                            ))}
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </Grid>

                                            {/* RIGHT SIDE IMAGE */}
                                            <Grid item size={{xs:12,md:4}}>
                                                <img
                                                    src={structure4}
                                                    style={{ width: "100%", borderRadius: "6px" }}
                                                />
                                            </Grid>

                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion  sx={{
                                    background: "#fff",
                                    boxShadow: "0px 2px 8px rgba(0,0,0,0.10)",
                                    borderRadius: "8px",
                                    "&:before": { display: "none" },
                                    mt: 4
                                }}>
                                    <AccordionSummary   sx={{
                                        backgroundColor: "#f8f8f8",
                                        borderBottom: "1px solid #eee",
                                        borderRadius: "8px"
                                    }} expandIcon={<ExpandMoreIcon sx={{ color: "#c00" }} />}>
                                        <Typography sx={{ fontSize: "20px", fontWeight: 600,fontFamily:"Open Sans" }}>
                                            Deep Well Surface Pumps (AC)
                                        </Typography>
                                    </AccordionSummary>

                                    <AccordionDetails>

                                        {/* YOUR FULL GRID INSIDE ACCORDION */}
                                        <Grid container spacing={2} mt={4}>

                                    {/* LEFT SIDE TABLE */}
                                    <Grid item size={{ xs: 12, md: 8 }}>
                                        <TableContainer
                                            component={Paper}
                                            sx={{
                                                boxShadow: "0px 2px 10px rgba(0,0,0,0.06)",
                                                borderRadius: "10px",
                                                overflow: "hidden"
                                            }}
                                        >
                                            <Table sx={{ borderCollapse: "separate", borderSpacing: 0 }}>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell
                                                            colSpan={5}
                                                            sx={{
                                                                fontSize: "16px",
                                                                fontWeight: 700,
                                                                textAlign: "center",
                                                                backgroundColor: "#e9eef6",
                                                                padding: "14px",
                                                                borderBottom: "2px solid #d4d4d4",
                                                            }}
                                                        >
                                                            Deep Well Surface Pumps (AC)
                                                        </TableCell>
                                                    </TableRow>
                                                </TableHead>

                                                <TableHead>
                                                    <TableRow sx={{ backgroundColor: "#f5f7fa" }}>
                                                        <TableCell
                                                            sx={{
                                                                fontWeight: 700,
                                                                borderRight: "1px solid #e0e0e0",
                                                                borderBottom: "2px solid #e0e0e0",
                                                                fontSize: "15px"
                                                            }}
                                                        >
                                                            Description (AC)
                                                        </TableCell>
                                                        <TableCell
                                                            sx={{
                                                                fontWeight: 700,
                                                                borderRight: "1px solid #e0e0e0",
                                                                borderBottom: "2px solid #e0e0e0",
                                                                fontSize: "15px"
                                                            }}
                                                        >
                                                            Model-I
                                                        </TableCell>
                                                        <TableCell
                                                            sx={{
                                                                fontWeight: 700,
                                                                borderBottom: "2px solid #e0e0e0",
                                                                fontSize: "15px"
                                                            }}
                                                        >
                                                            Model-II
                                                        </TableCell>
                                                        <TableCell
                                                            sx={{
                                                                fontWeight: 700,
                                                                borderBottom: "2px solid #e0e0e0",
                                                                fontSize: "15px"
                                                            }}
                                                        >
                                                            Model-III
                                                        </TableCell>

                                                    </TableRow>
                                                </TableHead>

                                                <TableBody>
                                                    {[
                                                        ["PV arrary (WP)", "900", "1800", "2700",],
                                                        ["Moter capacity (HP).", "1", "2", "3",],
                                                        ["Water output (LPD)", "81,000", "1,62,000", "2,43,000",],
                                                        ["Head (Mtrs.)", "10", "10", "10",],

                                                    ].map((row, index) => (
                                                        <TableRow
                                                            key={index}
                                                            sx={{
                                                                "&:hover": { backgroundColor: "#fafafa" }
                                                            }}
                                                        >
                                                            {row.map((cell, cellIndex) => (
                                                                <TableCell
                                                                    key={cellIndex}
                                                                    sx={{
                                                                        borderRight: cellIndex < 4 ? "1px solid #eee" : "none",
                                                                        borderBottom: "1px solid #eee",
                                                                        fontSize: "14px",
                                                                        paddingY: "10px"
                                                                    }}
                                                                >
                                                                    {cell}
                                                                </TableCell>
                                                            ))}
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>

                                    </Grid>

                                    {/* RIGHT SIDE IMAGE */}
                                    <Grid item size={{ xs: 12, md: 4 }}>
                                        <img src={structure5} style={{ width: "100%", borderRadius: "6px" }} />
                                    </Grid>

                                    {/* BELOW CONTENT FULL WIDTH */}


                                </Grid>
                                    </AccordionDetails>
                                </Accordion>
                                

                            </Box>



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

export default Product;
