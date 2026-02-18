import React, { useEffect } from "react";
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


    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        });
    }, [id]);

    return (
        <Box
            sx={{
               
                backgroundColor: "#f4f4f4",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                py: 6,
                gap: "40px"
            }}
        >
            <Box sx={{ display: "flex", justifyContent:"space-between", width: {xs: "50%" , sm:"80%"}, margin: "0 auto", alignItems: "center", flexDirection: {xs:"column", sm: "row"}, gap: {xs: "20px", sm: "0px"} }} >
                <Button
                    variant="contained"
                    sx={{
                        alignSelf: { xs: "stretch", sm: "flex-start" },
                   px: {xs: 1.8, sm:2.2, md: 2.4},
                                    py: {xs: 0.7, sm: 0.9},
                                    fontSize: {xs:"16px", sm: "18px"},
                        borderRadius: "30px",
                        textTransform: "none",
                        fontWeight: 600,
                        position: "relative",
                        overflow: "hidden",
                        background: "#bd2304",
                        zIndex: 1,

                        "& span": {
                            position: "relative",
                            zIndex: 2,
                        },

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
                            background: "#bd2304",
                        },
                    }}
                    startIcon={<ArrowBackIcon />}
                    onClick={() => navigate("/home")}
                >
                    <span>Back to Home</span>
                </Button>
                <Button
                    variant="contained"
                    sx={{
                        alignSelf: { xs: "stretch", sm: "flex-start" },
                     px: {xs: 1.8, sm:2.2, md: 2.4},
                                    py: {xs: 0.7, sm: 0.9},
                                    fontSize: {xs:"16px", sm: "18px"},
                        borderRadius: "30px",
                        textTransform: "none",
                        fontWeight: 600,
                        position: "relative",
                        overflow: "hidden",
                        background: "#bd2304",
                        zIndex: 1,

                        "& span": {
                            position: "relative",
                            zIndex: 2,
                        },

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
                            background: "#bd2304",
                        },
                    }}
                    startIcon={<ArrowBackIcon />}
                    onClick={() => navigate("/all-notices")}
                >
                    <span>All Notices</span>
                </Button>
            </Box>

            <Box
                sx={{
                    width: { md: "75%" },
                    margin: "0 15px",
                    backgroundColor: "#fff",
                    borderRadius: "20px",
                    p: { xs: 3, md: 6 },
                    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                }}
            >
                <Typography
                    sx={{
                        fontSize: { xs: "22px", sm: "24px", md: "28px" },
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

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        mb: 2,
                    }}
                >
                    <Typography sx={{ fontWeight: 600 , fontSize: {xs: "15px", sm: "16px"}}}>
                        Ref. VI/B2B/2026/01
                    </Typography>

                    <Typography sx={{ fontWeight: 600 , fontSize: {xs: "15px", sm: "16px"}}}>
                        Date: 12/02/2026
                    </Typography>
                </Box>

                <Typography sx={{ mb: 2, fontSize: {xs: "16px", md: "17px"}, lineHeight:{xs: 1.4, md: 1.6} }}>
                    VikramIndia is pleased to announce the expansion of its B2B
                    distribution network across multiple regions in India.
                </Typography>
            </Box>

        </Box>
    );
};

export default NoticeDetails;
