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
    Container,
    Dialog,
    DialogContent,
    IconButton,
    Button,
    MobileStepper,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";

import { Link } from "react-router-dom";
import "../../App.css";

/* Images */
import big1 from '../../Assets/img-big-01.jpg'
import big2 from '../../Assets/img-big-02.jpg'
import big3 from '../../Assets/img-big-03.jpg'
import big4 from '../../Assets/img-big-04.jpg'
import big5 from '../../Assets/img-big-05.jpg'
import big6 from '../../Assets/img-big-06.jpg'
import big7 from '../../Assets/img-big-07.jpg'
import iitc1 from '../../Assets/iitc-big-01 (1).jpg'
import iitc2 from '../../Assets/iitc-big-02.jpg'
import iitc3 from '../../Assets/iitc-big-03.jpg'
import iitc4 from '../../Assets/iitc-big-04.jpg'
import iitc5 from '../../Assets/iitc-big-05.jpg'
import iitc6 from '../../Assets/iitc-big-06.jpg'
import iitc7 from '../../Assets/iitc-big-07.jpg'
import iitc8 from '../../Assets/iitc-big-08.jpg'
import machine1 from '../../Assets/machine-big-01.jpg'
import machine2 from '../../Assets/machine-big-02.jpg'
import machine3 from '../../Assets/machine-big-03.jpg'
import machine4 from '../../Assets/machine-big-04.jpg'
import machine5 from '../../Assets/machine-big-05.jpg'
import machine6 from '../../Assets/machine-big-06.jpg'
import machine7 from '../../Assets/machine-big-07.jpg'
import machine8 from '../../Assets/machine-big-08.jpg'
import machine9 from '../../Assets/machine-big-09.jpg'
import machine10 from '../../Assets/machine-big-10.jpg'
import glimpse1 from '../../Assets/glimpse-big-01.jpg'
import glimpse2 from '../../Assets/glimpse-big-02.jpg'
import glimpse3 from '../../Assets/glimpse-big-03.jpg'
import glimpse4 from '../../Assets/glimpse-big-04.jpg'
import glimpse5 from '../../Assets/glimpse-big-05.jpg'
import glimpse6 from '../../Assets/glimpse-big-06.jpg'
import glimpse7 from '../../Assets/glimpse-big-07.jpg'
import glimpse8 from '../../Assets/glimpse-big-08.jpg'
import glimpse9 from '../../Assets/glimpse-big-09.jpg'
import glimpse10 from '../../Assets/glimpse-big-10.jpg'
import glimpse11 from '../../Assets/glimpse-big-11.jpg'
import glimpse12 from '../../Assets/glimpse-big-12.jpg'
import glimpse13 from '../../Assets/glimpse-big-13.jpg'
import glimpse14 from '../../Assets/glimpse-big-14.jpg'
import receiving1 from '../../Assets/receiving-big-01.jpg'
import exportt from '../../Assets/export-big-01.jpg'
import { endpoints } from "../../Api/EndPoints/endpoints";
import { axiosInstance } from "../../Api/Axios/axios";


const leftMenu = ["NEWS", "PHOTO GALLERY", "DOWNLOAD"];

