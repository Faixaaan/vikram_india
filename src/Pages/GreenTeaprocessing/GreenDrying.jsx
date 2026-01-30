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





const GreenDrying = () => {

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
                <Breadcrumbs sx={{ mb: 2, fontSize: "15px" }}>
                    <MLink component={Link} to="/" underline="hover" color="inherit">
                        Home
                    </MLink>
                    <Typography color="inherit" sx={{  fontSize: "15px" }}>Product & Services</Typography>
                    <Typography color="text.primary" sx={{ fontSize: "15px" }}>Green Tea Processing Machinery</Typography>
                    <Typography color="text.primary" sx={{  fontSize: "15px" }}>Drying</Typography>
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
                                    to={`/products/ctc/${`green`}${item.toLowerCase().replace(/ /g, "-")}`}
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
                                    Endless Chain Pressure Dryer (ECP Dryer)



                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }} >
                                        <Typography sx={{ fontFamily: "Roboto", color: "#333", textAlign: "justify" }}>
                                            Arnot sorter from Vikram India has a sorting capacity of up to 1500 Kgs. The machine with its galloping motion ensures smooth sorting without greying the tea grains. The trays are made of teak wood and are fitted with wire mesh.


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
                                            <Grid item size={{ xs:6, md: 4 }} sx={{ p: 2, textAlign: "center", borderRight: { sm: "1px solid #e0e0e0" } }}>
                                                4 FT
                                            </Grid>
                                            <Grid item size={{ xs:6, md: 4 }} sx={{ p: 2, textAlign: "center" }}>
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
                                                        <Grid item size={{ xs:12, md: 4 }}sx={{ p: 2, borderRight: { sm: "1px solid #e0e0e0" } }}>
                                                            {row.label}
                                                        </Grid>
                                                        <Grid item size={{ xs:6, md: 4 }} sx={{ p: 2, textAlign: "center", borderRight: { sm: "1px solid #e0e0e0" } }}>
                                                            {row.ft4}
                                                        </Grid>
                                                        <Grid item size={{ xs:6, md: 4 }}sx={{ p: 2, textAlign: "center" }}>
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
                                    Heating Arrangement


                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }} >
                                        <Typography sx={{ fontFamily: "Roboto", color: "#333", textAlign: "justify" }}>
                                            Vikram's Stalk Extractor performs dual function - it makes the tea stalk-free and also grades the tea during the extraction process, without breaking or greying the grains. Two aluminium perforated trays mounted on sturdy frames help fine tea particles to pass through while the larger particles with stalk are sifted out. This machine also acts as an efficient tea grading machine.


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
                                            Applications
                                        </Typography>
                                        <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>

                                            <ChevronRightIcon sx={{ color: "red" }} />
                                            <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                                VIKRAM's Stalk Extractor performs the dual function of making the tea more free from stalk and grades the tea during the stalk extracting operation. A further claim is also made for VIKRAM's stalk extractor that it does not break or grey the tea.
                                            </Typography>

                                        </Box>
                                    </Box>
                                    <Box sx={{ marginTop: "10px" }}>
                                        <Typography sx={{ color: "black", fontSize: "18px" }}>
                                            Construction
                                        </Typography>
                                        <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>

                                            <ChevronRightIcon sx={{ color: "red" }} />
                                            <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                                VIKRAM's Stalk Extractor is made of two aluminium dimpled perforated trays, mounted on frames, one above the other. Each frame is provided with a false bottom, which collects and delivers the tea through ducts at the side of the machine. An oscillating motion is imparted to the trays with the help of a crank shaft, fitted on a sturdy cast iron pedestal, suitable for motor or shaft drive. Crank shaft moves at 200 RPM.

                                            </Typography>

                                        </Box>
                                    </Box>
                                    <Box sx={{ marginTop: "10px" }}>
                                        <Typography sx={{ color: "black", fontSize: "18px" }}>
                                            Trays
                                        </Typography>
                                        <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>

                                            <ChevronRightIcon sx={{ color: "red" }} />
                                            <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                                The standard perforation in the aluminium dimpled trays is 3/16" and 17/64". Trays with specific size perforations can also be supplied. The inclination of the trays can be very simply adjusted to suit individual requirements.

                                            </Typography>

                                        </Box>
                                    </Box>
                                    <Box sx={{ marginTop: "10px" }}>
                                        <Typography sx={{ color: "black", fontSize: "18px" }}>
                                            Power
                                        </Typography>
                                        <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>

                                            <ChevronRightIcon sx={{ color: "red" }} />
                                            <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                                One 2 HP, 960 RPM Motor is required to drive the machine.

                                            </Typography>

                                        </Box>
                                    </Box>
                                    <Box sx={{ marginTop: "10px" }}>
                                        <Typography sx={{ color: "black", fontSize: "18px" }}>
                                            Size
                                        </Typography>
                                        <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>

                                            <ChevronRightIcon sx={{ color: "red" }} />
                                            <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>
                                                The overall measurement of the machine are 3971 mm (158") length X 965 mm (39") width X 1284 mm (51") height.


                                            </Typography>

                                        </Box>
                                    </Box>
                                    <Box sx={{ marginTop: "10px" }}>
                                        <Typography sx={{ color: "black", fontSize: "18px" }}>
                                            The Dual Operation
                                        </Typography>
                                        <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>

                                            <ChevronRightIcon sx={{ color: "red" }} />
                                            <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>
                                                Tea is fed to the top tray through an adjustable feed hopper. Fine tea falls through the perforations and larger particles of the tea with stalk are discharged at the bottom tray. The remainder of the tea falls through the perforations of the bottom tray and stalk is delivered at the discharge end


                                            </Typography>

                                        </Box>
                                    </Box>



                                </Box>
                                <Box>
                                    <Typography sx={{ color: "red", fontSize: "18px", marginTop: "30px" }}>
                                        Advantages

                                    </Typography>
                                    <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                        <ChevronRightIcon sx={{ color: "red" }} />
                                        <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                            It effects a great saving in labour.
                                        </Typography>

                                    </Box>
                                    <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                        <ChevronRightIcon sx={{ color: "red" }} />
                                        <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                            It does not break or grey the tea.
                                        </Typography>

                                    </Box>
                                    <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                        <ChevronRightIcon sx={{ color: "red" }} />
                                        <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                            It does not require any intricate or delicate adjustment.
                                        </Typography>

                                    </Box>
                                    <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                        <ChevronRightIcon sx={{ color: "red" }} />
                                        <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>
                                            It acts as a most efficient tea grading machine too.
                                        </Typography>

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
    fontSize: "16px",
    fontWeight: 400,
    mt: 2,
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

export default GreenDrying;
