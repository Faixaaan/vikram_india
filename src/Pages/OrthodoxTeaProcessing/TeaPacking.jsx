import React, { useEffect, useState } from "react";
import {
    Box,
    Grid,
    Typography,
    List,
    ListItemButton,
    ListItemText,
    Breadcrumbs,
    Link as MLink,
    Container,
} from "@mui/material";

import { Link } from "react-router-dom";

import '../../App.css'
import { axiosInstance } from "../../../src/Api/Axios/axios";
import { endpoints } from "../../../src/Api/EndPoints/endpoints";

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const leftMenu = [
    "WITHERING",
    "ROLLING",
    "FERMENTING",
    "DRYING",
    "SORTING",
    "PACKING",

];

const TeaPacking = () => {

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
        <Box sx={{ padding: { xs: 2, md: 4 }, mt: "100px"  }}>
            <Container maxWidth='xl'>
                {/* Breadcrumb */}
                <Breadcrumbs sx={{ mb: 2, fontSize: "15px" }}>
                    <MLink component={Link} to="/home" underline="hover" color="inherit">
                        Home
                    </MLink>
                    <Typography color="inherit" sx={{ fontSize: "15px" }}>Product & Services</Typography>
                    <Typography color="text.primary" sx={{ fontSize: "15px" }}>Orthodox Tea Processing Machinery</Typography>
                    <Typography color="text.primary" sx={{ fontSize: "15px" }}>Packing</Typography>
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
                                    to={`/products/ctc/${`tea`}${item.toLowerCase().replace(/ /g, "-")}`}

                                    sx={{
                                        borderBottom: "1px solid #eee",

                                        background:
                                            item === "PACKING"
                                                ? "linear-gradient(125deg, #14b91d, #1171b0)"
                                                : "transparent",

                                        color: item === "PACKING" ? "#fff" : "#000",

                                        "&:hover": {
                                            background:
                                                item === "PACKING"
                                                    ? "linear-gradient(125deg, #14b91d, #1171b0)"
                                                    : "#f5f5f5",
                                        },

                                        fontFamily: "Roboto",
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
                            PACKING
                        </Typography>

                        <Grid container spacing={2}>
                            {/* Left Description */}
                            <Grid item xs={12} md={8}>



                            </Grid>

                            {/* Right Image */}
                            <Grid item xs={12} md={4}>
                                <Box
                                    component="img"
                                    src={data?.image}
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
                        {/* Technical Specifications */}



                        <Typography sx={headingStyle}>
                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                            Digital Weighing Scale
                        </Typography>
                        <Typography sx={headingStyle}>
                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                            Tea Storage Bins & Bin Loaders
                        </Typography>
                        <Typography sx={headingStyle}>
                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                            Vibrartory Platforms
                        </Typography>
                        <Typography sx={headingStyle}>
                            <ChevronRightIcon sx={{ color: "red", fontSize: "24px" }} />
                            Packing Machines
                        </Typography>






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

export default TeaPacking;
