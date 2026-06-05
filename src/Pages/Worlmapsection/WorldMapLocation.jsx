import React, { useEffect, useState } from "react";
import { Box, Card, Typography, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../Api/Axios/axios";
import { endpoints } from "../../Api/EndPoints/endpoints";


const WorldMapLocation = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const isMobile = useMediaQuery("(max-width:1020px)");

  const locations = useSelector(
    (state) => state.worldMap.locations
  );

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

  return (
    <>
      {isMobile ? (
        // ================= MOBILE / TABLET UI =================
        <Box
          sx={{
            py: 4,
            px: 1,
            background: "#fff",
          }}
        >
          <Typography
            variant="h4"
            textAlign="center"
            sx={{
              mb: 3,
              fontWeight: 700,
              fontSize: {
                xs: "28px",
                sm: "34px",
              },
            }}
          >
            Our Global Presence
          </Typography>

          <img
            src={data?.sec4img}
            alt=""
            style={{
              width: "100%",
              borderRadius: "16px",
              display: "block",
            }}
          />

          <Box
            sx={{
              mt: 4,
              overflowX: "auto",
              scrollSnapType: "x mandatory",

              "&::-webkit-scrollbar": {
                height: 6,
              },

              "&::-webkit-scrollbar-thumb": {
                background: "#bdbdbd",
                borderRadius: "20px",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 2,
                width: "max-content",
                pb: 1,
              }}
            >
              {Array.from(
                {
                  length: Math.ceil(
                    locations.length / 8
                  ),
                },
                (_, pageIndex) => {
                  const pageItems =
                    locations.slice(
                      pageIndex * 8,
                      pageIndex * 8 + 8
                    );

                  return (
                    <Box
                      key={pageIndex}
                      sx={{
                        width: {
                          xs: "85vw",
                          sm: "75vw",
                        },

                        display: "grid",

                        gridTemplateColumns:
                          "repeat(2, 1fr)",

                        gridTemplateRows:
                          "repeat(4, auto)",

                        gap: 2,

                        scrollSnapAlign:
                          "start",
                      }}
                    >
                      {pageItems.map(
                        (item) => (
                          <Card
                            key={item.id}
                            onClick={() =>
                              navigate(
                                `/${item.slug}`
                              )
                            }
                            sx={{
                              p: 2,
                              cursor: "pointer",
                              borderRadius:
                                "14px",

                              transition:
                                "all .3s",

                              "&:hover": {
                                transform:
                                  "translateY(-2px)",
                              },
                              background: "linear-gradient(90deg, #1BAA63 0%, #276f9e 100%)",
                              textAlign: "center",
                              color: "#fff"
                              
                            }}
                          >
                            <Typography
                              sx={{
                                fontWeight:
                                  600,
                                fontSize:
                                  "15px",
                              }}
                            >
                              {
                                item.countryName
                              }
                            </Typography>
                          </Card>
                        )
                      )}
                    </Box>
                  );
                }
              )}
            </Box>
          </Box>
        </Box>
      ) : (
        // ================= DESKTOP UI (UNCHANGED) =================
        <Box
          sx={{
            position: "relative",
            width: "100%",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              color: "#fff",
              fontSize: "32px",
              left: "35%",
              marginTop: "30px",
              zIndex: 5,
            }}
          >
            <h2>Our Global Presence</h2>
          </Box>

          <img
            src={data?.sec4img}
            alt=""
            style={{
              width: "100%",
              display: "block",
            }}
          />

          {locations.map((item) => (
            <Box
              key={item.id}
              sx={{
                position: "absolute",
                top: item.position.top,
                left: item.position.left,
                transform: "translate(-50%,-50%)",
              }}
            >
              {/* Pulse Effect - SAME AS OLD CODE */}
              <Box
                sx={{
                  position: "absolute",
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  background:
                    "rgba(0, 255, 0, 0.8)",
                  animation:
                    "pulse 2s infinite",
                  top: "50%",
                  left: "50%",
                  transform:
                    "translate(-50%,-50%)",
                  pointerEvents: "none",
                }}
              />

              {/* Marker */}
              <img
                src={item.markerIcon}
                alt={item.countryName}
                width={22}
                style={{
                  cursor: "pointer",
                  position: "relative",
                  zIndex: 2,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/${item.slug}`);
                }}
              />
            </Box>
          ))}
        </Box>
      )}
    </>
  );

};

export default WorldMapLocation;