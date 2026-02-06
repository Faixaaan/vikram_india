import React, { useEffect, useState } from 'react'
import { Box, Typography, Grid, Modal, Button } from '@mui/material'
import { axiosInstance } from '../../../Api/Axios/axios'
import { endpoints } from '../../../Api/EndPoints/endpoints'

const Initiatives = () => {

  const [data, setdata] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [selectedTestimonial, setSelectedTestimonial] = useState(null)

  // 🔹 Counter state (UNCHANGED STRUCTURE)
  const [counts, setCounts] = useState([0, 0, 0, 0, 0, 0])

  const fetchData = async () => {
    try {
      const res = await axiosInstance.get(endpoints.HomeCms.getHomeCms)
      setdata(res?.data?.data)
    } catch (err) {
      console.log(err)
    }
  }

  // 🔹 Counter animation (ONLY LOGIC CHANGED)
  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (!data) return

    const targetCounts = [
      parseInt(data?.sec3counter1_number?.replace('+', '') || 0),
      parseInt(data?.sec3counter2_number?.replace('+', '') || 0),
      parseInt(data?.sec3counter3_number?.replace('+', '') || 0),
      parseInt(data?.sec3counter4_number?.replace('+', '') || 0),
      parseInt(data?.sec3counter5_number?.replace('+', '') || 0),
      parseInt(data?.sec3counter6_number?.replace('+', '') || 0),
    ]

    const intervals = targetCounts.map((target, index) => {
      let start = 0
      return setInterval(() => {
        start += Math.ceil(target / 60)
        setCounts(prev => {
          const updated = [...prev]
          updated[index] = start >= target ? target : start
          return updated
        })
        if (start >= target) clearInterval(intervals[index])
      }, 30)
    })

    return () => intervals.forEach(clearInterval)
  }, [data])

  const labels = [
    data?.sec3counter1_text,
    data?.sec3counter2_text,
    data?.sec3counter3_text,
    data?.sec3counter4_text,
    data?.sec3counter5_text,
    data?.sec3counter6_text,
  ]

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

        {/* RIGHT CARD */}
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
            cursor: "pointer",
          }}
          onClick={() => setOpenModal(true)}
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
            alignItems: "center",
            transition: "all 0.4s ease-in-out",
            background: 'linear-gradient(90deg, #1BAA63 0%, #276f9e 100%)',
            "&:hover": {
              transform: "scale(1.1)",
              background: "#fff",
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              color: "#fff"
            },
          }}>
            <img
              src={data?.sec3right_icon_img}
              alt="Logo"
              style={{ width: '60px', height: '60px' }}
            />
          </Box>

          <Box sx={{ textAlign: 'center', width: '80%' }}>
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", md: "2rem" },
                fontWeight: "bold",
                fontFamily: "Roboto",
                cursor: "pointer",
                color: "#000",
                background: "linear-gradient(90deg, #1BAA63 0%, #276f9e 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                transition: "all 0.4s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                  background: "#000",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 4px 15px rgba(39, 111, 158, 0.3)",
                },
              }}
            >
              {data?.sec3right_title}
            </Typography>

            <Typography sx={{
              fontSize: { xs: '0.9rem', md: '18px' },
              fontFamily: 'Roboto',
              lineHeight: 1.6
            }}>
              {data?.sec3right_description}
            </Typography>
          </Box>
        </Box>

        {/* MODAL – EXACT AS YOURS */}
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
            borderRadius: '10px',
            boxShadow: 24,
            p: { xs: 2, sm: 2 },
            backgroundImage: `url(${data?.sec3right_bg_img})`,
            backgroundRepeat: "repeat",
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${data?.sec3right_bg_img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(1.5px)",
              zIndex: 0,
            },
            "& > *": {
              position: "relative",
              zIndex: 1,
            },
          }}>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                onClick={() => setOpenModal(false)}
                sx={{ fontWeight: "bold", color: "#fff", backgroundColor: "#CA0B00", borderRadius: "12%" }}
              >
                X
              </Button>
            </Box>

            <Typography
              sx={{
                color: "#000",
                fontSize: "32px",
                fontFamily: "Roboto",
                textAlign: "center",
                mb: 3,
                fontWeight: "600"
              }}
            >
              {data?.sec3popup_title}
            </Typography>

            <Typography sx={{
              color: "#000",
              fontSize: "16px",
              fontFamily: "Roboto",
              textAlign: "justify"

            }}
              dangerouslySetInnerHTML={{
                __html: data?.sec3popup_description
              }}
            >
            
            </Typography>

          </Box>
        </Modal>
      </Box>
    </>
  )
}

export default Initiatives
