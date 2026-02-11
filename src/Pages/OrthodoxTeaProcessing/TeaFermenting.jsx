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


const TeaFermenting = () => {

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
          <Typography color="text.primary" sx={{ fontSize: "15px" }}>Orthodox Tea Processing Machinery</Typography>
          <Typography color="text.primary" sx={{ fontSize: "15px" }}>Oxidation Process</Typography>
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
                    backgroundColor: item === "OXIDATION PROCESS" ? "green" : "transparent",
                    color: item === "OXIDATION PROCESS" ? "#fff" : "#000",
                    "&:hover": {
                      backgroundColor: item === "OXIDATION PROCESS" ? "green" : "#f5f5f5",
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
                  Continous Belt Fermeneter
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

                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis omnis ullam repudiandae praesentium fugit tempore cumque. Beatae corporis aspernatur quibusdam rem enim blanditiis dolore excepturi accusantium. Ipsa accusamus quis magnam ullam, totam enim itaque, officia cum sed nihil alias architecto earum quod repudiandae minus. Incidunt eaque reprehenderit ipsum ad iure sit fugiat recusandae explicabo, officia quod nisi a nulla beatae facere est consequuntur. Perspiciatis mollitia quasi nemo sunt odio assumenda laboriosam. Corrupti tempora dicta cum recusandae totam accusantium architecto, expedita neque, laboriosam, ipsum saepe modi.

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
                  Heading Second (2)
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

                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, laborum? Laboriosam, sint esse natus libero architecto adipisci quod modi molestias? Sint, culpa reprehenderit veritatis suscipit rem tenetur, consequuntur illum explicabo nisi, nulla a hic eum ratione esse vitae sequi? Ad, nostrum at a laboriosam dolore tempora hic magni eaque error sunt repudiandae natus dignissimos qui officiis ratione velit obcaecati aspernatur omnis optio quos aliquam amet pariatur exercitationem officia. Error perspiciatis delectus ratione atque libero, similique eos asperiores ex nulla labore excepturi maxime dolore reiciendis ut omnis aspernatur ipsam hic facere?

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

export default TeaFermenting;
