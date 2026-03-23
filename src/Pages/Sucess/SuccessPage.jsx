import React from "react";
import { Box, Typography, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { useLocation } from "react-router-dom";

const SuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
const formType = location.state?.formType || "Form";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f5f5f5",
        px: 2,
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, scale: 0.8, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        sx={{
          width: { xs: "100%", sm: "420px", md: "480px" },
          borderRadius: "20px",
          padding: "40px 30px",
          textAlign: "center",

          // Glass Effect
          background: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          border: "1px solid rgba(255,255,255,0.3)",

          boxShadow: "0 20px 40px rgba(0,0,0,0.1)",

          position: "relative",
        }}
      >
        {/* GREEN CHECK ICON */}
        <Box
          component={motion.div}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 3,
          }}
        >
          <CheckCircleIcon
            sx={{
              fontSize: 70,
              color: "#22c55e",
              filter: "drop-shadow(0px 5px 15px rgba(34,197,94,0.5))",
            }}
          />
        </Box>

        {/* TITLE */}
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            mb: 1,
            fontFamily: "Roboto",
          }}
        >
         {formType}  Submission Successful
        </Typography>

        {/* DESCRIPTION */}
        <Typography
          sx={{
            color: "#666",
            fontSize: "14px",
            mb: 4,
            fontFamily: "Roboto",
          }}
        >
          Your  {formType} has been submitted successfully. We will get back to you soon.
        </Typography>

        {/* BUTTON */}
        <Button
          component={motion.button}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/home")}
          sx={{
            px: 4,
            py: 1.2,
            borderRadius: "30px",
            textTransform: "none",
            fontWeight: 600,
            fontSize: "15px",

            background: "linear-gradient(135deg, #000, #333)",
            color: "#fff",

            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",

            "&:hover": {
              background: "linear-gradient(135deg, #111, #000)",
            },
          }}
        >
          Go Back Home
        </Button>
      </Box>
    </Box>
  );
};

export default SuccessPage;