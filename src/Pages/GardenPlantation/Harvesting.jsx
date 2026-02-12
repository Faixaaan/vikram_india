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
  "HARVESTING TOOL",
  "FOREIGN OBJECT REMOVER TOOL",
  "LABORATORY & QUALITY ASSURANCE TOOL",
  


];




const Harvesting = () => {

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
          <Typography color="text.primary" sx={{ fontSize: "15px",textDecoration:"none" }}  component={Link} underline="hover" to="/products/tea-processing-machinery/Tmd-Division-machine-structure">Garden & Plantation Equipments</Typography>
          <Typography color="text.primary" sx={{ fontSize: "15px" }}>HARVESTING TOOL</Typography>
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
                  to={`/products/garden-&-plantation-equipments/${item.toLowerCase().replace(/ /g, "-")}`}
                  sx={{
                    borderBottom: "1px solid #eee",
                    backgroundColor: item === "HARVESTING TOOL" ? "green" : "transparent",
                    color: item === "HARVESTING TOOL" ? "#fff" : "#000",
                    "&:hover": {
                      backgroundColor: item === "HARVESTING TOOL" ? "green" : "#f5f5f5",
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
                  Self-Propelled Tea Harvestor Machine
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
           
            

           


          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Harvesting;
