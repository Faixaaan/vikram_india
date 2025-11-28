import React from "react";
import { Box, Typography, Grid, Paper, Container } from "@mui/material";

// Import images
import tata from "../../../Assets/apeejay.png";
import adani from "../../../Assets/adani.png";
import sterling from "../../../Assets/wilson.png";
import unilever from "../../../Assets/tata.png";
import amalgamated from "../../../Assets/unilever.png";
import appee from "../../../Assets/tata.png"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const logos = [tata, adani, sterling, unilever, amalgamated, appee];

const OurClient = () => {
  return (
    <Box sx={{ width: "100%", py: 6, backgroundColor: "#fff" }}>
      <Container maxWidth='xl'>
        {/* Heading */}
        <Typography
          variant="h5"
          align="center"
          sx={{ fontWeight: 700, mb: 3,fontSize:"40px",fontFamily:"Open Sans",marginBottom:{md:"10px",xs:"60px"} }}
        >
          Our Client
        </Typography>

        {/* Blue Bordered Logo Box */}
        
          <Grid container spacing={2} justifyContent="center" alignItems="center">
            {logos.map((logo, index) => (
              <Grid
                item
                size={{xs: 6,sm: 4,md: 2}}
              
                
                key={index}
                display="flex"
                justifyContent="center"
              >
                <Box
                  component="img"
                  src={logo}
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
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Typography
            variant="body1"
            sx={{ fontSize: "16px", fontWeight: 600, cursor: "pointer",textDecoration:"underline",display:"flex",justifyContent:"center",alignItems:"center" }}
          >
            Know More <ArrowDropDownIcon/>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default OurClient;
