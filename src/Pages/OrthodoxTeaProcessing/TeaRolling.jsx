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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Container,
} from "@mui/material";

import { Link } from "react-router-dom";

import '../../App.css'
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { axiosInstance } from "../../../src/Api/Axios/axios";
import { endpoints } from "../../../src/Api/EndPoints/endpoints";
import controllerImage from "../../../src/Assets/rolling.jpg";


const leftMenu = [
  "WITHERING PROCESS",
  "ROLLING PROCESS",
  "OXIDATION PROCESS",
  "DRYING PROCESS",
  "SORTING,CLEANING,GRADING AND STORAGE SYSTEM",


];

const specifications = [
  { label: "Type", value: "4 Wheel bi-planner chains (Opened/Closed)" },
  { label: "Unit Load Capacity", value: "30–60 Kgs. (Maximum) Each Hook" },
  { label: "Working Tension", value: "700 Kgs" },
  { label: "Breaking Strength", value: "6000 Kgs." },
  {
    label: "Tracks",
    value:
      "Standard Track made of 4 / 3.15 mm thick covered section of Material MS (IS-2062).",
  },
  {
    label: "Wheels",
    value:
      "Material Alloy steel with C3 Clearance. Lubricated & Sealed for Life.",
  },
  {
    label: "Chain Link Plate",
    value:
      "32 x 4 mm Thick made of Carbon Steel duly heat treated.",
  },
  { label: "Pitch", value: '12" / 15"' },
  {
    label: "Axles",
    value: "Made of Carbon Steel duly Heat Treated.",
  },
  {
    label: "Drive Chain",
    value: "1.5\" Pitch American Standard Dog Chain.",
  },
  {
    label: "Drive Sprocket",
    value:
      "1.5\" Pitch suitable no. of teeth, 2 Nos. simplex sprocket.",
  },
];


const TeaRolling = () => {

  const [data, setData] = useState([])

  const fetchDryingData = async () => {
    try {
      const res = await axiosInstance.get(endpoints.teaProcessingMachinery.withering);
      setData(res?.data?.data)
    }
    catch (err) {
      console.log(err)
    }
  }
  useEffect(() => {
    fetchDryingData()
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
          <Typography color="text.primary" sx={{ fontSize: "15px",textDecoration:"none" }}  component={Link} underline="hover" to="/products/tea-processing-machinery/black-tea">Orthodox Tea Processing Machinery</Typography>
          <Typography color="text.primary" sx={{ fontSize: "15px" }}>Rolling Process</Typography>
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
                  to={`/products/ctc/${`tea`}${item.toLowerCase().replace(/ /g, "-")}`}
                  sx={{
                    borderBottom: "1px solid #eee",
                    backgroundColor: item === "ROLLING PROCESS" ? "green" : "transparent",
                    color: item === "ROLLING PROCESS" ? "#fff" : "#000",
                    "&:hover": {
                      backgroundColor: item === "ROLLING PROCESS" ? "green" : "#f5f5f5",
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
              }} expandIcon={<ExpandMoreIcon sx={{ color: "red" }} />}>
                <Typography sx={{ fontSize: { md: "20px", xs: "16px" }, fontWeight: 500 }}>
                  Rolling Table
                </Typography>
              </AccordionSummary>

              <AccordionDetails>

                <Grid container spacing={2}>
                  {/* RIGHT IMAGE */}
                  <Grid item size={{ xs: 12, md: 4 }}>
                    <img src={controllerImage} style={{ width: "100%" }} />
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

                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sit temporibus alias quam maxime! Quia excepturi ullam magnam dolorem dolores expedita doloribus vero iusto laborum. Dolor, placeat consequuntur explicabo tenetur nihil tempora adipisci voluptatem enim in mollitia architecto non aperiam blanditiis quia repudiandae nulla illo, cupiditate neque veniam, voluptatibus dignissimos? Aspernatur eos mollitia in natus corrupti, libero, laudantium dolore soluta reiciendis nisi expedita. Commodi tempore quia suscipit a id facilis fugiat minus? Officia, blanditiis aspernatur quis voluptate facilis nobis quod ea commodi porro est dolores.

                    </Typography>



                  </Grid>



                  {/* BOTTOM FULL WIDTH CONTENT */}


                </Grid>



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
              }} expandIcon={<ExpandMoreIcon sx={{ color: "red" }} />}>
                <Typography sx={{ fontSize: { md: "20px", xs: "16px" }, fontWeight: 500 }}>
                  Rotovane
                </Typography>
              </AccordionSummary>

              <AccordionDetails>

                <Grid container spacing={2}>
                  {/* RIGHT IMAGE */}
                  <Grid item size={{ xs: 12, md: 4 }}>
                    <img src={controllerImage} style={{ width: "100%" }} />
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

                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis explicabo neque soluta esse sunt amet magnam odit vel delectus distinctio debitis assumenda fuga voluptatem quo repudiandae ratione id, at, fugiat obcaecati doloremque error quis ad. Deleniti eius minus labore ullam adipisci fugiat nulla, eum culpa porro aliquid enim tempora error quae ducimus atque, pariatur harum quas non debitis, consectetur perferendis impedit nemo commodi omnis. Nisi delectus reiciendis nemo dolorem quibusdam totam autem perferendis eaque quas ratione rerum, vitae impedit neque fugiat omnis asperiores magni!

                    </Typography>



                  </Grid>



                  {/* BOTTOM FULL WIDTH CONTENT */}


                </Grid>



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
              }} expandIcon={<ExpandMoreIcon sx={{ color: "red" }} />}>
                <Typography sx={{ fontSize: { md: "20px", xs: "16px" }, fontWeight: 500 }}>
                  Shifters
                </Typography>
              </AccordionSummary>

              <AccordionDetails>

                <Grid container spacing={2}>
                  {/* RIGHT IMAGE */}
                  <Grid item size={{ xs: 12, md: 4 }}>
                    <img src={controllerImage} style={{ width: "100%" }} />
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

                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro perspiciatis nulla, impedit molestiae obcaecati dignissimos praesentium officia, distinctio omnis aspernatur repudiandae architecto ipsa incidunt provident magnam ab veritatis tenetur maxime! Enim placeat ipsum quia quam optio quos pariatur quasi debitis voluptate porro, ducimus veritatis eveniet incidunt distinctio culpa, consequatur recusandae. Accusantium asperiores, eaque consequuntur eius neque dicta adipisci blanditiis reprehenderit amet rerum nam modi error molestiae illum totam tempore, saepe culpa corrupti officia eos repudiandae? Architecto, nulla? Reprehenderit sunt et sequi nam dignissimos.

                    </Typography>



                  </Grid>



                  {/* BOTTOM FULL WIDTH CONTENT */}


                </Grid>



              </AccordionDetails>
            </Accordion>
            

           


          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TeaRolling;
