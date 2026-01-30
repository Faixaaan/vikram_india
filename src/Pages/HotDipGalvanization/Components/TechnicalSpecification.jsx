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
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";

import { Link } from "react-router-dom";

import '../../../App.css'
import structure4 from '../../../Assets/mm-structure-04.jpg'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { axiosInstance } from "../../../Api/Axios/axios";
import { endpoints } from "../../../Api/EndPoints/endpoints";
import EnquiryForm from "./EnquiryForm";


const leftMenu = [
    "INTRODUCTION",
    "SERVICE CAPABILITIES",
    "TECHNICAL SPECIFICATION & INFRASTRUCTURE",
    "THE GALVANIZING PROCESS",
    "QUALITY ASSURANCE & LAB FACILITIES",
    "WHY CHOOSE US",


];

const featureSpecData = [
    {
        feature: "Kettle Size",
        specification:
            "[12m x 1.1m x 1.6m]"
    },
    {
        feature: "Annual Capacity",
        specification:
            "[24,000 MT per annum]."
    },
    {
        feature: "Zinc Purity",
        specification:
            "We use Special High Grade (SHG) Zinc (99.995% purity) for superior finish and protection."
    },
    {
        feature: "Standards Followed",
        specification:
            "Compliance with IS 2629, IS 4759, and ASTM A123."
    },

];

const TechnicalSpecification = () => {

    const [data, setData] = useState([]);
    const [openEnquiry, setOpenEnquiry] = useState(false);


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
                <Breadcrumbs sx={{ mb: 2, fontSize: "15px" }}>
                    <MLink component={Link} to="/" underline="hover" color="inherit">
                        Home
                    </MLink>
                    <Typography color="inherit" sx={{  fontSize: "15px" }}>Product & Services</Typography>
                    <Typography color="text.primary" sx={{  fontSize: "15px" }}>Hot Dip Galvanization</Typography>
                    <Typography color="text.primary" sx={{  fontSize: "15px" }}>Technical Specification & Infrastructure</Typography>
                </Breadcrumbs>

                {/* PAGE TITLE */}
                



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
                                    to={`/products/${item.toLowerCase().replace(/ /g, "-")}`}
                                    sx={{
                                        borderBottom: "1px solid #eee",
                                        backgroundColor: item === "TECHNICAL SPECIFICATION & INFRASTRUCTURE" ? "#1A73E8" : "transparent",
                                        color: item === "TECHNICAL SPECIFICATION & INFRASTRUCTURE" ? "#fff" : "#000",
                                        "&:hover": {
                                            backgroundColor: item === "TECHNICAL SPECIFICATION & INFRASTRUCTURE" ? "#1A73E8" : "#f5f5f5",
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

                        <Box sx={{ mt: 4 }}>
                            <Button variant="contained" sx={{ padding: "8px 15px!important", fontSize: "16px", fontWeight: "500" }} fullWidth onClick={() => setOpenEnquiry(true)}>
                                Enquiry Form
                            </Button>
                        </Box>
                    </Grid>

                    {/* Right Content Section */}
                    <Grid item size={{ xs: 12, md: 9 }} sx={{mt:5}}>
                        <Typography
                            sx={{
                                fontSize: "24px",
                                fontWeight: 600,
                                mt: 1,
                                fontFamily: "Roboto",
                                color:"#1A73E8"
                            }}
                        >
                            TECHNICAL SPECIFICATION & INFRASTRUCTURE
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
                                <Typography sx={{ fontSize: { md: "20px", xs: "16px" }, fontWeight: 500,fontFamily:"Roboto",textTransform:"capitalize" }}>
                                    TECHNICAL SPECIFICATION & INFRASTRUCTURE
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                <TableContainer
                                    sx={{
                                        border: "1px solid #e0e0e0",
                                        borderRadius: "6px",
                                        overflowX: "auto",
                                    }}
                                >
                                    <Table
                                        sx={{
                                            borderCollapse: "collapse",
                                            minWidth: 600,
                                        }}
                                    >
                                        {/* TABLE HEADER */}
                                        <TableHead>
                                            <TableRow sx={{ backgroundColor: "#f5f5f5" }}>
                                                <TableCell
                                                    sx={{
                                                        fontWeight: 600,
                                                        fontSize: "16px",
                                                        border: "1px solid #e0e0e0",
                                                        width: "30%",
                                                        fontFamily: "Roboto",
                                                    }}
                                                >
                                                    Service Category
                                                </TableCell>
                                                <TableCell
                                                    sx={{
                                                        fontWeight: 600,
                                                        fontSize: "16px",
                                                        border: "1px solid #e0e0e0",
                                                        fontFamily: "Roboto",
                                                    }}
                                                >
                                                    Description
                                                </TableCell>
                                            </TableRow>
                                        </TableHead>

                                        {/* TABLE BODY */}
                                        <TableBody>
                                            {featureSpecData.map((row, index) => (
                                                <TableRow key={index}>
                                                    <TableCell
                                                        sx={{
                                                            border: "1px solid #e0e0e0",
                                                            fontSize: "14px",
                                                            verticalAlign: "top",
                                                            fontWeight: 500,
                                                            fontFamily: "Roboto",
                                                        }}
                                                    >
                                                        {row.feature}
                                                    </TableCell>

                                                    <TableCell
                                                        sx={{
                                                            border: "1px solid #e0e0e0",
                                                            fontSize: "14px",
                                                            fontFamily: "Roboto",
                                                            lineHeight: "1.6",
                                                        }}
                                                    >
                                                        {row.specification}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </AccordionDetails>
                        </Accordion>


                    </Grid>
                </Grid>
            </Container>
            <EnquiryForm
                open={openEnquiry}
                onClose={() => setOpenEnquiry(false)}
            />
        </Box>
    );
};

export default TechnicalSpecification;
