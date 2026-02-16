


import React, { useEffect, useState, useRef } from 'react'
import { Box, Typography, Grid, Modal, Button } from '@mui/material'
import { axiosInstance } from '../../../Api/Axios/axios'
import { endpoints } from '../../../Api/EndPoints/endpoints'
import { motion } from "framer-motion";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link, useNavigate } from 'react-router-dom';




// 🔴 Dummy Notice Data
const noticeData = [
  {
    id: 1,
    date: "07/02/2026",
    title: "Geography Classes suspension",
    link: "#",
  },
  {
    id: 2,
    date: "07/02/2026",
    title: "Department of Hindi faculty meeting",
    link: "#",
  },
  {
    id: 3,
    date: "07/02/2026",
    title:
      "Post - publication Re-examination / Review and/or F.S.I (self-inspection of evaluated answer scripts)) for B.A/B.Sc. SEM-II (Hons./ General / Major) Examinations, 2025 (under CBCS & CCF)",
    link: "#",
  },
  {
    id: 4,
    date: "07/02/2026",
    title: "Mathematics departmental meeting",
    link: "#",
  },
  {
    id: 5,
    date: "06/02/2026",
    title: "CIE FOR PHYSICS HONOURS",
    link: "#",
  },
  {
    id: 6,
    date: "06/02/2026",
    title: "HR CLASS",
    link: "#",
  },

  {
    id: 7,
    date: "07/02/2026",
    title: "Geography Classes suspension",
    link: "#",
  },
  {
    id: 8,
    date: "07/02/2026",
    title: "Department of Hindi faculty meeting",
    link: "#",
  },
  {
    id: 9,
    date: "07/02/2026",
    title:
      "Post - publication Re-examination / Review and/or F.S.I (self-inspection of evaluated answer scripts)) for B.A/B.Sc. SEM-II (Hons./ General / Major) Examinations, 2025 (under CBCS & CCF)",
    link: "#",
  },
  {
    id: 10,
    date: "07/02/2026",
    title: "Mathematics departmental meeting",
    link: "#",
  },
  {
    id: 11,
    date: "06/02/2026",
    title: "CIE FOR PHYSICS HONOURS",
    link: "#",
  },
  {
    id: 12,
    date: "06/02/2026",
    title: "HR CLASS",
    link: "#",
  },
];



