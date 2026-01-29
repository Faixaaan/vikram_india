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
import mmsStructure from "../../Assets/mms-structure.jpg"; // update your image
import '../../App.css'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";


import structure1 from '../../Assets/product-01.jpg'
import structure2 from '../../Assets/product-02.jpg'
import structure3 from '../../Assets/product-03.jpg'

import structure4 from '../../Assets/product-04.jpg'
import structure5 from '../../Assets/product-05.jpg'
import { axiosInstance } from "../../Api/Axios/axios";
import { endpoints } from "../../Api/EndPoints/endpoints";


const leftMenu = [
    "INFRASTRUCTURE & MACHINERY",
    "PRODUCT & PORTFOLIO",
    "TECHNICAL SPECIFICATION",
    "QUALITY & SAFETY",


];

const img = [
    { img: structure1 },
    { img: structure2 },
    { img: structure3 },

]

const Product = () => {

    const [imageData, setImageData] = useState([])
    const [data, setData] = useState({})


    const fetchImageData = async () => {
        try {
            const res = await axiosInstance.get(endpoints.ModuleMounting.getProductData)
            const resData = await axiosInstance.get(endpoints.ModuleMounting.products);
            setData(resData?.data?.data)

            setImageData(res?.data?.data)
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
                <Breadcrumbs sx={{ mb: 2, fontSize: "14px" }}>
                    <MLink component={Link} to="/" underline="hover" color="inherit">
                        Home
                    </MLink>
                    <Typography color="inherit">Product & Services</Typography>
                    <Typography color="text.primary">Module Mounting Structure</Typography>
                    <Typography color="text.primary">QUALITY & SAFETY</Typography>
                </Breadcrumbs>

               

               

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
                            QUALITY & SAFETY
                        </Typography>

                        

                        <List sx={{ border: "1px solid #ddd" }}>
                            {leftMenu.map((item) => (
                                <ListItemButton
                                    key={item}
                                    component={Link}
                                    to={`/products/${item.toLowerCase().replace(/ /g, "-")}`}
                                    sx={{
                                        borderBottom: "1px solid #eee",
                                        backgroundColor: item === "QUALITY & SAFETY" ? "#1A73E8" : "transparent",
                                        color: item === "QUALITY & SAFETY" ? "#fff" : "#000",
                                        "&:hover": {
                                            backgroundColor: item === "QUALITY & SAFETY" ? "#1A73E8" : "#f5f5f5",
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
                    <Grid item size={{ xs: 12, md: 9 }} sx={{mt:6}} >
                        <Typography
                            sx={{
                                fontSize: "24px",
                                fontWeight: 600,
                                mb: 0,
                                fontFamily: "Roboto",
                                color:"#1A73E8"
                            }}
                        >
                            QUALITY & SAFETY
                        </Typography>
                     


                        {/* Introduction */}


                        <Box>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, md: 12 }}>
                                    <Typography sx={{ fontSize: "16px", fontFamily: "Roboto", textAlign: "justify" }}
                                        dangerouslySetInnerHTML={{ __html: data?.product_desc }}

                                    >

                                    </Typography>
                                </Grid>

                            </Grid>





                            <Accordion
                                sx={{
                                    background: "#fff",
                                    boxShadow: "0px 2px 8px rgba(0,0,0,0.10)",
                                    borderRadius: "8px",
                                    "&:before": { display: "none" },
                                    mt: 4
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: "#1A73E8" }} />}
                                    sx={{
                                        backgroundColor: "#f8f8f8",
                                        borderBottom: "1px solid #eee",
                                        borderRadius: "8px"
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: { md: "20px", xs: "16px" },
                                            fontWeight: 600,
                                            fontFamily: "Roboto"
                                        }}
                                    >
                                        Quality & Assurance
                                    </Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Box>
                                        <Grid container spacing={2}>
                                            {/* RIGHT IMAGE */}
                                            <Grid item size={{ xs: 12, md: 4 }}>
                                                <img src={structure4} style={{ width: "100%" }} />
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
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repudiandae magnam cupiditate rerum at aliquam? Soluta esse dolor alias commodi, temporibus quidem illo aliquam nobis assumenda est voluptatum hic aspernatur atque ab. Eveniet natus, enim vel iure minus, est reprehenderit aspernatur veritatis omnis eum maiores illum quasi delectus aliquid quidem.


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
                                    <Typography sx={{ fontSize: { md: "20px", xs: "16px" }, fontWeight: "600", fontFamily: "Roboto" }}>Compliance</Typography>
                                </AccordionSummary>



                                <AccordionDetails>
                                    <Box>
                                        <Grid container spacing={2}>
                                            {/* RIGHT IMAGE */}
                                            <Grid item size={{ xs: 12, md: 4 }}>
                                                <img src={structure4} style={{ width: "100%" }} />
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
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repudiandae magnam cupiditate rerum at aliquam? Soluta esse dolor alias commodi, temporibus quidem illo aliquam nobis assumenda est voluptatum hic aspernatur atque ab. Eveniet natus, enim vel iure minus, est reprehenderit aspernatur veritatis omnis eum maiores illum quasi delectus aliquid quidem.


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
                                    <Typography sx={{ fontSize: { md: "20px", xs: "16px" }, fontWeight: "600", fontFamily: "Roboto" }}>Safety</Typography>
                                </AccordionSummary>



                                <AccordionDetails>
                                    <Box>
                                        <Grid container spacing={2}>
                                            {/* RIGHT IMAGE */}
                                            <Grid item size={{ xs: 12, md: 4 }}>
                                                <img src={structure4} style={{ width: "100%" }} />
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
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repudiandae magnam cupiditate rerum at aliquam? Soluta esse dolor alias commodi, temporibus quidem illo aliquam nobis assumenda est voluptatum hic aspernatur atque ab. Eveniet natus, enim vel iure minus, est reprehenderit aspernatur veritatis omnis eum maiores illum quasi delectus aliquid quidem.


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

export default Product;
