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

const specifications = [
    { label: "Type", value: "4 Wheel bi-planner chains (Opened/Closed)" },
    { label: "Unit Load Capacity", value: "30–60 Kgs. (Maximum) Each Hook" },
    { label: "Working Tension", value: "700 Kgs" },
    { label: "Breaking Strength", value: "6000 Kgs." },
    {
        label: "Tracks",
        value:
            "Standard Track made of 4 / 3.15 mm thick covered section of Material MS (IS-2062).",
    },
    {
        label: "Wheels",
        value:
            "Material Alloy steel with C3 Clearance. Lubricated & Sealed for Life.",
    },
    {
        label: "Chain Link Plate",
        value:
            "32 x 4 mm Thick made of Carbon Steel duly heat treated.",
    },
    { label: "Pitch", value: '12" / 15"' },
    {
        label: "Axles",
        value: "Made of Carbon Steel duly Heat Treated.",
    },
    {
        label: "Drive Chain",
        value: "1.5\" Pitch American Standard Dog Chain.",
    },
    {
        label: "Drive Sprocket",
        value:
            "1.5\" Pitch suitable no. of teeth, 2 Nos. simplex sprocket.",
    },
];


const GreenSteaming = () => {

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
                    <Typography color="text.primary" sx={{  fontSize: "15px" }}>Green Tea Processing Machinery</Typography>
                    <Typography color="text.primary" sx={{  fontSize: "15px" }}>Steaming</Typography>
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
                                        backgroundColor: item === "STEAMING" ? "green" : "transparent",
                                        color: item === "STEAMING" ? "#fff" : "#000",
                                        "&:hover": {
                                            backgroundColor: item === "STEAMING" ? "green" : "#f5f5f5",
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
                            STEAMING
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
                                    Baby Boiler
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Typography sx={{ fontFamily: "Roboto", color: "#333", textAlign: "justify", margin: "20px 0px" }}>
                                    Baby boilers help in maintaining a hygienic environment within the tea processing units, especially in the manufacturing of Green Tea. These machines help to clean and eradicate bacteria from tea processing areas and machineries.


                                </Typography>
                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }} >
                                        <Box
                                            sx={{
                                                border: "1px solid #e0e0e0",
                                                mt: 3,
                                                fontFamily: "Roboto",
                                            }}
                                        >
                                            {/* Header */}
                                            <Grid
                                                container
                                                sx={{
                                                    backgroundColor: "#f3f1e9",
                                                    borderBottom: "1px solid #e0e0e0",
                                                    fontWeight: 600,
                                                    textAlign: "center",
                                                }}
                                            >
                                                <Grid item size={{ xs: 12, md: 6 }} sx={{ p: 2, borderRight: { md: "1px solid #e0e0e0" } }}>
                                                    FRONT VIEW
                                                </Grid>
                                                <Grid item size={{ xs: 12, md: 6 }} sx={{ p: 2 }}>
                                                    REAR VIEW
                                                </Grid>
                                            </Grid>

                                            {/* Row 1 */}
                                            <Grid container sx={{ borderBottom: "1px solid #e0e0e0" }}>
                                                <Grid item size={{ xs: 12, md: 6 }} sx={{ p: 2, borderRight: { md: "1px solid #e0e0e0" } }}>
                                                    1–3 TEST COCKS
                                                </Grid>
                                                <Grid item size={{ xs: 12, md: 6 }} sx={{ p: 2 }}>
                                                    9 FOOT VALVE
                                                </Grid>
                                            </Grid>

                                            {/* Row 2 */}
                                            <Grid container sx={{ borderBottom: "1px solid #e0e0e0", backgroundColor: "#fbfaf6" }}>
                                                <Grid item size={{ xs: 12, md: 6 }} sx={{ p: 2, borderRight: { md: "1px solid #e0e0e0" } }}>
                                                    4–5 PRESSURE GAUGE
                                                </Grid>
                                                <Grid item size={{ xs: 12, md: 6 }} sx={{ p: 2 }}>
                                                    11,12,15 WHEEL VALVE
                                                </Grid>
                                            </Grid>

                                            {/* Row 3 */}
                                            <Grid container sx={{ borderBottom: "1px solid #e0e0e0" }}>
                                                <Grid item size={{ xs: 12, md: 6 }} sx={{ p: 2, borderRight: { md: "1px solid #e0e0e0" } }}>
                                                    6–7 SAFETY VALVE
                                                </Grid>
                                                <Grid item size={{ xs: 12, md: 6 }} sx={{ p: 2 }}>
                                                    10,19,20 NON-RETURN VALVE
                                                </Grid>
                                            </Grid>

                                            {/* Row 4 */}
                                            <Grid container>
                                                <Grid item size={{ xs: 12, md: 6 }} sx={{ p: 2, borderRight: { md: "1px solid #e0e0e0" } }}>
                                                    8 WATER GAUGE GLASS
                                                </Grid>
                                                <Grid item size={{ xs: 12, md: 6 }} sx={{ p: 2 }}>
                                                    16–18 OUTLET DRAIN
                                                </Grid>
                                            </Grid>
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
                                <TableContainer component={Paper} sx={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)", marginTop: "20px" }}>
                                    <Table sx={{ minWidth: 650 }}>
                                        <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                                            <TableRow>
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Roboto" }}>MODEL</TableCell>
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Roboto" }}>Impeller Diameter</TableCell>
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Roboto" }}>Motor</TableCell>
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Roboto" }}>Air Flow Rate</TableCell>
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Roboto" }}>Air Velocity</TableCell>
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Roboto" }}>Static Pressure</TableCell>
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Roboto" }}>Total Pressure</TableCell>
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Roboto" }}>Shaft BHP</TableCell>
                                            </TableRow>
                                        </TableHead>

                                        <TableBody>
                                            <TableRow>
                                                <TableCell>VAF - 403</TableCell>
                                                <TableCell>106 cm</TableCell>
                                                <TableCell>3 HP</TableCell>
                                                <TableCell>19000 cfm</TableCell>
                                                <TableCell>11.1 m/sec</TableCell>
                                                <TableCell>0.75 inch</TableCell>
                                                <TableCell>19.9</TableCell>
                                                <TableCell>2.6 hp</TableCell>
                                            </TableRow>

                                            <TableRow>
                                                <TableCell>VAF - 483</TableCell>
                                                <TableCell>119 cm</TableCell>
                                                <TableCell>3 HP</TableCell>
                                                <TableCell>23500 cfm</TableCell>
                                                <TableCell>9.5 m/sec</TableCell>
                                                <TableCell>0.71 inch</TableCell>
                                                <TableCell>18.0</TableCell>
                                                <TableCell>2.9 hp</TableCell>
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
                                <Typography variant="h6" sx={{ fontWeight: 700, fontFamily: "Roboto" }}>
                                    Green Tea Roaster
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }} >
                                        <Typography sx={{ fontFamily: "Roboto", color: "#333", textAlign: "justify" }}>
                                            The green tea roaster from Vikram India is designed in a way that steam enters through both ends of the perforated shaft. The roaster rotates at a speed of 24 rpm. Steaming continues for 6 to 7 minutes and within this time the leaves are boiled. Roasting time depends on the tenderness of the leaves.


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
                                    <Typography sx={{ color: "red", fontSize: "18px" }}>
                                        Salient Features
                                    </Typography>
                                    <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                        <ChevronRightIcon sx={{ color: "red" }} />
                                        <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                            Any person can operate
                                        </Typography>

                                    </Box>
                                    <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                        <ChevronRightIcon sx={{ color: "red" }} />
                                        <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                            No running cost.
                                        </Typography>

                                    </Box>
                                    <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                        <ChevronRightIcon sx={{ color: "red" }} />
                                        <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                            Low initial investment.
                                        </Typography>

                                    </Box>
                                    <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                        <ChevronRightIcon sx={{ color: "red" }} />
                                        <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                            Requires small floor space
                                        </Typography>

                                    </Box>
                                </Box>
                                <Box>
                                    <Typography sx={{ color: "red", fontSize: "18px", marginTop: "30px" }}>
                                        Design

                                    </Typography>
                                    <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                        <ChevronRightIcon sx={{ color: "red" }} />
                                        <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                            It is designed in such a way that steam enters through the both ends of the perforated shaft in which Roaster is fixed. Roaster rotates at a speed of 24 R.P.M. Shaft ends are coupled with rotating Union. Rotating Union is such a Unit that its one end rotates with the staff and other part is fixed with the steam delivery line.
                                        </Typography>

                                    </Box>
                                    <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                        <ChevronRightIcon sx={{ color: "red" }} />
                                        <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                            This unit is a speed reducing unit. 5 H.P. 440 V. 3 Ph. 1440 R.P.M motor is used in, the unit with different size pulleys with different size belts so as to reduce the speed from 1440 R.P.M. To 24 R.P.M. i.e. 60 : 1 ratio.
                                        </Typography>

                                    </Box>
                                    <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                        <ChevronRightIcon sx={{ color: "red" }} />
                                        <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                            In the Roaster 200 kg green leaf can be charged at a time USE
                                            It is an essential item used in Tea gardens for manufacturing green Tea.
                                        </Typography>

                                    </Box>
                                    <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                        <ChevronRightIcon sx={{ color: "red" }} />
                                        <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                            After filling the Roaster with green leaves of 200 kg. Directly plucked from garden, doors of the Roaster are closed and switched for rotating, consequently steam lines are opened. Steaming continues for 6 to 7 minutes and within this time the leaves are boiled. If the leaves are not tender i.e. plucking after seven days then time of Roasting will go up by one minute to one and a half minute.
                                        </Typography>

                                    </Box>
                                    <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                        <ChevronRightIcon sx={{ color: "red" }} />
                                        <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                            In old days the Tea gardens boiled the green leaves by hot water. Some gardens also follow this procedure till date but in this process quality and percentage of made tea is not up to the mark comparing with the new process. Barring inferior quality only 18% to 19% made tea is achieved in this process, but by using Roaster with steam high quality tea with 25% made tea is achieved, i.e. A gain of 6% to 7% in weight with superior quality.
                                        </Typography>

                                    </Box>
                                </Box>



                            </AccordionDetails>
                        </Accordion>

                        <Typography sx={headingStyle}>
                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                            Steam Fittings &  :- 
                            These are offered as per customer's requirements.


                        </Typography>




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

export default GreenSteaming;
