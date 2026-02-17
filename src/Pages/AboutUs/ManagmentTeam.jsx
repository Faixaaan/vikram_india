import React, { useEffect, useState } from "react";
import {
    Box,
    Grid,
    Typography,
    List,
    ListItemButton,
    ListItemText,
    Breadcrumbs,
    Link as MLink,
    Tabs,
    Tab,
    Container,
} from "@mui/material";

import { Link } from "react-router-dom";
import '../../App.css';
import { axiosInstance } from "../../Api/Axios/axios";
import { endpoints } from "../../Api/EndPoints/endpoints";

const leftMenu = [
    "GROUP PROFILE",
    "COMPANY PROFILE",
    "VISION & MISSION",
    "MANAGEMENT TEAM",
    "ROC COMPLIANCE ANNUAL RETURN",
    "AWARD AND RECOGNITION",
    "RESEARCH AND DEVELOPMENT",
    "QUALITY POLICY",
    "CLIENTELE",
];

const ManagementTeam = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const [managementData, setManagementData] = useState([]);
    const [categories, setCategories] = useState([]);

    const handleTabChange = (event, newValue) => {
        setTabIndex(newValue);
    };

    const fetchManagementData = async () => {
        try {
            const res = await axiosInstance.get(endpoints.AboutUs.ManagmentTeamData);
            const data = res?.data?.data || [];

            // Replace null category with "Others"
            const formattedData = data.map(item => ({
                ...item,
                category: item.category || "Others"
            }));

            setManagementData(formattedData);

            // Unique categories
            const uniqueCategories = [...new Set(
                formattedData.map(item => item.category)
            )];

            setCategories(uniqueCategories);

        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchManagementData();
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const filteredData = managementData.filter(
        item => item.category === categories[tabIndex]
    );

    return (
        <Box sx={{ padding: { xs: 2, md: 4 } }}>
            <Container maxWidth="xl">

                {/* Breadcrumb */}
                <Breadcrumbs sx={{ mb: 2, fontSize: "15px" }}>
                    <MLink component={Link} to="/" underline="hover" color="inherit">
                        Home
                    </MLink>
                    <Typography sx={{ fontSize: "15px" }}>About Us</Typography>
                    <Typography color="text.primary" sx={{ fontSize: "15px" }}>
                        Management Team
                    </Typography>
                </Breadcrumbs>

                <Grid container spacing={3}>

                    {/* Sidebar */}
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
                            {leftMenu.map((item) => {
                                const isActive = item === "MANAGEMENT TEAM";

                                if (item === "ROC COMPLIANCE ANNUAL RETURN") {
                                    return (
                                        <ListItemButton
                                            key={item}
                                            component="a"
                                            href="https://www.vikramindia.in/pdf/roc-compliance-annual-return.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                borderBottom: "1px solid #eee",
                                            }}
                                        >
                                            <ListItemText primary={item} />
                                        </ListItemButton>
                                    );
                                }

                                return (
                                    <ListItemButton
                                        key={item}
                                        component={Link}
                                        to={`/about/${item.toLowerCase().replace(/ /g, "-")}`}
                                        sx={{
                                            borderBottom: "1px solid #eee",
                                            backgroundColor: isActive ? "green" : "transparent",
                                            color: isActive ? "#fff" : "#000",
                                            "&:hover": {
                                                backgroundColor: isActive ? "green" : "#f5f5f5",
                                            }
                                        }}
                                    >
                                        <ListItemText primary={item} />
                                    </ListItemButton>
                                );
                            })}
                        </List>
                    </Grid>

                    {/* Right Section */}
                    <Grid item size={{ xs: 12, md: 9 }} sx={{ mt: 5 }}>

                        {/* Dynamic Tabs */}
                        {categories.length > 0 && (
                            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                                <Box sx={{
                                    backgroundColor: '#ffffff',
                                    borderRadius: '12px',
                                    padding: '6px',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                }}>
                                    <Tabs
                                        value={tabIndex}
                                        onChange={handleTabChange}
                                        textColor="inherit"
                                        sx={{
                                            minHeight: "auto",
                                            '& .MuiTabs-indicator': {
                                                height: '100%',
                                                borderRadius: '10px',
                                                backgroundColor: '#1BAA63',
                                                zIndex: 0,
                                            }
                                        }}
                                    >
                                        {categories.map((cat, index) => (
                                            <Tab
                                                key={index}
                                                label={cat}
                                                sx={{
                                                    position: 'relative',
                                                    zIndex: 1,
                                                    textTransform: 'capitalize',
                                                    fontWeight: 600,
                                                    fontSize: '16px',
                                                    padding: '12px 28px',
                                                    borderRadius: '10px',
                                                    color: '#000',
                                                    minHeight: 'auto',
                                                    '&.Mui-selected': {
                                                        color: '#fff !important'
                                                    }
                                                }}
                                            />
                                        ))}
                                    </Tabs>

                                </Box>
                            </Box>
                        )}

                        {/* Profile Cards */}
                        {filteredData.map((member, index) => (
                            <Box
                                key={member.id}
                                sx={{
                                    mt: 4,
                                    boxShadow: "0px 4px 20px rgba(0,0,0,0.08)",
                                    borderRadius: "12px",
                                    p: 3,
                                    background: "#fff"
                                }}
                            >
                                <Grid container spacing={2}>

                                    {/* Image Left */}
                                    {index % 2 === 0 && (
                                        <Grid item size={{ xs: 12, md: 4 }}>
                                            <img
                                                src={member.profile_pic || "/no-image.png"}
                                                alt={member.name}
                                                style={{
                                                    width: "100%",
                                                    borderRadius: "8px"
                                                }}
                                            />
                                        </Grid>
                                    )}

                                    {/* Content */}
                                    <Grid item size={{ xs: 12, md: 8 }} sx={{ bgcolor: "#B5BEB2" }}>
                                        <Box
                                            sx={{ padding: "20px" }}
                                            dangerouslySetInnerHTML={{
                                                __html: member.profile_desc || ""
                                            }}
                                        />

                                        <Box sx={{
                                            background: 'linear-gradient(90deg, #1BAA63 0%, #276f9e 100%)',
                                            padding: "15px 20px",
                                            color: "#fff"
                                        }}>
                                            <Typography sx={{ fontSize: "20px", fontWeight: 600 }}>
                                                {member.name}
                                            </Typography>

                                            <Typography sx={{
                                                fontSize: "14px",
                                                backgroundColor: "blue",
                                                padding: "3px 6px",
                                                display: "inline-block",
                                                mt: 1
                                            }}>
                                                {member.designation}
                                            </Typography>
                                        </Box>
                                    </Grid>

                                    {/* Image Right */}
                                    {index % 2 !== 0 && (
                                        <Grid item xs={12} md={4}>
                                            <img
                                                src={member.profile_pic || "/no-image.png"}
                                                alt={member.name}
                                                style={{
                                                    width: "100%",
                                                    borderRadius: "8px"
                                                }}
                                            />
                                        </Grid>
                                    )}

                                </Grid>
                            </Box>
                        ))}

                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default ManagementTeam;
