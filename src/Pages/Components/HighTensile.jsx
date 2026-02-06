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
} from "@mui/material";

import { Link } from "react-router-dom";
import mmsStructure from "../../Assets/mms-structure.jpg"; // update your image
import '../../App.css'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import structure1 from '../../Assets/tensile-1.jpg'
import structure2 from '../../Assets/tensile-2.jpg'

import structure4 from '../../Assets/tensile-03.jpg'
import { axiosInstance } from "../../Api/Axios/axios";
import { endpoints } from "../../Api/EndPoints/endpoints";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";



const leftMenu = [
    "INFRASTRUCTURE & MACHINERY",
    "PRODUCT & PORTFOLIO",
    "PROFILE AVAILABILITY",
    "TECHNICAL SPECIFICATION",
    "QUALITY & SAFETY",


];
const featureSpecData = [
    {
        feature: "Advanced Machinery",
        specification:
            "Equipped with new technology broaching machines and band saw machines to handle complex slotting in high tensile steel products."
    },
    {
        feature: "High Production Rate",
        specification:
            "With proper broaches, fixtures, and machines, more pieces are produced per hour than other machining methods."
    },
    {
        feature: "High Accuracy",
        specification:
            "Machines provide high precision finish with tolerance up to ±0.0075 mm."
    },
    {
        feature: "Single Pass Operation",
        specification:
            "Both roughing and finishing cuts are completed in one pass of the tool."
    },
    {
        feature: "Versatile Operation",
        specification:
            "Can be used for both internal and external surface operations."
    },
    {
        feature: "Complex Shape Machining",
        specification:
            "Any form that can be reproduced on a broach can be machined."
    },
    {
        feature: "Efficient Cooling",
        specification:
            "Cutting fluid is effectively drawn into the cut during broaching."
    }
];


const img = [
    { img: structure1 },
    { img: structure2 },

]

const HighTensile = () => {

    const [data, setData] = useState([])

    console.log(data, 'technicalData')

    const [featuresSepcData, setFeaturesSpecData] = useState([])
    console.log(featuresSepcData, 'tableee')


    const fetchImageData = async () => {
        try {
            const res = await axiosInstance.get(endpoints.ModuleMounting.technical_specification)

            setData(res?.data?.data)

            if (res?.data?.data) {
                const parsedData = JSON.parse(res.data?.data?.section1_table);




                setFeaturesSpecData(parsedData)
            }

        }
        catch (err) {
            console.log(err)
        }
    }



    useEffect(() => {
        fetchImageData()
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
                    <Typography color="inherit" sx={{ fontSize: "15px" }}>Product & Services</Typography>
                    <Typography color="text.primary" sx={{ fontSize: "15px" }}>Module Mounting Structure</Typography>
                    <Typography color="text.primary" sx={{ fontSize: "15px" }}>Technical Specification</Typography>
                </Breadcrumbs>





                <Grid container spacing={3}>
                    {/* Left Sidebar */}
                    <Grid item size={{ xs: 12, md: 3 }} sx={{ mt: 2 }}>
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
                                        backgroundColor: item === "TECHNICAL SPECIFICATION" ? "#1A73E8" : "transparent",
                                        color: item === "TECHNICAL SPECIFICATION" ? "#fff" : "#000",
                                        "&:hover": {
                                            backgroundColor: item === "TECHNICAL SPECIFICATION" ? "#1A73E8" : "#f5f5f5",
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
                    <Grid item size={{ xs: 12, md: 9 }} sx={{ mt: 3 }}>
                        



                        {/* Introduction */}


                        <Box>



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
                                    <Typography
                                        sx={{
                                            fontSize: { md: "20px", xs: "16px" },
                                            fontWeight: 500,
                                            fontFamily: "Roboto"
                                        }}
                                    >
                                        {data?.section1_title}
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
                                                        Features
                                                    </TableCell>
                                                    <TableCell
                                                        sx={{
                                                            fontWeight: 600,
                                                            fontSize: "16px",
                                                            border: "1px solid #e0e0e0",
                                                            fontFamily: "Roboto",
                                                        }}
                                                    >
                                                        Specification
                                                    </TableCell>
                                                </TableRow>
                                            </TableHead>

                                            {/* TABLE BODY */}
                                            <TableBody>
                                                {featuresSepcData?.map((row, index) => (
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
                                                            {row.features}
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



                        </Box>

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

export default HighTensile;
