import React, { useEffect, useState } from "react";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { axiosInstance } from "../../../Api/Axios/axios";
import { endpoints } from "../../../Api/EndPoints/endpoints";

export default function FloatingSocial() {
    const [open, setOpen] = useState(true);
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get(
                    endpoints.pageSetting.navFooter
                );
                const settingData = res?.data?.data || {};
                setData(settingData);
            } catch (err) {
                console.log(err);
            }
        };

        fetchData();
    }, []);

    const isMobile = useMediaQuery("(max-width:600px)");

    const socialItemStyle = (bg) => ({
        position: "relative",
        width: 45,
        height: 45,
        background: bg,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        cursor: "pointer",
        textDecoration: "none",

        "& .label": {
            position: "absolute",
            right: 45,
            background: bg,
            color: "#fff",
            padding: "6px 14px",
            borderRadius: "8px 0 0 8px",
            whiteSpace: "nowrap",
            opacity: 0,
            visibility: "hidden",
            pointerEvents: "none",
            transform: "translateX(10px)",
            transition: "all .3s ease",
            fontSize: 14,
            fontWeight: 500,
        },

        "&:hover .label": {
            opacity: 1,
            visibility: "visible",
            transform: "translateX(0)",
        },
    });

    return (
        <Box
            component={motion.div}
            drag={isMobile ? true : "y"}
            dragMomentum={false}
            dragElastic={0}
            dragConstraints={
                isMobile
                    ? {
                        top: -300,
                        bottom: 300,
                        left: -window.innerWidth + 80,
                        right: 0,
                    }
                    : {
                        top: -500,
                        bottom: 500,
                    }
            }
            sx={{
                position: "fixed",
                right: 0,
                top: "40%",
                transform: "translateY(-50%)",
                zIndex: 9999,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                cursor: "grab",
                userSelect: "none",

                "&:active": {
                    cursor: "grabbing",
                },
            }}
        >
            <Box sx={{ position: "relative" }}>
                <IconButton
                    onClick={() => setOpen(!open)}
                    sx={{
                        background: "#000",
                        color: "#fff",
                        borderRadius: open
                            ? "10px 0 0 0"
                            : "10px 0 0 10px",
                        width: 45,
                        height: 30,

                        "&:hover": {
                            background: "#111",
                        },

                        "&:hover .arrowLabel": {
                            opacity: !open ? 1 : 0,
                            transform: !open
                                ? "translateY(0)"
                                : "translateY(10px)",
                        },
                    }}
                >
                    <ArrowForwardIosIcon
                        sx={{
                            fontSize: 18,
                            transform: open
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                            transition: ".3s",
                        }}
                    />

                    {!open && (
                        <Typography
                            className="arrowLabel"
                            sx={{
                                position: "absolute",
                                bottom: 40,
                                right: 20,
                                background: "#000",
                                color: "#fff",
                                padding: "6px 12px",
                                borderRadius: "6px",
                                fontSize: 13,
                                whiteSpace: "nowrap",
                                opacity: 0,
                                transform: "translateY(10px)",
                                transition: ".3s ease",
                                pointerEvents: "none",
                            }}
                        >
                            Social Media
                        </Typography>
                    )}
                </IconButton>
            </Box>

            {open && (
                <Box
                    sx={{
                        borderRadius: "0 0 0 15px",
                        overflow: "visible",
                    }}
                >
                    <Box
                        component="a"
                        href="https://www.facebook.com/vikramindialtd/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={socialItemStyle("#3b5998")}
                    >
                        <Typography className="label">
                            {data?.facebook}
                        </Typography>
                        <FacebookIcon />
                    </Box>

                    <Box
                        component="a"
                        href="https://www.instagram.com/vikramindiakol/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={socialItemStyle(
                            "linear-gradient(45deg,#bc1888,#cc2366,#dc2743,#e6683c,#f09433)"
                        )}
                    >
                        <Typography className="label">
                            {data?.instagram}
                        </Typography>
                        <InstagramIcon />
                    </Box>

                    <Box
                        component="a"
                        href="https://x.com/VikramIndia_Ltd"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={socialItemStyle(
                            "linear-gradient(45deg,#363636,#1f1f1f,#4c4c4c,#0d0d0d)"
                        )}
                    >
                        <Typography className="label">
                            {data?.twitter}
                        </Typography>
                        <XIcon />
                    </Box>

                    <Box
                        component="a"
                        href="https://www.linkedin.com/company/vikram-india-official/"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            ...socialItemStyle("#0077B5"),
                            borderRadius: "0 0 0 10px",
                        }}
                    >
                        <Typography className="label">
                            {data?.linkedin}
                        </Typography>
                        <LinkedInIcon />
                    </Box>
                </Box>
            )}
        </Box>
    );
}