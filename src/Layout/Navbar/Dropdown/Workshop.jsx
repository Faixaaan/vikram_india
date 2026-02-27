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
import CFM from '../../../Assets/Range.jpg'
import Range2 from '../../../Assets/range2.jpg'
import Range3 from '../../../Assets/range3.jpg'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import speed_fiber from '../../../Assets/slow-speed.jpg'
import vibro_screen from '../../../Assets/vibro-screen.jpg'
import Blizzard from '../../../Assets/Blizzard.jpg'
import Milling from '../../../Assets/Auto_miling.jpg'
import sharp_edge from '../../../Assets/sharp-edge.png'
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

const Workshop = () => {

    const [data, setData] = useState([]);
    const [parsedData, setParseData] = useState([])
    const [blizzParseData, setBlizzardParseData] = useState([])
    const [featuredParseData, setFeaturedParseData] = useState([])
    const [helixParsedData, sethelixParsedData] = useState([])

    const getData = async () => {
        try {
            const res = await axiosInstance.get(endpoints.teaProcessingMachinery.workshop);
            setData(res?.data?.data)

        }
        catch (err) {
            console.log(err)
        }

    }


    useEffect(() => {
        getData()
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
                    <Typography color="text.primary" sx={{ fontSize: "15px" }}>Workshop Equipment</Typography>
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
                                    {data?.section1_title}
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>

                                {/* TOP SECTION : TEXT + IMAGE */}
                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }}>

                                        {
                                            parsedData?.map((item) => {
                                                return (
                                                    <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                                        <ChevronRightIcon sx={{ color: "red" }} />  <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>
                                                            {item}
                                                        </Typography>

                                                    </Box>
                                                )
                                            })
                                        }










                                    </Grid>

                                    {/* RIGHT IMAGE */}
                                    <Grid item size={{ xs: 12, md: 4 }} textAlign="center">
                                        <Box
                                            component="img"
                                            src={data?.section2_img1}
                                            alt="VFBD Machine"
                                            sx={{
                                                width: "100%",
                                                maxWidth: "260px",
                                                borderRadius: "8px",
                                            }}
                                        />
                                        <Typography sx={{ textAlign: "center", mt: 1, color: "red", fontFamily: "Roboto", fontSize: "16px" }}>
                                            {data?.section2_img1_title1}
                                        </Typography>
                                        <Box
                                            component="img"
                                            src={data?.section2_img2}
                                            alt="VFBD Machine"
                                            sx={{
                                                width: "100%",
                                                maxWidth: "260px",
                                                borderRadius: "8px",
                                                mt: 8
                                            }}
                                        />
                                        <Typography sx={{ textAlign: "center", mt: 1, color: "red", fontFamily: "Roboto", fontSize: "16px" }}>
                                            {data?.section2_img2_title2}
                                        </Typography>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={3} alignItems="flex-start">



                                    {/* RIGHT IMAGE */}
                                    <Grid item size={{ xs: 12, md: 4 }} textAlign="center" sx={{ mt: 6 }}>
                                        <Box
                                            component="img"
                                            src={data?.section2_img3}
                                            alt="VFBD Machine"
                                            sx={{
                                                width: "100%",
                                                maxWidth: "260px",
                                                borderRadius: "8px",
                                            }}
                                        />
                                        <Typography sx={{ textAlign: "center", mt: 1, color: "red", fontFamily: "Roboto", fontSize: "16px" }}>
                                            {data?.section2_img2_title3}
                                        </Typography>

                                    </Grid>
                                </Grid>

                                {/* SPACING */}




                            </AccordionDetails>
                        </Accordion>
                       




                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Workshop;
