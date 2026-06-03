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

const AcoustoScanDetails = () => {
  const { country } = useParams();

  const navigate = useNavigate();

  const data = useSelector((state) =>
    state.acoustoScan.locations.find(
      (item) => item.slug === country
    )
  );

  if (!data) return null;

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
          src={data.bannerImage}
          alt=""
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

          <Box>
            <img
              src={data.detailsImage}
              alt=""
              style={{
                width: "100%",
                borderRadius: 20,
              }}
            />

            <Button
              variant="contained"
              fullWidth
              sx={{
                mt: 3,
              }}
            >
              Enquiry Now
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default AcoustoScanDetails;