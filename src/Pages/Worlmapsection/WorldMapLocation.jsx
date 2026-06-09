import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  Typography,
  useMediaQuery,
  CircularProgress,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  fetchMapLocations,
  fetchMapSettings,
} from "../../Redux/slices/worldMapSlice";

const WorldMapLocation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isMobile = useMediaQuery("(max-width:1020px)");

  const [imageLoaded, setImageLoaded] =
    useState(false);

  const {
    settings,
    locations,
    loading,
  } = useSelector((state) => state.worldMap);

  useEffect(() => {
    dispatch(fetchMapSettings());
    dispatch(fetchMapLocations());
  }, [dispatch]);

  useEffect(() => {
    setImageLoaded(false);
  }, [settings?.background_image]);

  if (loading && !settings) {
    return (
      <Box
        sx={{
          minHeight: "300px",
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
      {isMobile ? (
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
            {settings?.title}
          </Typography>

          <img
            src={settings?.background_image}
            alt={settings?.title}
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
                    (locations?.length || 0) / 8
                  ),
                },
                (_, pageIndex) => {
                  const pageItems = locations.slice(
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
                          "repeat(2,1fr)",
                        gridTemplateRows:
                          "repeat(4,auto)",
                        gap: 2,
                        scrollSnapAlign: "start",
                      }}
                    >
                      {pageItems.map((item) => (
                        <Card
                          key={item.id}
                          onClick={() =>
                            navigate(
                              `/${item.pin_location_title_slug}`
                            )
                          }
                          sx={{
                            p: 2,
                            cursor: "pointer",
                            borderRadius: "14px",
                            transition: "all .3s",

                            "&:hover": {
                              transform:
                                "translateY(-2px)",
                            },

                            background:
                              "linear-gradient(90deg,#1BAA63 0%,#276f9e 100%)",

                            textAlign: "center",
                            color: "#fff",
                          }}
                        >
                          <Typography
                            sx={{
                              fontWeight: 600,
                              fontSize: "15px",
                            }}
                          >
                            {item.pin_location_title}
                          </Typography>
                        </Card>
                      ))}
                    </Box>
                  );
                }
              )}
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            position: "relative",
            width: "100%",

            "@keyframes pulseMap": {
              "0%": {
                transform:
                  "translate(-50%, -50%) scale(0.5)",
                opacity: 1,
              },

              "100%": {
                transform:
                  "translate(-50%, -50%) scale(2.5)",
                opacity: 0,
              },
            },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              color: "#fff",
              fontSize: "32px",
              left: "50%",
              top: "20px",
              transform: "translateX(-50%)",
              zIndex: 5,
              textAlign: "center",
            }}
          >
            <h2>{settings?.title}</h2>
          </Box>

          <img
            src={settings?.background_image}
            alt={settings?.title}
            onLoad={() =>
              setImageLoaded(true)
            }
            style={{
              width: "100%",
              display: "block",
            }}
          />

          {imageLoaded &&
            locations?.map((item) => (
              <Box
                key={item.id}
                sx={{
                  position: "absolute",
                  top: `${item.pin_position_top}%`,
                  left: `${item.pin_position_left}%`,
                  transform:
                    "translate(-50%,-50%)",
                }}
              >
                {/* Pulse Effect */}
                <Box
                  key={`pulse-${item.id}`}
                  sx={{
                    position: "absolute",
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    background:
                      "rgba(0,255,0,0.8)",

                    animation:
                      "pulseMap 2s ease-out infinite",

                    animationDelay: `${item.id * 0.2}s`,

                    top: "50%",
                    left: "50%",

                    transform:
                      "translate(-50%,-50%)",

                    pointerEvents: "none",
                  }}
                />

                <img
                  src={item.pin_image}
                  alt={
                    item.pin_location_title
                  }
                  style={{
                    width: "clamp(35px, 2vw, 60px)",
                    height: "clamp(35px, 2vw, 60px)",
                    objectFit: "contain",
                    cursor: "pointer",
                    position: "relative",
                    zIndex: 2,
                    display: "block",
                  }}
                  onClick={(e) => {
                    e.stopPropagation();

                    navigate(
                      `/${item.pin_location_title_slug}`
                    );
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