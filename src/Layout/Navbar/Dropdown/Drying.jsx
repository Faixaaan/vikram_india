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
    const [parseDataa, setParseDataa] = useState([])
    const [tableDataa,setTableDataa] = useState([])

    const fetchDryingData = async () => {
        try {
            const res = await axiosInstance.get(endpoints.teaProcessingMachinery.drying);
            setData(res?.data?.data);
            if (res?.data?.data) {
                const parseDataaa = JSON.parse(res?.data?.data?.section3_table);
                const listDataaa = JSON.parse(res?.data?.data?.section5_table);
                setTableDataa(listDataaa)
                setParseDataa(parseDataaa)
            }
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
                    <Typography color="inherit" sx={{ fontSize: "15px" }}>Product & Services</Typography>
                    <Typography color="text.primary" sx={{ fontSize: "15px" }}>CTC Tea Processing Machinery</Typography>
                    <Typography color="text.primary" sx={{ fontSize: "15px" }}>Drying</Typography>
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
                                    to={`/products/ctc/${item.toLowerCase().replace(/ /g, "-")}`}
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
                    <Grid item size={{ xs: 12, md: 9 }} sx={{ mt: 6 }}>
                        <Typography
                            sx={{
                                fontSize: "24px",
                                fontWeight: 600,
                                mb: 2,
                                fontFamily: "Roboto",
                                color: "red"
                            }}
                        >
                            {data?.section1_title}
                        </Typography>




                        {/* Technical Specification Table */}
                        {/* Technical Specifications */}
                        <Typography
                            sx={{
                                fontSize: "20px",
                                fontWeight: 600,
                                mt: 4,
                                mb: 2,
                                fontFamily: "Roboto",
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
                                    sx={{ fontWeight: 700, fontFamily: "Roboto" }}
                                >
                                    {data?.section3_title}
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                {/* TOP SECTION : TEXT + IMAGE */}
                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }}>
                                        <Typography sx={{ fontFamily: "Roboto", color: "#333", textAlign: "justify" }}>
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

                                        {/* TABLE HEAD */}
                                        <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                                            <TableRow>
                                                {parseDataa?.length > 0 &&
                                                    Object.keys(parseDataa[0]).map((key) => (
                                                        <TableCell
                                                            key={key}
                                                            sx={{ fontWeight: 700, fontFamily: "Roboto" }}
                                                        >
                                                            {key === "module"
                                                                ? "MODULE"
                                                                : key.replace("w", "").toUpperCase() + "W"}
                                                        </TableCell>
                                                    ))}
                                            </TableRow>
                                        </TableHead>

                                        {/* TABLE BODY */}
                                        <TableBody>
                                            {parseDataa?.map((row, rowIndex) => (
                                                <TableRow key={rowIndex}>
                                                    {Object.keys(row).map((key) => (
                                                        <TableCell
                                                            key={key}
                                                            sx={key === "module" ? { maxWidth: "180px" } : {}}
                                                        >
                                                            {row[key]}
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                            ))}
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
                                    {data?.section4_title}
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                {/* TOP SECTION : TEXT + IMAGE */}
                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }}>
                                        <Typography sx={{ fontFamily: "Roboto", color: "#333", textAlign: "justify" }}>
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
                                    sx={{ fontWeight: 700, fontFamily: "Roboto" }}
                                >
                                    {data?.section5_title}
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                {/* TOP SECTION : TEXT + IMAGE */}
                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }}>
                                        <Typography sx={{ fontFamily: "Roboto", color: "#333", textAlign: "justify" }}
                                        dangerouslySetInnerHTML={{ __html: data?.section5_desc }}
                                        >
                                            
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

                                        {/* TABLE HEAD */}
                                        <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                                            <TableRow>
                                                {tableDataa?.length > 0 &&
                                                    Object.keys(tableDataa[0]).map((key) => (
                                                        <TableCell
                                                            key={key}
                                                            sx={{ fontWeight: 700, fontFamily: "Roboto" }}
                                                        >
                                                            {key === "module"
                                                                ? "MODULE"
                                                                : key.replace("w", "").toUpperCase() + "W"}
                                                        </TableCell>
                                                    ))}
                                            </TableRow>
                                        </TableHead>

                                        {/* TABLE BODY */}
                                        <TableBody>
                                            {tableDataa?.map((row, rowIndex) => (
                                                <TableRow key={rowIndex}>
                                                    {Object.keys(row).map((key) => (
                                                        <TableCell
                                                            key={key}
                                                            sx={key === "module" ? { maxWidth: "180px" } : {}}
                                                        >
                                                            {row[key]}
                                                        </TableCell>
                                                    ))}
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
        </Box>
    );
};

export default Drying;
