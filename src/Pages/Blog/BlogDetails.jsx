import React from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
  Button,
  Container
} from "@mui/material";
import blogImage from "../../Assets/blog.jpg";

const recentPosts = [
  "How Industry 4.0 Is Changing Manufacturing",
  "Top 5 Quality Control Practices",
  "Why Precision Matters in Engineering",
  "Latest Trends in CNC Machining"
];

const BlogDetail = () => {
  return (
    <Box sx={{ py: 6, px: { xs: 2, md: 6 }, background: "#f9f9f9" }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>

          {/* LEFT – BLOG CONTENT */}
          <Grid item size={{xs:12,md:8}}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: "0px 6px 20px rgba(0,0,0,0.08)"
              }}
            >
              <CardMedia
                component="img"
                image={blogImage}
                alt="Blog"
                sx={{
                  height: { xs: 240, md: 420 }
                }}
              />

              <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                {/* Category & Date */}
                <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                  <Typography
                    sx={{
                      background: "red",
                      color: "#fff",
                      px: 2,
                      py: 0.5,
                      borderRadius: 1,
                      fontFamily: "Open Sans",
                      fontSize: "14px"
                    }}
                  >
                    News
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Open Sans",
                      fontSize: "14px",
                      color: "text.secondary"
                    }}
                  >
                    May 21, 2025
                  </Typography>
                </Box>

                {/* Title */}
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "Open Sans",
                    fontWeight: 700,
                    mb: 3
                  }}
                >
                  Test 2
                </Typography>

                {/* Content */}
                <Typography sx={contentStyle}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </Typography>

                <Typography sx={contentStyle}>
                  It has survived not only five centuries, but also the leap into
                  electronic typesetting, remaining essentially unchanged.
                </Typography>

                <Typography sx={contentStyle}>
                  This static page can later be converted to a dynamic blog
                  detail page using APIs or CMS.
                </Typography>

                <Divider sx={{ my: 4 }} />

                <Button
                  variant="outlined"
                  color="error"
                  sx={{
                    textTransform: "none",
                    fontFamily: "Open Sans"
                  }}
                  onClick={() => window.history.back()}
                >
                  ← Back to Blogs
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* RIGHT – SIDEBAR */}
          <Grid item  size={{xs:12,md:4}}>
            <Box sx={{ position: "sticky", top: 90 }}>

              {/* Recent Posts */}
              <Card
                sx={{
                  mb: 4,
                  borderRadius: 3,
                  boxShadow: "0px 6px 20px rgba(0,0,0,0.08)"
                }}
              >
                <CardContent>
                  <Typography
                    sx={{
                      fontFamily: "Open Sans",
                      fontWeight: 700,
                      mb: 2,
                      fontSize: "18px"
                    }}
                  >
                    Recent Posts
                  </Typography>

                  {recentPosts.map((post, index) => (
                    <Box key={index} sx={{ mb: 1.5 }}>
                      <Typography
                        sx={{
                          fontFamily: "Open Sans",
                          fontSize: "14px",
                          cursor: "pointer",
                          "&:hover": { color: "red" }
                        }}
                      >
                        {post}
                      </Typography>
                      <Divider sx={{ mt: 1 }} />
                    </Box>
                  ))}
                </CardContent>
              </Card>

              {/* Features / Tags */}
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: "0px 6px 20px rgba(0,0,0,0.08)"
                }}
              >
                <CardContent>
                  <Typography
                    sx={{
                      fontFamily: "Open Sans",
                      fontWeight: 700,
                      mb: 2,
                      fontSize: "18px"
                    }}
                  >
                    Features
                  </Typography>

                  <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                    {["Manufacturing", "QC", "Technology", "Engineering"].map(
                      (tag) => (
                        <Box
                          key={tag}
                          sx={{
                            px: 2,
                            py: 0.5,
                            borderRadius: 2,
                            border: "1px solid #ddd",
                            fontSize: "13px",
                            fontFamily: "Open Sans",
                            cursor: "pointer",
                            "&:hover": {
                              background: "red",
                              color: "#fff",
                              borderColor: "red"
                            }
                          }}
                        >
                          {tag}
                        </Box>
                      )
                    )}
                  </Box>
                </CardContent>
              </Card>

            </Box>
          </Grid>

        </Grid>
      </Container>
    </Box>
  );
};

const contentStyle = {
  fontFamily: "Open Sans",
  fontSize: "16px",
  lineHeight: 1.9,
  mb: 3
};

export default BlogDetail;
