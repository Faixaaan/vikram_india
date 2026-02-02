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
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";

import { Link } from "react-router-dom";
import FanImage from "../../../Assets/logo 1.png"; // update your image
import '../../../App.css'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import controllerImage from "../../../Assets/fermenting.jpg";
import humidation1 from "../../../Assets/humidation-img.jpg";
import humidation2 from "../../../Assets/humidationn.image.jpg";
import CFM from '../../../Assets/CFM.jpg'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
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

const Fermenting = () => {


    const [data, setData] = useState([])
    const [parseData, setParseData] = useState([])
    const [listData, setListData] = useState([])


    const getData = async () => {
        try {
            const res = await axiosInstance.get(endpoints.teaProcessingMachinery.fermenting);
            setData(res?.data?.data)
            if (res?.data?.data) {
                const listData = JSON.parse(res?.data?.data.section3_list);
                const listDaata = JSON.parse(res?.data?.data.section4_list);
                setListData(listDaata)
                setParseData(listData)
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])


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
                    <Typography color="text.primary" sx={{ fontSize: "15px" }}>Fermenting</Typography>
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
                                        backgroundColor: item === "FERMENTING" ? "green" : "transparent",
                                        color: item === "FERMENTING" ? "#fff" : "#000",
                                        "&:hover": {
                                            backgroundColor: item === "FERMENTING" ? "green" : "#f5f5f5",
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
                                mb: 0,
                                fontFamily: "Roboto",
                                color: "red"
                            }}
                        >
                            {data?.section1_title}
                        </Typography>


                        <Grid container spacing={2}>
                            {/* Left Description */}
                            <Grid item xs={12} md={8}>
                                <Typography sx={{ mb: 2, fontSize: "18px", lineHeight: "24px", fontFamily: "Roboto" }}>
                                    {data?.section1_desc}
                                </Typography>


                            </Grid>

                            {/* Right Image */}
                            <Grid item xs={12} md={4}>
                                <Box
                                    component="img"
                                    src={data?.section1_img}
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
                        <Typography
                            sx={{
                                fontSize: "20px",
                                fontWeight: 600,
                                mt: 4,
                                mb: 2,
                                fontFamily: "Roboto"
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
                                        <Typography sx={{ fontFamily: "Roboto", color: "#333", textAlign: "justify" }}
                                            dangerouslySetInnerHTML={{ __html: data?.section3_desc }}
                                        >



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

                                <Typography sx={{ color: "red", fontSize: "18px", fontWeight: "18" }}>
                                    {data?.section3_list_title}
                                </Typography>

                                {
                                    parseData?.map((item) => {
                                        return (
                                            <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 2 }}>
                                                <Typography sx={{ color: "#000", fontWeight: "600", mb: 1 }}>

                                                    {item?.title}
                                                </Typography>
                                                <Typography>

                                                    {item?.desc}
                                                </Typography>
                                            </Box>
                                        )
                                    })
                                }







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



                                {
                                    listData?.map((item) => {
                                        return (
                                            <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                                <ChevronRightIcon sx={{ color: "red" }} />  <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}
                                                    
                                                >

                                                {item}
                                                </Typography>

                                            </Box>
                                        )
                                    })
                                }










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
                                    <Grid item size={{ xs: 12, md: 6 }} textAlign="center">
                                        <Box
                                            component="img"
                                            src={data?.section5_img1}
                                            alt="VFBD Machine"
                                            sx={{
                                                width: "100%",
                                                maxWidth: "360px",
                                                borderRadius: "8px",
                                            }}
                                        />
                                    </Grid>

                                    {/* RIGHT IMAGE */}
                                    <Grid item size={{ xs: 12, md: 6 }} textAlign="center">
                                        <Box
                                            component="img"
                                            src={data?.section5_img}
                                            alt="VFBD Machine"
                                            sx={{
                                                width: "100%",
                                                maxWidth: "360px",
                                                borderRadius: "8px",
                                            }}
                                        />
                                    </Grid>
                                </Grid>


                                {/* SPACING */}
                                <Box mt={3} />



                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Fermenting;
