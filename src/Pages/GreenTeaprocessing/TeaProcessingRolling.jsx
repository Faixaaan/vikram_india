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
    "STEAMING",
    "ROLLING",

    "DRYING",
    "SORTING",
    "PACKING",

];



const specs = [
    {
        section: "Dimensions",
        rows: [
            { label: "Length (including feed)", ft4: '25" - 31/2" (7709 mm)', ft6: '27"-11/2" (8268 mm)' },
            { label: "Width", ft4: '4\'-8" (1422 mm)', ft6: '7\'-73/4" (2330 mm)' },
        ],
    },
    {
        section: "Power Consumption",
        rows: [
            { label: "Hot Air Blower", ft4: "10 HP", ft6: "15 HP" },
            { label: "Main Drive", ft4: "2 HP", ft6: "3 HP" },
            { label: "Spreader Drive", ft4: "1 HP", ft6: "1 HP" },
        ],
    },
    {
        section: "Operating Conditions",
        rows: [
            { label: "Inlet Air Temperature", ft4: "200°–220°F", ft6: "200°–220°F" },
            { label: "Exhaust Air Temperature", ft4: "125°–135°F", ft6: "125°–135°F" },
        ],
    },
];




const GreenRolling = () => {

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
                    <Typography color="text.primary">Green Tea Processing Machinery</Typography>
                    <Typography color="text.primary">ROLLING</Typography>
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
                                fontFamily: "Roboto",
                                color:"red"
                            }}
                        >
                            Product & Services
                        </Typography>

                        

                        <List sx={{ border: "1px solid #ddd" }}>
                            {leftMenu.map((item) => (
                                <ListItemButton
                                    key={item}
                                    component={Link}
                                    to={`/products/ctc/${`green`}${item.toLowerCase().replace(/ /g, "-")}`}
                                    sx={{
                                        borderBottom: "1px solid #eee",
                                        backgroundColor: item === "ROLLING" ? "green" : "transparent",
                                        color: item === "ROLLING" ? "#fff" : "#000",
                                        "&:hover": {
                                            backgroundColor: item === "ROLLING" ? "green" : "#f5f5f5",
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
                                fontFamily: "Roboto"
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



                        <Typography sx={headingStyle}>
                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                            Static Bed fitted with Weld Mesh, Netlone & Axial Flow Fan
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
                                <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: "Roboto" }}>
                                    Rolling Table




                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }} >
                                        <Typography sx={{ fontFamily: "Roboto", color: "#333", textAlign: "justify" }}>
                                            These Tea Rollers are efficiently engineered - fitted with heavy-duty bearings and robust body to take any amount of pressure. The Direct Drive mechanism ensures minimum power loss. The most important advantage is that standard components are used across the entire range of rollers, thus requiring just one set of spares.


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

                                <Box>

                                    <Box sx={{ mt: 4, border: "1px solid #e0e0e0", fontFamily: "Roboto" }}>

                                        {/* Header */}
                                        <Grid container sx={{ backgroundColor: "#f3f1e8", fontWeight: 700 }}>
                                            <Grid item size={{ xs: 12, md: 4 }} sx={{ p: 2, borderRight: { sm: "1px solid #e0e0e0" } }}>
                                                Model
                                            </Grid>
                                            <Grid item size={{ xs: 6, md: 4 }} sx={{ p: 2, textAlign: "center", borderRight: { sm: "1px solid #e0e0e0" } }}>
                                                4 FT
                                            </Grid>
                                            <Grid item size={{ xs: 6, md: 4 }} sx={{ p: 2, textAlign: "center" }}>
                                                6 FT
                                            </Grid>
                                        </Grid>

                                        {/* Sections */}
                                        {specs.map((section, i) => (
                                            <Box key={i}>
                                                {/* Section Title */}
                                                <Box sx={{ backgroundColor: "#f7f5ee", p: 2, fontWeight: 600 }}>
                                                    {section.section}
                                                </Box>

                                                {section.rows.map((row, idx) => (
                                                    <Grid
                                                        container
                                                        key={idx}
                                                        sx={{
                                                            borderTop: "1px solid #e0e0e0",
                                                            backgroundColor: idx % 2 === 0 ? "#fbfaf6" : "#f7f5ee",
                                                        }}
                                                    >
                                                        <Grid item size={{ xs: 12, md: 4 }} sx={{ p: 2, borderRight: { sm: "1px solid #e0e0e0" } }}>
                                                            {row.label}
                                                        </Grid>
                                                        <Grid item size={{ xs: 6, md: 4 }} sx={{ p: 2, textAlign: "center", borderRight: { sm: "1px solid #e0e0e0" } }}>
                                                            {row.ft4}
                                                        </Grid>
                                                        <Grid item size={{ xs: 6, md: 4 }} sx={{ p: 2, textAlign: "center" }}>
                                                            {row.ft6}
                                                        </Grid>
                                                    </Grid>
                                                ))}
                                            </Box>
                                        ))}
                                    </Box>





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
                                <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: "Roboto" }}>
                                    Balanced Green Leaf Sifter



                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }} >
                                        <Typography sx={{ fontFamily: "Roboto", color: "#333", textAlign: "justify" }}>
                                            Green leaf sifters are used in the tea industry for pre-conditioning of withered leaves, for quality control and for optimizing output. The machine's vertical oscillating movement causes leaves to travel along the tray in a series of hops, sifting undesirable elements and breaking lumps in the process. The balance is achieved with the help of counter weights.


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

                                <Box>

                                    <Box sx={{ marginTop: "10px" }}>
                                        <Typography sx={{ color: "black", fontSize: "18px" }}>
                                            Salient Features
                                        </Typography>
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

                                    </Box>




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

export default GreenRolling;
