import React, { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  TextField,
  Tabs,
  Tab,
  Divider
} from "@mui/material";
import blogImage from "../../Assets/blog.jpg";
import { useNavigate } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "Test 2",
    date: "May 21",
    category: "News",
    image: blogImage,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    isPopular: true,
    createdAt: "2025-05-21"
  },
  {
    id: 2,
    title: "QC Test 10",
    date: "May 16",
    category: "Test",
    image: blogImage,
    description: "This is a short blog description.",
    isPopular: false,
    createdAt: "2025-05-16"
  }
];

const Blog = () => {
  const [tab, setTab] = useState(0);
  const navigate = useNavigate();

  const filteredBlogs =
    tab === 0
      ? blogs.filter((blog) => blog.isPopular)
      : [...blogs].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

  return (
    <Box sx={{ py: 6, px: { xs: 2, md: 6 } }}>
      <Grid container spacing={4}>

        {/* LEFT – BLOG LIST */}
        <Grid item xs={12} md={8} size={{ xs: 12, md: 8 }}>
          <Grid container spacing={4}>
            {blogs.map((blog) => (
              <Grid item key={blog.id} size={{ xs: 12, sm: 6 }}>
                <Card
                  sx={{
                    height: "100%",
                    boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                    borderRadius: 2
                  }}
                >
                  <Box sx={{ position: "relative" }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={blog.image}
                      alt={blog.title}
                    />

                    {/* Date */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 10,
                        left: 10,
                        background: "#fff",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 1,
                        fontSize: "12px",
                        fontWeight: 600
                      }}
                    >
                      {blog.date}
                    </Box>

                    {/* Category */}
                    <Box
                      sx={{
                        position: "absolute",
                        top: 10,
                        right: 10,
                        background: "red",
                        color: "#fff",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 1,
                        fontSize: "16px",
                        fontWeight: 600,
                        fontFamily: "Open Sans"
                      }}
                    >
                      {blog.category}
                    </Box>
                  </Box>

                  <CardContent>
                    <Typography
                      variant="h6"
                      fontWeight={600}
                      gutterBottom
                      sx={{ fontFamily: "Open Sans", fontSize: "18px" }}
                    >
                      {blog.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontFamily: "Open Sans", fontSize: "14px" }}
                    >
                      {blog.description}
                    </Typography>

                    <Button
                      sx={{
                        mt: 2,
                        color: "red",
                        textTransform: "none",
                        fontFamily: "Open Sans"
                      }}
                      onClick={() => navigate(`/blogs/blog-detail`)}
                    >
                      Read More →
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* RIGHT – SIDEBAR */}
        <Grid item size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              p: 3,
              boxShadow: "0px 4px 12px rgba(0,0,0,0.08)",
              borderRadius: 2
            }}
          >
            {/* Search */}
            <TextField
              fullWidth
              placeholder="Search Blog"
              size="small"
              sx={{ mb: 3 }}
            />

            {/* Tabs */}
            <Tabs
              value={tab}
              onChange={(e, val) => setTab(val)}
              textColor="error"
              indicatorColor="error"
              variant="fullWidth"
            >
              <Tab label="Popular" />
              <Tab label="Latest" />
            </Tabs>

            <Divider sx={{ mb: 1 }} />

            {/* Sidebar Items */}
            {filteredBlogs.map((item) => (
              <Box key={item.id} sx={{ display: "flex", mb: 2 }}>
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{
                    width: 70,
                    height: 60,
                    borderRadius: 1,
                    objectFit: "cover",
                    mr: 2
                  }}
                />
                <Box>
                  <Typography
                    variant="body2"
                    fontWeight={600}
                    color="error"
                    sx={{ fontFamily: "Open Sans", fontSize: "18px" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ fontFamily: "Open Sans", fontSize: "16px" }}
                  >
                    {item.date}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>

      </Grid>
    </Box>
  );
};

export default Blog;
