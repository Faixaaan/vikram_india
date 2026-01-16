import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Paper, Container, Button } from "@mui/material";

// Import images
import tata from "../../../Assets/apeejay.png";
import adani from "../../../Assets/adani.png";
import sterling from "../../../Assets/wilson.png";
import unilever from "../../../Assets/tata.png";
import amalgamated from "../../../Assets/unilever.png";
import appee from "../../../Assets/tata.png"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Link, useNavigate } from "react-router-dom";
import { endpoints } from "../../../Api/EndPoints/endpoints";
import { axiosInstance } from '../../../Api/Axios/axios';

const logos = [tata, adani, sterling, unilever, amalgamated, appee];

const OurClient = () => {
  const navigatee = useNavigate()

  const [data, setData] = useState([]);

  const fetchClientData = async () => {
    try {
      const res = await axiosInstance.get(endpoints.HomeCms.client)
      setData(res?.data?.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchClientData()
  }, [])

  const handleComingsoon = () => {
    navigatee('/page-coming-soon');
  };
  return (
    <Box sx={{ width: "100%", py: { md: 6, xs: 4 }, backgroundColor: "#fff" }}>
      <Container maxWidth='xl'>
        {/* Heading */}
        <Typography
          variant="h5"
          align="center"
          sx={{ fontWeight: 700, mb: 3, fontSize: { xs: "32px", md: "40px" }, fontFamily: "Open Sans", marginBottom: { md: "10px", xs: "40px" } }}
        >
          Our Clients
        </Typography>

        {/* Blue Bordered Logo Box */}

        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {data?.map((logo, index) => (
            <Grid
              item
              size={{ xs: 6, sm: 4, md: 2 }}


              key={index}
              display="flex"
              justifyContent="center"
            >
              <Box
                component="img"
                src={logo?.image}
                alt={`client-logo-${index}`}
                sx={{
                  width: "120px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Grid>
          ))}
        </Grid>

        {/* Know More */}
        <Box sx={{ textAlign: "center", mt: 2 }} onClick={handleComingsoon}>
          <Button
            variant="contained"
            sx={{

              background: "linear-gradient(to bottom, #000, #EE1D25)",

              padding: { xs: "10px 30px", md: "12px 35px" },
              textTransform: "none",
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: "600",
              fontFamily: 'Open Sans',
              '&:hover': {
                background: "#1E1E1E",
                transform: 'translateY(-2px)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
              },
              transition: 'all 0.3s ease-in-out',
              marginTop: { xs: 1, md: 2 },
              marginInline: { xs: "auto", md: "0px" }, fontFamily: "Open Sans"
            }}

          >
            Know More
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default OurClient;
