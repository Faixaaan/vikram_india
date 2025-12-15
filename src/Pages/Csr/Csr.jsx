import React, { useEffect } from "react";
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
    Paper,
    Container,
    TextField,
    InputAdornment,
    Button,
} from "@mui/material";
import group2 from "../../Assets/green-leafs.png";
import group3 from '../../Assets/black-solar.png'
import group4 from '../../Assets/green-power.png'

import SelectIcon from "@mui/icons-material/ArrowDropDown";

import { Link } from "react-router-dom";
import mmsStructure from "../../Assets/apply-online.jpg"; // update your image
import "../../App.css";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const leftMenu = ["WORKING WITH US", "APPLY NOW"];

const CSR = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);
    return (
        <Box sx={{ padding: { xs: 2, md: 4 } }}>
            <Container maxWidth="xl">
                {/* Breadcrumb */}
                <Breadcrumbs sx={{ mb: 2, fontSize: "14px" }}>
                    <MLink component={Link} to="/" underline="hover" color="inherit">
                        Home
                    </MLink>
                    <Typography color="inherit">Csr</Typography>

                    
                </Breadcrumbs>

                {/* PAGE TITLE */}
                <Typography
                    sx={{
                        fontSize: "28px",
                        fontWeight: 700,
                        mb: 1,
                        color: "#000",
                        textTransform: "uppercase",
                        fontFamily: "Open Sans",
                    }}
                >
                    CSR
                </Typography>

                <Grid container spacing={3}>
                    {/* Left Sidebar */}
                    <Grid size={{ xs: 12, md: 3 }}>
                        <Box sx={{ padding: { md: "40px 0px", xs: "15px 0px" } }}>
                            <Typography sx={{ fontFamily: "Open Sans", fontWeight: "700", borderBottom: "2px solid black", fontSize: "18px", paddingBottom: "20px" }}>
                                Social Commitment
                            </Typography>
                            <Typography sx={{ paddingTop: "20px", fontSize: "18px", fontWeight: "400", fontFamily: "Open Sans", textAlign: "justify" }}>
                                "Vikram India goes beyond business to reach out to the weaker sections of the society and aims to create a happy and healthy community."
                            </Typography>
                        </Box>
                    </Grid>

                    {/* Right Content Section */}
                    <Grid item size={{ xs: 12, md: 9 }}>
                        <Typography
                            sx={{
                                fontSize: "28px",
                                fontWeight: 600,
                                lineHeight: "120%",
                                fontFamily: "Open Sans",
                            }}
                        >
                            Social Commitment
                        </Typography>
                        <Typography
                            sx={{
                                color: "#df0000",
                                fontSize: "14px",
                                fontFamily: "Open Sans",
                                fontWeight: "400",
                                pb: 4
                            }}
                        >
                            Nurturing communities for a brighter tomorrow
                        </Typography>

                        <Divider />
                        <Typography
                            sx={{
                                color: "#000",
                                fontSize: "18px",
                                fontFamily: "Open Sans",
                                fontWeight: "500",
                                pt: 2,
                                pb: 4
                            }}
                        >
                            Guided by the principles of environment sustainability, developing the community and our people, we are committed to build a brighter tomorrow.
                        </Typography>

                        <Divider />
                        <Typography
                            sx={{
                                color: "#000",
                                fontSize: "20px",
                                fontFamily: "Open Sans",
                                fontWeight: "600",
                                pt: 2
                            }}
                        >
                            Initiating Green Power in tea industry
                        </Typography>

                        {/* Introduction */}

                        <Box
                            sx={{
                                mt: 4,
                                boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
                                borderRadius: "12px",
                                p: 0,

                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundColor: "#fff", // fallback
                                padding: "20px 20px 20px 20px",
                            }}
                        >
                            <Grid container spacing={2} mt={4}>
                                <Grid
                                    size={{ xs: 12, md: 4 }}
                                    sx={{ display: "flex", justifyContent: "flex-start" }}
                                >
                                    <img src={group2} />
                                </Grid>
                                <Grid size={{ xs: 12, md: 8 }}>
                                    <Typography
                                        sx={{
                                            fontFamily: "",
                                            fontSize: "18px",
                                            lineHeight: "120%",
                                            marginBottom: "15px",
                                            fontWeight: "500",
                                            color: "#121111ff",
                                        }}
                                    >

                                        Contributing to the Group's efforts of energy conservation, Vikram India is committed to use green and clean energy in its processes leading to sustainable environment development.
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontFamily: "",
                                            fontSize: "18px",
                                            textAlign: "justify",
                                            marginTop: "15px!important",
                                            fontWeight: "400",
                                            lineHeight: "120%",
                                            color: "#121111ff",
                                        }}
                                    >
                                        The Company understands its responsibility towards managing environmental impact and therefore uses non-conventional, renewable energy resources - especially Solar Power - to conserve the environment.
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>

                        {/* next card */}
                        <Box
                            sx={{
                                mt: 4,
                                boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
                                borderRadius: "12px",
                                p: 0,

                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundColor: "#fff", // fallback
                                padding: "20px 20px 20px 20px",
                            }}
                        >
                            <Grid container spacing={2} mt={4}>
                                <Grid
                                    size={{ xs: 12, md: 4 }}
                                    sx={{ display: "flex", justifyContent: "flex-start" }}
                                >
                                    <img src={group3} />
                                </Grid>
                                <Grid size={{ xs: 12, md: 8 }}>
                                    <Typography
                                        sx={{
                                            fontFamily: "",
                                            fontSize: "18px",
                                            lineHeight: "120%",
                                            marginBottom: "15px",
                                            fontWeight: "500",
                                            color: "#121111ff",
                                        }}
                                    >
                                        Vikram India has successfully installed Solar Panels within its production processes as a part of its environment sustainability initiative.
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontFamily: "",
                                            fontSize: "18px",
                                            textAlign: "justify",
                                            marginTop: "15px!important",
                                            fontWeight: "400",
                                            lineHeight: "120%",
                                            color: "#121111ff",
                                        }}
                                    >
                                        Vikram India and Vikram Solar have recently initiated the marketing of Solar Discs for use in the tea processing industry.

                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontFamily: "",
                                            fontSize: "18px",
                                            textAlign: "justify",
                                            marginTop: "15px!important",
                                            fontWeight: "400",
                                            lineHeight: "120%",
                                            color: "#121111ff",
                                        }}
                                    >
                                        Solar Discs generate thermal heat which is a great substitute for conventionally used fuels such as gas and petrol.

                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>

                        {/* third card */}
                        <Box
                            sx={{
                                mt: 4,
                                boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
                                borderRadius: "12px",
                                p: 0,

                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundColor: "#fff", // fallback
                                padding: "20px 20px 20px 20px",
                            }}
                        >
                            <Grid container spacing={2} mt={4}>
                                <Grid
                                    size={{ xs: 12, md: 4 }}
                                    sx={{ display: "flex", justifyContent: "flex-start",alignItems:"flex-start" }}
                                >
                                    <img src={group4} />
                                </Grid>
                                <Grid size={{ xs: 12, md: 8 }}>
                                    <Typography
                                        sx={{
                                            fontFamily: "",
                                            fontSize: "18px",
                                            lineHeight: "120%",
                                            marginBottom: "15px",
                                            fontWeight: "500",
                                            color: "#121111ff",
                                        }}
                                    >

                                        As a step further towards initiating Green Power in the tea industry, Vikram India in association with Vikram Solar has taken up the project of initiating Solar Power in the tea estates of McLeod Russel India Limited - the world's largest tea producer, in Assam.
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontFamily: "",
                                            fontSize: "18px",
                                            textAlign: "justify",
                                            marginTop: "15px!important",
                                            fontWeight: "400",
                                            lineHeight: "120%",
                                            color: "#121111ff",
                                        }}
                                    >
                                        This pioneering initiative has been widely acclaimed and Vikram is in talks with various tea estates in Assam and West Bengal for installing Solar Power generating facilities.



                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default CSR;
