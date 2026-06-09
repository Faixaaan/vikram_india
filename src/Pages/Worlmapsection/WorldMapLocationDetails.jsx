import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Button,
  CircularProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import parse from "html-react-parser";

import Footer from "../../Layout/Footer/Footer";
import EnquiryForm from "../HotDipGalvanization/Components/EnquiryForm";

import { axiosInstance } from "../../Api/Axios/axios";
import { endpoints } from "../../Api/EndPoints/endpoints";

import { fetchMapSingle } from "../../Redux/slices/worldMapSlice";

const WorldMapLocationDetails = () => {
  const { country } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [openEnquiry, setOpenEnquiry] = useState(false);

  const [logoData, setLogoData] = useState(null);

  const {
    singleLocation,
    loading,
  } = useSelector(
    (state) => state.worldMap
  );

  /* ----------------- Site Settings ---------------- */

  useEffect(() => {
    const fetchSiteSetting = async () => {
      try {
        const res = await axiosInstance.get(
          endpoints.pageSetting.navFooter
        );

        setLogoData(res?.data?.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchSiteSetting();
  }, []);

  /* ----------------- Single Map Data ---------------- */

  useEffect(() => {
    if (country) {
      dispatch(fetchMapSingle(country));
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [country, dispatch]);

  if (loading || !singleLocation) {
    return (
      <Box
        sx={{
          minHeight: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

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
          src={singleLocation?.banner_inner}
          alt={singleLocation?.inner_title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Logo */}

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
              "linear-gradient(90deg,#99e9ff 0%,#9bbbe2 100%)",

            border:
              "1px solid rgba(255,255,255,0.3)",

            boxShadow:
              "0 20px 50px rgba(0,0,0,0.18)",

            overflow: "hidden",

            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "8px",
              background:
                "linear-gradient(90deg,#00c6ff 0%,#0072ff 100%)",
            },
          }}
        >
          <img
            src={logoData?.logo}
            alt="logo"
            style={{
              width: "100%",
              maxWidth: "170px",
              display: "block",
            }}
          />
        </Box>

        {/* Back Button */}

        <Button
          variant="contained"
          onClick={() => navigate("/home")}
          sx={{
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

            background: "#bd2304",

            textTransform: "none",

            fontWeight: 600,

            "&:hover": {
              background: "#9f1c01",
            },
          }}
        >
          Back To Home
        </Button>
      </Box>

      {/* Details */}

      <Container
        maxWidth="lg"
        sx={{
          py: 8,
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              md: "1.5fr 1fr",
            },

            gap: 3,
          }}
        >
          {/* Left */}

          <Box>
            <Typography
              sx={{
                mb: 3,

                fontWeight: 800,
                lineHeight: 1.2,
                fontSize: {
                  xs: "30px",
                  md: "38px",
                },
              }}
            >
              {singleLocation?.inner_title}
            </Typography>

            <Box
              sx={{
                fontSize: "16px",
                lineHeight: 1.9,

                "& p": {
                  marginBottom: "16px",
                },
              }}
            >
              {parse(
                singleLocation?.inner_description ||
                ""
              )}
            </Box>
          </Box>

          {/* Right */}

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              position: {
                xs: "static",
                md: "sticky",
              },
              top: 100,
              alignSelf: "start",
              height: "fit-content",
            }}
          >
            <img
              src={singleLocation?.inner_image}
              alt={singleLocation?.inner_title}
              style={{
                width: "100%",
                borderRadius: "20px",
                objectFit: "cover",
              }}
            />

            <Box sx={{ mt: 3 }}>
              <Button
                variant="contained"
                fullWidth
                onClick={() => setOpenEnquiry(true)}
                sx={{
                  py: 1.5,
                  background:
                    "linear-gradient(125deg,#b92d14,#1171b0)",

                  "&:hover": {
                    background:
                      "linear-gradient(125deg,#b92d14,#1171b0)",
                  },
                }}
              >
                Enquiry Form
              </Button>
            </Box>
          </Box>
        </Box>

        {/* FAQ */}

        {singleLocation?.faq?.length > 0 && (
          <Box
            sx={{
              py: 10,
            }}
          >
            <Typography
              variant="h3"
              textAlign="center"
              fontWeight={700}
              mb={6}
            >
              {singleLocation?.faq_title}
            </Typography>

            <Box
              sx={{
                maxWidth: 900,
                mx: "auto",
              }}
            >
              {singleLocation?.faq?.map(
                (faq, index) => (
                  <Accordion
                    key={index}
                    disableGutters
                    sx={{
                      mb: 2,

                      borderRadius:
                        "16px !important",

                      overflow:
                        "hidden",

                      border:
                        "1px solid #e5e7eb",

                      boxShadow:
                        "0 10px 30px rgba(0,0,0,0.06)",

                      "&:before": {
                        display: "none",
                      },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={
                        <ExpandMoreIcon />
                      }
                    >
                      <Typography
                        fontWeight={600}
                      >
                        {faq.question}
                      </Typography>
                    </AccordionSummary>

                    <AccordionDetails>
                      <Typography
                        color="text.secondary"
                        lineHeight={1.8}
                      >
                        {faq.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                )
              )}
            </Box>
          </Box>
        )}

        <EnquiryForm
          open={openEnquiry}
          onClose={() =>
            setOpenEnquiry(false)
          }
        />
      </Container>

      <Footer />
    </>
  );
};

export default WorldMapLocationDetails;