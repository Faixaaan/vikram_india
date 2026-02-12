import React from "react";
import {
    Box,
    Typography,
    Divider,
    Button
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const NoticeDetails = () => {


    const { id } = useParams();

    const navigate = useNavigate();

    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundColor: "#f4f4f4",
                display: "flex",
                flexDirection: "column",

                justifyContent: "center",
                alignItems: "center",
                py: 6,
                gap: "40px"
            }}
        >
            <Box sx={{ textAlign: "center", mt: 4 }} >
                <Button
                    variant="contained"
                    sx={{
                        alignSelf: { xs: "stretch", sm: "flex-start" },
                        // mt: 2,
                        px: 4,
                        py: 1.4,
                        borderRadius: "30px",
                        textTransform: "none",
                        fontWeight: 600,
                        fontSize: "18px",

                        position: "relative",
                        overflow: "hidden",

                        background: "#c40613",

                        // text always on top
                        zIndex: 1,

                        "& span": {
                            position: "relative",
                            zIndex: 2,
                        },

                        // center burst layer
                        "&:before": {
                            content: '""',
                            position: "absolute",
                            left: "50%",
                            top: "50%",
                            width: 0,
                            height: 0,
                            background: "#000",
                            borderRadius: "50%",
                            transform: "translate(-12%, -50%)",
                            transition: "all 1s ease",
                            zIndex: 0,
                        },

                        "&:hover:before": {
                            width: "300%",
                            height: "300%",
                        },

                        "&:hover": {
                            background: "#c40613",
                        },
                    }}

                     startIcon={<ArrowBackIcon />}
                onClick={() => navigate("/home")}

                >
                    <span>         Back to Home</span>
                </Button>

            </Box>
            {/* <Button
                startIcon={<ArrowBackIcon />}
                onClick={() => navigate("/home")}
                sx={{
                    mb: 3,
                    textTransform: "none",
                    fontWeight: 600,
                }}
            >
       
            </Button> */}
            <Box
                sx={{
                    width: { xs: "95%", md: "75%" },
                    backgroundColor: "#fff",
                    borderRadius: "20px",
                    p: { xs: 3, md: 6 },
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                }}
            >
                {/* TITLE */}
                <Typography
                    sx={{
                        fontSize: { xs: "26px", md: "36px" },
                        fontWeight: 900,
                        textTransform: "uppercase",
                        mb: 2,
                    }}
                >
                    VikramIndia B2B Business Expansion & Partnership Announcement
                </Typography>

                <Divider
                    sx={{
                        height: "3px",
                        backgroundColor: "#d32f2f",
                        mb: 4,
                    }}
                />

                {/* REF + DATE */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        mb: 2,
                    }}
                >
                    <Typography sx={{ fontWeight: 600 }}>
                        Ref. VI/B2B/2026/01
                    </Typography>

                    <Typography sx={{ fontWeight: 600 }}>
                        Date: 12/02/2026
                    </Typography>
                </Box>

                {/* BODY CONTENT */}
                <Typography sx={{ mb: 2, fontSize: "17px", lineHeight: 1.8 }}>
                    VikramIndia is pleased to announce the expansion of its B2B
                    distribution network across multiple regions in India. As part of
                    our strategic growth initiative, we are inviting manufacturers,
                    wholesalers, and bulk suppliers to collaborate with us.
                </Typography>

                <Typography sx={{ mb: 2, fontSize: "17px", lineHeight: 1.8 }}>
                    Our objective is to strengthen supply chain efficiency, improve
                    logistics coordination, and deliver high-quality products to our
                    business partners at competitive pricing.
                </Typography>

                <Typography sx={{ fontWeight: 700, mt: 3 }}>
                    Partnership Categories:
                </Typography>

                <Box component="ul" sx={{ mt: 1, pl: 3 }}>
                    <li>Authorized Product Distributors</li>
                    <li>Bulk Supply & Inventory Partners</li>
                    <li>Regional Logistics & Warehousing Associates</li>
                    <li>Corporate Procurement Clients</li>
                </Box>

                <Typography sx={{ fontWeight: 700, mt: 3 }}>
                    Key Benefits:
                </Typography>

                <Box component="ul" sx={{ mt: 1, pl: 3 }}>
                    <li>Transparent pricing model with high-margin opportunities</li>
                    <li>Dedicated B2B account management support</li>
                    <li>Fast order processing & streamlined delivery system</li>
                    <li>Long-term strategic growth collaboration</li>
                </Box>

                <Typography sx={{ mt: 3 }}>
                    Interested businesses are encouraged to contact the VikramIndia B2B
                    Sales Team for onboarding and partnership details.
                </Typography>

                <Typography sx={{ mt: 4, color: "gray" }}>
                    For partnership inquiries, please email: b2b@vikramindia.com
                </Typography>
            </Box>
        </Box>
    );
};

export default NoticeDetails;
