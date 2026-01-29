import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import bannerImg from "../../Assets/Banner.png"; // change if needed
import { useNavigate } from "react-router-dom";

const MmsLearnMore = () => {

    const navigate = useNavigate()


  const handleClick = ()=>{
     navigate('/products/infrastructure-&-machinery')
  }
   

  return (
    <>
      {/* ================= BANNER ================= */}
      <Box
        sx={{
          width: "100%",
          height: { xs: "220px", sm: "300px", md: "380px" },
          backgroundImage: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.55)",
          }}
        />

        {/* Banner Content */}
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: 2,
          }}
        >
          {/* <Typography
            sx={{
              color: "#fff",
              fontSize: { xs: "26px", sm: "34px", md: "44px" },
              fontWeight: 700,
              fontFamily: "Roboto",
              textAlign: "center",
            }}
          >
            Module Mounting Structure
          </Typography> */}
        </Box>
      </Box>

      {/* ================= CONTENT ================= */}
      <Container maxWidth="xl">
        <Box
          sx={{
            textAlign: "center",
            py: { xs: 4, sm: 5, md: "60px" },
            px: { xs: 2, sm: 3 },
            paddingBottom:"150px!important"
          }}
        >
          {/* Title */}
          <Typography
            sx={{
              fontSize: { xs: "22px", sm: "28px", md: "40px" },
              fontWeight: 700,
              fontFamily: "Roboto",
              mb: 2,
              color: "#1A73E8",
            }}
          >
            Module Mounting Structure
          </Typography>

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
              textAlign:"center"
            }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, perspiciatis facere tempora incidunt earum, ab fugiat ipsa animi omnis labore perferendis nemo ut eos ullam quasi! Suscipit veritatis eligendi, esse sequi ipsa nulla tempora doloremque, soluta adipisci dolore at impedit ad obcaecati repellendus cum vero incidunt quos et! Perspiciatis consequatur ut eaque sit nam est rerum doloremque incidunt quas maxime!
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

export default MmsLearnMore;
