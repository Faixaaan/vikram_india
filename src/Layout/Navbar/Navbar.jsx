import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Logo from "../../Assets/logo 1.png";
import "../../App.css";

const pages = [
  { title: "HOME", link: "/" },
  { title: "ABOUT US", link: "/about" },
  { title: "PRODUCTS AND SERVICES", link: "/products" },
  { title: "FACILITIES", link: "/facilities" },
  { title: "CSR", link: "/csr" },
  { title: "MEDIA", link: "/media" },
  { title: "CAREERS", link: "/careers" },
  { title: "Blogs", link: "/blogs" },
  { title: "CONTACT US", link: "/contact" },
];

// PRODUCT MENU WITH PATH LINKS
const productDropdown = [
  {
    heading: "CTC Tea Processing Machinery",
    items: [
      { name: "Withering", link: "/products/ctc/withering" },
      { name: "Rolling", link: "/products/ctc/rolling" },
      { name: "Fermenting", link: "/products/ctc/fermenting" },
      { name: "Drying", link: "/products/ctc/drying" },
      { name: "Sorting", link: "/products/ctc/sorting" },
      { name: "Packing", link: "/products/ctc/packing" },
      { name: "Workshop Equipment", link: "/products/ctc/workshop-equipment" },
      { name: "Quality Control Equipment", link: "/products/ctc/quality-control" },
      { name: "Utilities", link: "/products/ctc/utilities" },
    ],
  },
  {
    heading: "Orthodox Tea Processing Machinery",
    items: [
      { name: "Withering", link: "/products/orthodox/withering" },
      { name: "Rolling", link: "/products/orthodox/rolling" },
      { name: "Fermenting", link: "/products/orthodox/fermenting" },
      { name: "Drying", link: "/products/orthodox/drying" },
      { name: "Sorting", link: "/products/orthodox/sorting" },
      { name: "Packing", link: "/products/orthodox/packing" },
    ],
  },
  {
    heading: "Green Tea Processing Machinery",
    items: [
      { name: "Steaming", link: "/products/green/steaming" },
      { name: "Rolling", link: "/products/green/rolling" },
      { name: "Drying", link: "/products/green/drying" },
      { name: "Sorting", link: "/products/green/sorting" },
      { name: "Packing", link: "/products/green/packing" },
    ],
  },
  {
    heading: "Garden & Plantation Equipment",
    items: [
      { name: "Harvester", link: "/products/garden/harvester" },
      { name: "Foreign Object Remover", link: "/products/garden/foreign-object-remover" },
      { name: "Plucking Machine", link: "/products/garden/plucking-machine" },
      { name: "Tea Ingredients Analyzer", link: "/products/garden/ingredients-analyzer" },
    ],
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // FIXED — separate states for desktop & mobile
  const [openProductsDesktop, setOpenProductsDesktop] = useState(false);
  const [openProductsMobile, setOpenProductsMobile] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // close desktop dropdown when clicking outside
  useEffect(() => {
    const closeMenu = () => setOpenProductsDesktop(false);
    window.addEventListener("click", closeMenu);
    return () => window.removeEventListener("click", closeMenu);
  }, []);

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          background: "#fff",
          color: "#000",
          paddingY: 1,
          boxShadow: "0px 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between",padding:{xs:"0px",md:"0px 16px"} }}>
            
            {/* LOGO */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img src={Logo} alt="Vikram India" style={{ width: 200, height: "auto" }} />
            </Box>

            {/* DESKTOP MENU */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
              {pages.map((item) =>
                item.title === "PRODUCTS AND SERVICES" ? (
                  <Box
                    key={item.title}
                    sx={{ position: "relative" }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Button
                      onClick={() => setOpenProductsDesktop(!openProductsDesktop)}
                      sx={{
                        fontSize: "16px",
                        color: "#000000",
                        fontWeight: "600",
                        "&:hover": { color: "#d32f2f" },
                        fontFamily: "Open Sans",
                      }}
                    >
                      {item.title}
                    </Button>

                    {openProductsDesktop && (
                      <Box
                        onClick={(e) => e.stopPropagation()}
                        sx={{
                          position: "absolute",
                          top: "60px",
                          left: "-200px",
                          background: "#fff",
                          boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
                          padding: "20px",
                          display: "grid",
                          gridTemplateColumns: "repeat(4, 1fr)",
                          gap: "30px",
                          zIndex: 999,
                          width: "900px",
                          borderTop: "3px solid #d32f2f",
                        }}
                      >
                        {productDropdown.map((col) => (
                          <Box key={col.heading}>
                            <h4
                              style={{
                                color: "#d32f2f",
                                fontSize: "18px",
                                marginBottom: "10px",
                                fontWeight: 700,
                                fontFamily: "Open Sans",
                              }}
                            >
                              {col.heading}
                            </h4>

                            {col.items.map((i) => (
                              <Link
                                key={i.name}
                                to={i.link}
                                style={{
                                  margin: "5px 0",
                                  fontSize: "16px",
                                  display: "block",
                                  textDecoration: "none",
                                  color: "#000",
                                  fontFamily: "Open Sans",
                                }}
                              >
                                {i.name}
                              </Link>
                            ))}
                          </Box>
                        ))}
                      </Box>
                    )}
                  </Box>
                ) : (
                  <Button
                    key={item.title}
                    component={Link}
                    to={item.link}
                    sx={{
                      fontSize: "16px",
                      color: "#000000",
                      fontWeight: "600",
                      "&:hover": { color: "#d32f2f" },
                      fontFamily: "Open Sans",
                    }}
                  >
                    {item.title}
                  </Button>
                )
              )}
            </Box>

            {/* MOBILE BUTTON */}
            <IconButton sx={{ display: { xs: "flex", md: "none" } }} onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: 260, paddingTop: 2 }}>
          <List>
            {pages.map((item) =>
              item.title === "PRODUCTS AND SERVICES" ? (
                <React.Fragment key={item.title}>
                  
                  <ListItem button onClick={() => setOpenProductsMobile(!openProductsMobile)}>
                    <ListItemText
                      primary={item.title}
                      primaryTypographyProps={{
                        fontWeight: 600,
                        fontSize: "15px",
                      }}
                    />
                  </ListItem>

                  {openProductsMobile && (
                    <Box sx={{ paddingLeft: 3 }}>
                      {productDropdown.map((col) => (
                        <Box key={col.heading} sx={{ marginBottom: "15px" }}>
                          <p
                            style={{
                              fontWeight: "bold",
                              fontSize: "14px",
                              color: "#d32f2f",
                              marginBottom: "5px",
                            }}
                          >
                            {col.heading}
                          </p>

                          {col.items.map((i) => (
                            <Link
                              key={i.name}
                              to={i.link}
                              onClick={handleDrawerToggle}
                              style={{
                                fontSize: "13px",
                                margin: "3px 0",
                                display: "block",
                                textDecoration: "none",
                                color: "#000",
                              }}
                            >
                              {i.name}
                            </Link>
                          ))}
                        </Box>
                      ))}
                    </Box>
                  )}
                </React.Fragment>
              ) : (
                <ListItem
                  button
                  key={item.title}
                  component={Link}
                  to={item.link}
                  onClick={handleDrawerToggle}
                >
                  <ListItemText
                    primary={item.title}
                    primaryTypographyProps={{
                      fontWeight: 600,
                      fontSize: "15px",
                    }}
                  />
                </ListItem>
              )
            )}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
