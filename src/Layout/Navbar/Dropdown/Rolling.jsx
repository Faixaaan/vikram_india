import React from "react";
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
import FanImage from "../../../Assets/logo 1.png"; // update your image
import '../../../App.css'

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

const Rolling = () => {
    return (
        <Box sx={{ padding: { xs: 2, md: 4 } }}>
            <Container maxWidth='xl'>
                {/* Breadcrumb */}
                <Breadcrumbs sx={{ mb: 2, fontSize: "14px" }}>
                    <MLink component={Link} to="/" underline="hover" color="inherit">
                        Home
                    </MLink>
                    <Typography color="inherit">Product & Services</Typography>
                    <Typography color="text.primary">CTC Tea Processing Machinery</Typography>
                    <Typography color="text.primary">ROLLING</Typography>
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
                    CTC Tea Processing Machinery
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
                            CTC Tea Processing Machinery
                        </Typography>

                        <List sx={{ border: "1px solid #ddd" }}>
                            {leftMenu.map((item) => (
                                <ListItemButton
                                    key={item}
                                    component={Link}
                                    to={`/products/ctc/${item.toLowerCase().replace(/ /g, "-")}`}
                                    sx={{
                                        borderBottom: "1px solid #eee",
                                        backgroundColor: item === "ROLLING" ? "#d32f2f" : "transparent",
                                        color: item === "ROLLING" ? "#fff" : "#000",
                                        "&:hover": {
                                            backgroundColor: item === "ROLLING" ? "#c62828" : "#f5f5f5",
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
                            Withering
                        </Typography>

                        <Grid container spacing={2}>
                            {/* Left Description */}
                            <Grid item xs={12} md={8}>
                                <Typography sx={{ mb: 2, fontSize: "15px", lineHeight: "24px", fontFamily: "Open Sans" }}>
                                    The aero-dynamically designed Axial Flow Fans from Vikram India are
                                    made of high quality aluminium alloy and are suitable for different
                                    sizes of withering troughs. These fans ensure uniformity of withering,
                                    reduce power consumption and are tested for vibration, noise levels,
                                    air delivery and static pressure.
                                </Typography>

                                <Typography sx={{ mb: 3, fontSize: "15px", lineHeight: "24px", fontFamily: "Open Sans" }}>
                                    Vikram also offers Centrifugal Fans and Induced Draught Fans in
                                    different sizes as per the customer's requirement.
                                </Typography>
                            </Grid>

                            {/* Right Image */}
                            <Grid item xs={12} md={4}>
                                <Box
                                    component="img"
                                    src={FanImage}
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
                                fontFamily: "Open Sans"
                            }}
                        >
                            Technical Specifications
                        </Typography>

                        <TableContainer component={Paper} sx={{ boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
                            <Table sx={{ minWidth: 650 }}>
                                <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                                    <TableRow>
                                        <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>MODEL</TableCell>
                                        <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>Impeller Diameter</TableCell>
                                        <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>Motor</TableCell>
                                        <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>Air Flow Rate</TableCell>
                                        <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>Air Velocity</TableCell>
                                        <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>Static Pressure</TableCell>
                                        <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>Total Pressure</TableCell>
                                        <TableCell sx={{ fontWeight: 700, fontFamily: "Open Sans" }}>Shaft BHP</TableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    <TableRow>
                                        <TableCell>VAF - 403</TableCell>
                                        <TableCell>106 cm</TableCell>
                                        <TableCell>3 HP</TableCell>
                                        <TableCell>19000 cfm</TableCell>
                                        <TableCell>11.1 m/sec</TableCell>
                                        <TableCell>0.75 inch</TableCell>
                                        <TableCell>19.9</TableCell>
                                        <TableCell>2.6 hp</TableCell>
                                    </TableRow>

                                    <TableRow>
                                        <TableCell>VAF - 483</TableCell>
                                        <TableCell>119 cm</TableCell>
                                        <TableCell>3 HP</TableCell>
                                        <TableCell>23500 cfm</TableCell>
                                        <TableCell>9.5 m/sec</TableCell>
                                        <TableCell>0.71 inch</TableCell>
                                        <TableCell>18.0</TableCell>
                                        <TableCell>2.9 hp</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Rolling;
