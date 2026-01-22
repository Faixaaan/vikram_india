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

const Sorting = () => {
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
                    <Typography color="text.primary">SORTING</Typography>
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
                                color: "red",
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
                                        backgroundColor: item === "SORTING" ? "green" : "transparent",
                                        color: item === "SORTING" ? "#fff" : "#000",
                                        "&:hover": {
                                            backgroundColor: item === "SORTING" ? "green" : "#f5f5f5",
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
                            SORTING
                        </Typography>
                        <Typography sx={{ fontSize: "15px", mb: 3, color: "red", fontFamily: "Open Sans" }}>
                            Setting global benchmarks in tea processing machinery industry
                        </Typography>


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
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 700, fontFamily: "Open Sans" }}
                                >
                                    Jigger Shifter
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                {/* TOP SECTION : TEXT + IMAGE */}
                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }}>
                                        <Typography sx={{ fontWeight: 600, fontFamily: "Open Sans", fontSize: "26px", mb: 3 }}>
                                            Auto Batch Weigher
                                        </Typography>
                                        <Typography sx={{ fontFamily: "Open Sans", color: "#333", textAlign: "justify" }}>
                                            The Auto Batch Weigher from Vikram is a microprocessor based, single load cell weighing system that ensures accurate and reliable weighing of tea from the dryer mouth. The unit is computer compatible and is fitted with a battery to withstand power fluctuations.

                                        </Typography>
                                    </Grid>

                                    {/* RIGHT IMAGE */}
                                    <Grid item size={{ xs: 12, md: 4 }} textAlign="right">
                                        <Box
                                            component="img"
                                            src={CFM}
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

                                <Typography sx={{ fontSize: "20px", fontFamily: "Opens Sans", color: "red", mb: 2 }}>
                                    Features :
                                </Typography>

                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />  <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>
                                        System accuracy is better than ± 0.025.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>
                                        Digital circuitry for error - free operation.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Easy and minimum maintenance.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Saves floor space and cost of labour.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Battery in SMPS to withstand power fluctuations.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Built in real time clock and battery back up to continue sequential operation during power failure.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Digital display of total weight and current weight.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Dust proof cabinet for the electronic controller for trouble free operation. Glass window for easy viewing of displays.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Facility for resetting totalized weight.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Unit is computer compatible.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Alarm hooter incorporated in enunciation mode in case of Power Failure.
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
                                    Pre-Sorters
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                {/* TOP SECTION : TEXT + IMAGE */}
                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }}>
                                        <Typography sx={{ fontWeight: 600, fontFamily: "Open Sans", fontSize: "26px", mb: 3 }}>
                                            Slow Speed Fibre Extractor
                                        </Typography>
                                        <Typography sx={{ fontFamily: "Open Sans", color: "#333", textAlign: "justify" }}>
                                            Slow speed fibre extractors cum tea sorters eliminate rubbing effects and ensure clean tea without any loss of bloom. Vikram has developed this machine after extensive trials at tea gardens. Total power requirement is between 1 Hp - 2 Hp. The machine is easy to install and occupies less floor space.

                                        </Typography>
                                    </Grid>

                                    {/* RIGHT IMAGE */}
                                    <Grid item size={{ xs: 12, md: 4 }} textAlign="right">
                                        <Box
                                            component="img"
                                            src={speed_fiber}
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
                                    Trinic Sorters
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                {/* TOP SECTION : TEXT + IMAGE */}
                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }}>
                                        <Typography sx={{ fontWeight: 600, fontFamily: "Open Sans", fontSize: "26px", mb: 3 }}>
                                            Trinic Sorters
                                        </Typography>
                                        <Typography sx={{ fontFamily: "Open Sans", color: "#333", textAlign: "justify" }}>
                                            Vikram's Vibro Screen Sorters are specially designed for efficient sorting of tea grades at a low operating cost. The machine ensures a continuous flow of production without any need for resorting. The decks are easily accessible for cleaning and inspection, ensuring perfect quality tea at the end of the production chain.

                                        </Typography>
                                    </Grid>

                                    {/* RIGHT IMAGE */}
                                    <Grid item size={{ xs: 12, md: 4 }} textAlign="right">
                                        <Box
                                            component="img"
                                            src={vibro_screen}
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

                                <Typography sx={{ fontSize: "20px", fontFamily: "Opens Sans", color: "red", mb: 2 }}>
                                    Salient Features :
                                </Typography>

                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />  <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>
                                        Low Operating Cost.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>
                                        No Transmitted Vibration.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        High Capacity, Minimum space.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Minimum Screen Blinding.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Grades sorted efficiently into perfect sizes.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Re-sorting not necessary, Ensures continuous flow of production.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Easily accessible openings for cleaning and inspection for all the decks.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        No bloom loss of grains.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Nearly maintenance free.
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

const headingStyle = {
    fontSize: "20px",
    fontWeight: 600,
    mt: 4,
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


export default Sorting;
