import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import bannerImg from "../../Assets/Banner.png"; // change if needed
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { endpoints } from "../../Api/EndPoints/endpoints";
import { axiosInstance } from "../../Api/Axios/axios";
import { Link } from "react-router-dom";

const HdpLearnMore = () => {

  const navigate = useNavigate()


  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await axiosInstance.get(endpoints.HotDipGalvanization.SettingPage)
      setData(res.data?.data);
      console.log(res?.data, 'settings___')
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])


  const handleClick = () => {
    navigate("/products/introduction")
  }


  return (
    <>
      {/* ================= BANNER ================= */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "220px", sm: "300px", md: "380px" },
          backgroundImage: `url(${data?.banner})`,
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
              {data?.title}
            </Typography>

            {/* Breadcrumbs */}
            <Typography sx={{ color: "#fff", fontSize: "14px" }}>
              <Typography
                component={Link}
                to="/"
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
                sx={{ color: "#fff", textdecoration: "none", fontSize: "15px", }}
              >
                World-Class Hot Dip Galvanizing Services
              </Typography>


            </Typography>
          </Box>

        </Container>
      </Box>

      {/* ================= CONTENT ================= */}
      <Container maxWidth="xl">
        <Box
          sx={{
            textAlign: "center",
            py: { xs: 4, sm: 5, md: "60px" },
            px: { xs: 2, sm: 3 },
            paddingBottom: "150px!important"
          }}
        >
          {/* Title */}


          {/* Subtitle */}
          <Typography
            sx={{
              fontSize: { xs: "15px", sm: "16px", md: "17px" },
              fontWeight: 400,
              fontFamily: "Roboto",
              color: "#555",
              maxWidth: "1100px",
              mx: "auto",
              mb: 4,
              lineHeight: "1.4",
              textAlign: "center"
            }}
            dangerouslySetInnerHTML={{
              __html: `
      ${data?.description}
    `
            }}
          >

          </Typography>

          {/* Learn More Button */}
          <Button
            variant="contained"
            sx={{
              background: "linear-gradient(to bottom, #1A73E8, )",
              "&:hover": {
                background: "linear-gradient(to bottom, #a00000, #600000)",
              },
              borderRadius: "16px",
              px: 4,
              py: 1.2,
              fontSize: { xs: "14px", sm: "15px" },
              fontFamily: "Roboto",
              textTransform: "capitalize",
            }}
            onClick={handleClick}
          >
            Learn More
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default HdpLearnMore;
