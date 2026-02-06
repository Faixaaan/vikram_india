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
    Container,
} from "@mui/material";

import { Link } from "react-router-dom";
import mmsStructure from "../../Assets/mms-structure.jpg"; // update your image
import '../../App.css'

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import structure1 from '../../Assets/mm-structure-01.jpg'
import structure2 from '../../Assets/mm-structure-02.jpg'
import structure3 from '../../Assets/mm-structure-03.jpg'
import structure4 from '../../Assets/mm-structure-04.jpg'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { axiosInstance } from "../../Api/Axios/axios";
import { endpoints } from "../../Api/EndPoints/endpoints";



const leftMenu = [
    "INFRASTRUCTURE & MACHINERY",
    "PRODUCT & PORTFOLIO",
    "PROFILE AVAILABILITY",
    "TECHNICAL SPECIFICATION",
    "QUALITY & SAFETY",


];

const img = [
    { img: structure1 },
    { img: structure2 },
    { img: structure3 },
]

const Manufacturing = () => {

    const [imageData, setImageData] = useState([])
    const [data, setData] = useState([])
    console.log(data, 'porduct_portfolio')


    const fetchImageData = async () => {
        try {

            const resData = await axiosInstance.get(endpoints.ModuleMounting.product_portfolio)
            setData(resData?.data?.data)


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
                    <Typography color="text.primary" sx={{ fontSize: "15px" }}>Product & Portfolio</Typography>
                </Breadcrumbs>

                {/* PAGE TITLE */}




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
                                        backgroundColor: item === "PRODUCT & PORTFOLIO" ? "#1A73E8" : "transparent",
                                        color: item === "PRODUCT & PORTFOLIO" ? "#fff" : "#000",
                                        "&:hover": {
                                            backgroundColor: item === "PRODUCT & PORTFOLIO" ? "#1A73E8" : "#f5f5f5",
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
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, md: 12 }}>
                                    <Typography sx={{ fontSize: "16px", fontFamily: "Roboto", textAlign: "justify" }}>
                                        {data?.mouting_desc}
                                    </Typography>
                                </Grid>

                            </Grid>






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
                                    <Box>
                                        <Grid container spacing={2}>
                                            {/* RIGHT IMAGE */}
                                            <Grid item size={{ xs: 12, md: 4 }}>
                                                <img src={data?.section1_image} style={{ width: "100%" }} />
                                            </Grid>

                                            {/* LEFT CONTENT */}
                                            <Grid item size={{ xs: 12, md: 8 }}>

                                                <Typography
                                                    sx={{
                                                        fontSize: "16px",
                                                        fontFamily: "Roboto",
                                                        textAlign: "justify",
                                                        mt: 0
                                                    }}
                                                    dangerouslySetInnerHTML={{
                                                        __html: data?.section1_description
                                                    }}
                                                >



                                                </Typography>



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
                                    <Typography
                                        sx={{
                                            fontSize: { md: "20px", xs: "16px" },
                                            fontWeight: 500,
                                            fontFamily: "Roboto"
                                        }}
                                    >
                                        {data?.section2_title}
                                    </Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Box>
                                        <Grid container spacing={2}>
                                            {/* RIGHT IMAGE */}
                                            <Grid item size={{ xs: 12, md: 4 }}>
                                                <img src={data?.section2_image} style={{ width: "100%" }} />
                                            </Grid>

                                            {/* LEFT CONTENT */}
                                            <Grid item size={{ xs: 12, md: 8 }}>

                                                <Typography
                                                    sx={{
                                                        fontSize: "16px",
                                                        fontFamily: "Roboto",
                                                        textAlign: "justify",
                                                        mt: 0
                                                    }}
                                                    dangerouslySetInnerHTML={{
                                                        __html: data?.section2_description
                                                    }}
                                                >



                                                </Typography>



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
                                    <Typography
                                        sx={{
                                            fontSize: { md: "20px", xs: "16px" },
                                            fontWeight: 500,
                                            fontFamily: "Roboto"
                                        }}
                                    >
                                        {data?.section3_title}
                                    </Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Box>
                                        <Grid container spacing={2}>
                                            {/* RIGHT IMAGE */}
                                            <Grid item size={{ xs: 12, md: 4 }}>
                                                <img src={data?.section3_image} style={{ width: "100%" }} />
                                            </Grid>

                                            {/* LEFT CONTENT */}
                                            <Grid item size={{ xs: 12, md: 8 }}>

                                                <Typography
                                                    sx={{
                                                        fontSize: "16px",
                                                        fontFamily: "Roboto",
                                                        textAlign: "justify",
                                                        mt: 0
                                                    }}
                                                    dangerouslySetInnerHTML={{
                                                        __html: data?.section3_description
                                                    }}
                                                >



                                                </Typography>



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
                                    <Typography
                                        sx={{
                                            fontSize: { md: "20px", xs: "16px" },
                                            fontWeight: 500,
                                            fontFamily: "Roboto"
                                        }}
                                    >
                                        {data?.section4_title}
                                    </Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Box>
                                        <Grid container spacing={2}>
                                            {/* RIGHT IMAGE */}
                                            <Grid item size={{ xs: 12, md: 4 }}>
                                                <img src={data?.section4_image} style={{ width: "100%" }} />
                                            </Grid>

                                            {/* LEFT CONTENT */}
                                            <Grid item size={{ xs: 12, md: 8 }}>

                                                <Typography
                                                    sx={{
                                                        fontSize: "16px",
                                                        fontFamily: "Roboto",
                                                        textAlign: "justify",
                                                        mt: 0
                                                    }}
                                                    dangerouslySetInnerHTML={{
                                                        __html: data?.section4_description
                                                    }}
                                                >



                                                </Typography>



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
                                    <Typography
                                        sx={{
                                            fontSize: { md: "20px", xs: "16px" },
                                            fontWeight: 500,
                                            fontFamily: "Roboto"
                                        }}
                                    >
                                        Heading Five (5)
                                    </Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Box>
                                        <Grid container spacing={2}>
                                            {/* RIGHT IMAGE */}
                                            <Grid item size={{ xs: 12, md: 4 }}>
                                                <img src={data?.section4_image} style={{ width: "100%" }} />
                                            </Grid>

                                            {/* LEFT CONTENT */}
                                            <Grid item size={{ xs: 12, md: 8 }}>

                                                <Typography
                                                    sx={{
                                                        fontSize: "16px",
                                                        fontFamily: "Roboto",
                                                        textAlign: "justify",
                                                        mt: 0
                                                    }}

                                                >

                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum libero laboriosam ipsa in molestias nulla, non id quasi, unde sapiente repellendus amet vero provident cumque blanditiis. Eveniet sit facilis tempore iure vero modi, quam labore autem amet omnis. Illum adipisci ipsum voluptatum consequuntur laborum sit ipsa veniam maxime sequi vel delectus illo quibusdam ab aut minima, harum obcaecati. Voluptas natus possimus neque doloribus magnam excepturi veritatis ducimus ipsa voluptatem vero veniam debitis voluptatibus modi illo, placeat tenetur voluptates velit, voluptatum amet nostrum ipsum distinctio rem? Illo ipsa hic modi, esse praesentium cum molestiae sequi doloremque quia corrupti nemo saepe.

                                                </Typography>



                                            </Grid>



                                            {/* BOTTOM FULL WIDTH CONTENT */}


                                        </Grid>
                                    </Box>
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

export default Manufacturing;
