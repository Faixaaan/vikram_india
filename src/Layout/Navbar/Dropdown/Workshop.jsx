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
            if (res?.data?.data) {
                const list = JSON.parse(res?.data?.data?.section2_list);
                const BlizList = JSON.parse(res?.data?.data?.section3_list1);
                const FeatureList = JSON.parse(res?.data?.data?.section3_list2);
                const HelixList = JSON.parse(res?.data?.data?.section4_list);
                setParseData(list)
                setBlizzardParseData(BlizList);
                setFeaturedParseData(FeatureList)
                sethelixParsedData(HelixList)
            }
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
                                    {data?.section2_title}
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

                                <Typography sx={{ fontSize: "20px", fontFamily: "Opens Sans", color: "red", mb: 2 }}>
                                    {data?.section3_list_title1}
                                </Typography>

                                {
                                    blizzParseData?.map((item) => {
                                        return (
                                            <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                                <ChevronRightIcon sx={{ color: "red" }} />  <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

                                                    {item}
                                                </Typography>

                                            </Box>
                                        )
                                    })
                                }






                                <Typography sx={{ fontSize: "20px", fontFamily: "Opens Sans", color: "red", mb: 2, mt: 2 }}>
                                    {data?.section3_list_title2}

                                </Typography>
                                {
                                    featuredParseData?.map((item) => {
                                        return (
                                            <Box sx={{ mt: 3, borderBottom: "1px solid #e5e5e5", py: 0, display: "flex", justifyContent: "flex-start" }}>
                                                <ChevronRightIcon sx={{ color: "red" }} />
                                                <Typography sx={{ color: "", fontWeight: "500", mb: 1 }}>

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
                                    {data?.section4_title}
                                </Typography>

                            </AccordionSummary>

                            <AccordionDetails>

                                <Typography
                                    variant=""
                                    sx={{ fontWeight: 400, fontFamily: "Roboto", }}
                                >
                                    {data?.section4_desc}
                                </Typography>
                                {/* TOP SECTION : TEXT + IMAGE */}
                                <Grid container spacing={3} alignItems="flex-start" mt={4}>
                                    {/* RIGHT IMAGE */}
                                    <Grid item size={{ xs: 12, md: 4 }} textAlign="left">
                                        <Box
                                            component="img"
                                            src={data?.section4_img}
                                            alt="VFBD Machine"
                                            sx={{
                                                width: "100%",
                                                maxWidth: "280px",
                                                borderRadius: "8px",
                                            }}
                                        />
                                    </Grid>

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 8 }}>
                                        <Typography sx={{ fontFamily: "Roboto", color: "#333", textAlign: "justify", mt: 1 }}
                                            dangerouslySetInnerHTML={{ __html: data?.section4_desc2 }}
                                        >





                                        </Typography>

                                        <Typography sx={{ fontFamily: "Roboto", color: "#333", textAlign: "justify", mt: 1 }}>
                                            Sharpening of circumferential as well as helical grooves Odd & Even of 50, 55, 60, 65, 70, 80, and 100, also length and diameter of roller with quality finish and accuracy can be done by the application of Automatic system.




                                        </Typography>

                                    </Grid>


                                </Grid>

                                {/* SPACING */}
                                <Box mt={3} />

                                {
                                    helixParsedData?.map((item) => {
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
                                    {data?.section5_title}
                                </Typography>

                            </AccordionSummary>

                            <AccordionDetails>


                                {/* TOP SECTION : TEXT + IMAGE */}
                                <Grid container spacing={3} alignItems="flex-start" mt={4}>
                                    {/* RIGHT IMAGE */}
                                    <Grid item size={{ xs: 12, md: 4 }} textAlign="left">
                                        <Box
                                            component="img"
                                            src={data?.section5_img}
                                            alt="VFBD Machine"
                                            sx={{
                                                width: "100%",
                                                maxWidth: "280px",
                                                borderRadius: "8px",
                                            }}
                                        />
                                        <Typography sx={{ textAlign: "center", mt: "20px", fontWeight: "600", fontFamily: "Roboto" }}>
                                            {data?.section5_img_title}
                                        </Typography>
                                    </Grid>




                                </Grid>









                            </AccordionDetails>
                        </Accordion>


                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Workshop;
