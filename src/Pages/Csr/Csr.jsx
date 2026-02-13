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
import { axiosInstance } from "../../Api/Axios/axios";
import { endpoints } from "../../Api/EndPoints/endpoints";

const leftMenu = ["WORKING WITH US", "APPLY NOW"];

const CSR = () => {

    const [casrData, setCsrData] = useState([]);
    const [data, setData] = useState({})

    const fetchCsrData = async () => {
        try {
            const res = await axiosInstance.get(endpoints.Csr.getCsrData);
            const cmsRes = await axiosInstance.get(endpoints.Csr.cmsCsrData)
            setData(cmsRes?.data?.data)
            setCsrData(res?.data?.data)
        }
        catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        fetchCsrData()
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
                {/* <Typography
                    sx={{
                        fontSize: "28px",
                        fontWeight: 700,
                        mb: 1,
                        color: "#000",
                        textTransform: "uppercase",
                        fontFamily: "Roboto",
                    }}
                >
                    CSR
                </Typography> */}

                <Grid container spacing={3}>
                    {/* Left Sidebar */}
                    {/* <Grid size={{ xs: 12, md: 3 }}>
                        <Box sx={{ padding: { md: "40px 0px", xs: "15px 0px" } }}>
                            <Typography sx={{ fontFamily: "Roboto", fontWeight: "700", borderBottom: "2px solid black", fontSize: "18px", paddingBottom: "20px" }}>
                                {data?.left_title}
                            </Typography>
                            <Typography sx={{ paddingTop: "20px", fontSize: "18px", fontWeight: "400", fontFamily: "Roboto", textAlign: "justify" }}>
                                {data?.left_description}
                            </Typography>
                        </Box>
                    </Grid> */}

                    {/* Right Content Section */}
                    <Grid item size={{ xs: 12, md: 12 }} sx={{ mt: 2 }}>
                        <Typography
                            sx={{
                                fontSize: "28px",
                                fontWeight: 600,
                                lineHeight: "120%",
                                fontFamily: "Roboto",
                                color: "#1A73E8"
                            }}
                        >
                            {data?.main_title}
                        </Typography>


                        <Divider />
                        {/* <Typography
                            sx={{
                                color: "#000",
                                fontSize: "18px",
                                fontFamily: "Roboto",
                                fontWeight: "500",
                                pt: 2,
                                pb: 4
                            }}
                        >
                            {data?.description}
                        </Typography>

                        <Divider /> */}
                        <Typography
                            sx={{
                                color: "#000",
                                fontSize: "20px",
                                fontFamily: "Roboto",
                                fontWeight: "600",
                                pt: 2
                            }}
                        >
                            {data?.heading}
                        </Typography>

                        {/* Introduction */}

                        {
                            casrData?.map((item, i) => {
                                return (
                                    <Accordion
                                        key={i}
                                        sx={{
                                            mt: 3,
                                            boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
                                            borderRadius: "12px !important",
                                            "&:before": { display: "none" }, // remove top line
                                        }}
                                    >
                                        {/* Accordion Header */}
                                        <AccordionSummary sx={{
                                backgroundColor: "#f8f8f8",
                                borderBottom: "1px solid #eee",
                                borderRadius: "8px"
                            }} expandIcon={<ExpandMoreIcon />}>
                                            <Typography
                                                sx={{
                                                    fontSize: "22px",
                                                    fontWeight: 600,
                                                    fontFamily:"Roboto"
                                                }}
                                            >
                                                {item?.title || `Item ${i + 1}`}
                                            </Typography>
                                        </AccordionSummary>

                                        {/* Accordion Content */}
                                        <AccordionDetails>
                                            <Grid container spacing={2} alignItems="center">

                                                {/* Image - 4 Grid */}
                                                <Grid item  size={{xs:12,md:4}}>
                                                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                                                        <img
                                                            src={item?.image}
                                                            alt=""
                                                            style={{
                                                                width: "60%",
                                                                height: "auto",
                                                                borderRadius: "8px",
                                                            }}
                                                        />
                                                    </Box>
                                                </Grid>

                                                {/* Description - 8 Grid */}
                                                <Grid item  size={{xs:12,md:8}}>
                                                    <Typography
                                                        sx={{
                                                            fontSize: "18px",
                                                            lineHeight: "140%",
                                                            fontWeight: 500,
                                                            color: "#121111ff",
                                                            fontFamily:"Roboto"
                                                        }}
                                                    >
                                                        {item?.description}
                                                    </Typography>
                                                </Grid>

                                            </Grid>
                                        </AccordionDetails>
                                    </Accordion>
                                );
                            })
                        }





                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default CSR;
