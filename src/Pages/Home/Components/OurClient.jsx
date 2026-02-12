


// import React, { useEffect, useState } from "react";
// import { Box, Typography, Grid, Paper, Container, Button } from "@mui/material";

// // Import images
// import tata from "../../../Assets/apeejay.png";
// import adani from "../../../Assets/adani.png";
// import sterling from "../../../Assets/wilson.png";
// import unilever from "../../../Assets/tata.png";
// import amalgamated from "../../../Assets/unilever.png";
// import appee from "../../../Assets/tata.png"
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import { Link, useNavigate } from "react-router-dom";
// import { endpoints } from "../../../Api/EndPoints/endpoints";
// import { axiosInstance } from '../../../Api/Axios/axios';

// const logos = [tata, adani, sterling, unilever, amalgamated, appee];

// const OurClient = () => {
//   const navigatee = useNavigate()

//   const [data, setData] = useState([]);

//   const fetchClientData = async () => {
//     try {
//       const res = await axiosInstance.get(endpoints.HomeCms.client)
//       setData(res?.data?.data)
//     }
//     catch (err) {
//       console.log(err)
//     }
//   }

//   useEffect(() => {
//     fetchClientData()
//   }, [])

//   const handleComingsoon = () => {
//     navigatee('/page-coming-soon');
//   };
//   return (
//     <Box sx={{ width: "100%", py: { md: 6, xs: 4 }, backgroundColor: "#fff" }}>
//       <Container maxWidth='xl'>
//         {/* Heading */}
//         <Typography
//           variant="h5"
//           align="center"
//           sx={{
//             fontWeight: 700, mb: 3, fontSize: { xs: "32px", md: "40px" }, fontFamily: "Roboto", marginBottom: {
//               md: "10px", xs: "40px", background: "linear-gradient(90deg, #1BAA63 0%, #276f9e 100%)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//             }
//           }}
//         >
//           Our Clients
//         </Typography>

//         {/* Blue Bordered Logo Box */}

//         <Grid container spacing={2} justifyContent="center" alignItems="center">
//           {data?.map((logo, index) => (
//             <Grid
//               item
//               size={{ xs: 6, sm: 4, md: 2 }}


//               key={index}
//               display="flex"
//               justifyContent="center"
//             >
//               <Box
//                 component="img"
//                 src={logo?.image}
//                 alt={`client-logo-${index}`}
//                 sx={{
//                   width: "120px",
//                   height: "auto",
//                   objectFit: "contain",
//                 }}
//               />
//             </Grid>
//           ))}
//         </Grid>

//         {/* Know More */}
//         <Box sx={{ textAlign: "center", mt: 2 }} onClick={handleComingsoon}>
//           <Button
//             variant="contained"
//             sx={{

//               background: "linear-gradient(to bottom, #000, #EE1D25)",

//               padding: { xs: "10px 30px", md: "12px 35px" },
//               textTransform: "none",
//               fontSize: { xs: "14px", md: "16px" },
//               fontWeight: "600",
//               fontFamily: 'Roboto',
//               '&:hover': {
//                 background: "#1E1E1E",
//                 transform: 'translateY(-2px)',
//                 boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
//               },
//               transition: 'all 0.3s ease-in-out',
//               marginTop: { xs: 1, md: 2 },
//               marginInline: { xs: "auto", md: "0px" }, fontFamily: "Roboto"
//             }}

//           >
//             Know More
//           </Button>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default OurClient;



import React, { useEffect, useState } from "react";
import { Box, Typography, Container, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { endpoints } from "../../../Api/EndPoints/endpoints";
import { axiosInstance } from "../../../Api/Axios/axios";

const OurClient = () => {
  const navigatee = useNavigate();
  const [data, setData] = useState([]);

  const fetchClientData = async () => {
    try {
      const res = await axiosInstance.get(endpoints.HomeCms.client);
      setData(res?.data?.data || []);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchClientData();
  }, []);

  const handleComingsoon = () => {
    navigatee("/page-coming-soon");
  };

  // duplicate for infinite loop
  const loopData = [...data, ...data];

  return (
    <Box
      sx={{
        width: "100%",
        py: { md: 8, xs: 5 },
        background:
          "radial-gradient(circle at top, rgba(238,29,37,0.12), transparent 45%), linear-gradient(180deg, #fafafa 0%, #ffffff 50%, #f5f5f5 100%)",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1800px",
          px: { xs: 2, md: 4 },
        }}
      >


        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: "50px",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "1.9rem", md: "2.6rem" },
                fontWeight: 700,
                letterSpacing: "1px",
                fontFamily: "'Poppins', 'Roboto', sans-serif",
                background: "linear-gradient(90deg, #1BAA63, #276f9e)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                position: "relative",
                display: "inline-block",
              }}
            >
              Our Trusted Clients
            </Typography>

            {/* Subtle underline accent */}
            <Box
              sx={{
                width: 80,
                height: 4,
                margin: "14px auto 0",
                borderRadius: "10px",
                background: "linear-gradient(90deg, #1BAA63, #276f9e)",
              }}
            />
          </Box>
        </Box>




        {/* Slider Wrapper */}
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "20px",
            py: 4,
            mt: { xs: "75px", md: "120px" },
            background: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 20px 50px rgba(0,0,0,.08)",
          }}
        >
          {/* fade edges */}
          <Box
            sx={{
              pointerEvents: "none",
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg,#fff 0%,transparent 10%,transparent 90%,#fff 100%)",
              zIndex: 2,
            }}
          />

          {/* Moving Track */}
          <Box
            className="client-track"
            sx={{
              display: "flex",
              width: "max-content",
              animation: "scroll 35s linear infinite",
              "&:hover": {
                animationPlayState: "paused",
              },
            }}
          >
            {loopData.map((logo, index) => (
              <Box
                key={index}
                sx={{
                  minWidth: { xs: 150, sm: 200 },
                  mx: { md: "10px" },
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",

                  transition: "all .3s ease",
                  "&:hover": {

                    transform: "scale(1.08)",
                  },
                }}
              >
                <Box
                  component="img"
                  src={logo?.image}
                  alt="client"
                  sx={{
                    maxWidth: 140,
                    maxHeight: 80,
                    objectFit: "contain",
                  }}
                />
              </Box>
            ))}
          </Box>
        </Box>

        {/* Button */}
        <Box sx={{ textAlign: "center", mt: 4 }} >
          <Button
            variant="contained"
            sx={{
              alignSelf: { xs: "stretch", sm: "flex-start" },
              mt: 2,
              px: 4,
              py: 1.4,
              borderRadius: "30px",
              textTransform: "none",
              fontWeight: 600,
              fontSize: "18px",

              position: "relative",
              overflow: "hidden",

              background: "#c40613",

              // text always on top
              zIndex: 1,

              "& span": {
                position: "relative",
                zIndex: 2,
              },

              // center burst layer
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
            onClick={handleComingsoon}
          >
            <span>Know More</span>
          </Button>

        </Box>

      </Container>

      {/* Keyframes */}
      <style>
        {`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}
      </style>
    </Box>
  );
};

export default OurClient;