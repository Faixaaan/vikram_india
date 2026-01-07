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
    "INTRODUCTION",
    "MANUFACTURING AND QUALITY",
    "MANUFACTURING WITH HIGH TENSILE IS PROJECT",
    "PRODUCTS",
    "SOLAR PUMPS (AC PUMPS)",

];

const img = [
    { img: structure1 },
    { img: structure2 },
    { img: structure3 },

]

const Product = () => {

   const [imageData ,setImageData] = useState([])
      
      
          const fetchImageData = async()=>{
              try{
                  const res = await axiosInstance.get(endpoints.ModuleMounting.getProductData)
                  
                  setImageData(res?.data?.data)
              }
              catch(err){
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
                    <Typography color="text.primary">PRODUCTS</Typography>
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
                    PRODUCTS
                </Typography>

                <Typography sx={{ fontSize: "15px", mb: 3, color: "#d32f2f", fontFamily: "Open Sans" }}>
                    Setting global benchmarks in tea processing machinery industry
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
                                color: "#d32f2f",
                                fontFamily: "Open Sans"
                            }}
                        >
                            PRODUCTS
                        </Typography>

                        <List sx={{ border: "1px solid #ddd" }}>
                            {leftMenu.map((item) => (
                                <ListItemButton
                                    key={item}
                                    component={Link}
                                    to={`/products/${item.toLowerCase().replace(/ /g, "-")}`}
                                    sx={{
                                        borderBottom: "1px solid #eee",
                                        backgroundColor: item === "PRODUCTS" ? "green" : "transparent",
                                        color: item === "PRODUCTS" ? "#fff" : "#000",
                                        "&:hover": {
                                            backgroundColor: item === "PRODUCTS" ? "green" : "#f5f5f5",
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
                            PRODUCTS
                        </Typography>


                        {/* Introduction */}


                        <Box>
                            <Grid container spacing={2}>
                                <Grid size={{ xs: 12, md: 12 }}>
                                    <Typography sx={{ fontSize: "16px", fontFamily: "Open Sans", textAlign: "justify" }}>
                                        We manufacture different sizes of Column, Rafters, "C" & "Z" Purlins, Struts, Bracing Angle, Cleat Short and Tie Angle etc.. We designed as per IS norms, our product are of advanced quality. We can provide hot dip galvanized to a thickness of 80 to 120 Micron.
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
                                    expandIcon={<ExpandMoreIcon sx={{ color: "#c00" }} />}
                                    sx={{
                                        backgroundColor: "#f8f8f8",
                                        borderBottom: "1px solid #eee",
                                        borderRadius: "8px"
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "20px",
                                            fontWeight: 600,
                                            fontFamily: "Open Sans"
                                        }}
                                    >
                                        Product Profile:-
                                    </Typography>
                                </AccordionSummary>

                                <AccordionDetails sx={{ padding: "20px" }}>
                                    <Grid item xs={12}>

                                        <Typography sx={headingStyle}>
                                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                            Single and Double pole structure
                                        </Typography>

                                        <Typography sx={headingStyle}>
                                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                            Double pole structure with struts
                                        </Typography>

                                        <Typography sx={headingStyle}>
                                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                            Seasonal structure with unique turn buckle mechanism tilting.
                                        </Typography>

                                        <Typography sx={headingStyle}>
                                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                            Double pole seasonal tilting and static structure with struts.
                                        </Typography>

                                        <Typography sx={headingStyle}>
                                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                            Pre-galvanized structure for solar projects.
                                        </Typography>

                                        <Typography sx={headingStyle}>
                                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                            Solar parking structure.
                                        </Typography>

                                    </Grid>
                                </AccordionDetails>
                            </Accordion>

                            <Grid container spacing={2} mt={6}>
                                <Grid size={{ xs: 12, md: 12 }}>
                                    <Typography sx={{ fontSize: "16px", fontFamily: "Open Sans", textAlign: "justify" }}>
                                        Module mounting structure are easy to install structure provided an excellent solution to rural properties as they can be used on mountainous and rough terrain. Our products are quickly delivered and are easy to install.
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
                                    expandIcon={<ExpandMoreIcon sx={{ color: "#c00" }} />}
                                    sx={{
                                        backgroundColor: "#f8f8f8",
                                        borderBottom: "1px solid #eee",
                                        borderRadius: "8px"
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: {md:"20px",xs:"16px"},
                                            fontWeight: 600,
                                            fontFamily: "Open Sans"
                                        }}
                                    >
                                        Mounting Structure - Types of Section
                                    </Typography>
                                </AccordionSummary>

                                <AccordionDetails sx={{ padding: "20px" }}>
                                    <Grid item xs={12}>

                                        <Typography sx={headingStyle}>
                                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                            Single and Double pole structure
                                        </Typography>

                                        <Typography sx={headingStyle}>
                                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                            C' Channel
                                        </Typography>

                                        <Typography sx={headingStyle}>
                                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                            'C' Channel with Lip.
                                        </Typography>

                                        <Typography sx={headingStyle}>
                                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                            Strut Rail
                                        </Typography>

                                        <Typography sx={headingStyle}>
                                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                            'Z' Channel.
                                        </Typography>

                                        <Typography sx={headingStyle}>
                                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                            'Z' Channel with Lip
                                        </Typography>

                                        <Typography sx={headingStyle}>
                                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                            Sigma Section.
                                        </Typography>

                                        <Typography sx={headingStyle}>
                                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                            'L' Angle.
                                        </Typography>

                                    </Grid>
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
                                }} expandIcon={<ExpandMoreIcon sx={{ color: "#c00" }} />}>
                                    <Typography sx={{ fontSize: {md:"20px",xs:"16px"}, fontWeight: "600", fontFamily: "Open Sans" }}>Image Gallery</Typography>
                                </AccordionSummary>

                                <AccordionDetails>

                                    <Grid container spacing={2}>
                                        {imageData?.map((item, index) => (
                                            <Grid item size={{ xs: 12, md: 4 }} key={index}>
                                                <img
                                                    src={item.image}
                                                    style={{
                                                        width: "100%",
                                                        borderRadius: "8px",
                                                        display: "block"
                                                    }}
                                                />
                                            </Grid>
                                        ))}
                                    </Grid>

                                </AccordionDetails>
                            </Accordion>

                            <Box mt={3}>

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
                                        expandIcon={<ExpandMoreIcon sx={{ color: "#c00" }} />}
                                        sx={{
                                            backgroundColor: "#f8f8f8",
                                            borderBottom: "1px solid #eee",
                                            borderRadius: "8px"
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: {md:"20px",xs:"16px"},
                                                fontWeight: 600,
                                                fontFamily: "Open Sans"
                                            }}
                                        >
                                            Technical Specification Range
                                        </Typography>
                                    </AccordionSummary>

                                    <AccordionDetails sx={{ padding: "20px" }}>
                                        <Grid container spacing={2}>

                                            {/* LEFT SIDE TABLE */}
                                            <Grid item size={{ xs: 12, md: 8 }}>
                                                <TableContainer
                                                    component={Paper}
                                                    sx={{
                                                        boxShadow: "0px 2px 10px rgba(0,0,0,0.06)",
                                                        borderRadius: "10px",
                                                        overflowX: { xs: "auto", md: "visible" }, // 🔥 Mobile scroll
                                                        display: "block"
                                                    }}
                                                >
                                                    <Table sx={{ borderCollapse: "separate", borderSpacing: 0, minWidth: "600px" }}>
                                                        <TableHead>
                                                            <TableRow sx={{ backgroundColor: "#f5f7fa" }}>
                                                                <TableCell
                                                                    sx={{
                                                                        fontWeight: 700,
                                                                        borderRight: "1px solid #e0e0e0",
                                                                        borderBottom: "2px solid #e0e0e0",
                                                                        fontSize: "15px"
                                                                    }}
                                                                >
                                                                    Description
                                                                </TableCell>
                                                                <TableCell
                                                                    sx={{
                                                                        fontWeight: 700,
                                                                        borderRight: "1px solid #e0e0e0",
                                                                        borderBottom: "2px solid #e0e0e0",
                                                                        fontSize: "15px"
                                                                    }}
                                                                >
                                                                    Minimum
                                                                </TableCell>
                                                                <TableCell
                                                                    sx={{
                                                                        fontWeight: 700,
                                                                        borderBottom: "2px solid #e0e0e0",
                                                                        fontSize: "15px"
                                                                    }}
                                                                >
                                                                    Maximum
                                                                </TableCell>
                                                            </TableRow>
                                                        </TableHead>

                                                        <TableBody>
                                                            {[
                                                                ["Web Lip Ch.", "70MM", "300MM"],
                                                                ["Web Plain Ch.", "40MM", "250MM"],
                                                                ["Flange", "30MM", "80MM"],
                                                                ["Lip", "10MM", "25MM"],
                                                                ["Thickness", "1MM", "3MM"]
                                                            ].map((row, index) => (
                                                                <TableRow
                                                                    key={index}
                                                                    sx={{
                                                                        "&:hover": { backgroundColor: "#fafafa" }
                                                                    }}
                                                                >
                                                                    {row.map((cell, cellIndex) => (
                                                                        <TableCell
                                                                            key={cellIndex}
                                                                            sx={{
                                                                                borderRight: cellIndex < 2 ? "1px solid #eee" : "none",
                                                                                borderBottom: "1px solid #eee",
                                                                                fontSize: "14px",
                                                                                paddingY: "10px"
                                                                            }}
                                                                        >
                                                                            {cell}
                                                                        </TableCell>
                                                                    ))}
                                                                </TableRow>
                                                            ))}
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>

                                            </Grid>

                                            {/* RIGHT SIDE IMAGE */}
                                            <Grid item size={{ xs: 12, md: 4 }}>
                                                <img src={structure4} style={{ width: "100%", borderRadius: "6px" }} />
                                            </Grid>

                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>

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
                                        expandIcon={<ExpandMoreIcon sx={{ color: "#c00" }} />}
                                        sx={{
                                            backgroundColor: "#f8f8f8",
                                            borderBottom: "1px solid #eee",
                                            borderRadius: "8px"
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: {md:"20px",xs:"16px"},
                                                fontWeight: 600,
                                                fontFamily: "Open Sans"
                                            }}
                                        >
                                            Web Angle – Technical Specifications
                                        </Typography>
                                    </AccordionSummary>

                                    <AccordionDetails sx={{ padding: "20px" }}>
                                        <Grid container spacing={2} mt={0}>

                                            {/* LEFT SIDE TABLE */}
                                            <Grid item size={{ xs: 12, md: 8 }}>
                                                <TableContainer
                                                    component={Paper}
                                                    sx={{
                                                        boxShadow: "0px 2px 10px rgba(0,0,0,0.06)",
                                                        borderRadius: "10px",
                                                        overflow: "hidden",
                                                        overflowX: "auto" // For horizontal scrolling on small screens
                                                    }}
                                                >
                                                    <Table sx={{
                                                        borderCollapse: "separate",
                                                        borderSpacing: 0,
                                                        minWidth: { xs: "300px", sm: "auto" } // Ensure minimum width on mobile
                                                    }}>
                                                        <TableHead>
                                                            <TableRow sx={{ backgroundColor: "#f5f7fa" }}>
                                                                <TableCell
                                                                    sx={{
                                                                        fontWeight: 700,
                                                                        borderRight: "1px solid #e0e0e0",
                                                                        borderBottom: "2px solid #e0e0e0",
                                                                        fontSize: { xs: "13px", sm: "14px", md: "15px" },
                                                                        padding: { xs: "8px", sm: "10px", md: "12px" },
                                                                        whiteSpace: "nowrap"
                                                                    }}
                                                                >
                                                                    Description
                                                                </TableCell>
                                                                <TableCell
                                                                    sx={{
                                                                        fontWeight: 700,
                                                                        borderRight: "1px solid #e0e0e0",
                                                                        borderBottom: "2px solid #e0e0e0",
                                                                        fontSize: { xs: "13px", sm: "14px", md: "15px" },
                                                                        padding: { xs: "8px", sm: "10px", md: "12px" },
                                                                        whiteSpace: "nowrap"
                                                                    }}
                                                                >
                                                                    Minimum
                                                                </TableCell>
                                                                <TableCell
                                                                    sx={{
                                                                        fontWeight: 700,
                                                                        borderBottom: "2px solid #e0e0e0",
                                                                        fontSize: { xs: "13px", sm: "14px", md: "15px" },
                                                                        padding: { xs: "8px", sm: "10px", md: "12px" },
                                                                        whiteSpace: "nowrap"
                                                                    }}
                                                                >
                                                                    Maximum
                                                                </TableCell>
                                                            </TableRow>
                                                        </TableHead>

                                                        <TableBody>
                                                            {[
                                                                ["Web Angle", "20X20MM", "200X200MM"],
                                                                ["Thickness", "1MM", "3MM"],
                                                                ["Length", "1 Mtrs.", "7 Mtrs."],
                                                            ].map((row, index) => (
                                                                <TableRow
                                                                    key={index}
                                                                    sx={{
                                                                        "&:hover": { backgroundColor: "#fafafa" }
                                                                    }}
                                                                >
                                                                    {row.map((cell, cellIndex) => (
                                                                        <TableCell
                                                                            key={cellIndex}
                                                                            sx={{
                                                                                borderRight: cellIndex < 2 ? "1px solid #eee" : "none",
                                                                                borderBottom: "1px solid #eee",
                                                                                fontSize: { xs: "12px", sm: "13px", md: "14px" },
                                                                                padding: { xs: "8px", sm: "9px", md: "10px" },
                                                                                lineHeight: 1.4
                                                                            }}
                                                                        >
                                                                            {cell}
                                                                        </TableCell>
                                                                    ))}
                                                                </TableRow>
                                                            ))}
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </Grid>

                                            {/* RIGHT SIDE IMAGE */}
                                            <Grid item size={{ xs: 12, md: 4 }}>
                                                <img src={structure5} style={{ width: "100%", borderRadius: "6px" }} />
                                            </Grid>

                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>


                            </Box>

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
                                    expandIcon={<ExpandMoreIcon sx={{ color: "#c00" }} />}
                                    sx={{
                                        backgroundColor: "#f8f8f8",
                                        borderBottom: "1px solid #eee",
                                        borderRadius: "8px"
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: {md:"20px",xs:"16px"},
                                            fontWeight: 600,
                                            fontFamily: "Open Sans"
                                        }}
                                    >
                                        Benefits of our product
                                    </Typography>
                                </AccordionSummary>

                                <AccordionDetails sx={{ padding: "20px" }}>
                                    <Grid item xs={12}>

                                        <Typography sx={headingStyle}>
                                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                            Reduce overall project cost and significantly reduce installation time.
                                        </Typography>

                                        <Typography sx={headingStyle}>
                                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                            High strength steel enables better capacity and longer spans.
                                        </Typography>

                                        <Typography sx={headingStyle}>
                                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                            No site drilling and cutting required.
                                        </Typography>

                                        <Typography sx={headingStyle}>
                                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                            Maintenance-free owing to application of proper surface finish.
                                        </Typography>

                                        <Typography sx={headingStyle}>
                                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                            Factory-finished, cut to exact length with pre-punched holes to avoid time and material wastage.
                                        </Typography>

                                        <Typography sx={headingStyle}>
                                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                            'Z' Channel with Lip
                                        </Typography>

                                        <Typography sx={headingStyle}>
                                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                                            Accessories like connecting plates, angles, splicing plates supplied along with main structure.
                                        </Typography>

                                    </Grid>
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
    fontFamily: "Open Sans",
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
