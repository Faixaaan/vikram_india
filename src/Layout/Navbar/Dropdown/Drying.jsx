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
} from "@mui/material";

import { Link } from "react-router-dom";
import DryingImag from "../../../Assets/Drying_img.jpg"; // update your image
import '../../../App.css'
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import controllerImage from "../../../Assets/auto_controller.jpg";
import heatingImage from '../../../Assets/heating-Arrangment.jpg'


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

const Drying = () => {
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
                    <Typography color="text.primary">Drying</Typography>
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
                                        backgroundColor: item === "DRYING" ? "#d32f2f" : "transparent",
                                        color: item === "DRYING" ? "#fff" : "#000",
                                        "&:hover": {
                                            backgroundColor: item === "DRYING" ? "#c62828" : "#f5f5f5",
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
                            DRYING
                        </Typography>



                        {/* Technical Specification Table */}
                        {/* Technical Specifications */}
                        <Typography
                            sx={{
                                fontSize: "20px",
                                fontWeight: 600,
                                mt: 4,
                                mb: 2,
                                fontFamily: "Open Sans",
                            }}
                        >
                            Technical Specifications
                        </Typography>

                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 700, fontFamily: "Open Sans" }}
                                >
                                    Vibratory Fluid Bed Dryers (VFBD)
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                {/* TOP SECTION : TEXT + IMAGE */}
                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }}>
                                        <Typography sx={{ fontFamily: "Open Sans", color: "#333", textAlign: "justify" }}>
                                            Vibratory Fluid Bed Dryer (VFBD) is by far the most efficient and cost effective equipment used for drying tea, both CTC and Orthodox varieties. Vikram's VFBDs are fitted with a specially designed Dual Damper that facilitates the two stage temperature drying process. Fitted with an efficient fiber extraction cyclone system and Dust extraction & re-firing system, this machine helps in the manufacturing of best quality tea.
                                        </Typography>
                                    </Grid>

                                    {/* RIGHT IMAGE */}
                                    <Grid item size={{ xs: 12, md: 4 }} textAlign="right">
                                        <Box
                                            component="img"
                                            src={DryingImag}
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

                                {/* YOUR EXISTING TABLE (NO CHANGES) */}
                                <TableContainer component={Paper} sx={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
                                    <Table sx={{ minWidth: 650 }}>
                                        <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                                            <TableRow>
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>MODULE</TableCell>
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>200W</TableCell>
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>300W</TableCell>
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>400W</TableCell>
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>600W</TableCell>

                                            </TableRow>
                                        </TableHead>

                                        <TableBody>
                                            <TableRow>
                                                <TableCell sx={{ maxWidth: "180px" }}>Capacity made Tea (Kgs/Hr.) at T1 135 ± 5°C 175 - 350 275 - 500 375-700 460 - 900* (Moisture content range of leaf: 76% - 62%)</TableCell>
                                                <TableCell>175 - 350</TableCell>
                                                <TableCell>275 - 500</TableCell>
                                                <TableCell>375 - 700</TableCell>
                                                <TableCell>460 - 900*</TableCell>

                                            </TableRow>

                                            <TableRow>
                                                <TableCell sx={{ maxWidth: "180px" }}>Water evaporation capacity (Kg/Hr.)</TableCell>
                                                <TableCell>540</TableCell>
                                                <TableCell>800</TableCell>
                                                <TableCell>1120</TableCell>
                                                <TableCell>1460</TableCell>

                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ mt: 2 }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 700, fontFamily: "Open Sans" }}
                                >
                                    VFBD Auto Controller
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



                            </AccordionDetails>
                        </Accordion>
                        <Accordion sx={{ mt: 2 }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 700, fontFamily: "Open Sans" }}
                                >
                                    Heating Arrangment
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                {/* TOP SECTION : TEXT + IMAGE */}
                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }}>
                                        <Typography sx={{ fontFamily: "Open Sans", color: "#333", textAlign: "justify" }}>
                                            Vikram's unique 'Eldora' Air Heaters have both, a heat generation unit and a heat exchanger unit ensuring better heat transfer. All cast iron parts are made of special heat resistant and superior quality castings to ensure these easily withstand rise in heat and temperature.


                                        </Typography>
                                    </Grid>

                                    {/* RIGHT IMAGE */}
                                    <Grid item size={{ xs: 12, md: 4 }} textAlign="right">
                                        <Box
                                            component="img"
                                            src={heatingImage}
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

                                {/* YOUR EXISTING TABLE (NO CHANGES) */}
                                <TableContainer component={Paper} sx={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
                                    <Table sx={{ minWidth: 650 }}>
                                        <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                                            <TableRow>
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>MODULE</TableCell>
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>200W</TableCell>
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>300W</TableCell>
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>400W</TableCell>
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>600W</TableCell>

                                            </TableRow>
                                        </TableHead>

                                        <TableBody>
                                            <TableRow>
                                                <TableCell sx={{ maxWidth: "180px" }}>Capacity made Tea (Kgs/Hr.) at T1 135 ± 5°C 175 - 350 275 - 500 375-700 460 - 900* (Moisture content range of leaf: 76% - 62%)</TableCell>
                                                <TableCell>175 - 350</TableCell>
                                                <TableCell>275 - 500</TableCell>
                                                <TableCell>375 - 700</TableCell>
                                                <TableCell>460 - 900*</TableCell>

                                            </TableRow>

                                            <TableRow>
                                                <TableCell sx={{ maxWidth: "180px" }}>Water evaporation capacity (Kg/Hr.)</TableCell>
                                                <TableCell>540</TableCell>
                                                <TableCell>800</TableCell>
                                                <TableCell>1120</TableCell>
                                                <TableCell>1460</TableCell>

                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                            </AccordionDetails>
                        </Accordion>


                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Drying;
