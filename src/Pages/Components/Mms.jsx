import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  Breadcrumbs,
  Link as MLink,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Container,
} from "@mui/material";

import { Link } from "react-router-dom";
import mmsStructure from "../../Assets/mms-structure.jpg"; // update your image
import '../../App.css'
import structure4 from '../../Assets/mm-structure-04.jpg'
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { axiosInstance } from "../../Api/Axios/axios";
import { endpoints } from "../../Api/EndPoints/endpoints";


const leftMenu = [
  "INFRASTRUCTURE & MACHINERY",
  "PRODUCT & PORTFOLIO",
  "PROFILE AVAILABILITY",
  "TECHNICAL SPECIFICATION",
  "QUALITY & SAFETY",


];

const Introduction = () => {

  const [data, setData] = useState([]);


  const fetchData = async () => {
    try {
      const res = await axiosInstance.get(endpoints.ModuleMounting.infrastrutre_machinery)
      setData(res?.data?.data)
    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchData()
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);
  return (
    <Box sx={{ padding: { xs: 2, md: 4 } }}>
      <Container maxWidth='xl'>
        {/* Breadcrumb */}
        <Breadcrumbs sx={{ mb: 2, fontSize: "15px" }}>
          <MLink component={Link} to="/" underline="hover" color="inherit">
            Home
          </MLink>
          <Typography color="inherit" sx={{ fontSize: "15px" }}>Product & Services</Typography>
          <Typography color="text.primary" sx={{ fontSize: "15px" }}>Module Mounting Structure</Typography>
          <Typography color="text.primary" sx={{ fontSize: "15px" }}>Infrastructure & Machinery</Typography>
        </Breadcrumbs>





        <Grid container spacing={3}>
          {/* Left Sidebar */}
          <Grid item size={{ xs: 12, md: 3 }} sx={{ mt: 2 }}>
            <Typography
              sx={{
                fontWeight: 700,
                fontSize: "15px",
                mb: 2,
                textTransform: "uppercase",
                fontFamily: "Roboto"
              }}
            >
              Product & Services
            </Typography>


            <List sx={{ border: "1px solid #ddd" }}>
              {leftMenu.map((item) => (
                <ListItemButton
                  key={item}
                  component={Link}
                  to={`/products/${item.toLowerCase().replace(/ /g, "-")}`}
                  sx={{
                    borderBottom: "1px solid #eee",
                    backgroundColor: item === "INFRASTRUCTURE & MACHINERY" ? "#1A73E8" : "transparent",
                    color: item === "INFRASTRUCTURE & MACHINERY" ? "#fff" : "#000",
                    "&:hover": {
                      backgroundColor: item === "INFRASTRUCTURE & MACHINERY" ? "#1A73E8" : "#f5f5f5",
                    },
                    fontFamily: "Roboto"
                  }}
                >
                  <ListItemText
                    primary={item}
                    primaryTypographyProps={{
                      fontSize: "14px",
                      fontWeight: 500,
                      fontFamily: "Roboto"
                    }}
                  />
                </ListItemButton>
              ))}
            </List>
          </Grid>

          {/* Right Content Section */}
          <Grid item size={{ xs: 12, md: 9 }} sx={{ mt: 3 }}>
            



            {/* Introduction */}


            <Accordion sx={{
              background: "#fff",
              boxShadow: "0px 2px 8px rgba(0,0,0,0.10)",
              borderRadius: "8px",
              "&:before": { display: "none" },
              mt: 4
            }}>
              <AccordionSummary sx={{
                backgroundColor: "#f8f8f8",
                borderBottom: "1px solid #eee",
                borderRadius: "8px"
              }} expandIcon={<ExpandMoreIcon sx={{ color: "#1A73E8" }} />}>
                <Typography sx={{ fontSize: { md: "20px", xs: "16px" }, fontWeight: 500 }}>
                  {data?.section1_title}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Box>
                  <Grid container spacing={2}>
                    {/* RIGHT IMAGE */}
                    <Grid item size={{ xs: 12, md: 4 }}>
                      <img src={data?.section1_image} style={{ width: "100%" }} />
                    </Grid>

                    {/* LEFT CONTENT */}
                    <Grid item size={{ xs: 12, md: 8 }}>

                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontFamily: "Roboto",
                          textAlign: "justify",
                          mt: 0
                        }}
                        dangerouslySetInnerHTML={{
                          __html: data?.section1_description
                        }}
                      >



                      </Typography>



                    </Grid>



                    {/* BOTTOM FULL WIDTH CONTENT */}


                  </Grid>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{
              background: "#fff",
              boxShadow: "0px 2px 8px rgba(0,0,0,0.10)",
              borderRadius: "8px",
              "&:before": { display: "none" },
              mt: 4
            }}>
              <AccordionSummary sx={{
                backgroundColor: "#f8f8f8",
                borderBottom: "1px solid #eee",
                borderRadius: "8px"
              }} expandIcon={<ExpandMoreIcon sx={{ color: "#1A73E8" }} />}>
                <Typography sx={{ fontSize: { md: "20px", xs: "16px" }, fontWeight: 500 }}>
                  {data?.section2_title}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Box>
                  <Grid container spacing={2}>
                    {/* RIGHT IMAGE */}
                    <Grid item size={{ xs: 12, md: 4 }}>
                      <img src={data?.section2_image} style={{ width: "100%" }} />
                    </Grid>

                    {/* LEFT CONTENT */}
                    <Grid item size={{ xs: 12, md: 8 }}>

                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontFamily: "Roboto",
                          textAlign: "justify",
                          mt: 0
                        }}
                        dangerouslySetInnerHTML={{
                          __html: data?.section2_description
                        }}
                      >



                      </Typography>



                    </Grid>



                    {/* BOTTOM FULL WIDTH CONTENT */}


                  </Grid>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{
              background: "#fff",
              boxShadow: "0px 2px 8px rgba(0,0,0,0.10)",
              borderRadius: "8px",
              "&:before": { display: "none" },
              mt: 4
            }}>
              <AccordionSummary sx={{
                backgroundColor: "#f8f8f8",
                borderBottom: "1px solid #eee",
                borderRadius: "8px"
              }} expandIcon={<ExpandMoreIcon sx={{ color: "#1A73E8" }} />}>
                <Typography sx={{ fontSize: { md: "20px", xs: "16px" }, fontWeight: 500 }}>
                  {data?.section3_title}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Box>
                  <Grid container spacing={2}>
                    {/* RIGHT IMAGE */}
                    <Grid item size={{ xs: 12, md: 4 }}>
                      <img src={data?.section3_image} style={{ width: "100%" }} />
                    </Grid>

                    {/* LEFT CONTENT */}
                    <Grid item size={{ xs: 12, md: 8 }}>

                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontFamily: "Roboto",
                          textAlign: "justify",
                          mt: 0
                        }}
                        dangerouslySetInnerHTML={{
                          __html: data?.section3_description
                        }}
                      >



                      </Typography>



                    </Grid>



                    {/* BOTTOM FULL WIDTH CONTENT */}


                  </Grid>
                </Box>
              </AccordionDetails>
            </Accordion>
             <Accordion sx={{
              background: "#fff",
              boxShadow: "0px 2px 8px rgba(0,0,0,0.10)",
              borderRadius: "8px",
              "&:before": { display: "none" },
              mt: 4
            }}>
              <AccordionSummary sx={{
                backgroundColor: "#f8f8f8",
                borderBottom: "1px solid #eee",
                borderRadius: "8px"
              }} expandIcon={<ExpandMoreIcon sx={{ color: "#1A73E8" }} />}>
                <Typography sx={{ fontSize: { md: "20px", xs: "16px" }, fontWeight: 500 }}>
                  Heading Four (4)
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Box>
                  <Grid container spacing={2}>
                    {/* RIGHT IMAGE */}
                    <Grid item size={{ xs: 12, md: 4 }}>
                      <img src={data?.section1_image} style={{ width: "100%" }} />
                    </Grid>

                    {/* LEFT CONTENT */}
                    <Grid item size={{ xs: 12, md: 8 }}>

                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontFamily: "Roboto",
                          textAlign: "justify",
                          mt: 0
                        }}
                        
                      >

                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci amet explicabo deleniti, laboriosam ad reiciendis totam aspernatur repellendus non, doloribus cupiditate atque officia, odit maxime. Sit repudiandae deleniti possimus blanditiis soluta culpa et dolorum sint modi aliquid quos officia porro beatae ratione debitis, quaerat hic laborum asperiores consequatur! Quidem tenetur necessitatibus, qui magni fugiat minima repudiandae temporibus. Deserunt eos porro ipsum placeat, tempore nisi velit earum veniam a molestias in, consectetur perferendis suscipit est odio id culpa. Blanditiis dolor totam temporibus dolorem incidunt illum, harum iusto quaerat saepe. Beatae consequuntur asperiores facilis maxime voluptate repellendus deleniti quae ad unde fugiat!

                      </Typography>



                    </Grid>



                    {/* BOTTOM FULL WIDTH CONTENT */}


                  </Grid>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{
              background: "#fff",
              boxShadow: "0px 2px 8px rgba(0,0,0,0.10)",
              borderRadius: "8px",
              "&:before": { display: "none" },
              mt: 4
            }}>
              <AccordionSummary sx={{
                backgroundColor: "#f8f8f8",
                borderBottom: "1px solid #eee",
                borderRadius: "8px"
              }} expandIcon={<ExpandMoreIcon sx={{ color: "#1A73E8" }} />}>
                <Typography sx={{ fontSize: { md: "20px", xs: "16px" }, fontWeight: 500 }}>
                  Heading Five (5)
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Box>
                  <Grid container spacing={2}>
                    {/* RIGHT IMAGE */}
                    <Grid item size={{ xs: 12, md: 4 }}>
                      <img src={data?.section2_image} style={{ width: "100%" }} />
                    </Grid>

                    {/* LEFT CONTENT */}
                    <Grid item size={{ xs: 12, md: 8 }}>

                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontFamily: "Roboto",
                          textAlign: "justify",
                          mt: 0
                        }}
                        
                      >
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, iusto neque adipisci velit similique, a provident deleniti eveniet dolore autem odit ex consequuntur modi! Iusto enim ipsum veritatis unde beatae ex fugiat? Numquam, nulla ea quidem natus veniam tenetur labore? Ullam voluptates cum animi ducimus cumque ea, nesciunt libero minima cupiditate ipsa perspiciatis consequuntur? Optio cupiditate placeat eum! Laudantium cupiditate adipisci nam error excepturi necessitatibus, porro eligendi architecto eos expedita, exercitationem doloribus officia repudiandae officiis eius maiores ducimus? Dolorem natus sunt molestias suscipit voluptatibus excepturi quae non exercitationem. Quo eius dicta animi voluptas dolore ducimus hic consectetur illo, doloremque rerum.


                      </Typography>



                    </Grid>



                    {/* BOTTOM FULL WIDTH CONTENT */}


                  </Grid>
                </Box>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{
              background: "#fff",
              boxShadow: "0px 2px 8px rgba(0,0,0,0.10)",
              borderRadius: "8px",
              "&:before": { display: "none" },
              mt: 4
            }}>
              <AccordionSummary sx={{
                backgroundColor: "#f8f8f8",
                borderBottom: "1px solid #eee",
                borderRadius: "8px"
              }} expandIcon={<ExpandMoreIcon sx={{ color: "#1A73E8" }} />}>
                <Typography sx={{ fontSize: { md: "20px", xs: "16px" }, fontWeight: 500 }}>
                 Heading Six (6)
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Box>
                  <Grid container spacing={2}>
                    {/* RIGHT IMAGE */}
                    <Grid item size={{ xs: 12, md: 4 }}>
                      <img src={data?.section3_image} style={{ width: "100%" }} />
                    </Grid>

                    {/* LEFT CONTENT */}
                    <Grid item size={{ xs: 12, md: 8 }}>

                      <Typography
                        sx={{
                          fontSize: "16px",
                          fontFamily: "Roboto",
                          textAlign: "justify",
                          mt: 0
                        }}
                        
                      >

                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto consectetur dolorum expedita rem sit ipsa natus ratione ea dignissimos magni cupiditate quasi officia autem placeat magnam illum unde voluptas soluta, laudantium nisi rerum suscipit. Maxime iusto totam tempora, aliquid inventore recusandae accusamus? Voluptatem vero ad earum cum explicabo, tenetur impedit cupiditate odio incidunt sapiente. Id doloremque excepturi illum tempore? Corrupti voluptatibus eligendi sapiente repudiandae tempore, aspernatur aliquid laborum deleniti autem deserunt incidunt dolorum vero est. Perspiciatis quibusdam, dolorum assumenda quae et tempora quo maxime, repudiandae omnis ratione, aspernatur voluptate corrupti esse quisquam saepe illo accusamus magnam? Vel maxime cumque nemo?

                      </Typography>



                    </Grid>



                    {/* BOTTOM FULL WIDTH CONTENT */}


                  </Grid>
                </Box>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Introduction;
