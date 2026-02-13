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
    Container,
} from "@mui/material";

import { Link } from "react-router-dom";
import '../../App.css'
import group1 from '../../Assets/company-ring.jpg'
import group2 from '../../Assets/earning-image.png'
import BgImage from '../../Assets/earning-background.jpg'
import QMS from '../../Assets/Qms.jpg'
import EMS from '../../Assets/ems.jpg'
import OHSAS from '../../Assets/ohsas.jpg'
import { endpoints } from "../../Api/EndPoints/endpoints";
import { axiosInstance } from "../../Api/Axios/axios";




const leftMenu = [
    "GROUP PROFILE",
    "COMPANY PROFILE",
    "VISION & MISSION",
    "MANAGEMENT TEAM",
    "ROC COMPLIANCE ANNUAL RETURN",
    "AWARD AND RECOGNITION",
    "RESEARCH AND DEVELOPMENT",
    "QUALITY POLICY",
    "CLIENTELE",
    


];



const CompanyProfile = () => {


    const Imgee = [
        { src: QMS, alt: "qms" },
        { src: EMS, alt: "ems" },
        { src: OHSAS, alt: "ohsas" }
    ]
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const res = await axiosInstance.get(endpoints.AboutUs.companyProfile)
            setData(res?.data?.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchData()
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
                    <Typography color="inherit" sx={{  fontSize: "15px" }}>About Us</Typography>

                    <Typography color="text.primary" sx={{  fontSize: "15px" }}>Company Profile</Typography>
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
                            {leftMenu.map((item) => {
                                const isActive = item === "COMPANY PROFILE";

                                // Special case for PDF link
                                if (item === "ROC COMPLIANCE ANNUAL RETURN") {
                                    return (
                                        <ListItemButton
                                            key={item}
                                            component="a"
                                            href="https://www.vikramindia.in/pdf/roc-compliance-annual-return.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                borderBottom: "1px solid #eee",
                                                backgroundColor: "transparent",
                                                color: "#000",
                                                "&:hover": { backgroundColor: "#f5f5f5" },
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
                                    );
                                }

                                // Default items
                                return (
                                    <ListItemButton
                                        key={item}
                                        component={Link}
                                        to={`/about/${item.toLowerCase().replace(/ /g, "-")}`}
                                        sx={{
                                            borderBottom: "1px solid #eee",
                                            backgroundColor: isActive ? "green" : "transparent",
                                            color: isActive ? "#fff" : "#000",
                                            "&:hover": {
                                                backgroundColor: isActive ? "green" : "#f5f5f5",
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
                                );
                            })}
                        </List>

                    </Grid>

                    {/* Right Content Section */}
                    <Grid item size={{ xs: 12, md: 9 }} sx={{mt:3}}>
                       


                        {/* Introduction */}


                        <Box>
                            

                            {/* profile picture box */}

                            <Box sx={{
                                mt: 4,
                                boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
                                borderRadius: "12px",
                                p: 3,
                                background: "#fff"
                            }}>
                                <Grid container spacing={2} mt={2}>

                                    <Grid size={{ xs: 12, md: 8.6 }} >
                                        <Typography sx={{ fontFamily: "Roboto", fontSize: "18px", lineHeight: "120%", marginBottom: "15px", fontWeight: "500", color: "#121111ff" }}
                                            dangerouslySetInnerHTML={{ __html: data?.section1_desc }}
                                        >

                                        </Typography>

                                    </Grid>
                                    <Grid size={{ xs: 12, md: 3.4 }} sx={{ display: "flex", justifyContent: "center" }} >
                                        <img src={data?.section1_img} />
                                    </Grid>
                                </Grid>

                            </Box>
                            <Box sx={{
                                mt: 4,
                                boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
                                borderRadius: "12px",
                                p: 0,

                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                backgroundColor: "#fff", // fallback
                                padding: "20px 20px 0px 20px"
                            }}>
                                <Grid container spacing={2} mt={4}>
                                    <Grid size={{ xs: 12, md: 3.4 }} sx={{ display: "flex", justifyContent: "center" }} >
                                        <img src={data?.section2_img} />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 8.6 }} >
                                        <Typography sx={{ fontFamily: "Roboto!important", fontSize: "18px", lineHeight: "120%", marginBottom: "15px", fontWeight: "500", color: "#121111ff" }}
                                            dangerouslySetInnerHTML={{ __html: data?.section2_desc }}

                                        >

                                        </Typography>

                                    </Grid>
                                </Grid>
                            </Box>

                            {/* text */}

                            <Box sx={{ mt: 4 }}>

                                <Typography sx={{ fontSize: "18px", fontWeight: "400", fontFamily: "Roboto", lineHeight: "120%" }}
                                    dangerouslySetInnerHTML={{ __html: data?.section3_desc }}

                                >

                                </Typography>

                            </Box>

                            {/* image  */}

                            <Grid container spacing={2} mt={6}>
                                <Grid size={{ xs:12,sm: 4 }}>
                                    <Link to=''>
                                        <img src={data?.image1} alt='' style={{width:"100%"}} />
                                    </Link>
                                </Grid>
                                 <Grid size={{ xs:12,sm: 4 }}>
                                    <Link to=''>
                                        <img src={data?.image2} alt='' style={{width:"100%"}}/>
                                    </Link>
                                </Grid>
                                 <Grid size={{ xs:12,sm: 4 }}>
                                    <Link to=''>
                                        <img src={data?.image3} alt='' style={{width:"100%"}} />
                                    </Link>
                                </Grid>
                            </Grid>


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

export default CompanyProfile;
