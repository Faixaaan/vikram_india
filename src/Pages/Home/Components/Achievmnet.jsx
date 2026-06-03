import React, { useEffect, useState } from "react";
import { Box, Container, Typography, Button } from "@mui/material";

import { axiosInstance } from "../../../Api/Axios/axios";
import { endpoints } from "../../../Api/EndPoints/endpoints";
import { motion } from "framer-motion";

const Achievmnet = () => {
   
    const [data, setdata] = useState([]);


    const fetchData = async () => {
        try {
            const res = await axiosInstance.get(endpoints.HomeCms.getHomeCms);
            setdata(res?.data?.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Box
            sx={{
                width: "100%",
                overflow: "hidden",
                backgroundImage: `url(${data?.sec4img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                // backgroundAttachment: { xs: "scroll", md: "fixed" },

                padding: { xs: "30px 0", sm: "40px 0", md: "80px 0 60px" },
                borderTop: "1px solid #1E1E1E",
                minHeight: { xs: "auto", md: "700px" },

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
         
        </Box>
    );
};

export default Achievmnet;