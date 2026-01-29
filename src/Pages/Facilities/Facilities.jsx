import {
    Box, Container, Grid, Typography, Accordion,
    AccordionSummary,
    AccordionDetails,
    Divider,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import mmsStructure from "../../Assets/mms-structure.jpg";
import infrastructure from '../../Assets/infrastructure.jpg'
import { axiosInstance } from '../../Api/Axios/axios';
import { endpoints } from '../../Api/EndPoints/endpoints';

const Facilities = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const res = await axiosInstance.get(endpoints.facilities.getFacilitiesData)
            setData(res?.data?.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(()=>{
   fetchData()
    },[])
    return (
        <>
            <Box>
                <Container maxWidth='xl' sx={{ padding: "0px 35px!important" }}>
                    <Grid container spacing={6}>
                        <Grid size={{ xs: 12, md: 3 }}>
                            <Box sx={{ padding: { md: "40px 0px", xs: "15px 0px" } }}>
                                <Typography sx={{ fontFamily: "Roboto", fontWeight: "700", borderBottom: "2px solid black", fontSize: "18px", paddingBottom: "20px" }}>
                                    {data?.left_title}
                                </Typography>
                                <Typography sx={{ paddingTop: "20px", fontSize: "18px", fontWeight: "400", fontFamily: "Roboto", textAlign: "justify" }}
                                dangerouslySetInnerHTML={{ __html: data?.left_description }}
                                >
                                    
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 9 }}>
                            <Box sx={{ padding: { md: "40px 0px 10px 0px", xs: "15px 0px" } }}>
                                <Typography sx={{ textAlign: "right", display: "flex", justifyContent: { md: "flex-end", xs: "flex-start" }, fontFamily: "Roboto", borderBottom: "2px solid black", paddingBottom: "23px" }}>
                                    <Link to={'/'} style={{ textDecoration: "none", color: "#000" }}>Home </Link> <KeyboardDoubleArrowRightIcon sx={{ color: "#df0000" }} />Manufacturing Facilities
                                </Typography>
                                <Box sx={{ paddingTop: "20px" }}>
                                    <Typography sx={{ fontFamily: "Roboto", fontWeight: "500", fontSize: "28px",color:"#1A73E8" }}>
                                        {data?.main_title}
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
                                            {data?.accordion1_main_heading}
                                        </Typography>
                                    </AccordionSummary>

                                    <AccordionDetails>

                                        <Box>
                                            <Typography
                                                sx={{
                                                    fontSize: "18px",
                                                    fontFamily: "Roboto",
                                                    textAlign: "justify",
                                                    mb: 3,
                                                    fontWeight: "500"
                                                }}
                                            >
                                                {data?.accordion1_title1}
                                            </Typography>
                                            <Grid container spacing={2}>
                                                <Grid item size={{ xs: 12, md: 5 }}>
                                                    <iframe src={data?.accordion1_link1} width="100%" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                                </Grid>
                                                <Grid item size={{ xs: 12, md: 7 }}>
                                                    <Typography
                                                        sx={{
                                                            fontSize: "16px",
                                                            fontFamily: "Roboto",
                                                            textAlign: "justify",
                                                            fontWeight: "400"
                                                        }}
                                                    >
                                                        {data?.accordion1_desc1}
                                                    </Typography>
                                                </Grid>


                                            </Grid>




                                        </Box>

                                        <Divider sx={{ paddingTop: "20px" }} />
                                        <Box sx={{ mt: 4 }}>

                                            <Grid container spacing={2}>
                                                <Grid item size={{ xs: 12, md: 5 }}>
                                                    <iframe src={data?.accordion1_link2} width="100%" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                                </Grid>
                                                <Grid item size={{ xs: 12, md: 7 }}>
                                                    <Typography
                                                        sx={{
                                                            fontSize: "16px",
                                                            fontFamily: "Roboto",
                                                            textAlign: "justify",
                                                            fontWeight: "400"
                                                        }}
                                                    >
                                                       {data?.accordion1_desc2}
                                                    </Typography>
                                                    <Typography
                                                        sx={{
                                                            fontSize: "20px",
                                                            fontFamily: "Roboto",
                                                            textAlign: "justify",
                                                            fontWeight: "600"
                                                        }}
                                                    >
                                                        {data?.accordion1_title2}
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
                                            {data?.accordion2_main_heading}
                                        </Typography>
                                    </AccordionSummary>

                                    <AccordionDetails>

                                        <Box>
                                            <Typography
                                                sx={{
                                                    fontSize: "18px",
                                                    fontFamily: "Roboto",
                                                    textAlign: "justify",
                                                    mb: 3,
                                                    fontWeight: "600",
                                                    lineHeight: "120%"
                                                }}
                                            >
                                                {data?.accordion1_desc2} -
                                            </Typography>

                                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                <img
                                                    src={data?.accordion2_image}
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
                                            {data?.accordion3_main_heading}
                                        </Typography>
                                    </AccordionSummary>

                                    <AccordionDetails>

                                        <Box>
                                            <Typography
                                                sx={{
                                                    fontSize: "20px",
                                                    fontFamily: "Roboto",
                                                    textAlign: "justify",
                                                    mb: 3,
                                                    fontWeight: "600"
                                                }}
                                            >
                                                {data?.accordion3_title}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: "16px",
                                                    fontFamily: "Roboto",
                                                    textAlign: "justify",
                                                    mt: 2,
                                                    fontWeight: "400"
                                                }}
                                            >
                                                {data?.accordion3_desc}
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
