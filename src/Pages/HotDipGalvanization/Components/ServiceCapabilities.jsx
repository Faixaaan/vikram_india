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
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Paper,
    Container,
    Button,
} from "@mui/material";

import { Link } from "react-router-dom";

import '../../../App.css'
import structure4 from '../../../Assets/mm-structure-04.jpg'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { axiosInstance } from "../../../Api/Axios/axios";
import { endpoints } from "../../../Api/EndPoints/endpoints";


const leftMenu = [
    "INTRODUCTION",
    "SERVICE CAPABILITIES",
    "TECHNICAL SPECIFICATION & INFRASTRUCTURE",
    "THE GALVANIZING PROCESS",
    "QUALITY ASSURANCE & LAB FACILITIES",
    "WHY CHOOSE VIKRAM INDIA FOR HDG",


];

const ServiceCapabilities = () => {

    const [data, setData] = useState([]);


    const fetchData = async () => {
        try {
            const res = await axiosInstance.get(endpoints.ModuleMounting.Introduction)
            setData(res?.data?.data)
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchData()
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
                    <Typography color="text.primary">Hot Dip Galvanization</Typography>
                    <Typography color="text.primary">SERVICE CAPABILITIES</Typography>
                </Breadcrumbs>

                {/* PAGE TITLE */}
                <Typography
                    sx={{
                        fontSize: "26px",
                        fontWeight: 700,
                        mb: 1,
                        color: "red",
                        textTransform: "uppercase",
                        fontFamily: "Open Sans"
                    }}
                >
                    SERVICE CAPABILITIES
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





                        <List sx={{ border: "1px solid #ddd" }}>
                            {leftMenu.map((item) => (
                                <ListItemButton
                                    key={item}
                                    component={Link}
                                    to={`/products/${item.toLowerCase().replace(/ /g, "-")}`}
                                    sx={{
                                        borderBottom: "1px solid #eee",
                                        backgroundColor: item === "SERVICE CAPABILITIES" ? "#1A73E8" : "transparent",
                                        color: item === "SERVICE CAPABILITIES" ? "#fff" : "#000",
                                        "&:hover": {
                                            backgroundColor: item === "SERVICE CAPABILITIES" ? "#1A73E8" : "#f5f5f5",
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

                        <Box sx={{ mt: 4 }}>
                            <Button variant="contained" sx={{ padding: "8px 15px!important", fontSize: "16px", fontWeight: "500" }} fullWidth>
                                Enquiry Form
                            </Button>
                        </Box>
                    </Grid>

                    {/* Right Content Section */}
                    <Grid item size={{ xs: 12, md: 9 }}>
                        <Typography
                            sx={{
                                fontSize: "24px",
                                fontWeight: 600,
                                mt: 1,
                                fontFamily: "Open Sans"
                            }}
                        >
                            SERVICE CAPABILITIES
                        </Typography>



                        {/* Introduction */}


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
                            }} expandIcon={<ExpandMoreIcon sx={{ color: "#1A73E8" }} />}>
                                <Typography sx={{ fontSize: { md: "20px", xs: "16px" }, fontWeight: 500 }}>
                                    About our HDG Division
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Box>
                                    <Grid container spacing={2}>


                                        {/* LEFT CONTENT */}
                                        <Grid item size={{ xs: 12 }}>

                                            <Typography
                                                sx={{
                                                    fontSize: "16px",
                                                    fontFamily: "Open Sans",
                                                    textAlign: "justify",
                                                    mt: 0
                                                }}
                                            >
                                                At Vikram India Limited, our legacy of over four decades in high-precision manufacturing has always
                                                been built on a single core principle: Endurance.


                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: "16px",
                                                    fontFamily: "Open Sans",
                                                    textAlign: "justify",
                                                    mt: 2
                                                }}
                                            >
                                                Our Hot Dip Galvanizing (HDG) division serves as the critical link between fabrication and longevity.
                                                Originally established to provide an uncompromising protective shield for our own Module Mounting
                                                Structures (MMS), this facility has evolved into a premier destination for high-quality, large-scale
                                                galvanizing services for external infrastructure partners across India.

                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: "16px",
                                                    fontFamily: "Open Sans",
                                                    textAlign: "justify",
                                                    mt: 2
                                                }}
                                            >
                                                <b>The Synergy of Integrated Manufacturing</b> <br />
                                                We believe that quality cannot be outsourced. By housing our galvanizing facility alongside our Module
                                                Mounting Structure division, we offer a seamless, integrated production cycle:


                                            </Typography>

                                            <ul>
                                                <li style={{ fontSize: "16px", marginTop: "10px" }}>
                                                    <b>Total Quality Control:</b> Every MMS component moves directly from our fabrication floor to our
                                                    galvanizing kettles, eliminating the risks of surface oxidation during transit and ensuring that the final
                                                    product meets the stringent 25-year lifespan required for solar installations.
                                                </li>
                                                <li style={{ fontSize: "16px", marginTop: "10px" }}>
                                                    <b>Engineering Alignment:</b> Our galvanizing experts work hand-in-hand with our solar design team,
                                                    ensuring that structural designs are optimized for drainage and venting—the keys to a perfect, uniform
                                                    zinc coating.
                                                </li>
                                                <li style={{ fontSize: "16px", marginTop: "10px" }}>
                                                    <b>Capacity for Scale:</b> Our infrastructure is designed for high-tonnage output, allowing us to
                                                    simultaneously support our massive internal solar project requirements while offering significant
                                                    capacity to outside vendors for structural steel, transmission towers, and electrical components.
                                                </li>
                                            </ul>



                                        </Grid>



                                        {/* BOTTOM FULL WIDTH CONTENT */}


                                    </Grid>
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
                            }} expandIcon={<ExpandMoreIcon sx={{ color: "#1A73E8" }} />}>
                                <Typography sx={{ fontSize: { md: "20px", xs: "16px" }, fontWeight: 500 }}>
                                    A Commitment to Excellence
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Box>
                                    <Grid container spacing={2}>


                                        {/* LEFT CONTENT */}
                                        <Grid item size={{ xs: 12 }}>

                                            <Typography
                                                sx={{
                                                    fontSize: "16px",
                                                    fontFamily: "Open Sans",
                                                    textAlign: "justify",
                                                    mt: 0
                                                }}
                                            >
                                                Whether we are protecting our own solar mounting systems or your structural assets, our process
                                                remains consistent: use only <b> Special High Grade (SHG) Zinc</b> and adhere strictly to international
                                                standards such as <b> IS 2629 and ASTM A123.</b>


                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: "16px",
                                                    fontFamily: "Open Sans",
                                                    textAlign: "justify",
                                                    mt: 2
                                                }}
                                            >
                                                From the world-renowned tea estates served by our Tea Machinery Division to the vast solar farms
                                                powered by our Module Mounting Structures, Vikram India Limited remains a trusted name in industrial
                                                protection and engineering excellence.


                                            </Typography>



                                        </Grid>



                                        {/* BOTTOM FULL WIDTH CONTENT */}


                                    </Grid>
                                </Box>
                            </AccordionDetails>

                        </Accordion>
                        
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ServiceCapabilities;
