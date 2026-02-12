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
import controllerImage from "../../../src/Assets/rolling.jpg";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const leftMenu = [
    "STEAMING PROCESS",
    "ROASTING PROCESS (PANNING)",
    
    "ROLLING AND SHAPING PROCESS",
    "DRYING PROCESS",
    "SORTING & GRADING PROCESS",
    "FINAL BLENDING & PACKING",

];




const GreenBlending = () => {

    const [data, setData] = useState([])

    const fetchDryingData = async () => {
        try {
            const res = await axiosInstance.get(endpoints.teaProcessingMachinery.withering);
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
                <Breadcrumbs sx={{ mb: 2, fontSize: "15px" }}>
                    <MLink component={Link} to="/" underline="hover" color="inherit">
                        Home
                    </MLink>
                    <Typography color="inherit" sx={{  fontSize: "15px" }}>Product & Services</Typography>
                    <Typography color="text.primary" sx={{ fontSize: "15px",textDecoration:"none" }}  component={Link} underline="hover" to="/products/processing-card">Green Tea Processing Machinery</Typography>
                    <Typography color="text.primary" sx={{  fontSize: "15px" }}>Final Blending & Packing</Typography>
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
                            Product & Services
                        </Typography>

                        

                        <List sx={{ border: "1px solid #ddd" }}>
                            {leftMenu.map((item) => (
                                <ListItemButton
                                    key={item}
                                    component={Link}
                                    to={`/products/ctc/${`green`}${item.toLowerCase().replace(/ /g, "-")}`}
                                    sx={{
                                        borderBottom: "1px solid #eee",
                                        backgroundColor: item === "FINAL BLENDING & PACKING" ? "green" : "transparent",
                                        color: item === "FINAL BLENDING & PACKING" ? "#fff" : "#000",
                                        "&:hover": {
                                            backgroundColor: item === "FINAL BLENDING & PACKING" ? "green" : "#f5f5f5",
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
                    <Grid item size={{ xs: 12, md: 9 }} sx={{mt:3}}>
                      

                       

                        {/* Technical Specification Table */}

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
                                <Typography sx={{ fontSize: { md: "20px", xs: "16px" }, fontWeight: 500 }}>
                                     Mechanical Tea Bulkers
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                
                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 4 }} textAlign="right">
                                        <Box
                                            component="img"
                                            src={controllerImage}
                                            alt="VFBD Machine"
                                            sx={{
                                                width: "100%",
                                                
                                            }}
                                        />
                                    </Grid>
                                    <Grid item size={{ xs: 12, md: 8 }} >
                                        <Typography>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, cum esse doloribus vitae optio laudantium accusantium omnis rerum ratione, aliquam mollitia totam nostrum debitis ullam similique voluptas reprehenderit at impedit architecto dolores. Quidem laudantium accusamus officia ad culpa maiores voluptate voluptas, repellat beatae illo ea necessitatibus commodi nulla. Nulla odit magni molestias provident ullam odio! Neque enim rem excepturi possimus dolor veritatis eveniet culpa doloremque nobis commodi quis quos amet accusantium numquam distinctio sed sequi voluptas optio, reiciendis atque aperiam minima earum dignissimos repellat! Corporis tenetur et quibusdam nulla! Impedit quisquam perferendis quo eveniet, explicabo fugiat exercitationem temporibus unde asperiores.
                                        </Typography>

                                    </Grid>

                                    {/* RIGHT IMAGE */}
                                    
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
                            }} expandIcon={<ExpandMoreIcon sx={{ color: "red" }} />}>
                                <Typography sx={{ fontSize: { md: "20px", xs: "16px" }, fontWeight: 500 }}>
                                    Vibro-Packers
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                
                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 4 }} textAlign="right">
                                        <Box
                                            component="img"
                                            src={controllerImage}
                                            alt="VFBD Machine"
                                            sx={{
                                                width: "100%",
                                                
                                            }}
                                        />
                                    </Grid>
                                    <Grid item size={{ xs: 12, md: 8 }} >
                                        <Typography>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, cum esse doloribus vitae optio laudantium accusantium omnis rerum ratione, aliquam mollitia totam nostrum debitis ullam similique voluptas reprehenderit at impedit architecto dolores. Quidem laudantium accusamus officia ad culpa maiores voluptate voluptas, repellat beatae illo ea necessitatibus commodi nulla. Nulla odit magni molestias provident ullam odio! Neque enim rem excepturi possimus dolor veritatis eveniet culpa doloremque nobis commodi quis quos amet accusantium numquam distinctio sed sequi voluptas optio, reiciendis atque aperiam minima earum dignissimos repellat! Corporis tenetur et quibusdam nulla! Impedit quisquam perferendis quo eveniet, explicabo fugiat exercitationem temporibus unde asperiores.
                                        </Typography>

                                    </Grid>

                                    {/* RIGHT IMAGE */}
                                    
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
                            }} expandIcon={<ExpandMoreIcon sx={{ color: "red" }} />}>
                                <Typography sx={{ fontSize: { md: "20px", xs: "16px" }, fontWeight: 500 }}>
                                    Automatic Pouch Packing Machine
                                </Typography>
                            </AccordionSummary>

                            <AccordionDetails>
                                
                                <Grid container spacing={3} alignItems="flex-start">

                                    {/* LEFT TEXT */}
                                    <Grid item size={{ xs: 12, md: 4 }} textAlign="right">
                                        <Box
                                            component="img"
                                            src={controllerImage}
                                            alt="VFBD Machine"
                                            sx={{
                                                width: "100%",
                                                
                                            }}
                                        />
                                    </Grid>
                                    <Grid item size={{ xs: 12, md: 8 }} >
                                        <Typography>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, cum esse doloribus vitae optio laudantium accusantium omnis rerum ratione, aliquam mollitia totam nostrum debitis ullam similique voluptas reprehenderit at impedit architecto dolores. Quidem laudantium accusamus officia ad culpa maiores voluptate voluptas, repellat beatae illo ea necessitatibus commodi nulla. Nulla odit magni molestias provident ullam odio! Neque enim rem excepturi possimus dolor veritatis eveniet culpa doloremque nobis commodi quis quos amet accusantium numquam distinctio sed sequi voluptas optio, reiciendis atque aperiam minima earum dignissimos repellat! Corporis tenetur et quibusdam nulla! Impedit quisquam perferendis quo eveniet, explicabo fugiat exercitationem temporibus unde asperiores.
                                        </Typography>

                                    </Grid>

                                    {/* RIGHT IMAGE */}
                                    
                                </Grid>

                              

                            </AccordionDetails>
                        </Accordion>

                        




                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};



export default GreenBlending;
