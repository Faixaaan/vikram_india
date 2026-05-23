import React, { useEffect } from "react";
import {
    Box,
    Typography,
    Divider,
    Button,
    CircularProgress
} from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useDispatch, useSelector } from "react-redux";
import { fetchNoticeDetails } from "../../../Redux/slices/noticeSlice";

const NoticeDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const { noticeDetails, loading } = useSelector((state) => state.notice);

    // ✅ API CALL
    useEffect(() => {
        if (id) {
            dispatch(fetchNoticeDetails(Number(id)));
        }

        console.log("ID 👉", id);
    }, [id, dispatch]);

    useEffect(() => {
        console.log("DETAIL 👉", noticeDetails);
    }, [noticeDetails]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        });
    }, [id]);

    if (!loading && !noticeDetails) {
        return <Typography>No Data Found</Typography>;
    }

    const formatDate = (dateString) => {
        if (!dateString) return "";

        const date = new Date(dateString);

        return date.toLocaleDateString("en-US", {
            month: "2-digit",
            day: "2-digit",
            year: "numeric",
        });
    };

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
            <Box sx={{ display: "flex", justifyContent: "space-between", width: { xs: "50%", sm: "80%" }, margin: "0 auto", alignItems: "center", flexDirection: { xs: "column", sm: "row" }, gap: { xs: "20px", sm: "0px" } }} >
                <Button
                    variant="contained"
                    sx={{
                        alignSelf: { xs: "stretch", sm: "flex-start" },
                        px: { xs: 1.8, sm: 2.2, md: 2.4 },
                        py: { xs: 0.7, sm: 0.9 },
                        fontSize: { xs: "16px", sm: "18px" },
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
                        px: { xs: 1.8, sm: 2.2, md: 2.4 },
                        py: { xs: 0.7, sm: 0.9 },
                        fontSize: { xs: "16px", sm: "18px" },
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
                {loading ? (
                    <Box textAlign="center">
                        <CircularProgress />
                    </Box>
                ) : (
                    <>
                        {/* 📰 TITLE */}
                        <Typography
                            sx={{
                                fontSize: { xs: "22px", md: "28px" },
                                fontWeight: 900,
                                textTransform: "uppercase",
                                mb: 2
                            }}
                        >
                            {noticeDetails?.title}
                        </Typography>

                        <Divider
                            sx={{
                                height: "3px",
                                backgroundColor: "#d32f2f",
                                mb: 4
                            }}
                        />

                        {/* 📅 DATE */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                flexWrap: "wrap",
                                mb: 2
                            }}
                        >
                            <Typography sx={{ fontWeight: 600 }}>
                                Date: {formatDate(noticeDetails?.date)}
                            </Typography>
                        </Box>

                        {/* 📄 CONTENT */}
                        <Box
                            sx={{
                                fontSize: { xs: "16px", md: "17px" },
                                lineHeight: 1.6
                            }}
                            dangerouslySetInnerHTML={{
                                __html: noticeDetails?.content_desc || "",
                            }}
                        />
                    </>
                )}
            </Box>

        </Box>
    );
};

export default NoticeDetails;
