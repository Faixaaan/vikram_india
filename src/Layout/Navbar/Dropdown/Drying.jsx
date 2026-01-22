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
import DryingImag from "../../../Assets/Drying_img.jpg"; // update your image
import '../../../App.css'
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import controllerImage from "../../../Assets/auto_controller.jpg";
import heatingImage from '../../../Assets/heating-Arrangment.jpg'
import { axiosInstance } from "../../../Api/Axios/axios";
import { endpoints } from "../../../Api/EndPoints/endpoints";


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

const Drying = () => {

    const [data, setData] = useState([])

    const fetchDryingData = async () => {
        try {
            const res = await axiosInstance.get(endpoints.teaProcessingMachinery.drying);
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
                    <Typography color="text.primary">CTC Tea Processing Machinery</Typography>
                    <Typography color="text.primary">Drying</Typography>
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
                    {data?.title}
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
                                color: "red",
                                fontFamily: "Open Sans"
                            }}
                        >
                            CTC Tea Processing Machinery

                        </Typography>

                        <List sx={{ border: "1px solid #ddd" }}>
                            {leftMenu.map((item) => (
                                <ListItemButton
                                    key={item}
                                    component={Link}
                                    to={`/products/ctc/${item.toLowerCase().replace(/ /g, "-")}`}
                                    sx={{
                                        borderBottom: "1px solid #eee",
                                        backgroundColor: item === "DRYING" ? "green" : "transparent",
                                        color: item === "DRYING" ? "#fff" : "#000",
                                        "&:hover": {
                                            backgroundColor: item === "DRYING" ? "green" : "#f5f5f5",
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
                            {data?.section1_title}
                        </Typography>
                        <Typography sx={{ fontSize: "15px", mb: 3, color: "red", fontFamily: "Open Sans" }}>
                            {data?.sub_title}
                        </Typography>



                        {/* Technical Specification Table */}
                        {/* Technical Specifications */}
                        <Typography
                            sx={{
                                fontSize: "20px",
                                fontWeight: 600,
                                mt: 4,
                                mb: 2,
                                fontFamily: "Open Sans",
                            }}
                        >
                            {data?.section2_title}
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
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 700, fontFamily: "Open Sans" }}
                                >
                                    {data?.section3_title}
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                {/* TOP SECTION : TEXT + IMAGE */}
                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }}>
                                        <Typography sx={{ fontFamily: "Open Sans", color: "#333", textAlign: "justify" }}>
                                            {data?.section3_desc}
                                        </Typography>
                                    </Grid>

                                    {/* RIGHT IMAGE */}
                                    <Grid item size={{ xs: 12, md: 4 }} textAlign="right">
                                        <Box
                                            component="img"
                                            src={data?.section3_img}
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
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>MODULE</TableCell>
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>200W</TableCell>
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>300W</TableCell>
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>400W</TableCell>
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>600W</TableCell>

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
                                    sx={{ fontWeight: 700, fontFamily: "Open Sans" }}
                                >
                                    {data?.section4_title}
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                {/* TOP SECTION : TEXT + IMAGE */}
                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }}>
                                        <Typography sx={{ fontFamily: "Open Sans", color: "#333", textAlign: "justify" }}>
                                            {data?.section4_desc}


                                        </Typography>
                                    </Grid>

                                    {/* RIGHT IMAGE */}
                                    <Grid item size={{ xs: 12, md: 4 }} textAlign="right">
                                        <Box
                                            component="img"
                                            src={data?.section4_img}
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
                                    {data?.section5_title}
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                {/* TOP SECTION : TEXT + IMAGE */}
                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }}>
                                        <Typography sx={{ fontFamily: "Open Sans", color: "#333", textAlign: "justify" }}>
                                            {data?.section5_desc}


                                        </Typography>
                                    </Grid>

                                    {/* RIGHT IMAGE */}
                                    <Grid item size={{ xs: 12, md: 4 }} textAlign="right">
                                        <Box
                                            component="img"
                                            src={data?.section5_img}
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
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>MODULE</TableCell>
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>200W</TableCell>
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>300W</TableCell>
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>400W</TableCell>
                                                <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>600W</TableCell>

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

export default Drying;
