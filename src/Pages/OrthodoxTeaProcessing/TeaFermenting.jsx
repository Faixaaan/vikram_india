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
import CFM from '../../../src/Assets/CFM.jpg'



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



const TeaFermenting = () => {

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
                    <Typography color="text.primary">FERMENTING</Typography>
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
                                        backgroundColor: item === "FERMENTING" ? "green" : "transparent",
                                        color: item === "FERMENTING" ? "#fff" : "#000",
                                        "&:hover": {
                                            backgroundColor: item === "FERMENTING" ? "green" : "#f5f5f5",
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
                            FERMENTING
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
                                    Single/ Double Stage Continuous Fermenting Machine (Belt / Tray)

                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                <Grid container spacing={3} alignItems="flex-start">
                                    <Typography sx={{ fontFamily: "Open Sans", color: "#333", textAlign: "justify", marginTop: "20px" }}>
                                        Vikram India has developed Continuous Fermenting Machines (CFM) to suit the needs of different clients under different conditions of operation globally. In the process, the Company has achieved significant benchmarks like development of the widest, 52 inch, CTC unit in 2000 and later a 56 inch one in 2008. These CFMs are available as - a single or multi stage unit, horizontal or inclined or a combination of both.


                                    </Typography>

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }} >

                                        <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                            <ChevronRightIcon sx={{ color: "red" }} />
                                            <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                                The fermenter Trays with standard supplied motor is designed to sustain a loading of upto 8 kgs of macerated leaf / sq.ft area.
                                            </Typography>

                                        </Box>
                                        <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                            <ChevronRightIcon sx={{ color: "red" }} />
                                            <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                                The machine is only 4'7" high from the ground level, easy to supervise, clean and maintain
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

                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Heavy Duty, wide, perforated Stainless Steel Trays allow the humidified air through the leaf for proper fermentation as well as cooling of tea bed.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        A sturdy variable speed mechanical drive system facilitates wide variation in fermenting time from 30 minutes to 140 minutes in steps of 2-3 mins. With optional electrical variable speed drive unit more infinite variations can be available.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        A suitable Feed Conveyor with variable speed arrangement in provided for uniform controlled feeding, which automatically enhances the performance of the machine. Discharge conveyor can be incorporated on customer's request at extra cost.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        An aerodynamically designed airduct facilitates uniform distribution of humidified air at 95% RH through the effective area of the machine to ensure uniform and even fermenting.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        A dynamically balanced centrifugal blower suitably designed to carry the humidified air from the mist chamber to the air duct through a ducting system is provided to achieve the desired temperature graph as well cooling of tea leaf. (Air Chamber to Blower mouth duct is optional).
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Suitable design features are incorporated to check bacterial contamination. Self-cleaning, easily removable brush cleans the Trays in the return circuit. The return circuit of Trays is exposed for easy inspection and maintenance.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Suitable for both CTC and orthodox manufacture.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Neat as well as sturdy. The tea bed is uniformly and evenly maintained throughout. All parts are easily accessible for inspection, cleaning and maintenance. No accumulating or spillage of tea. The machine is ideal for on line manufacturing process.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        This machine is virtually maintenance free. Individually trays can be replaced wherever necessary with minimum downtime
                                    </Typography>

                                </Box>
                                <Grid container spacing={3} alignItems="flex-start" sx={{ paddingTop: "50px" }}>



                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }} >
                                        <Typography sx={{ color: "red", fontSize: "16px" }}>
                                            Tray CFM Features
                                        </Typography>
                                        <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                            <ChevronRightIcon sx={{ color: "red" }} />
                                            <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                                The Fermenter Belt with standard supplied motor is designed to sustain a loading of upto 8 kgs of macerated leaf / sq.ft area.
                                            </Typography>

                                        </Box>
                                        <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                            <ChevronRightIcon sx={{ color: "red" }} />
                                            <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                                The machine is only 4'7" high from the ground level, easy to supervise, clean and maintain
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

                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        High tensile woven PES Belt of varying width & higher opening percentages (upto 46%) allows more humidified air through the leaf for proper fermentation as well as cooling of tea bed.
                                    </Typography>

                                </Box>

                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        A sturdy variable speed mechanical drive system facilitates wide variation in fermenting time from 30 minutes to 140 minutes in steps of 2-3 mins. With optional electrical variable speed drive unit more infinite variations can be available.
                                    </Typography>

                                </Box>

                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        A suitable Feed Conveyor with variable speed arrangement is provided for uniform controlled feeding, which automatically enhances the performance of the machine. Discharge conveyor can be incorporated on customer's request at extra cost.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        An aerodynamically designed airduct facilitates uniform distribution of humidified air at 95% RH through the effective area of the machine to ensure uniform and even fermenting.

                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        A dynamically balanced centrifugal blower suitably designed to carry the humidified air from the mist chamber to the air duct through a ducting system is provided to achieve to desire temperature graph as well cooling of tea leaf. (Air Chamber to Blower mouth duct is optional).

                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Suitable design features are incorporated to check bacterial contamination. Self-cleaning, easily removable brush cleans the PES Belt in the return circuit. The return circuit of PES Belt is exposed for easy inspection and maintenance.

                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Suitable for both CTC and orthodox manufacture.

                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Neat as well as sturdy. The tea bed is uniformly and evenly maintained throughout. All parts are easily accessible for inspection, cleaning and maintenance. No accumulating of spillage of tea. The machine is ideal for on line manufacturing process.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        This machine is virtually maintenance free. This reduces downtime to a great extent with increased production.
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
                                    CFM Auto Controller
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                {/* TOP SECTION : TEXT + IMAGE */}
                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }}>
                                        <Typography sx={{ fontFamily: "Open Sans", color: "#333", textAlign: "justify" }}>
                                            The new and automated CFM machine has been designed for Energy Savings in excess of 40% when compared with any traditional machine. The automated operations of the machine also ensure consistent quality and reduced manpower involvement, reducing the running cost of the machine to a considerable extent this brand new CFM is designed for uninterrupted operations round the year.


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



                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />  <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Fully Automated Operations through VFD with PLC.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Automatic, Exposure Control, Temperature Control and Moisture Control to ensure consistent quality.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Dedicated VFD auto control ensure the speed of mesh belt depend on ambient temperature.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Dedicated VFD for HOT Air Blower for the first module in Stage 1
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Dedicated VFD auto control ensure the speed of mesh belt depend on ambient temperature.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Automatic operations of the up-turners

                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        State of Art RH meter output for moisture feedback

                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Digital Temperature Display units for all the modules

                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Optional upgrade to PC based SCADA connected on an Ethernet network with Reporting facility

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
                                <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>
                                    Humidification System
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 4 }} textAlign="center">
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
                                        <Typography sx={{ fontWeight: "600", fontSize: "14px", marginTop: "8px" }}>
                                            Pre Fabricated Trough
                                        </Typography>
                                    </Grid>
                                    <Grid item size={{ xs: 12, md: 4 }} textAlign="center">
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
                                        <Typography sx={{ fontWeight: "600", fontSize: "14px", marginTop: "8px" }}>
                                            Withering Trough (Brick Tyre)
                                        </Typography>
                                    </Grid>


                                </Grid>



                            </AccordionDetails>
                        </Accordion>




                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default TeaFermenting;
