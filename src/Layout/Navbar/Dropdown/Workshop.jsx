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
import CFM from '../../../Assets/Range.jpg'
import Range2 from '../../../Assets/range2.jpg'
import Range3 from '../../../Assets/range3.jpg'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import speed_fiber from '../../../Assets/slow-speed.jpg'
import vibro_screen from '../../../Assets/vibro-screen.jpg'
import Blizzard from '../../../Assets/Blizzard.jpg'
import Milling from '../../../Assets/Auto_miling.jpg'
import sharp_edge from '../../../Assets/sharp-edge.png'


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

const Workshop = () => {
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
                <Breadcrumbs sx={{ mb: 2, fontSize: "15px" }}>
                    <MLink component={Link} to="/" underline="hover" color="inherit">
                        Home
                    </MLink>
                    <Typography color="inherit" sx={{  fontSize: "15px" }}>Product & Services</Typography>
                    <Typography color="text.primary" sx={{  fontSize: "15px" }}>CTC Tea Processing Machinery</Typography>
                    <Typography color="text.primary" sx={{  fontSize: "15px" }}>Workshop Equipment</Typography>
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
                                    to={`/products/ctc/${item.toLowerCase().replace(/ /g, "-")}`}
                                    sx={{
                                        borderBottom: "1px solid #eee",
                                        backgroundColor: item === "WORKSHOP EQUIPMENT" ? "green" : "transparent",
                                        color: item === "WORKSHOP EQUIPMENT" ? "#fff" : "#000",
                                        "&:hover": {
                                            backgroundColor: item === "WORKSHOP EQUIPMENT" ? "green" : "#f5f5f5",
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
                            WORKSHOP EQUIPMENT
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
                                    sx={{ fontWeight: 700, fontFamily: "Roboto" }}
                                >
                                    Auto Batch Weigher
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                {/* TOP SECTION : TEXT + IMAGE */}
                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }}>




                                        <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                            <ChevronRightIcon sx={{ color: "red" }} />  <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>
                                                Milling Machine (Manual)
                                            </Typography>

                                        </Box>
                                        <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                            <ChevronRightIcon sx={{ color: "red" }} />
                                            <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>
                                                Chasing Machine (Manual)
                                            </Typography>

                                        </Box>
                                        <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                            <ChevronRightIcon sx={{ color: "red" }} />
                                            <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                                Milling cum Chasing Machine (Manual)
                                            </Typography>

                                        </Box>
                                        <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                            <ChevronRightIcon sx={{ color: "red" }} />
                                            <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                                Tool and Cutter Grinder / Roller Inspection Bench
                                            </Typography>

                                        </Box>
                                        <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                            <ChevronRightIcon sx={{ color: "red" }} />
                                            <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                                Mobile Crane for CTC Rollers
                                            </Typography>

                                        </Box>
                                        <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                            <ChevronRightIcon sx={{ color: "red" }} />
                                            <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                                M & G Depth checking instrument
                                            </Typography>

                                        </Box>
                                        <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                            <ChevronRightIcon sx={{ color: "red" }} />
                                            <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>
                                                Single Angle Milling Cutters and Chasers
                                            </Typography>

                                        </Box>
                                        <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                            <ChevronRightIcon sx={{ color: "red" }} />
                                            <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                                Electronic Digital Read-Out
                                            </Typography>

                                        </Box>
                                        <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                            <ChevronRightIcon sx={{ color: "red" }} />
                                            <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                                Lathe Cum Chasing Machine
                                            </Typography>

                                        </Box>



                                    </Grid>

                                    {/* RIGHT IMAGE */}
                                    <Grid item size={{ xs: 12, md: 4 }} textAlign="center">
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
                                        <Typography sx={{ textAlign: "center", mt: 1, color: "red", fontFamily: "Roboto", fontSize: "16px" }}>
                                            Miling Machine
                                        </Typography>
                                        <Box
                                            component="img"
                                            src={Range2}
                                            alt="VFBD Machine"
                                            sx={{
                                                width: "100%",
                                                maxWidth: "260px",
                                                borderRadius: "8px",
                                                mt: 8
                                            }}
                                        />
                                        <Typography sx={{ textAlign: "center", mt: 1, color: "red", fontFamily: "Roboto", fontSize: "16px" }}>
                                            Tool and Cutter Grinder <br />
                                            Roller Inspection Bench
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={3} alignItems="flex-start">



                                    {/* RIGHT IMAGE */}
                                    <Grid item size={{ xs: 12, md: 4 }} textAlign="center" sx={{ mt: 6 }}>
                                        <Box
                                            component="img"
                                            src={Range3}
                                            alt="VFBD Machine"
                                            sx={{
                                                width: "100%",
                                                maxWidth: "260px",
                                                borderRadius: "8px",
                                            }}
                                        />
                                        <Typography sx={{ textAlign: "center", mt: 1, color: "red", fontFamily: "Roboto", fontSize: "16px" }}>
                                            Lathe Cum Chasing Machine
                                        </Typography>

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
                                    Blizzard - CNC Based Automatic Milling cum Chasing Machine
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                {/* TOP SECTION : TEXT + IMAGE */}
                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }}>
                                        <Typography sx={{ fontFamily: "Roboto", color: "#333", textAlign: "justify" }}>
                                            Blizzard - the latest addition to Vikram's wide range of Roller Sharpening machinery, executes all the operations of CTC roller sharpening in one setting with a high level of accuracy. Constructed using best quality stainless steel and ceramic inserts, Blizzard delivers durability with high performance, thereby increasing productivity.




                                        </Typography>
                                    </Grid>

                                    {/* RIGHT IMAGE */}
                                    <Grid item size={{ xs: 12, md: 4 }} textAlign="right">
                                        <Box
                                            component="img"
                                            src={Blizzard}
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
                                    CNC Milling cum Grooving With Manual operation
                                </Typography>


                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />  <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Sharpening of circumferential as well as helical grooves of any specification, length and diameter of roller with quality finish and accuracy by the application of CNC controller.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Dual mode application facility i.e. provision of both automatic and manual operation system for roller sharpening.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Machine can also be used for CNC lathe works with high accuracy.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        To ensure quality and accuracy of sharpening by the application of CNC controller.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        To prevent multi-equipment application and ensure one setting finish for all the operations.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        High speed operations to reduce cutting time and increase productivity.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        To reduce high skilled man power requirement
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        To reduce setting time in comparison to multi machine operation.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Final adjustment of depth of cut to ensure minimum metal cutting and longer life of segment.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Extremely silent running by modern electronically regulated drive technology.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        High precision technology at every stage to ensure perfect vibration free and nose free performance.
                                    </Typography>

                                </Box>
                                <Typography sx={{ fontSize: "20px", fontFamily: "Opens Sans", color: "red", mb: 2, mt: 2 }}>
                                    Special feature:

                                </Typography>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Dual mode application facility i.e. provision of both automatic and manual operation system for roller sharpening.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>
                                        It can be operated with Remote Control System from anywhere and any distance by network system.
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
                                    sx={{ fontWeight: 700, fontFamily: "Roboto" }}
                                >
                                    Helix Auto Milling Cum Manual Grooving
                                </Typography>

                            </AccordionSummary>

                            <AccordionDetails>

                                <Typography
                                    variant=""
                                    sx={{ fontWeight: 400, fontFamily: "Roboto", }}
                                >
                                    To make good rollers we need good machine with better control on engineering application. To implement good engineering practice we need a higher accuracy level which can be achieved by modern technical practice like Helix Automatic Milling Cum Manual chasing Machine.
                                </Typography>
                                {/* TOP SECTION : TEXT + IMAGE */}
                                <Grid container spacing={3} alignItems="flex-start" mt={4}>
                                    {/* RIGHT IMAGE */}
                                    <Grid item size={{ xs: 12, md: 4 }} textAlign="left">
                                        <Box
                                            component="img"
                                            src={Milling}
                                            alt="VFBD Machine"
                                            sx={{
                                                width: "100%",
                                                maxWidth: "280px",
                                                borderRadius: "8px",
                                            }}
                                        />
                                    </Grid>

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }}>
                                        <Typography sx={{ fontFamily: "Roboto", color: "#333", textAlign: "justify", mt: 1 }}>
                                            A high quality roller which ultimately makes a Good Tea.




                                        </Typography>
                                        <Typography sx={{ fontFamily: "Roboto", color: "#333", textAlign: "justify", mt: 1 }}>
                                            Sharpening of circumferential as well as helical grooves Odd & Even of 50, 55, 60, 65, 70, 80, and 100, also length and diameter of roller with quality finish and accuracy can be done by the application of Automatic system.




                                        </Typography>
                                        <Typography sx={{ fontFamily: "Roboto", color: "#333", textAlign: "justify", mt: 1 }}>
                                            Special feature: Dual mode application facility i.e. provision of both automatic and manual operation system for roller Chasing.



                                        </Typography>
                                    </Grid>


                                </Grid>

                                {/* SPACING */}
                                <Box mt={3} />




                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />  <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>
                                        The machine performs all the operations with high accuracy, high productivity and minimum skill.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        High speed operations.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        reduced highly skilled manpower requirement.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>
                                        reduces setting time in comparison to multi machine operation.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Sharpen circumferential as well as helical grooves of any specification, length and diameter of rollers with quality finish and accuracy in sharpening.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Extremely smooth operation by modern.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Electronically regulated drive technology for milling.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Vibration-free and noise - free performance.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Dual mode application facility i.e. provision for automatic operation for milling and manual operation of chasing.
                                    </Typography>

                                </Box>
                                <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                    <ChevronRightIcon sx={{ color: "red" }} />
                                    <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                        Better quality of finished product. No buds and cutting chips on the cutting edges of the rollers which ensures better cutting of tea leaves, no heat generation due to metal to metal friction and ultimately no loss in liquor quality of the finished tea.
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
                                    sx={{ fontWeight: 700, fontFamily: "Roboto" }}
                                >
                                    Sharp-Edge - Range of Roller Sharpening Equipment
                                </Typography>

                            </AccordionSummary>

                            <AccordionDetails>


                                {/* TOP SECTION : TEXT + IMAGE */}
                                <Grid container spacing={3} alignItems="flex-start" mt={4}>
                                    {/* RIGHT IMAGE */}
                                    <Grid item size={{ xs: 12, md: 4 }} textAlign="left">
                                        <Box
                                            component="img"
                                            src={sharp_edge}
                                            alt="VFBD Machine"
                                            sx={{
                                                width: "100%",
                                                maxWidth: "280px",
                                                borderRadius: "8px",
                                            }}
                                        />
                                        <Typography sx={{ textAlign: "center", mt: "20px", fontWeight: "600", fontFamily: "Roboto" }}>
                                            Sharp-Edge - Range of Roller Sharpening Equipment
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

export default Workshop;
