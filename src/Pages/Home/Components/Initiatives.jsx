import React, { useEffect, useState } from 'react'
import { Box, Typography, Grid, Modal, Button } from '@mui/material'
import { axiosInstance } from '../../../Api/Axios/axios'
import { endpoints } from '../../../Api/EndPoints/endpoints'

const Initiatives = () => {

  const [data, setdata] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

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

  // 🔹 Counter animation
  useEffect(() => {
    fetchData();

    const intervals = targetCounts.map((target, index) => {
      let start = 0;
      return setInterval(() => {
        start += Math.ceil(target / 60);
        setCounts(prev => {
          const updated = [...prev];
          updated[index] = start >= target ? target : start;
          return updated;
        });
        if (start >= target) clearInterval(intervals[index]);
      }, 30);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <>
      <Box sx={{ width: '100%', minHeight: '400px', display: 'flex', flexDirection: { sm: "row", xs: "column" } }}>

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
                      fontFamily: 'Open Sans',
                      color: '#fff',
                      lineHeight: '100%',
                    }}
                  >
                    {count}+
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: '16px',
                      fontFamily: 'Open Sans',
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
            width: { sm: '50%', xs: "100%" },
            height: '450px',
            backgroundImage: `url(${data?.sec3right_bg_img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            cursor: "pointer"
          }}
          onClick={() => {

            setOpenModal(true);
          }}
        >

          <Box sx={{
            position: 'relative',
            zIndex: 1,
            marginBottom: 3,
            width: "100px",
            height: "100px",
            backgroundColor: "#fff",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}>
            <img
              src={data?.sec3right_icon_img}
              alt="Logo"
              style={{ width: '60px', height: '60px' }}
            />
          </Box>

          <Box sx={{ textAlign: 'center', width: '80%' }}>
            <Typography sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              fontWeight: 'bold',
              fontFamily: 'Open Sans'
            }}>
              {data?.sec3right_title}
            </Typography>
            <Typography sx={{
              fontSize: { xs: '0.9rem', md: '18px' },
              fontFamily: 'Open Sans',
              lineHeight: 1.6
            }}>
              {data?.sec3right_description}
            </Typography>
          </Box>

        </Box>
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          aria-labelledby="testimonial-modal"
          aria-describedby="testimonial-video"
        >
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: { xs: '90%', sm: '80%', md: '60%' },
            bgcolor: 'white',
            borderRadius: '10px',
            boxShadow: 24,
            p: { xs: 2, sm: 2 },
          }}>

            {/* Close Button */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                onClick={() => setOpenModal(false)}
                sx={{ fontWeight: "bold", color: "#fff", backgroundColor: "#CA0B00", borderRadius: "12%" }}
              >
                X
              </Button>
            </Box>

            {/* NAME + COUNTRY */}
            {selectedTestimonial && (
              <Box sx={{ textAlign: "center", mb: 2 }}>
                <Typography variant="h5" sx={{ fontFamily: "Kaisei Decol", fontWeight: "bold" }}>
                  {selectedTestimonial.name}
                </Typography>
                <Typography variant="body1" sx={{ fontFamily: "Kaisei Decol", color: "#555" }}>
                  {selectedTestimonial.country}
                </Typography>
              </Box>
            )}

            {/* VIDEO RESPONSIVE */}
            <Box sx={{
              position: "relative",
              width: "100%",
              paddingTop: "20px", // 16:9 ratio
              borderRadius: "10px",
              overflow: "hidden",
              background: "#fff",

            }}>

              <Typography
              sx={{
                color: "#000",
                fontSize: "32px",
                fontFamily: "Open Sans",
                textAlign: "center",
                mb:3,
                fontWeight:"600"
              }}
              >
                Right Initiative's
              </Typography>

              <Typography sx={{
                color: "#000",
                fontSize: "16px",
                fontFamily: "Open Sans",
                textAlign: "justify"
              }}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe cupiditate, maxime tenetur distinctio hic, provident consectetur molestias quidem esse officiis aliquam, eaque quibusdam velit nesciunt expedita possimus ab. Et nostrum dolore reprehenderit deleniti qui obcaecati. Unde harum necessitatibus cupiditate laboriosam, blanditiis inventore tempore, totam molestiae esse, obcaecati dolor corporis sunt atque repudiandae saepe. Hic fuga enim non delectus ipsa saepe, eligendi, maxime nesciunt cum quis consequatur reprehenderit eius? Non ut nesciunt odio ex recusandae fuga numquam reiciendis, distinctio totam in omnis unde similique, suscipit aliquam ipsam sequi eos consequuntur animi quasi adipisci? Repellat assumenda tempore temporibus at sequi fugit dignissimos.
              </Typography>

            </Box>

          </Box>
        </Modal>
      </Box>
    </>
  );
};

export default Initiatives;
