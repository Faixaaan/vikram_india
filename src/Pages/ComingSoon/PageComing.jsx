import React from "react";
import { Box, Typography, Button } from "@mui/material";

const PageComing = () => {
  return (
    <Box
      sx={{
        height: "70vh",
       
        background: "linear-gradient(to bottom, #352020ff, #1a1a1a)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px",
        color: "#fff",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "34px", sm: "48px", md: "60px" },
          fontWeight: 700,
          mb: 2,
          textShadow: "2px 2px 10px rgba(0,0,0,0.6)",
          animation: "fadeIn 1.2s ease",
        }}
      >
        🚧 Coming Soon
      </Typography>

      <Typography
        sx={{
          fontSize: { xs: "16px", sm: "18px", md: "20px" },
          maxWidth: "600px",
          opacity: 0.8,
          lineHeight: "150%",
          mb: 4,
          animation: "fadeIn 1.6s ease",
        }}
      >
        We are working hard to bring you something amazing.  
        Stay tuned for updates!
      </Typography>

      <Button
        variant="contained"
        sx={{
          background: "linear-gradient(to right, #EE1D25, #6b0000)",
          padding: "10px 26px",
          fontSize: { xs: "14px", sm: "16px" },
          borderRadius: "10px",
          textTransform: "none",
          "&:hover": {
            background: "linear-gradient(to right, #b40000, #490000)",
          },
          animation: "fadeIn 2s ease",
        }}
        onClick={() => window.history.back()}
      >
        Go Back
      </Button>

      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </Box>
  );
};

export default PageComing;
