import {
    Box, Container, Grid, Typography, Accordion,
    AccordionSummary,
    AccordionDetails,
    Divider,
} from '@mui/material'
import React from 'react'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import mmsStructure from "../../Assets/mms-structure.jpg";
import infrastructure from '../../Assets/infrastructure.jpg'

const Facilities = () => {
    return (
        <>
            <Box>
                <Container maxWidth='xl' sx={{ padding: "0px 35px!important" }}>
                    <Grid container spacing={6}>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <Box sx={{ padding: { md: "40px 0px", xs: "15px 0px" } }}>
                                <Typography sx={{ fontFamily: "Open Sans", fontWeight: "700", borderBottom: "2px solid black", fontSize: "18px", paddingBottom: "20px" }}>
                                    MANUFACTURING FACILITIES
                                </Typography>
                                <Typography sx={{ paddingTop: "20px", fontSize: "18px", fontWeight: "400", fontFamily: "Open Sans", textAlign: "justify" }}>
                                    "Setting global benchmarks in tea machinery manufacturing, Vikram India boasts of world-class production facilities, complete with Testing and Quality Control units."
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 9 }}>
                            <Box sx={{ padding: { md: "40px 0px 10px 0px", xs: "15px 0px" } }}>
                                <Typography sx={{ textAlign: "right", display: "flex", justifyContent: { md: "flex-end", xs: "flex-start" }, fontFamily: "Open Sans", borderBottom: "2px solid black", paddingBottom: "23px" }}>
                                    <Link to={'/'} style={{ textDecoration: "none", color: "#000" }}>Home </Link> <KeyboardDoubleArrowRightIcon sx={{ color: "#df0000" }} />Manufacturing Facilities
                                </Typography>
                                <Box sx={{ paddingTop: "20px" }}>
                                    <Typography sx={{ fontFamily: "Open Sans", fontWeight: "500", fontSize: "28px", }}>
                                        MANUFACTURING FACILITIES
                                    </Typography>
                                    <Typography sx={{ fontSize: "16px", fontWeight: "400", fontFamily: "Open Sans", textAlign: "justify", color: "#df0000" }}>
                                        Delivering excellence consistently
                                    </Typography>
                                </Box>
                            </Box>
                            <Box sx={{ margin: "30px 0px" }}>
                                <Accordion sx={{
                                    background: "#fff",
                                    boxShadow: "0px 2px 8px rgba(0,0,0,0.10)",
                                    borderRadius: "8px",
                                    "&:before": { display: "none" },
                                    mt: 4,
                                    mb: 3
                                }}>
                                    <AccordionSummary sx={{
                                        backgroundColor: "#f8f8f8",
                                        borderBottom: "1px solid #eee",
                                        borderRadius: "8px"
                                    }} expandIcon={<ExpandMoreIcon sx={{ color: "#c00" }} />}>
                                        <Typography sx={{ fontSize: { md: "20px", xs: "16px" }, fontWeight: 600 }}>
                                            Location
                                        </Typography>
                                    </AccordionSummary>

                                    <AccordionDetails>

                                        <Box>
                                            <Typography
                                                sx={{
                                                    fontSize: "18px",
                                                    fontFamily: "Open Sans",
                                                    textAlign: "justify",
                                                    mb: 3,
                                                    fontWeight: "500"
                                                }}
                                            >
                                                Vikram's state-of-the-art manufacturing facility at Dhulagarh in West Bengal is spread over an area of 107,081 sq. ft.
                                            </Typography>
                                            <Grid container spacing={2}>
                                                <Grid item size={{ xs: 12, md: 5 }}>
                                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14732.495705557394!2d88.357444!3d22.611847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d7df972ab5b%3A0x6385a190645f228b!2sVikram%20India%20Limited!5e0!3m2!1sen!2sus!4v1765535339084!5m2!1sen!2sus" width="100%" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                                </Grid>
                                                <Grid item size={{ xs: 12, md: 7 }}>
                                                    <Typography
                                                        sx={{
                                                            fontSize: "16px",
                                                            fontFamily: "Open Sans",
                                                            textAlign: "justify",
                                                            fontWeight: "400"
                                                        }}
                                                    >
                                                        This is the first factory of Vikram India Limited wherein the forging of segments started. Thereafter gradually Vikram India Limited entered the Tea Processing machinery world and started ruling the same within a decade.
                                                    </Typography>
                                                </Grid>


                                            </Grid>




                                        </Box>

                                        <Divider sx={{ paddingTop: "20px" }} />
                                        <Box sx={{ mt: 4 }}>

                                            <Grid container spacing={2}>
                                                <Grid item size={{ xs: 12, md: 5 }}>
                                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d58945.73683529483!2d88.19839700000001!3d22.575043!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027fa54396043d%3A0x5add97e395c58457!2sVikram%20India%20Limited!5e0!3m2!1sen!2sus!4v1765536241825!5m2!1sen!2sus" width="100%" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                                </Grid>
                                                <Grid item size={{ xs: 12, md: 7 }}>
                                                    <Typography
                                                        sx={{
                                                            fontSize: "16px",
                                                            fontFamily: "Open Sans",
                                                            textAlign: "justify",
                                                            fontWeight: "400"
                                                        }}
                                                    >
                                                        The unit is equipped with modern machinery and latest technology as well as a highly capable workforce. With ample open space for vehicle parking for easy loading and unloading of goods, adequate warehousing facilities to hold goods, scrap yard, designated grinding area, and many such facilities, the factory adopts a systematic process of
                                                    </Typography>
                                                    <Typography
                                                        sx={{
                                                            fontSize: "20px",
                                                            fontFamily: "Open Sans",
                                                            textAlign: "justify",
                                                            fontWeight: "600"
                                                        }}
                                                    >
                                                        manufacturing world-class tea processing equipment.
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
                                    mb: 2
                                }}>
                                    <AccordionSummary sx={{
                                        backgroundColor: "#f8f8f8",
                                        borderBottom: "1px solid #eee",
                                        borderRadius: "8px"
                                    }} expandIcon={<ExpandMoreIcon sx={{ color: "#c00" }} />}>
                                        <Typography sx={{ fontSize: { md: "20px", xs: "16px" }, fontWeight: 600 }}>
                                            Infrastructure
                                        </Typography>
                                    </AccordionSummary>

                                    <AccordionDetails>

                                        <Box>
                                            <Typography
                                                sx={{
                                                    fontSize: "18px",
                                                    fontFamily: "Open Sans",
                                                    textAlign: "justify",
                                                    mb: 3,
                                                    fontWeight: "600",
                                                    lineHeight: "120%"
                                                }}
                                            >
                                                The integrated tea machinery manufacturing unit of Vikram India at Dhulagarh has all modern facilities and resources to manufacture best quality CTC, Orthodox and Green Tea processing machinery. Some of these facilities are the following -
                                            </Typography>

                                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                <img
                                                    src={infrastructure}
                                                    alt=""
                                                    style={{
                                                        width: "100%",  
                                                        height: "auto",
                                                        maxWidth: "600px",  
                                                    }}
                                                />
                                            </Box>






                                        </Box>





                                    </AccordionDetails>
                                </Accordion>

                                <Accordion sx={{
                                    background: "#fff",
                                    boxShadow: "0px 2px 8px rgba(0,0,0,0.10)",
                                    borderRadius: "8px",
                                    "&:before": { display: "none" },
                                    mt: 2,
                                    mb: 2
                                }}>
                                    <AccordionSummary sx={{
                                        backgroundColor: "#f8f8f8",
                                        borderBottom: "1px solid #eee",
                                        borderRadius: "8px"
                                    }} expandIcon={<ExpandMoreIcon sx={{ color: "#c00" }} />}>
                                        <Typography sx={{ fontSize: { md: "20px", xs: "16px" }, fontWeight: 600 }}>
                                            Testing and Quality Control Facilities
                                        </Typography>
                                    </AccordionSummary>

                                    <AccordionDetails>

                                        <Box>
                                            <Typography
                                                sx={{
                                                    fontSize: "20px",
                                                    fontFamily: "Open Sans",
                                                    textAlign: "justify",
                                                    mb: 3,
                                                    fontWeight: "600"
                                                }}
                                            >
                                                Vikram's team of qualified and experienced personnel ensures that every product manufactured at the unit is superior in terms of quality.
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: "16px",
                                                    fontFamily: "Open Sans",
                                                    textAlign: "justify",
                                                    mt: 2,
                                                    fontWeight: "400"
                                                }}
                                            >
                                                The unit is well-equipped with a range of testing machines and measuring instruments to carry on meticulous inspection of all Vikram products before these enter the market. These strict quality control measures guarantee best quality products consistently.
                                            </Typography>




                                        </Box>





                                    </AccordionDetails>
                                </Accordion>
                            </Box>


                        </Grid>

                    </Grid>

                </Container>
            </Box>
        </>
    )
}

export default Facilities
