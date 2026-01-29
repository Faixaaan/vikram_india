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
    colors,
} from "@mui/material";

import { Link } from "react-router-dom";

import '../../App.css'
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { axiosInstance } from "../../../src/Api/Axios/axios";
import { endpoints } from "../../../src/Api/EndPoints/endpoints";

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CFM from '../../../src/Assets/CFM.jpg'
import DryingImag from "../../../src/Assets/Drying_img.jpg"; // update your image
import controllerImage from "../../../src/Assets/auto_controller.jpg";
import heatingImage from '../../../src/Assets/heating-Arrangment.jpg'




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



const TeaDrying = () => {

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
                    <Typography color="text.primary">DRYING</Typography>
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
                                    to={`/products/ctc/${`tea`}${item.toLowerCase().replace(/ /g, "-")}`}
                                    sx={{
                                        borderBottom: "1px solid #eee",
                                        backgroundColor: item === "DRYING" ? "green" : "transparent",
                                        color: item === "DRYING" ? "#fff" : "#000",
                                        "&:hover": {
                                            backgroundColor: item === "DRYING" ? "green" : "#f5f5f5",
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
                                mb: 2,
                                fontFamily: "Roboto",
                                color:"red"
                            }}
                        >
                            DRYING
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
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 700, fontFamily: "Roboto" }}
                                >
                                    Vibratory Fluid Bed Dryers (VFDB)
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                {/* TOP SECTION : TEXT + IMAGE */}
                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }}>
                                        <Typography sx={{ fontFamily: "Roboto", color: "#333", textAlign: "justify" }}>
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
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Roboto" }}>MODULE</TableCell>
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Roboto" }}>200W</TableCell>
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Roboto" }}>300W</TableCell>
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Roboto" }}>400W</TableCell>
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Roboto" }}>600W</TableCell>

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
                                    sx={{ fontWeight: 700, fontFamily: "Roboto" }}
                                >
                                    VFD Auto Controller
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                {/* TOP SECTION : TEXT + IMAGE */}
                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }}>
                                        <Typography sx={{ fontFamily: "Roboto", color: "#333", textAlign: "justify" }}>
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
                                <Typography sx={{ color: "red" }}>
                                    Redesign Criteria
                                </Typography>



                                <Box sx={{ marginTop: "30px" }}>
                                    <Typography sx={{ fontSize: "18px" }}>
                                        The Key drivers for the redesign of the dryer are as given below:
                                    </Typography>

                                    <ul>

                                        <li style={{ marginBottom: "8px" }}>
                                            Derive Energy Savings both on Electricity as well as Fuel Front
                                        </li>
                                        <li style={{ marginBottom: "8px" }}>
                                            Delivering better and consistent quality output
                                        </li>
                                        <li style={{ marginBottom: "8px" }}>
                                            Reduce dependencies on operators and human experience

                                        </li>
                                        <li style={{ marginBottom: "8px" }}>
                                            Provide better visibility of the operational parameters and machine health to the operators and management
                                        </li>
                                        <li style={{ marginBottom: "8px" }}>
                                            Develop Line integration capability

                                        </li>
                                    </ul>
                                </Box>

                                <Box sx={{ marginTop: "30px" }}>
                                    <Typography sx={{ fontSize: "18px" }}>
                                        In order to achieve the above the following key analysis was conducted to analyse the key parameters and their dependencies which affect the operational efficiency of the machine.
                                    </Typography>

                                    <ul>

                                        <li style={{ marginBottom: "8px" }}>
                                            Energy Savings.
                                        </li>
                                        <li style={{ marginBottom: "8px" }}>
                                            Fuel Saving.
                                        </li>
                                        <li style={{ marginBottom: "8px" }}>
                                            Enhanced Motor Life.


                                        </li>
                                        <li style={{ marginBottom: "8px" }}>
                                            Automatic Temperature Control.
                                        </li>
                                        <li style={{ marginBottom: "8px" }}>
                                            Clog Free Charging of Tea Leafs.

                                        </li>
                                        <li style={{ marginBottom: "8px" }}>
                                            Consistent Quality.

                                        </li>
                                    </ul>
                                </Box>
                                <Typography sx={{ color: "red", fontWeight: "600", marginTop: "30px" }}>
                                    The additional cost of automisation can be recovered by the user within Six months.
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
                            }} expandIcon={<ExpandMoreIcon sx={{ color: "red" }} />}>
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 700, fontFamily: "Roboto" }}
                                >
                                    Tray Type Conventional Dryer /ECP Dryer
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                {/* TOP SECTION : TEXT + IMAGE */}
                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }}>
                                        <Typography sx={{ fontFamily: "Roboto", color: "#333", textAlign: "justify" }}>
                                            The three-circuit ECP Dryer from Vikram has established a strong foothold in the tea industry due to its high moisture evaporation capacity, trouble-free operation and low maintenance cost. Backed by prompt and efficient after-sales service, the machine offers complete peace of mind.


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
                                    sx={{ fontWeight: 700, fontFamily: "Roboto" }}
                                >
                                    Heating Arrangements
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                {/* TOP SECTION : TEXT + IMAGE */}
                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }}>
                                        <Typography sx={{ fontFamily: "Roboto", color: "#333", textAlign: "justify" }}>
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
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Roboto" }}>MODULE</TableCell>
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Roboto" }}>200W</TableCell>
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Roboto" }}>300W</TableCell>
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Roboto" }}>400W</TableCell>
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Roboto" }}>600W</TableCell>

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

export default TeaDrying;