const Gallery = () => {
    const [open, setOpen] = useState(false);
    const [activeImages, setActiveImages] = useState([]);
    const [activeStep, setActiveStep] = useState(0);

    const clientLogos = [
        {
            name: "Receiving Export Excellence Award for 2016-17",
            images: [receiving1,],
        },
        {
            name: "Receiving Export Excellence Award for 2014-15",
            images: [exportt],
        },
        {
            name: "India Science Congress Exhibition",
            images: [big1, big2, big3, big4, big5, big6, big7],
        },
        {
            name: "IITC 2012",
            images: [iitc1, iitc2, iitc3, iitc4, iitc5, iitc6, iitc7, iitc8],
        },
        {
            name: "Machines and manufacturing facilities",
            images: [machine1, machine2, machine3, machine4, machine5, machine6, machine7, machine8, machine9, machine10],
        },
        {
            name: "A glimpse of some of our award ceremonies ",
            images: [glimpse1, glimpse2, glimpse3, glimpse4, glimpse5, glimpse6, glimpse7, glimpse8, glimpse9, glimpse10, glimpse11, glimpse12, glimpse13, glimpse14],
        },
    ];

    const [mediaData, setMediaData] = useState([])
     const [data,setData] = useState({})

    const fetchMediaData = async () => {
        try {
            const res = await axiosInstance.get(endpoints.Media.galleryCategory)
            const resData = await axiosInstance.get(endpoints.Media.cmsMedia)
            setData(resData?.data?.data)
            setMediaData(res?.data?.data)
        }
        catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchMediaData()
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const handleOpen = (images) => {
        setActiveImages(images);
        setActiveStep(0);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    return (
        <Box sx={{ padding: { xs: 2, md: 4 } }}>
            <Container maxWidth="xl">
                {/* Breadcrumb */}
                <Breadcrumbs sx={{ mb: 2, fontSize: "14px" }}>
                    <MLink component={Link} to="/" underline="hover" color="inherit">
                        Home
                    </MLink>
                    <Typography color="inherit">Media</Typography>
                    <Typography color="text.primary">PHOTO GALLERY</Typography>
                </Breadcrumbs>

                {/* Title */}
                <Typography
                    sx={{
                        fontSize: "28px",
                        fontWeight: 700,
                        mb: 1,
                        textTransform: "uppercase",
                        fontFamily: "Open Sans",
                    }}
                >
                    MEDIA
                </Typography>

                <Grid container spacing={3}>
                    {/* Left Sidebar */}
                    <Grid item size={{ xs: 12, md: 3 }}>
                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: "15px",
                                mb: 2,
                                textTransform: "uppercase",
                                fontFamily: "Open Sans",
                            }}
                        >
                            PHOTO GALLERY
                        </Typography>

                        <Divider sx={{ mb: 2 }} />

                        <Typography
                            sx={{
                                fontWeight: 700,
                                fontSize: "14px",
                                mb: 1,
                                color: "#d32f2f",
                                fontFamily: "Open Sans",
                            }}
                        >
                            MEDIA
                        </Typography>

                        <List sx={{ border: "1px solid #ddd" }}>
                            {leftMenu.map((item) => (
                                <ListItemButton
                                    key={item}
                                    component={Link}
                                    to={`/media/${item.toLowerCase().replace(/ /g, "-")}`}
                                    sx={{
                                        borderBottom: "1px solid #eee",
                                        backgroundColor:
                                            item === "PHOTO GALLERY" ? "green" : "transparent",
                                        color: item === "PHOTO GALLERY" ? "#fff" : "#000",
                                        "&:hover": {
                                            backgroundColor:
                                                item === "PHOTO GALLERY" ? "green" : "#f5f5f5",
                                        },
                                    }}
                                >
                                    <ListItemText primary={item} />
                                </ListItemButton>
                            ))}
                        </List>
                    </Grid>

                    {/* Right Content */}
                    <Grid item size={{ xs: 12, md: 9 }}>
                        <Typography
                            sx={{
                                fontSize: "28px",
                                fontWeight: 600,
                                fontFamily: "Open Sans",
                            }}
                        >
                           {data?.category2_title}
                        </Typography>

                        <Typography sx={{ color: "#df0000", fontSize: "14px" }}>
                            {data?.category2_subtitle}
                        </Typography>

                        <Box sx={{ mt: 6 }}>
                            <Typography
                                sx={{
                                    fontSize: "22px",
                                    fontWeight: 600,
                                    mb: 2,
                                    fontFamily: "Open Sans",
                                }}
                            >
                                {data?.category2_heading}
                            </Typography>

                            <Grid container spacing={3}>
                                {mediaData.map((item, index) => (
                                    <Grid item xs={12} sm={4} md={4} key={index}>
                                        <Box
                                            onClick={() => handleOpen(item.thumbnail)}
                                            sx={{
                                                maxWidth: "250px",
                                                mx: "auto",
                                                p: 2,
                                                borderRadius: "10px",
                                                background: "#fff",
                                                boxShadow: "0 4px 12px rgba(0,0,0,0.10)",
                                                textAlign: "center",
                                                cursor: "pointer",
                                                transition: "0.3s",
                                                "&:hover": {
                                                    transform: "translateY(-5px)",
                                                    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                                                },
                                            }}
                                        >
                                            <img
                                                src={item.thumbnail}
                                                alt={item.name}
                                                style={{
                                                    width: "250px",
                                                    height: "150px",
                                                    objectFit: "contain",
                                                }}
                                            />
                                        </Box>
                                        <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
                                            <Typography
                                                sx={{
                                                    fontSize: "14px",
                                                    mt: 1.5,
                                                    textAlign: "center",
                                                    fontFamily: "Open Sans",
                                                    maxWidth: "200px"
                                                }}
                                            >
                                                {item.category}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* Modal with Carousel */}
            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <IconButton
                    onClick={handleClose}
                    sx={{ position: "absolute", right: 8, top: 8 }}
                >
                    <CloseIcon />
                </IconButton>

                <DialogContent>
                    <Box sx={{ textAlign: "center" }}>
                        <img
                            src={activeImages[activeStep]}
                            alt="Gallery"
                            style={{
                                width: "100%",
                                maxHeight: "450px",
                                objectFit: "contain",
                            }}
                        />

                        <MobileStepper
                            steps={activeImages.length}
                            position="static"
                            activeStep={activeStep}
                            sx={{ mt: 2 }}
                            nextButton={
                                <Button
                                    size="small"
                                    onClick={() => setActiveStep((prev) => prev + 1)}
                                    disabled={activeStep === activeImages.length - 1}
                                >
                                    Next <KeyboardArrowRight />
                                </Button>
                            }
                            backButton={
                                <Button
                                    size="small"
                                    onClick={() => setActiveStep((prev) => prev - 1)}
                                    disabled={activeStep === 0}
                                >
                                    <KeyboardArrowLeft /> Back
                                </Button>
                            }
                        />
                    </Box>
                </DialogContent>
            </Dialog>
        </Box>
    );
};

export default Gallery;
