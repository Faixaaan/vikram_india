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
    Pagination,
} from "@mui/material";

import { Link } from "react-router-dom";
import '../../App.css'
import QMS from '../../Assets/Qms.jpg'
import EMS from '../../Assets/ems.jpg'
import OHSAS from '../../Assets/ohsas.jpg'
import award1 from '../../Assets/eepcaward2016-17-thumb.png'
import award2 from '../../Assets/eepcaward2014-15-thumb.png'
import award3 from '../../Assets/eepcaward2013-14-thumb.png'
import award4 from '../../Assets/thumbbb.png'
import award5 from '../../Assets/EEPC-thumb.png'
import award6 from '../../Assets/thumbe.png'
import cert1 from '../../Assets/eepc-2016-17-cert.jpg'
import cert2 from '../../Assets/eepc-2014-15-cert.jpg'
import cert3 from '../../Assets/eepc-2013-14-cert.jpg'
import cert4 from '../../Assets/2012-13-cert.jpg'
import cert5 from '../../Assets/2011-12-cert.jpg'
import cert6 from '../../Assets/2010-11-cert.jpg'
import cert7 from '../../Assets/2008-09-cert.jpg'
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
    "TESTIMONIAL",


];



const AwardRecognition = () => {

    const [page, setPage] = useState(1);
    const [pagee, setPagee] = useState(1);
    const [cmsData, setCmsData] = useState([])
    const [secondCmsData, setCmsSecondData] = useState([])
    const [ImageData,setImageData] = useState([])


    const fetchImageData = async () => {
        try {
            const res = await axiosInstance.get(
                endpoints.AboutUs.getAwardRecognitionCmsData
            );

            const imageRes = await axiosInstance.get(endpoints.AboutUs.getAwardRecognition)

            setImageData(imageRes?.data?.data)

            const apiArray = res?.data?.data || [];

            // Convert array → object
            const cmsObject = apiArray.length ? apiArray[0] : null;

             const cmssobject = apiArray.length ? apiArray[1] : null;
             setCmsSecondData(cmssobject)
            setCmsData(cmsObject);

            console.log(cmsObject, 'cmsObject');
        } catch (err) {
            console.log(err);
        }
    };




    const clientLogos = [
        { img: award1, name: "EEPCIndia Star Performer 2016-2017" },
        { img: award2, name: "EEPCIndia Star Performer 2014-2015" },
        { img: award3, name: "EEPCIndia Star Performer 2013-2014" },
        { img: award4, name: "EEPCIndia Star Performer 2012-2013" },

        { img: award5, name: "Award by Engineering Export Promotion Council" },
        { img: award6, name: "EEPCIndia Star Performer 2011-2012" },
        { img: award1, name: "EEPCIndia Star Performer 2016-2017" },
        { img: award2, name: "EEPCIndia Star Performer 2014-2015" },
        { img: award3, name: "EEPCIndia Star Performer 2013-2014" },
        { img: award4, name: "EEPCIndia Star Performer 2012-2013" },

        { img: award5, name: "Award by Engineering Export Promotion Council" },
        { img: award6, name: "EEPCIndia Star Performer 2011-2012" },

    ];

    const certificates = [
        { img: cert1, name: "2016-2017" },
        { img: cert2, name: "2014-2015" },
        { img: cert3, name: "2013-2014" },
        { img: cert4, name: "2012-2013" },

        { img: cert5, name: "2011-12" },
        { img: cert6, name: "2010-2011" },
        { img: cert7, name: "2008-2009" },
        { img: cert1, name: "2016-2017" },
        { img: cert2, name: "2014-2015" },
        { img: cert3, name: "2013-2014" },
        { img: cert4, name: "2012-2013" },

        { img: cert5, name: "2011-12" },
        { img: cert6, name: "2010-2011" },
        { img: cert7, name: "2008-2009" },




    ];

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
                    <Typography color="inherit">About Us</Typography>

                    <Typography color="text.primary">AWARD AND RECOGNITION</Typography>
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
                    AWARD AND RECOGNITION
                </Typography>

                <Typography sx={{ fontSize: "15px", mb: 3, color: "#d32f2f", fontFamily: "Open Sans" }}>
                    Creating value through diverse businesses
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
                            AWARD AND RECOGNITION
                        </Typography>

                        <List sx={{ border: "1px solid #ddd" }}>
                            {leftMenu.map((item) => {
                                const isActive = item === "AWARD AND RECOGNITION";

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
                                );
                            })}
                        </List>

                    </Grid>

                    {/* Right Content Section */}
                    <Grid item size={{ xs: 12, md: 9 }}>
                        <Typography
                            sx={{
                                fontSize: "24px",
                                fontWeight: 600,
                                mb: 0,
                                fontFamily: "Open Sans",
                                textTransform: "uppercase"
                            }}
                        >
                            AWARD AND RECOGNITION
                        </Typography>
                        <Typography sx={{ color: "#df0000", fontFamily: "Open Sans", borderBottom: "1px solid #000", pb: 2 }}>
                            Creating industry benchmarks
                        </Typography>




                        {/* Introduction */}


                        <Box sx={{ mt: 2, }}>

                            <Typography sx={{ fontWeight: "600", fontSize: "20px", fontFamily: "Open Sans" }}>
                                {cmsData?.category_title}
                            </Typography>
                            <Typography sx={{ fontWeight: "400", fontSize: "16px", fontFamily: "Open Sans", marginTop: "10px" }}
                              dangerouslySetInnerHTML={{
        __html: cmsData?.category_desc
    }}
                            
                            >
                               
                            </Typography>


                            {/* profile picture box */}

                            <Box sx={{ mt: 4 }}>

                                <Grid container spacing={3}>
                                    {ImageData
                                        .slice((page - 1) * 8, (page - 1) * 8 + 8)
                                        .map((item, index) => (
                                            <Grid
                                                item
                                                size={{ xs: 12, sm: 4, md: 3 }}
                                                key={index}
                                                sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                                            >
                                                {/* Logo Box */}
                                                <Box
                                                    sx={{
                                                        width: "100%",
                                                        maxWidth: "150px",
                                                        p: 2,
                                                        borderRadius: "10px",
                                                        background: "#fff",
                                                        boxShadow: "0 4px 12px rgba(0,0,0,0.10)",
                                                        textAlign: "center",
                                                        transition: "0.3s",
                                                        "&:hover": {
                                                            transform: "translateY(-5px)",
                                                            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                                                        },
                                                    }}
                                                >
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        style={{
                                                            width: "100%",
                                                            height: "120px",
                                                            objectFit: "contain",
                                                        }}
                                                    />
                                                </Box>

                                                {/* Title BELOW the box */}
                                                <Typography
                                                    sx={{
                                                        fontSize: "14px",
                                                        mt: 1.5,
                                                        textAlign: "center",
                                                        fontFamily: "Open Sans",
                                                        width: "100%",
                                                        maxWidth: "180px",
                                                    }}
                                                >
                                                    {item.award_title}
                                                </Typography>
                                            </Grid>
                                        ))}
                                </Grid>
                                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                                    <Pagination
                                        count={Math.ceil(ImageData.length / 8)}
                                        page={page}
                                        onChange={(e, value) => setPage(value)}
                                        color="primary"
                                        size="large"
                                        shape="rounded"
                                    />
                                </Box>
                            </Box>

                            <Box sx={{ mt: 6 }}>
                                <Typography sx={{ fontWeight: "600", fontSize: "20px", fontFamily: "Open Sans" }}>
                                    {secondCmsData?.category_title}
                                </Typography>



                                {/* profile picture box */}

                                <Box sx={{ mt: 4 }}>

                                    <Grid container spacing={3}>
                                        {certificates
                                            .slice((pagee - 1) * 8, (pagee - 1) * 8 + 8)
                                            .map((item, index) => (
                                                <Grid
                                                    item
                                                    size={{ xs: 12, sm: 4, md: 3 }}
                                                    key={index}
                                                    sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                                                >
                                                    {/* Logo Box */}
                                                    <Box
                                                        sx={{
                                                            width: "100%",
                                                            maxWidth: "150px",
                                                            p: 2,
                                                            borderRadius: "10px",
                                                            background: "#fff",
                                                            boxShadow: "0 4px 12px rgba(0,0,0,0.10)",
                                                            textAlign: "center",
                                                            transition: "0.3s",
                                                            "&:hover": {
                                                                transform: "translateY(-5px)",
                                                                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                                                            },
                                                        }}
                                                    >
                                                        <img
                                                            src={item.img}
                                                            alt={item.name}
                                                            style={{
                                                                width: "100%",
                                                                height: "120px",
                                                                objectFit: "contain",
                                                            }}
                                                        />
                                                    </Box>

                                                    {/* Title BELOW the box */}
                                                    <Typography
                                                        sx={{
                                                            fontSize: "14px",
                                                            mt: 1.5,
                                                            textAlign: "center",
                                                            fontFamily: "Open Sans",
                                                            width: "100%",
                                                            maxWidth: "180px",
                                                        }}
                                                    >
                                                        {item.name}
                                                    </Typography>
                                                </Grid>
                                            ))}
                                    </Grid>
                                </Box>
                            </Box>



                            {/* PAGINATION */}
                            <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                                <Pagination
                                    count={Math.ceil(certificates.length / 8)}
                                    page={pagee}
                                    onChange={(e, value) => setPagee(value)}
                                    color="primary"
                                    size="large"
                                    shape="rounded"
                                />
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

export default AwardRecognition;
