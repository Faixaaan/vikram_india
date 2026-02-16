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
    Tabs,
    Tab,
    Card,
    CardContent,
    CardMedia,
    Container,
} from "@mui/material";

import { Link } from "react-router-dom";
import '../../App.css'
import group1 from '../../Assets/hk-chaudhary.png'
import group2 from '../../Assets/anil-chowdhury.png'
import group3 from '../../Assets/ulpi-gupta.png'
import group4 from '../../Assets/soumen-chatterjee.png'
import group5 from '../../Assets/subir-chawdhury.png'
import group6 from '../../Assets/somenath-saharoy.png'
import BgImage from '../../Assets/vision-bg.jpg'
import QMS from '../../Assets/Qms.jpg'
import EMS from '../../Assets/ems.jpg'
import OHSAS from '../../Assets/ohsas.jpg'
import signature from '../../Assets/signature.jpg'
import { axiosInstance } from "../../Api/Axios/axios";
import { endpoints } from "../../Api/EndPoints/endpoints";




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



const ManagementTeam = () => {

    const [tabIndex, setTabIndex] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };


    const [managementData, setManagementData] = useState([])


    const fetchImageData = async () => {
        try {
            const res = await axiosInstance.get(endpoints.AboutUs.ManagmentTeamData)
            console.log(res?.data?.data, 'aboutus')
            setManagementData(res?.data?.data)
        }
        catch (err) {
            console.log(err)
        }
    }



    const Imgee = [
        { src: QMS, alt: "qms" },
        { src: EMS, alt: "ems" },
        { src: OHSAS, alt: "ohsas" }
    ]

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
                <Breadcrumbs sx={{ mb: 2, fontSize: "15px" }}>
                    <MLink component={Link} to="/" underline="hover" color="inherit">
                        Home
                    </MLink>
                    <Typography color="inherit" sx={{ fontSize: "15px" }}>About Us</Typography>

                    <Typography color="text.primary" sx={{ fontSize: "15px" }}>Manangement Team</Typography>
                </Breadcrumbs>



                <Grid container spacing={3}>
                    {/* Left Sidebar */}
                    <Grid item size={{ xs: 12, md: 3 }} sx={{ mt: 2 }} >
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
                                const isActive = item === "MANAGEMENT TEAM";

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
                    <Grid item size={{ xs: 12, md: 9 }} sx={{ mt: 5 }}>
                        

                        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%', mb: 4 }}>
      <Box sx={{
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        padding: '6px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
        display: 'inline-flex',
      }}>
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          aria-label="management tabs"
          sx={{
            minHeight: 'auto',

            '& .MuiTabs-flexContainer': {
              position: 'relative',
              zIndex: 2
            },

            /* Sliding Green Toggle Background */
            '& .MuiTabs-indicator': {
              height: '100%',
              borderRadius: '10px',
              backgroundColor: '#1BAA63',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              zIndex: 1
            }
          }}
        >
          <Tab
            label="Directors"
            sx={{
              textTransform: 'capitalize',
              fontWeight: 600,
              fontSize: '16px',
              padding: '12px 28px',
              borderRadius: '10px',
              minHeight: 'auto',
              zIndex: 2,
              color: '#666666',
              transition: 'color 0.3s ease',

              '&.Mui-selected': {
                color: '#ffffff',
              }
            }}
          />

          <Tab
            label="Leadership"
            sx={{
              textTransform: 'capitalize',
              fontWeight: 600,
              fontSize: '16px',
              padding: '12px 28px',
              borderRadius: '10px',
              minHeight: 'auto',
              zIndex: 2,
              color: '#666666',
              transition: 'color 0.3s ease',

              '&.Mui-selected': {
                color: '#ffffff',
              }
            }}
          />
        </Tabs>
      </Box>
    </Box>


                        {/* Introduction */}


                        <Box>


                            {/* profile picture box */}

                            {tabIndex === 0 && (
                                <Box sx={{
                                    mt: 4,
                                    boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
                                    borderRadius: "12px",
                                    p: 3,
                                    background: "#fff"
                                }}>
                                    <Grid container spacing={2} mt={2}>
                                        <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex", justifyContent: { xs: "center", md: "" }, alignItems: "flex-start" }} >
                                            <img src={group1} style={{ height: "auto", width: "100%" }} />
                                        </Grid>

                                        <Grid size={{ xs: 12, md: 8 }} sx={{ bgcolor: "#B5BEB2" }} >


                                            <Typography variant="h6" sx={{ fontFamily: "", fontSize: "16px", lineHeight: "140%", marginTop: "15px", fontWeight: "400", color: "#121111ff", padding: "10px 20px" }}>
                                                Sri Hari Krishna Chaudhary is the Chairman Cum Managing Director of Vikram Group of Industries. Under his able guidance and charismatic leadership, Vikram Group has achieved unprecedented success in business and philanthropy. By establishing Vikram Solar Pvt. Ltd., Sri H. K. Chaudhary has ventured into the Renewable Energy sector to explore and fulfill the growing energy needs of India.He has contributed immensely to the cause of spreading education among underprivileged sections of the society living in villages and semi urban areas thereby building ethical corporations in India. Sri H. K. Chaudhary is associated with different trusts and educational institutions in different capacities. He is the founder trustee and Chairman of Kalyan Bharati Trust under the aegis of which The Heritage School, Heritage Institute of Technology (Engineering studies), The Heritage Academy (Management studies), Heritage Business School and Heritage Law College are managed successfully. He is also the founder trustee and Chairman of Ballaram Hanumandas Charitable Trust, Bahal, Haryana. He has established BRCM Public Schools namely Vidyagram, a fully residential and co-educational English medium school and Gyankunj, an English medium day school and a fully residential and co-educational Engineering College named BRCM College of Engineering and Technology in Haryana. Apart from this, he is also the Chairman of Agrasain Balika Siksha Sadan, a premier girls school in Liluah, Howrah, Joint Vice President of Sri Sri Academy, Alipore, Kolkata and founder trustee of Agrasain Seva Samity and Agrasain Education Trustt.
                                            </Typography>
                                            <Box sx={{ pt: 4, background: 'linear-gradient(90deg, #1BAA63 0%, #276f9e 100%)', padding: "10px 20px" }}>
                                                <Typography variant="h6" sx={{ fontFamily: "", fontSize: "20px", lineHeight: "120%", marginBottom: "2px", fontWeight: "600", color: "#fff" }}>
                                                    Mr. H.K. Chaudhary.
                                                </Typography>
                                                <Typography variant="" sx={{ fontFamily: "", fontSize: "14px", lineHeight: "120%", marginBottom: "15px", fontWeight: "400", color: "#fff", backgroundColor: "blue", padding: "2px 4px" }}>
                                                    Chairman Emeritus
                                                    <br />

                                                </Typography>
                                                <Typography variant="" sx={{ fontFamily: "", fontSize: "14px", lineHeight: "120%", marginBottom: "15px", fontWeight: "400", color: "#fff", }}>

                                                    Vikram Group
                                                </Typography>
                                            </Box>



                                        </Grid>

                                    </Grid>

                                </Box>
                            )}
                            <Box sx={{
                                mt: 4,
                                boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
                                borderRadius: "12px",
                                p: 3,
                                background: "#fff"
                            }}

                            >
                                <Grid container spacing={2} mt={2}>


                                    <Grid size={{ xs: 12, md: 8 }} sx={{ bgcolor: "#B5BEB2" }} >


                                        <Typography variant="h6" sx={{ fontFamily: "", fontSize: "16px", lineHeight: "140%", marginTop: "15px", fontWeight: "400", color: "#121111ff", padding: "10px 20px" }}>

                                            Mr. Anil Chaudhary is a first class BE Electrical from Bangalore University and an MBA from Jadavpur University. With over 19 years of experience in engineering projects and tea manufacturing, he is currently managing Vikram Group's textile division in Surat, Gujarat.Anil Chaudhary serves on the Board of many of the Vikram Group of companies. He is a member of Technical Education Society of India, Institute of Engineers, Engineering Export Promotion Council and CII-SSI Committee.
                                        </Typography>
                                        <Box sx={{ pt: 4, background: 'linear-gradient(90deg, #1BAA63 0%, #276f9e 100%)', padding: "10px 20px" }}>
                                            <Typography variant="h6" sx={{ fontFamily: "", fontSize: "20px", lineHeight: "120%", marginBottom: "2px", fontWeight: "600", color: "#fff" }}>
                                                Mr. Anil Chaudhary
                                            </Typography>
                                            <Typography variant="" sx={{ fontFamily: "", fontSize: "14px", lineHeight: "120%", marginBottom: "15px", fontWeight: "400", color: "#fff", backgroundColor: "blue", padding: "2px 4px" }}>
                                                Chairman <br />

                                            </Typography>
                                            <Typography variant="" sx={{ fontFamily: "", fontSize: "14px", lineHeight: "120%", marginBottom: "15px", fontWeight: "400", color: "#fff", }}>

                                                Vikram Group
                                            </Typography>
                                        </Box>



                                    </Grid>
                                    <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex", justifyContent: { xs: "center", md: "" }, alignItems: "flex-start" }} >
                                        <img src={group2} style={{ height: "auto", width: "100%" }} />
                                    </Grid>

                                </Grid>

                            </Box>
                            <Box sx={{
                                mt: 4,
                                boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
                                borderRadius: "12px",
                                p: 3,
                                background: "#fff"
                            }}

                            >
                                <Grid container spacing={2} mt={2}>
                                    <Grid size={{ xs: 12, md: 4 }} sx={{ display: "flex", justifyContent: { xs: "center", md: "" }, alignItems: "flex-start" }} >
                                        <img src={group3} style={{ height: "auto", width: "100%" }} />
                                    </Grid>

                                    <Grid size={{ xs: 12, md: 8 }} sx={{ bgcolor: "#B5BEB2" }} >


                                        <Typography variant="h6" sx={{ fontFamily: "", fontSize: "16px", lineHeight: "140%", marginTop: "15px", fontWeight: "400", color: "#121111ff", padding: "10px 20px" }}>
                                            He is a Chartered Accountant and his strength lies in accounts, finance and commercial matters. He has been associated with the Vikram group for over 10 years and with his leadership quality he has helped the Company excel to the next stage
                                        </Typography>
                                        <Box sx={{ pt: 4, background: 'linear-gradient(90deg, #1BAA63 0%, #276f9e 100%)', padding: "10px 20px" }}>
                                            <Typography variant="h6" sx={{ fontFamily: "", fontSize: "20px", lineHeight: "120%", marginBottom: "2px", fontWeight: "600", color: "#fff" }}>
                                                Mr. Ulpi Gupta
                                            </Typography>
                                            <Typography variant="" sx={{ fontFamily: "", fontSize: "14px", lineHeight: "120%", marginBottom: "15px", fontWeight: "400", color: "#fff", backgroundColor: "blue", padding: "2px 4px" }}>
                                                Director & CEO <br />

                                            </Typography>
                                            <Typography variant="" sx={{ fontFamily: "", fontSize: "14px", lineHeight: "120%", marginBottom: "15px", fontWeight: "400", color: "#fff", }}>

                                                Vikram Group
                                            </Typography>
                                        </Box>



                                    </Grid>

                                </Grid>

                            </Box>







                            {/* text */}






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

export default ManagementTeam;
