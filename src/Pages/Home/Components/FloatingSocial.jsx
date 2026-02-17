import React, { useState } from "react";
import { Box, IconButton, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function FloatingSocial() {
    const [open, setOpen] = useState(true);

    // ✅ Detect mobile screen
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
            transition: "all 0.3s ease",
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
            drag={isMobile} // ✅ Only mobile e drag hobe
            dragMomentum={false}
            dragConstraints={{
                top: -300,
                bottom: 300,
                left: -window.innerWidth + 80,
                right: 0,
            }}
            sx={{
                position: "fixed",
                right: 0,
                top: "40%",
                transform: "translateY(-50%)",
                zIndex: 9999,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
                cursor: isMobile ? "grab" : "default",
                "&:active": {
                    cursor: isMobile ? "grabbing" : "default",
                }
            }}
        >
            <Box sx={{ position: "relative" }}>
                <IconButton
                    onClick={() => setOpen(!open)}
                    sx={{
                        background: "#000",
                        color: "#fff",
                        borderRadius: open ? "10px 0 0 0" : "10px 0 0 10px",
                        width: 45,
                        height: 30,
                        "&:hover": { background: "#111" },

                        "&:hover .arrowLabel": {
                            opacity: !open ? 1 : 0,
                            transform: !open ? "translateY(0)" : "translateY(10px)",
                        },
                    }}
                >
                    <ArrowForwardIosIcon
                        sx={{
                            fontSize: 18,
                            transform: open ? "rotate(180deg)" : "rotate(0deg)",
                            transition: "0.3s",
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
                                transition: "0.3s ease",
                                pointerEvents: "none",
                            }}
                        >
                            Social Media
                        </Typography>
                    )}
                </IconButton>
            </Box>

            {open && (
                <Box sx={{ borderRadius: "0 0 0 15px", overflow: "visible" }}>
                    <Box
                        component="a"
                        href="#"
                        target="_blank"
                        sx={socialItemStyle("#3b5998")}
                    >
                        <Typography className="label">Facebook</Typography>
                        <FacebookIcon />
                    </Box>

                    <Box
                        component="a"
                        href="#"
                        target="_blank"
                        sx={socialItemStyle(
                            "linear-gradient(45deg, #bc1888, #cc2366, #dc2743, #e6683c, #f09433)"
                        )}
                    >
                        <Typography className="label">Instagram</Typography>
                        <InstagramIcon />
                    </Box>

                    <Box
                        component="a"
                        href="#"
                        target="_blank"
                        sx={{ ...socialItemStyle("#0077B5"), borderRadius: "0 0 0 10px" }}
                    >
                        <Typography className="label">LinkedIn</Typography>
                        <LinkedInIcon />
                    </Box>
                </Box>
            )}
        </Box>
    );
}
