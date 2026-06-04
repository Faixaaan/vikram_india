import React from "react";
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


const AcoustoScanDetails = () => {
  const { country } = useParams();

  const navigate = useNavigate();

  const data = useSelector((state) =>
    state.acoustoScan.locations.find(
      (item) => item.slug === country
    )
  );

  if (!data) return null;

  const detailsBanner = bannerImage


  const faqData = [
  {
    question: "What is AcoustoScan technology?",
    answer:
      "AcoustoScan is an advanced inspection and monitoring solution designed to improve operational efficiency and reliability.",
  },
  {
    question: "Which industries can benefit from AcoustoScan?",
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
    question: "Can AcoustoScan be customized?",
    answer:
      "Yes, solutions can be tailored according to project requirements and operational needs.",
  },
];

  return (
    <>
      {/* Banner */}

      <Box
        sx={{
          height: 450,
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

        <img
          src={data.companyLogo}
          alt=""
          style={{
            position: "absolute",
            top: 30,
            left: 30,
            width: 120,
          }}
        />

        <Button
          onClick={() => navigate("/home")}
          sx={{
            position: "absolute",
            top: 30,
            right: 30,
          }}
          variant="contained"
        >
          Back To Home
        </Button>
      </Box>

      {/* Details */}

      <Container
        maxWidth="xl"
        sx={{ py: 8 }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns:
              "1fr 1fr",
            gap: 5,
          }}
        >
          <Box>
            <Typography
              variant="h3"
              mb={3}
            >
              {data.title}
            </Typography>

            <Typography mb={3}>
              {data.description1}
            </Typography>

            <Typography>
              {data.description2}
            </Typography>
          </Box>

          <Box sx={{display: "flex", justifyContent: "start", flexDirection: "column", alignItems: "center"}}>
            <img
              src={detailsBanner}
              alt=""
              onError={(e) => {
                console.log("Image failed:", e.target.src);
              }}
              style={{
                width: "100%",
                borderRadius: 20,
              }}
            />

            <Button
              variant="contained"
        
              sx={{
                mt: 3,
         
              }}
            >
              Enquiry Now
            </Button>
          </Box>
        </Box>

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
              mb={2}
            >
              Frequently Asked Questions
            </Typography>

            <Typography
              textAlign="center"
              color="text.secondary"
              mb={6}
            >
              Find answers to the most common questions about our
              AcoustoScan solutions.
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
      </Container>
    </>
  );
};

export default AcoustoScanDetails;