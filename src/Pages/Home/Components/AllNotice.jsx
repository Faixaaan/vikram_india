import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Grid,
  Button
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// 🔴 Dummy Data (same as Initiatives)
const noticeData = [
  { id: 1, date: "07/02/2026", title: "Geography Classes suspension" },
  { id: 2, date: "07/02/2026", title: "Department of Hindi faculty meeting" },
  { id: 3, date: "07/02/2026", title: "Post-publication Re-examination Notice" },
  { id: 4, date: "07/02/2026", title: "Mathematics departmental meeting" },
  { id: 5, date: "06/02/2026", title: "CIE FOR PHYSICS HONOURS" },
  { id: 6, date: "06/02/2026", title: "HR CLASS" },
];

const AllNotice = () => {

  const navigate = useNavigate();

  // Scroll top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#f4f4f4",
        minHeight: "100vh",
        py: 6,
      }}
    >

      <Box textAlign="center" mb={6}>
        <Typography
          sx={{
            fontSize: { xs: "26px", md: "38px" },
            fontWeight: 800,
            letterSpacing: "2px",

            position: "relative",
            display: "inline-block",
            background: "linear-gradient(90deg, #1BAA63, #276f9e)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",

          }}
        >
          ALL INITIATIVE NOTICES


          <Box
            sx={{
              position: "absolute",
              bottom: -10,
              left: "50%",
              transform: "translateX(-50%)",
              width: "60%",
              height: "3px",
              borderRadius: "5px",
              background: "linear-gradient(90deg, #1BAA63, #276f9e)",
            }}
          />
        </Typography>

        {/* Sub Heading */}
        <Typography
          sx={{
            mt: 3,
            fontSize: "14px",
            color: "#666",
            letterSpacing: "1px",
          }}
        >
          Stay updated with the latest official announcements
        </Typography>
      </Box>

      {/* BACK BUTTON */}
      <Box textAlign="center" mb={5}>
        <Button
          variant="contained"
          sx={{
            alignSelf: { xs: "stretch", sm: "flex-start" },
            px: 4,
            py: 1.4,
            borderRadius: "30px",
            textTransform: "none",
            fontWeight: 600,
            fontSize: "18px",

            position: "relative",
            overflow: "hidden",

            background: "#c40613",


            zIndex: 1,

            "& span": {
              position: "relative",
              zIndex: 2,
            },


            "&:before": {
              content: '""',
              position: "absolute",
              left: "50%",
              top: "50%",
              width: 0,
              height: 0,
              background: "#000",
              borderRadius: "50%",
              transform: "translate(-12%, -50%)",
              transition: "all 1s ease",
              zIndex: 0,
            },

            "&:hover:before": {
              width: "300%",
              height: "300%",
            },

            "&:hover": {
              background: "#c40613",
            },
          }}
          onClick={() => navigate("/home")}
        >
          <span>Back to Home</span>
        </Button>

      </Box>

      {/* GRID */}
      {/* LIST STYLE */}
      <Box sx={{ width: { xs: "95%", sm: "70%", md: "55%" }, mx: "auto" }}>
        {noticeData.map((item, index) => (
          <Box
            key={item.id}
            onClick={() => navigate(`/notice/${item.id}`)}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              backgroundColor: "#fff",
              borderRadius: "12px",
              p: 3,
              mb: { xs: 2, md: 3 },
              cursor: "pointer",
              boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
              transition: "all .3s ease",

              "&:hover": {
                transform: "translateX(8px)",
                boxShadow: "0 12px 30px rgba(0,0,0,0.12)",
              },
            }}
          >
            {/* LEFT SIDE */}
            <Box sx={{ display: "flex", alignItems: "center", gap: { xs: 0, md: 3 } }}>
              {/* Serial Number */}
              <Typography
                sx={{
                  fontSize: "20px",
                  fontWeight: 700,
                  color: "#276f9e",
                  minWidth: "40px",
                }}
              >
                {index + 1}.
              </Typography>

              {/* Title */}
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: 600,
                  lineHeight: 1.5,
                }}
              >
                {item.title}
              </Typography>
            </Box>

            {/* DATE RIGHT SIDE */}
            <Box
              sx={{
                background: "linear-gradient(135deg, #1BAA63 0%, #276f9e 100%)",
                color: "#fff",
                px: 2.5,
                py: 1,
                borderRadius: "20px",
                fontSize: "14px",
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              {item.date}
            </Box>
          </Box>
        ))}
      </Box>



    </Box>
  );
};

export default AllNotice;
