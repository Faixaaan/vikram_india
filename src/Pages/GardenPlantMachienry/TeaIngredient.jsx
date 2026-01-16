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

import '../../App.css'
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { axiosInstance } from "../../../src/Api/Axios/axios";
import { endpoints } from "../../../src/Api/EndPoints/endpoints";
import controllerImage from "../../../src/Assets/rolling.jpg";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const leftMenu = [
    "Harvesting",
    "FOREIGN OBJECT REMOVER",
    "PLUCKING MACHINE",
    "TEA INGREDIENTS  ANALYZER",


];




const TeaIngredient = () => {

    const [data, setData] = useState([])

    const fetchDryingData = async () => {
        try {
            const res = await axiosInstance.get(endpoints.teaProcessingMachinery.withering);
            setData(res?.data?.data)
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchDryingData()
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
                    <Typography color="text.primary">Orthodox Tea Processing Machinery</Typography>
                    <Typography color="text.primary">TEA INGREDIENTS  ANALYZER</Typography>
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
                    Garden and Plantation Equipment
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
                            Garden and Plantation Equipment
                        </Typography>

                        <List sx={{ border: "1px solid #ddd" }}>
                            {leftMenu.map((item) => (
                                <ListItemButton
                                    key={item}
                                    component={Link}
                                    to={`/products/ctc/${item.toLowerCase().replace(/ /g, "-")}`}
                                    sx={{
                                        borderBottom: "1px solid #eee",
                                        backgroundColor: item === "TEA INGREDIENTS  ANALYZER" ? "green" : "transparent",
                                        color: item === "TEA INGREDIENTS  ANALYZER" ? "#fff" : "#000",
                                        "&:hover": {
                                            backgroundColor: item === "STEAMING" ? "green" : "#f5f5f5",
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
                            TEA INGREDIENTS  ANALYZER
                        </Typography>

                        <Grid container spacing={2}>
                            {/* Left Description */}
                            <Grid item xs={12} md={8}>



                            </Grid>

                            {/* Right Image */}
                            <Grid item xs={12} md={4}>
                                <Box
                                    component="img"
                                    src={data?.image}
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
                                <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>
                                    TEA INGREDIENTS  ANALYZER


                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }} >
                                        <Typography sx={{ fontFamily: "Open Sans", color: "#333", textAlign: "justify" }}>
                                            Vikram's tea ingredients analyzer is fast, safe and simple. The machine has a touch screen digital display with different language settings, displaying accurate figures quickly. The fixed small printer prints the values efficiently. It is easy to operate and ensures hassle-free correct analysis even without any formal training.


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


                                <TableContainer
                                    component={Paper}
                                    sx={{
                                        mt: 4,
                                        border: "1px solid #ddd",
                                        boxShadow: "none"
                                    }}
                                >
                                    <Table>
                                        <TableHead>
                                            <TableRow sx={{ backgroundColor: "#f3f3f3" }}>
                                                <TableCell sx={{ fontWeight: 700 }}>Model</TableCell>
                                                <TableCell sx={{ fontWeight: 700 }}>GTN-9</TableCell>
                                                <TableCell sx={{ fontWeight: 700 }}>RTN-7</TableCell>
                                            </TableRow>
                                        </TableHead>

                                        <TableBody>
                                            <TableRow>
                                                <TableCell>Measurement system</TableCell>
                                                <TableCell colSpan={2}>NIR Spectroscopy</TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell>Measurement Objects</TableCell>
                                                <TableCell>
                                                    Dry Material Leaf – Unrefined Tea – Refined Tea
                                                    (Domestic Crop – Orthodox Sencha)
                                                </TableCell>
                                                <TableCell>
                                                    Fresh Leaf – Dry Material Leaf – Unrefined Tea – Refined Tea
                                                    (Domestic Crop – Orthodox Sencha)
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell>Measurement Time</TableCell>
                                                <TableCell colSpan={2}>
                                                    Approx. 15 seconds after closing the sample drawer
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell>Pretreatment Apparatus</TableCell>
                                                <TableCell>
                                                    Drying by a microwave oven
                                                    <br />
                                                    Grinding by the fixed grinder
                                                </TableCell>
                                                <TableCell>
                                                    Cutting by a particle cutter
                                                    <br />
                                                    Drying by a microwave oven
                                                    <br />
                                                    Grinding by the fixed grinder
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell>Dimension</TableCell>
                                                <TableCell colSpan={2}>
                                                    Width 400 mm × Height 354 mm × Depth 362 mm
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell>Weight</TableCell>
                                                <TableCell colSpan={2}>
                                                    Approx. 15 kg (Main Instrument)
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell>Power Supply</TableCell>
                                                <TableCell colSpan={2}>AC 110 V (50/60 Hz)</TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell>Power Consumption</TableCell>
                                                <TableCell colSpan={2}>100 W</TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell>Measurement Environment</TableCell>
                                                <TableCell colSpan={2}>
                                                    10–15°C, 25–80% relative humidity
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell>Storage Temperature</TableCell>
                                                <TableCell colSpan={2}>0–50°C</TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell>Accessories</TableCell>
                                                <TableCell colSpan={2}>
                                                    Loading tray, Brush, Sweeping brush, Screw driver, Spare fuse,
                                                    Earth cord, Specific printer, Printer cable, Printer form,
                                                    Sample bottle × 12
                                                </TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell>Option</TableCell>
                                                <TableCell colSpan={2}>
                                                    Grinder, Dust collector (Vacuum cleaner), Personal computer,
                                                    Printer, Dedicated software package
                                                </TableCell>
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

export default TeaIngredient;
