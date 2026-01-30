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




const GreenSorting = () => {

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
                    <Typography color="text.primary" sx={{fontSize: "15px" }}>Green Tea Processing Machinery</Typography>
                    <Typography color="text.primary" sx={{  fontSize: "15px" }}>Sorting</Typography>
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
                                        backgroundColor: item === "SORTING" ? "green" : "transparent",
                                        color: item === "SORTING" ? "#fff" : "#000",
                                        "&:hover": {
                                            backgroundColor: item === "SORTING" ? "green" : "#f5f5f5",
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
                            SORTING
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
                                    Arnot Sorter


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

                                    <Box sx={{ marginTop: "10px" }}>
                                        <Typography sx={{ color: "black", fontSize: "18px" }}>
                                            Design Type
                                        </Typography>
                                        <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>

                                            <ChevronRightIcon sx={{ color: "red" }} />
                                            <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                                Pucca sorter machine with rendering galloping motion which saves tea while traveling on the screen from shuffling and becoming Grayish

                                            </Typography>

                                        </Box>
                                    </Box>
                                    <Box sx={{ marginTop: "10px" }}>
                                        <Typography sx={{ color: "black", fontSize: "18px" }}>
                                            Hopper
                                        </Typography>
                                        <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>

                                            <ChevronRightIcon sx={{ color: "red" }} />
                                            <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                                Out of Stainless steel, fitted on LH & RH pedestals as such that the stored tea do not get grinded in result saving the bloom. Beater provided on tray assembly to creates little vibration on teas through a rubber diaphragm forming lower stop of the hopper, to assist the flow of tea without obstruction.

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

                                                Made of season teak wood fitted with wire mesh, all the 5 trays are of same size hence inter-changeable. The first two trays rubber bouncing balls arranged in rubber cord fitted on the bottom. These balls strikes the wire mesh very gently at every stroke of the crank, to prevent clogging of the wire mesh.
                                                Capacity = 1500Kgs.

                                            </Typography>

                                        </Box>
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
                                    Myddleton Stalk Extractor

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

export default GreenSorting;
