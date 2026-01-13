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
    "WITHERING",
    "ROLLING",
    "FERMENTING",
    "DRYING",
    "SORTING",
    "PACKING",

];

const rollerSpecs = [
    { label: "Normal Speed", r36: "60", r46: "48" },
    { label: "Eccentricity", r36: "101 & 203 mm", r46: "101 & 203 mm" },
    { label: "Travel of Table", r36: "202 mm Circular", r46: "202 mm Circular" },
    { label: "Travel of Hood", r36: "406 mm Circular", r46: "406 mm Circular" },
    { label: "Power Required", r36: "10 H.P. × 1440 RPM", r46: "20 H.P. × 1440 RPM" },
    { label: "Capacity", r36: "130 Kg. Withered Leaf", r46: "240 Kg. Withered Leaf" },
    { label: "Floor Space Required", r36: "2000 × 2100 mm", r46: "2250 × 2350 mm" },
    { label: "Table", r36: "Single Piece High Quality Alloy Brass", r46: "-" },
    { label: "Hood", r36: "Brass Sheet 10 SWG with stiffeners", r46: "-" },
    { label: "Floating Cap", r36: "Single Piece High Quality Aluminium", r46: "-" },
    { label: "Bearings", r36: "Heavy Duty Taper Roller & Ball Bearings", r46: "-" },
    { label: "Pressure Cap", r36: "Automatic Lifting Gear & Height Indicator", r46: "-" },
    { label: "Standard", r36: "Standard components with one set of spares", r46: "-" },
];



const TeaRolling = () => {

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
                    Orthodox Tea Processing Machinery
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
                            Orthodox Tea Processing Machinery
                        </Typography>

                        <List sx={{ border: "1px solid #ddd" }}>
                            {leftMenu.map((item) => (
                                <ListItemButton
                                    key={item}
                                    component={Link}
                                    to={`/products/ctc/${`tea`}${item.toLowerCase().replace(/ /g, "-")}`}
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
                        {/* Technical Specifications */}


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
                                    Tea Roller
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }} >
                                        <Typography sx={{ fontFamily: "Open Sans", color: "#333", textAlign: "justify" }}>
                                            Vikram's Monorail/ Conveyors are available with open/closed tracks and also 3 wheel/ 4 wheel options. Constructed using heavy duty metals, the conveyors are durable and ensure convenient and fast handling of tea leaves.


                                        </Typography>
                                        <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                            <ChevronRightIcon sx={{ color: "red" }} />
                                            <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                                Single Action in two sizes - 36" & 46"
                                            </Typography>

                                        </Box>
                                        <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                            <ChevronRightIcon sx={{ color: "red" }} />
                                            <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                                Double Action in two sizes - 36" & 46"
                                            </Typography>

                                        </Box>




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

                                {/* YOUR EXISTING TABLE WITHOUT ANY CHANGE */}

                                <Box sx={{ marginTop: "40px" }}>
                                    <Typography sx={{ fontFamily: "Open Sans", color: "#333", textAlign: "justify" }}>
                                        These Tea Rollers are efficiently engineered - fitted with heavy-duty bearings and robust body to take any amount of pressure. The Direct Drive mechanism ensures minimum power loss. The most important advantage is that standard components are used across the entire range of rollers, thus requiring just one set of spares


                                    </Typography>
                                    <TableContainer
                                        component={Paper}
                                        sx={{
                                            mt: 3,
                                            border: "1px solid #e0e0e0",
                                            boxShadow: "none",
                                            fontFamily: "Open Sans",
                                        }}
                                    >
                                        <Table>
                                            {/* TABLE HEADER */}
                                            <TableHead>
                                                <TableRow sx={{ backgroundColor: "#f3f3f3" }}>
                                                    <TableCell sx={{ fontWeight: 700 }}>Specification</TableCell>
                                                    <TableCell sx={{ fontWeight: 700 }}>36" Roller</TableCell>
                                                    <TableCell sx={{ fontWeight: 700 }}>46" Roller</TableCell>
                                                </TableRow>
                                            </TableHead>

                                            {/* TABLE BODY */}
                                            <TableBody>
                                                {rollerSpecs.map((row, index) => (
                                                    <TableRow
                                                        key={index}
                                                        sx={{
                                                            backgroundColor: index % 2 === 0 ? "#f7f5ee" : "#fbfaf6",
                                                        }}
                                                    >
                                                        <TableCell sx={{ fontWeight: 600 }}>{row.label}</TableCell>
                                                        <TableCell>{row.r36}</TableCell>
                                                        <TableCell>{row.r46}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>


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
                                <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>
                                    Balanced Green Leaf Sifter
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }} >
                                        <Typography sx={{ fontFamily: "Open Sans", color: "#333", textAlign: "justify" }}>
                                            Green Leaf Sifters are used in the tea industry for - pre-conditioning withered leaves, quality control and for optimizing output. Vertical oscillating movement of the machine causes leaves to travel along the perforated tray in a series of hops, sifting undesirable elements and breaking the lumps in the leaves in the process. The machine is complete with drive arrangement, electric motor and starter, foundation bolts etc. Electrical safety system for the cover is optional.


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

                                {/* YOUR EXISTING TABLE WITHOUT ANY CHANGE */}
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Tea moves on the tray in a series of bops thereby sifting, cooling and breaking the balls in tea.

                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                       Feed bopper opening is adjustable.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Oscillating arms are fitted with silent block bushes. No lubrication required.

                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>
                                      Power consumption is only 0.33 Kw.
                                    </Typography>

                                </Box>

                            </AccordionDetails>
                        </Accordion>




                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default TeaRolling;
