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
import CFM from '../../../Assets/sorting_batch.jpg'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import speed_fiber from '../../../Assets/slow-speed.jpg'
import vibro_screen from '../../../Assets/vibro-screen.jpg'
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

const Sorting = () => {

    const [data, setData] = useState([]);
    const [parseData, setParseData] = useState([])
    const [listData, setListData] = useState([])

    const getData = async () => {
        try {
            const res = await axiosInstance.get(endpoints.teaProcessingMachinery.sorting);
            setData(res?.data?.data)
            if (res?.data?.data) {
                const listData = JSON.parse(res?.data?.data.section2_list);
                const listDataa = JSON.parse(res?.data?.data.section4_list);
                setParseData(listData)
                setListData(listDataa)
            }
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])


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
                    <Typography color="inherit" sx={{ fontSize: "15px" }}>Product & Services</Typography>
                    <Typography color="text.primary" sx={{ fontSize: "15px" }}>CTC Tea Processing Machinery</Typography>
                    <Typography color="text.primary" sx={{ fontSize: "15px" }}>Sorting</Typography>
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
                                    {data?.section2_title}
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                {/* TOP SECTION : TEXT + IMAGE */}
                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }}>
                                        <Typography sx={{ fontWeight: 600, fontFamily: "Roboto", fontSize: "26px", mb: 3 }}>
                                            {data?.section2_sub_title}
                                        </Typography>
                                        <Typography sx={{ fontFamily: "Roboto", color: "#333", textAlign: "justify" }}>
                                            {data?.section2_desc}

                                        </Typography>
                                    </Grid>

                                    {/* RIGHT IMAGE */}
                                    <Grid item size={{ xs: 12, md: 4 }} textAlign="right">
                                        <Box
                                            component="img"
                                            src={data?.section2_img}
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
                                    {data?.section2_list_title}
                                </Typography>

                                {
                                    parseData?.map((item) => {
                                        return (
                                            <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                                <ChevronRightIcon sx={{ color: "red" }} />  <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>
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
                                    {data?.section3_title}
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                {/* TOP SECTION : TEXT + IMAGE */}
                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }}>
                                        <Typography sx={{ fontWeight: 600, fontFamily: "Roboto", fontSize: "26px", mb: 3 }}>
                                            {data?.section3_sub_title}
                                        </Typography>
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
                                        <Typography sx={{ fontWeight: 600, fontFamily: "Roboto", fontSize: "26px", mb: 3 }}>
                                            {data?.section4_sub_title}
                                        </Typography>
                                        <Typography sx={{ fontFamily: "Roboto", color: "#333", textAlign: "justify" }}
                                            dangerouslySetInnerHTML={{ __html: data?.section4_desc }}
                                        >


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

                                <Typography sx={{ fontSize: "20px", fontFamily: "Opens Sans", color: "red", mb: 2 }}>
                                    {data?.section4_list_title}
                                </Typography>

                                {
                                    listData?.map((item) => {
                                        return (
                                            <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                                <ChevronRightIcon sx={{ color: "red" }} />  <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>
                                                    {item}
                                                </Typography>

                                            </Box>
                                        )
                                    })
                                }















                            </AccordionDetails>
                        </Accordion>

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


export default Sorting;