const Initiatives = () => {

  const [data, setdata] = useState([]);

  const sectionRef = useRef(null);


  const [hasStarted, setHasStarted] = useState(false);
  const [userScrolled, setUserScrolled] = useState(false);

  const navigate = useNavigate();


  // 🔹 Counter state
  const [counts, setCounts] = useState([0, 0, 0, 0, 0, 0]);

  const targetCounts = [40, 10000, 2000, 50, 15, 500];
  const labels = [
    "Years Experience",
    "Happy Clients",
    "Crore + Turnover",
    "Countries",
    "Awards",
    "Team Members",
  ];

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


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setUserScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted && userScrolled) {

          setHasStarted(true);

          targetCounts.forEach((target, index) => {
            let start = 0;

            const interval = setInterval(() => {
              start += Math.ceil(target / 80);

              setCounts(prev => {
                const updated = [...prev];
                updated[index] = start >= target ? target : start;
                return updated;
              });

              if (start >= target) clearInterval(interval);
            }, 70);
          });
        }
      },
      {
        threshold: 0.7,
      }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, [hasStarted, userScrolled]);




  return (
    <>
      <Box

        component={motion.div}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        ref={sectionRef}

        sx={{ width: '100%', minHeight: '400px', display: 'flex', flexDirection: { sm: "row", xs: "column" } }}
      >


        {/* LEFT CARD */}
        <Box
          sx={{
            width: { sm: '50%', xs: "100%" },
            height: '450px',
            background: 'linear-gradient(90deg, #1BAA63 0%, #276f9e 100%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',

            // Problem Here
            "&::before": {
              content: '""',
              // position: "absolute",
              inset: 0,
              background:
                "linear-gradient(120deg, transparent 30%, rgba(255,255,255,.25), transparent 70%)",
              transform: "translateX(-100%)",
              animation: hasStarted ? "shine 2s ease forwards" : "none",
            },

            "@keyframes shine": {
              to: { transform: "translateX(100%)" },
            },

          }}

        >


          {/* Title */}


          {/* 🔹 COUNTER GRID */}
          <Grid container spacing={2} sx={{ width: '90%' }}>
            {counts.map((count, index) => (
              <Grid
                item
                size={{ xs: 6, sm: 6, md: 4 }}
                key={index}
                sx={{
                  marginTop: "40px",
                  marginBottom: "40px",
                  position: 'relative',

                  /* RIGHT BORDER */
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: '20%',
                    right: 0,
                    height: '60%',
                    width: '1px',
                    backgroundColor: 'rgba(255,255,255,0.4)',


                    display: {
                      xs: (index + 1) % 2 === 0 ? 'none' : 'block',
                      md: (index + 1) % 3 === 0 ? 'none' : 'block',
                    },
                  },
                }}
              >
                <Box textAlign="center">
                  <Typography
                    sx={{
                      fontSize: '36px',
                      fontWeight: 700,
                      fontFamily: 'Roboto',
                      color: '#fff',
                      lineHeight: '100%',
                    }}
                  >
                    {count}+
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '16px',
                      fontFamily: 'Roboto',
                      color: '#fff',

                    }}
                  >
                    {labels[index]}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>


        </Box>

        {/* RIGHT CARD (UNCHANGED) */}
        <Box
          sx={{
            width: { sm: "50%", xs: "100%" },
            height: "450px",
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",

            /* BACKGROUND LAYER */
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${data?.sec3right_bg_img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transition: "transform 1.2s ease",
              zIndex: 0,
            },

            /* SHINE OVERLAY */
            "&::after": {
              content: '""',
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(120deg, transparent 30%, rgba(255,255,255,.35) 50%, transparent 70%)",
              transform: "translateX(-120%)",
              transition: "all 1.2s ease",
              zIndex: 1,
              pointerEvents: "none",
            },

            "&:hover::before": {
              transform: "scale(1.08)",
            },

            "&:hover::after": {
              transform: "translateX(120%)",
            },

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",

            /* keep content above overlays */
            "& > *": {
              position: "relative",
              zIndex: 2,
            },

            "&:hover .scrollContent": {
              animationPlayState: "paused",
            },

          }}

        >


          <Box
            sx={{
              width: "90%",
              height: "90%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* HEADING */}
            <Box
              sx={{
                textAlign: "center",
                marginBottom: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1.2,
              }}
            >
              <NotificationsActiveIcon
                sx={{
                  color: "#FFD700",
                  fontSize: 28,
                  animation: "ring 1.5s ease-in-out infinite",
                }}
              />

              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: 800,
                  // letterSpacing: 1,
                  textTransform: "uppercase",

                  background: "linear-gradient(270deg, #ffffff, #ffd000, #ffffff)",
                  backgroundSize: "400% 400%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",

                  animation: "gradientMove 6s ease infinite",

                  "@keyframes gradientMove": {
                    "0%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                    "100%": { backgroundPosition: "0% 50%" },
                  },
                }}

              >
                UpComing Initiative
              </Typography>



              {/* Bell Ring Animation */}
              <style>
                {`
      @keyframes ring {
        0% { transform: rotate(0); }
        10% { transform: rotate(15deg); }
        20% { transform: rotate(-10deg); }
        30% { transform: rotate(6deg); }
        40% { transform: rotate(-4deg); }
        50% { transform: rotate(2deg); }
        60% { transform: rotate(0); }
        100% { transform: rotate(0); }
      }
    `}
              </style>
            </Box>


            <Box
              sx={{
                flex: 1,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Box
                className="scrollContent"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  animation: "scrollUp 30s linear infinite",

                  "@keyframes scrollUp": {
                    "0%": { transform: "translateY(0%)" },
                    "100%": { transform: "translateY(-50%)" },
                  },
                }}
              >
                {[...noticeData, ...noticeData].map((item, index) => (
                  <Box
                    key={index}
                    component={Link}
                    to={`/notice/${item.id}`}

                    // href={item.link}
                    sx={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2,
                      textDecoration: "none",
                      color: "#000",
                      backgroundColor: "rgba(255,255,255,0.9)",
                      padding: "10px",
                      borderRadius: "4px",
                      transition: "all .3s ease",

                      "&:hover": {
                        backgroundColor: "#fff",
                        transform: "translateX(5px)",
                      },
                    }}
                  >
                    {/* DATE */}

                    <Box
                      sx={{
                        minWidth: "85px",
                        background: "linear-gradient(135deg, #1BAA63 0%, #276f9e 100%)",
                        color: "#fff",
                        fontSize: "16px",
                        fontWeight: 600,
                        padding: "6px 8px",
                        textAlign: "center",
                        borderRadius: "4px",
                        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                        letterSpacing: "0.5px",
                      }}
                    >
                      {item.date}
                    </Box>


                    {/* 📄 TITLE */}
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: 500,
                        lineHeight: 1.4,
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                mt: "auto",
                pt: 6
              }}
            >



              <Button
                variant="contained"
                endIcon={<ArrowForwardIosIcon sx={{ fontSize: 14 }} />}
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
                    transform: "translate(-14%, -50%)",
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
                onClick={() => navigate("/all-notices")}
              >
                <span>  View All Notices</span>
              </Button>
            </Box>

          </Box>





        </Box>

      </Box>
    </>
  );
};

export default Initiatives;