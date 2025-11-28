import React from 'react';
import {
    Box,
    Typography,
    Container,
    Grid
} from '@mui/material';
import ModuleImage from '../../../Assets/Module_img.png'

const ModuleMounting = () => {
    const features = [
        "Single and Double pole structure",
        "Double pole structure with struts",
        "Seasonal structure with unique turn buckle mechanism tilting",
        "Solar parking structure",
        "Pre-galvanized structure for solar projects",
        "Double pole seasonal tilting and static structure"
    ];

    return (
        <Box
            sx={{

                backgroundColor: '#'
            }}
        >
            
                <Grid container>
                    <Grid size={{ xs: 12, sm: 6, }} sx={{backgroundColor:"#000000B5"}}>
                        <Box sx={{ minHeight: "440px", backgroundColor: "", padding: "30px 0px", display: "flex", alignItems: "flex-start", flexDirection: "column", justifyContent: "center",marginLeft:{md:"35px",xs:"15px"} }}>
                            <Typography sx={{ fontSize: {md:"40px",xs:"36px"}, color: "#fff", fontFamily: "Open Sans", fontWeight: "700", lineHeight: "100%" }}>
                                Module Mounting Structure
                            </Typography>

                            <ul style={{}}>
                                <li style={{ color: "#fff", fontSize: "20px", fontFamily: "Open Sans", paddingBottom: "10px", fontWeight: "600", fontStyle: "italic" }}>Single and Double pole structure</li>
                                <li style={{ color: "#fff", fontSize: "20px", fontFamily: "Open Sans", paddingBottom: "10px", fontWeight: "600", fontStyle: "italic" }}>Double pole structure with struts</li>
                                <li style={{ color: "#fff", fontSize: "20px", fontFamily: "Open Sans", paddingBottom: "10px", fontWeight: "600", fontStyle: "italic" }}>Seasonal structure with unique turn buckle
                                    mechanism tilting</li>
                                <li style={{ color: "#fff", fontSize: "20px", fontFamily: "Open Sans", paddingBottom: "10px", fontWeight: "600", fontStyle: "italic" }}>Solar parking structure</li>
                                <li style={{ color: "#fff", fontSize: "20px", fontFamily: "Open Sans", paddingBottom: "10px", fontWeight: "600", fontStyle: "italic" }}>Pre-galvanized structure for solar projects</li>
                                <li style={{ color: "#fff", fontSize: "20px", fontFamily: "Open Sans", paddingBottom: "10px", fontWeight: "600", fontStyle: "italic" }}>Double pole seasonal tilting and static structure
                                    with struts</li>
                            </ul>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6 }}>
                        <Box sx={{ height: "500px" }}>
                            <Box
                                component="img"
                                src={ModuleImage}
                                alt=""
                                sx={{
                                    width: "100%",
                                    height: { xs: "100%", sm: "100%" },
                                    objectFit: "cover"
                                }}
                            />
                        </Box>


                    </Grid>

                </Grid>

            
        </Box>
    );
};

export default ModuleMounting;