import React, { useEffect, useState } from "react";
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

import { useParams } from "react-router-dom";
import { axiosInstance } from "../../Api/Axios/axios";
import { endpoints } from "../../Api/EndPoints/endpoints";
import parse from "html-react-parser";



const BlogDetail = () => {

  const { slug } = useParams(); 

  const [blogDetailData, setBlogDetailData] = useState({})


  const fetchBlogData = async ()=>{
     try{
       const res = await axiosInstance.get(`${endpoints.Blog.getBlogData}/${slug}`);
       setBlogDetailData(res?.data?.data)
       console.log(res?.data?.data,'blog_detail_data')
     }
     catch(err){
        console.log(err)
     }
  }

  useEffect(()=>{
    fetchBlogData()
  },[slug])

  


  return (
    <Box sx={{ py: 6, px: { xs: 2, md: 6 }, background: "#f9f9f9" }}>
      <Container maxWidth="xl">
        {/* <Grid container spacing={4}> */}

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
                image={blogDetailData?.image}
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
                      fontFamily: "Roboto",
                      fontSize: "14px"
                    }}
                  >
                    News
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Roboto",
                      fontSize: "14px",
                      color: "text.secondary"
                    }}
                  >
                   {blogDetailData?.created_at}
                  </Typography>
                </Box>

                {/* Title */}
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "Roboto",
                    fontWeight: 700,
                    mb: 3
                  }}
                >
                   {parse(blogDetailData?.title|| "")}
                  
                </Typography>

                {/* Content */}
                <Typography sx={contentStyle}>
                 
                   {parse(blogDetailData?.description|| "")}

                </Typography>

                

                <Divider sx={{ my: 4 }} />

                <Button
                  variant="outlined"
                  color="error"
                  sx={{
                    textTransform: "none",
                    fontFamily: "Roboto"
                  }}
                  onClick={() => window.history.back()}
                >
                  ← Back to Blogs
                </Button>
              </CardContent>
            </Card>
          </Grid>

          

        {/* </Grid> */}
      </Container>
    </Box>
  );
};

const contentStyle = {
  fontFamily: "Roboto",
  fontSize: "16px",
  lineHeight: 1.9,
  mb: 3
};

export default BlogDetail;
