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
import group1 from '../../Assets/clientel.jpg'
import client1 from '../../Assets/McLeod-russel.gif'
import client2 from '../../Assets/tata.png'
import client3 from '../../Assets/amalgamated-plantation.gif'
import client4 from '../../Assets/unilever.png'
import client5 from '../../Assets/kenya-tea.gif'
import client6 from '../../Assets/swire-group.gif'
import client7 from '../../Assets/goodrick.gif'
import client8 from '../../Assets/duncans.gif'
import client9 from '../../Assets/eastern-produce.gif'
import client10 from '../../Assets/willianson-tea.gif'
import client11 from '../../Assets/a.v.thomas.gif'
import client12 from '../../Assets/andrew-yule.gif'
import client13 from '../../Assets/apeejay.png'
import client14 from '../../Assets/assam-company.gif'
import client15 from '../../Assets/gillanders-arbuthnot.gif'
import client16 from '../../Assets/dalmia-tea-plantation-and-industries-ltd.gif'







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



const Clientele = () => {

    const clientLogos = [
        { img: client1, name: "McLeod Russel (India) Ltd." },
        { img: client2, name: "Tata Tea group" },
        { img: client3, name: "Amalgamated Plantations" },
        { img: client4, name: "Unilever Group" },

        { img: client5, name: "KTDA (Kenya Tea Development Agency Ltd.)" },
        { img: client6, name: "Swire Group (Finlays)" },
        { img: client7, name: "Goodricke Group" },
        { img: client8, name: "Duncans" },

        { img: client9, name: "Eastern Produce Group" },
        { img: client10, name: "Williamson Tea" },
        { img: client11, name: "A V Thomas & Co." },
        { img: client12, name: "Andrew Yule & Co. Ltd." },

        { img: client13, name: "Apeejay Group" },
        { img: client14, name: "Assam Co. Ltd." },
        { img: client15, name: "Gillanders Arbuthnot & Co." },
        { img: client16, name: "Dalmia Tea Plantation & Industries Ltd." },
    ];


    const [page, setPage] = useState(1);





    useEffect(() => {
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

                    <Typography color="text.primary">CLIENTELE</Typography>
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
                    CLIENTELE
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
                            CLIENTELE
                        </Typography>

                        <List sx={{ border: "1px solid #ddd" }}>
                            {leftMenu.map((item) => {
                                const isActive = item === "CLIENTELE";

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
                                mb: 1,
                                fontFamily: "Open Sans",
                                textTransform: "uppercase",

                            }}
                        >
                            CLIENTELE
                        </Typography>
                        <Typography sx={{ fontSize: "16px", fontFamily: "Open Sans", textAlign: "justify", color: "#df0000" }}>
                            Building relationships across the globe
                        </Typography>

                        {/* Introduction */}


                        <Box>

                            <Box sx={{ mt: 4 }}>
                                <Grid container spacing={2} mt={2}>
                                    <Grid size={{ xs: 12, md: 3.4 }} sx={{ display: "flex", justifyContent: "center" }} >
                                        <img src={group1} />
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 8.6 }} >
                                        <Typography sx={{ fontFamily: "", fontSize: { sm: "18px", xs: "16px" }, lineHeight: "120%", marginBottom: "15px", fontWeight: "500", color: "#121111ff" }}>
                                            Started as a forging plant manufacturing stainless steel segments for CTC rollers used in the indigenous tea industry in 1974, Vikram Group
                                        </Typography>
                                        <Typography sx={{ fontFamily: "", fontSize: { sm: "18px", xs: "16px" }, textAlign: "justify", marginTop: "15px!important", fontWeight: "400", lineHeight: "120%", color: "#121111ff" }}>
                                            has established itself as a quality driven, service oriented and performance focused Indian conglomerate with a distinct international edge. Through strategic global expansion and investments in latest technology to drive the business forward, the Group has created a strong position worldwide.
                                        </Typography>
                                        <Typography sx={{ fontFamily: "", fontSize: { sm: "18px", xs: "16px" }, lineHeight: "120%", marginTop: "15px", fontWeight: "500", color: "#121111ff" }}>
                                            Started as a forging plant manufacturing stainless steel segments for CTC rollers used in the indigenous tea industry in 1974, Vikram Group
                                        </Typography>
                                    </Grid>
                                </Grid>

                            </Box>


                            {/* profile picture box */}
                            <Box sx={{ mt: 6 }}>
                                <Typography
                                    sx={{
                                        fontSize: "22px",
                                        fontWeight: 600,
                                        mb: 2,
                                        fontFamily: "Open Sans",
                                        textTransform: "capitalize",
                                    }}
                                >
                                    The list includes the following
                                </Typography>

                                <Grid container spacing={3}>
                                    {clientLogos
                                        .slice((page - 1) * 12, (page - 1) * 12 + 12)
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
                                                            height: "80px",
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


                                {/* PAGINATION */}
                                <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
                                    <Pagination
                                        count={Math.ceil(clientLogos.length / 12)}
                                        page={page}
                                        onChange={(e, value) => setPage(value)}
                                        color="primary"
                                        size="large"
                                        shape="rounded"
                                    />
                                </Box>
                            </Box>





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

export default Clientele;
