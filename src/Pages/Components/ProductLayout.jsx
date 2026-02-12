import { Box, Container, Grid, Typography, Breadcrumbs, Link } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // If using React Router
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

import Introduction from "./Mms";
import Manufacturing from "./Manufacturing";
import HighTensile from "./HighTensile";

import LeftSidebar from "./LeftsideBar";
import Product from "./Product";

const menu = [
  { key: "infra", label: "INFRASTRUCTURE & MACHINERY",  breadcrumb: "Infrastructure & Machinery" },
  { key: "portfolio", label: "PRODUCT & PORTFOLIO",  breadcrumb: "Product & Portfolio" },
  { key: "tech", label: "TECHNICAL SPECIFICATION",  breadcrumb: " Technical Specification" },
  { key: "quality", label: "QUALITY & SAFETY",  breadcrumb: "Quality & Safety" },
];

const ProductsLayout = () => {
  const navigate = useNavigate(); 
  const defaultTab = menu[0]; 
  const [activeTab, setActiveTab] = useState(defaultTab.key);
  const [pageTitle, setPageTitle] = useState(defaultTab.title);
  const [breadcrumb, setBreadcrumb] = useState(defaultTab.breadcrumb);

  const handleTabChange = (key) => {
    setActiveTab(key);
    const selected = menu.find(item => item.key === key);
    if (selected) {
      setPageTitle(selected.title);
      setBreadcrumb(selected.breadcrumb);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "infra":
        return <Introduction />;
      case "portfolio":
        return <Manufacturing />;
      case "tech":
        return <HighTensile />;
      case "quality":
        return <Product />;
      default:
        return <Introduction />;
    }
  };

  return (
    <>
      <Box sx={{ padding: { xs: 2, md: 4 } }}>
        <Container maxWidth='xl'>
          {/* Breadcrumbs */}
          <Breadcrumbs 
            separator={<NavigateNextIcon fontSize="small" />} 
            aria-label="breadcrumb"
            sx={{ mb: 2 }}
          >
            <Link 
              underline="hover" 
              color="inherit" 
              href="/" 
              onClick={(e) => {
                e.preventDefault();
                navigate("/"); 
              }}
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/products"
              onClick={(e) => {
                e.preventDefault();
                navigate("/products/mms-learnMore"); 
              }}
            >
              Products & Service
            </Link>
            <Typography color="text.primary">{breadcrumb}</Typography>
          </Breadcrumbs>

          {/* Page Title */}
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 700, 
              mb: 4,
              fontFamily: "'Open Sans', sans-serif",
              color: "#333"
            }}
          >
            {pageTitle}
          </Typography>

          <Grid container spacing={3}>
            {/* LEFT SIDEBAR */}
            <Grid item  size={{xs:12, md:3}}>
              <Typography sx={{ fontWeight: 700, mb: 2, color: "#555" }}>
                PRODUCTS AND SERVICE
              </Typography>
              <LeftSidebar
                activeTab={activeTab}
                setActiveTab={handleTabChange}
              />
            </Grid>

            {/* RIGHT CONTENT */}
            <Grid item size={{xs:12, md:9}}>
              {renderContent()}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ProductsLayout;