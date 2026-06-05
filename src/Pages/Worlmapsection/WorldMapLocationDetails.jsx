import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Button,
} from "@mui/material";
import {
  useNavigate,
  useParams,
} from "react-router-dom";
import { useSelector } from "react-redux";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import bannerImage from "../../Assets/bannermap/aus.png"
import Footer from "../../Layout/Footer/Footer";
import { axiosInstance } from "../../Api/Axios/axios";
import { endpoints } from "../../Api/EndPoints/endpoints";
import EnquiryForm from "../HotDipGalvanization/Components/EnquiryForm";


const WorldMapLocationDetails = () => {
  const { country } = useParams();
  const [openEnquiry, setOpenEnquiry] = useState(false);
  const navigate = useNavigate();

  const [logodata, setLogoData] = useState()

  /* ================= FETCH DATA ================= */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(endpoints.pageSetting.navFooter);
        const settingData = res?.data?.data || {};
        setLogoData(settingData);

      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const data = useSelector((state) =>
    state.worldMap.locations.find(
      (item) => item.slug === country
    )
  );

  if (!data) return null;

  const detailsBanner = bannerImage


  const faqData = [
    {
      question: "What is  technology?",
      answer:
        " is an advanced inspection and monitoring solution designed to improve operational efficiency and reliability.",
    },
    {
      question: "Which industries can benefit from ?",
      answer:
        "Industries such as manufacturing, energy, utilities, infrastructure, and industrial operations can benefit from AcoustoScan solutions.",
    },
    {
      question: "How can I request a consultation?",
      answer:
        "You can submit an enquiry through the contact form and our team will get back to you shortly.",
    },
    {
      question: "Is technical support available?",
      answer:
        "Yes, our team provides technical guidance, implementation assistance, and after-sales support.",
    },
    {
      question: "Can be customized?",
      answer:
        "Yes, solutions can be tailored according to project requirements and operational needs.",
    },
  ];

  return (
    <>
      {/* Banner */}

      <Box
        sx={{
          height: {
            xs: 250,
            sm: 320,
            md: 400,
            lg: 450,
          },
          position: "relative",
        }}
      >
        <img
          src={detailsBanner}
          alt=""
          onError={(e) => {
            console.log("Banner failed:", e.target.src);
          }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            top: {
              xs: 12,
              sm: 20,
              md: 30,
            },
            left: {
              xs: 12,
              sm: 20,
              md: 30,
            },

            px: {
              xs: 1.5,
              sm: 2,
              md: 3,
            },

            py: {
              xs: 1,
              sm: 1.5,
              md: 2,
            },

            borderRadius: {
              xs: "12px",
              md: "18px",
            },


            zIndex: 10,

            background:
              "linear-gradient(90deg, #99e9ff 0%, #9bbbe2 100%)",
            border: "1px solid rgba(255,255,255,0.3)",
            boxShadow: `
                      0 20px 50px rgba(0,0,0,0.18),
                      0 8px 20px rgba(0,0,0,0.08)
    `,

            overflow: "hidden",

            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "8px",
              background:
                "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)",
            },
          }}
        >
          <img
            src={logodata?.logo}
            alt=""
            style={{
              width: "100%",
              maxWidth: "170px",
              display: "block",
            }}
          />
        </Box>



        <Button
          variant="contained"
          onClick={() => navigate("/home")}
          sx={{
            mt: { xs: 1, md: 2 },
            px: { xs: 1.8, sm: 2.2, md: 2.4 },
            py: { xs: 0.7, sm: 0.9 },
            fontSize: {
              xs: "12px",
              sm: "14px",
              md: "18px",
            },
            borderRadius: "8px",
            textTransform: "none",
            fontWeight: 600,
            display: "flex",
            justifyContent: "flex-start",
            minWidth: {
              xs: "90px",
              sm: "110px",
            },
            position: "absolute",
            top: {
              xs: 12,
              sm: 15,
            },

            right: {
              xs: 12,
              sm: 20,
              md: 30,
            },

            overflow: "hidden",
            background: "#bd2304",
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
          }}


        >
          <span> Back To Home </span>
        </Button>
      </Box>

      {/* Details */}

      <Container
        maxWidth="lg"
        sx={{ py: 8 }}
      >
        <Box
          sx={{
            display: "grid",

            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },

            gap: {
              xs: 4,
              md: 3,
            },

            alignItems: "start",
          }}
        >
          <Box>
            <Typography
              sx={{
                mb: 3,
                fontWeight: 700,

                fontSize: {
                  xs: "28px",
                  sm: "34px",
                  md: "42px",
                  lg: "48px",
                },
              }}
            >
              {data.title}
            </Typography>

            <Typography
              sx={{
                mb: 3,

                fontSize: {
                  xs: "15px",
                  sm: "16px",
                  md: "17px",
                },

                lineHeight: 1.9,
              }}
            >
              {data.description1}
            </Typography>

          </Box>

          <Box sx={{ display: "flex", justifyContent: "start", flexDirection: "column", alignItems: "center" }}>
            <img
              src={detailsBanner}
              alt=""
              style={{
                width: "100%",
                borderRadius: "20px",
                maxHeight: "450px",
                objectFit: "cover",
              }}
            />

            <Box
              sx={{
                mt: 3,
                width: {
                  xs: "100%",
                  sm: "250px",
                },
              }}
            >
              <Button variant="contained"
                sx={{
                  padding: "8px 15px!important",
                  fontSize: "16px",
                  fontWeight: "500",
                  fontFamily: "Roboto",

                  background: "linear-gradient(125deg, #b92d14, #1171b0)",

                  boxShadow: "none",

                  "&:hover": {
                    background: "linear-gradient(125deg, #b92d14, #1171b0)",
                    boxShadow: "none",
                  },
                }}
                fullWidth onClick={() => setOpenEnquiry(true)}>
                Enquiry Form
              </Button>
            </Box>


          </Box>
        </Box>
        <Typography sx={{ marginTop: "30px" }}>
          {data.description2}
        </Typography>

        {/* FAQ Section */}
        <Box
          sx={{
            py: 10,
            background:
              "linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)",
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              textAlign="center"
              fontWeight={700}
              mb={6}
            >
              Frequently Asked Questions
            </Typography>

            <Box
              sx={{
                maxWidth: 900,
                mx: "auto",
              }}
            >
              {faqData.map((faq, index) => (
                <Accordion
                  key={index}
                  disableGutters
                  sx={{
                    mb: 2,
                    borderRadius: "16px !important",
                    overflow: "hidden",
                    border: "1px solid #e5e7eb",
                    boxShadow:
                      "0 10px 30px rgba(0,0,0,0.06)",
                    "&:before": {
                      display: "none",
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                      minHeight: 70,
                      px: 3,
                      "& .MuiAccordionSummary-content": {
                        my: 2,
                      },
                    }}
                  >
                    <Typography
                      fontWeight={600}
                      fontSize="1.05rem"
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails
                    sx={{
                      px: 3,
                      pb: 3,
                    }}
                  >
                    <Typography
                      color="text.secondary"
                      lineHeight={1.8}
                    >
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          </Container>
        </Box>
        <EnquiryForm
          open={openEnquiry}
          onClose={() => setOpenEnquiry(false)}
        />
      </Container>
      <Footer />
    </>
  );
};

export default WorldMapLocationDetails; 