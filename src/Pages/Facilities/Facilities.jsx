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


const leftMenu = [
    "FACILITIES",


];




const Facilities = () => {

    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const res = await axiosInstance.get(endpoints.facilities.getFacilitiesData)
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
                    <Typography color="inherit" sx={{ fontSize: "15px" }}>Facilities</Typography>


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
                            Facilities
                        </Typography>



                        <List sx={{ border: "1px solid #ddd" }}>
                            {leftMenu.map((item) => (
                                <ListItemButton
                                    key={item}
                                    component={Link}
                                    to={`/${item.toLowerCase().replace(/ /g, "-")}`}
                                    sx={{
                                        borderBottom: "1px solid #eee",
                                        backgroundColor: item === "FACILITIES" ? "green" : "transparent",
                                        color: item === "FACILITIES" ? "#fff" : "#000",
                                        "&:hover": {
                                            backgroundColor: item === "FACILITIES" ? "green" : "#f5f5f5",
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




                        {/* Technical Specification Table */}

                        <Accordion sx={{
                            background: "#fff",
                            boxShadow: "0px 2px 8px rgba(0,0,0,0.10)",
                            borderRadius: "8px",
                            "&:before": { display: "none" },
                            mt: 4,
                            mb: 3,
                            maxWidth: "1000px"
                        }}>
                            <AccordionSummary sx={{
                                backgroundColor: "#f8f8f8",
                                borderBottom: "1px solid #eee",
                                borderRadius: "8px"
                            }} expandIcon={<ExpandMoreIcon sx={{ color: "#c00" }} />}>
                                <Typography sx={{ fontSize: { md: "20px", xs: "16px" }, fontWeight: 600 }}>
                                    {data?.accordion1_main_heading}
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                <Box>
                                    <Typography
                                        sx={{
                                            fontSize: "18px",
                                            fontFamily: "Roboto",
                                            textAlign: "justify",
                                            mb: 3,
                                            fontWeight: "500"
                                        }}
                                    >
                                        {data?.accordion1_title1}
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid item size={{ xs: 12, md: 5 }}>
                                            <iframe src={data?.accordion1_link1} width="100%" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </Grid>
                                        <Grid item size={{ xs: 12, md: 7 }}>
                                            <Typography
                                                sx={{
                                                    fontSize: "16px",
                                                    fontFamily: "Roboto",
                                                    textAlign: "justify",
                                                    fontWeight: "400"
                                                }}
                                            >
                                                {data?.accordion1_desc1}
                                            </Typography>
                                        </Grid>


                                    </Grid>




                                </Box>

                                <Divider sx={{ paddingTop: "20px" }} />
                                <Box sx={{ mt: 4 }}>

                                    <Grid container spacing={2}>
                                        <Grid item size={{ xs: 12, md: 5 }}>
                                            <iframe src={data?.accordion1_link2} width="100%" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </Grid>
                                        <Grid item size={{ xs: 12, md: 7 }}>
                                            <Typography
                                                sx={{
                                                    fontSize: "16px",
                                                    fontFamily: "Roboto",
                                                    textAlign: "justify",
                                                    fontWeight: "400"
                                                }}
                                            >
                                                {data?.accordion1_desc2}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: "20px",
                                                    fontFamily: "Roboto",
                                                    textAlign: "justify",
                                                    fontWeight: "600"
                                                }}
                                            >
                                                {data?.accordion1_title2}
                                            </Typography>
                                        </Grid>


                                    </Grid>




                                </Box>



                            </AccordionDetails>
                        </Accordion>

                        <Accordion sx={{
                            background: "#fff",
                            boxShadow: "0px 2px 8px rgba(0,0,0,0.10)",
                            borderRadius: "8px",
                            "&:before": { display: "none" },
                            mt: 2,
                            mb: 2,
                            maxWidth: "1000px"
                        }}>
                            <AccordionSummary sx={{
                                backgroundColor: "#f8f8f8",
                                borderBottom: "1px solid #eee",
                                borderRadius: "8px"
                            }} expandIcon={<ExpandMoreIcon sx={{ color: "#c00" }} />}>
                                <Typography sx={{ fontSize: { md: "20px", xs: "16px" }, fontWeight: 600 }}>
                                    {data?.accordion2_main_heading}
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                <Box>
                                    <Grid container spacing={3} alignItems="center">
                                        {/* RIGHT SIDE – Image (4 Grid) */}
                                        <Grid item size={{ xs: 12, md: 4 }}>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "flex-start",
                                                }}
                                            >
                                                <img
                                                    src={data?.accordion2_image}
                                                    alt=""
                                                    style={{
                                                        width: "100%",
                                                        height: "auto",
                                                        maxWidth: "100%",
                                                    }}
                                                />
                                            </Box>
                                        </Grid>
                                        {/* LEFT SIDE – Paragraph (8 Grid) */}
                                        <Grid item size={{ xs: 12, md: 8 }}>
                                            <Typography
                                                sx={{
                                                    fontSize: "18px",
                                                    fontFamily: "Roboto",
                                                    textAlign: "justify",
                                                    fontWeight: "600",
                                                    lineHeight: "120%",
                                                }}
                                            >
                                                {data?.accordion1_desc2}
                                            </Typography>
                                        </Grid>



                                    </Grid>
                                </Box>






                            </AccordionDetails>
                        </Accordion>

                        <Accordion sx={{
                            background: "#fff",
                            boxShadow: "0px 2px 8px rgba(0,0,0,0.10)",
                            borderRadius: "8px",
                            "&:before": { display: "none" },
                            mt: 2,
                            mb: 2,
                            maxWidth: "1000px"
                        }}>
                            <AccordionSummary sx={{
                                backgroundColor: "#f8f8f8",
                                borderBottom: "1px solid #eee",
                                borderRadius: "8px"
                            }} expandIcon={<ExpandMoreIcon sx={{ color: "#c00" }} />}>
                                <Typography sx={{ fontSize: { md: "20px", xs: "16px" }, fontWeight: 600 }}>
                                    {data?.accordion3_main_heading}
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                <Box>
                                    <Typography
                                        sx={{
                                            fontSize: "20px",
                                            fontFamily: "Roboto",
                                            textAlign: "justify",
                                            mb: 3,
                                            fontWeight: "600"
                                        }}
                                    >
                                        {data?.accordion3_title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "16px",
                                            fontFamily: "Roboto",
                                            textAlign: "justify",
                                            mt: 2,
                                            fontWeight: "400"
                                        }}
                                    >
                                        {data?.accordion3_desc}
                                    </Typography>




                                </Box>





                            </AccordionDetails>
                        </Accordion>






                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};



export default Facilities;
