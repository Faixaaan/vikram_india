import React, { useEffect, useState } from "react";
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
  Divider,
  Breadcrumbs,
  Link as MLink,
} from "@mui/material";
import blogImage from "../../Assets/blog.jpg";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../Api/Axios/axios";
import { endpoints } from "../../Api/EndPoints/endpoints";
import { Link } from 'react-router-dom';


const Blog = () => {
  const [tab, setTab] = useState(0);
  const [data, setData] = useState([])
  const [search, setSearch] = useState("");
  const navigate = useNavigate();


  const fetchBlogData = async () => {
    try {
      const res = await axiosInstance.get(endpoints.AboutUs.getBlockData)
      console.log(res?.data?.data, 'blogData')
      setData(res?.data?.data)
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchBlogData();
  }, [])

  // 🔥 HTML REMOVE (for excerpt safety)
  const stripHtml = (html) => {
    if (!html) return "";
    return html.replace(/<[^>]*>/g, "");
  };


  // 🔥 FINAL FILTER (CATEGORY + SEARCH)
  const filteredBlogs =
    (tab === 0
      ? data.filter((blog) => blog.category_id === "New")
      : data.filter((blog) => blog.category_id === "Top")
    ).filter((blog) => {
      const searchText = search.toLowerCase();

      return (
        blog.title.toLowerCase().includes(searchText) ||
        stripHtml(blog.excerpt).toLowerCase().includes(searchText)
      );
    });



  return (
    <Box sx={{ py: 4, px: { xs: 2, md: 6 } }}>
      <Breadcrumbs sx={{ mb: 2, fontSize: "14px" }}>
        <MLink component={Link} to="/home" underline="hover" color="inherit">
          Home
        </MLink>
        <Typography color="inherit">Blog</Typography>


      </Breadcrumbs>
      <Grid container spacing={4}>

        {/* LEFT – BLOG LIST */}
        <Grid item xs={12} md={8} size={{ xs: 12, md: 8 }}>
          <Grid container spacing={4}>
            {data?.map((blog) => (
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
                      {blog.created_at}
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
                        fontFamily: "Roboto"
                      }}
                    >
                      {blog.category_id}
                    </Box>
                  </Box>

                  <CardContent>
                    <Typography
                      variant="h6"
                      fontWeight={600}
                      gutterBottom
                      sx={{ fontFamily: "Roboto", fontSize: "18px" }}
                    >
                      {blog.title}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontFamily: "Roboto", fontSize: "14px" }}
                    >
                      {blog.excerpt}
                    </Typography>

                    <Button
                      sx={{
                        mt: 2,
                        color: "red",
                        textTransform: "none",
                        fontFamily: "Roboto"
                      }}
                      onClick={() => navigate(`/blogs/blog-detail/${blog?.slug}`)}
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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {/* Tabs */}
            <Tabs
              value={tab}
              onChange={(e, val) => setTab(val)}
              textColor="error"
              indicatorColor="error"
              variant="fullWidth"
            >
              <Tab label="New Blog" />
              <Tab label="Top Blog" />
            </Tabs>

            <Divider sx={{ mb: 1 }} />

            {/* Sidebar Items */}
            {filteredBlogs.map((item) => (
              <Box key={item.id} sx={{ display: "flex", mb: 1, cursor: "pointer", borderBottom: "1px solid #ccc", paddingBottom: 1 }} onClick={() => navigate(`/blogs/blog-detail/${item?.slug}`)}>
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
                    sx={{ fontFamily: "Roboto", fontSize: "18px" }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    color="text.secondary"
                    sx={{ fontFamily: "Roboto", fontSize: "16px" }}
                  >
                    {item.created_at}
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
