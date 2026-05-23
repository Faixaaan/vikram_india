import React, { useState } from "react";
import { Box, Typography, Container } from "@mui/material";
import bannerImg from "../../Assets/tower_line_transmission.png"; // change if needed

import { axiosInstance } from "../../Api/Axios/axios";
import { endpoints } from "../../Api/EndPoints/endpoints";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageComing from "../ComingSoon/PageComing";

const TowerLineTransmission = () => {

    const tltbanner = bannerImg;

    const [data, setData] = useState([])

    const getData = async () => {
        try {
            const res = await axiosInstance.get(endpoints.ModuleMounting.Introduction);
            setData(res?.data?.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])





    return (
        <>
            {/* ================= BANNER ================= */}
            <Box
                sx={{
                    width: "100%",
                    height: { xs: "220px", sm: "300px", md: "380px" },
                    //   backgroundImage: `url(${data?.banner})`,
                    backgroundImage: `url(${tltbanner})`,

                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {/* Overlay */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(0,0,0,0.6)",
                    }}
                />

                {/* Banner Content */}
                <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
                    <Box sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>

                        {/* Title */}
                        <Typography
                            sx={{
                                color: "#fff",
                                fontSize: { xs: "24px", sm: "32px", md: "42px" },
                                fontWeight: 700,
                                fontFamily: "Roboto",
                                mb: 2,
                            }}
                        >
                            {/* {data?.title} */}
                            Tower Line Transmission
                        </Typography>

                        {/* Breadcrumbs */}
                        <Typography sx={{ color: "#fff", fontSize: "14px" }}>
                            <Typography
                                component={Link}
                                to="/home"
                                underline="none"
                                sx={{ color: "#fff", textdecoration: "none", fontSize: "15px", }}
                            >
                                Home
                            </Typography>


                            {" / "}
                            <Typography
                                component={Link}
                                to=""
                                underline="none"
                                sx={{ color: "#fff", textdecoration: "none", fontSize: "15px", textDecoration: "none" }}
                            >
                                Tower Line Transmission
                            </Typography>


                        </Typography>
                    </Box>

                </Container>


            </Box>
                <PageComing />


        </>
    );
};

export default TowerLineTransmission;
