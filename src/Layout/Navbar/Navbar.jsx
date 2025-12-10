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
import { Link, useLocation } from "react-router-dom"; // Added useLocation
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
  { title: "Blog", link: "/blogs" },
  { title: "CONTACT US", link: "/contact" },
];

// PRODUCT MENU WITH PATH LINKS
const productDropdown = [
  { name: "Module Mounting Structure", link: "/products/ctc/introduction" },
  { name: "Hot Dip Galvanization", link: "/products/ctc/introduction" },
  { name: "Tea Processing Machinery", link: "/products/processing-card" },
];

const Navbar = () => {
  const location = useLocation(); // Get current route
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openProductsDesktop, setOpenProductsDesktop] = useState(false);
  const [openProductsMobile, setOpenProductsMobile] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Check if a route is active (including nested routes)
  const isActiveRoute = (route) => {
    // Special handling for products dropdown items
    if (productDropdown.some(item => item.link === location.pathname)) {
      return route === "/products" || route === "/products/";
    }
    
    // For exact matches
    if (location.pathname === route) return true;
    
    // For parent routes (e.g., /products matches /products/...)
    if (route !== "/" && location.pathname.startsWith(route + "/")) return true;
    
    return false;
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
          <Toolbar sx={{ display: "flex", justifyContent: "space-between", padding: { xs: "0px", md: "0px 16px" } }}>

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
                    onMouseEnter={() => setOpenProductsDesktop(true)}
                    onMouseLeave={() => setOpenProductsDesktop(false)}
                  >
                    <Button
                      sx={{
                        fontSize: "16px",
                        color: isActiveRoute(item.link) ? "#d32f2f" : "#000000", // Red if active
                        fontWeight: "600",
                        "&:hover": { color: "#d32f2f" },
                        fontFamily: "Open Sans",
                        Color: isActiveRoute(item.link) ? "2px solid #d32f2f" : "none", // Optional underline
                      }}
                    >
                      {item.title}
                    </Button>

                    {openProductsDesktop && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: "42px",
                          left: 0,
                          background: "#fff",
                          boxShadow: "0px 4px 20px rgba(0,0,0,0.2)",
                          borderTop: "3px solid #d32f2f",
                          padding: "10px 0",
                          width: "250px",
                          zIndex: 999,
                        }}
                      >
                        {productDropdown.map((product) => (
                          <Link
                            key={product.name}
                            to={product.link}
                            style={{
                              display: "block",
                              padding: "10px 10px",
                              textDecoration: "none",
                              color:  "#000", // Red if active
                              fontSize: "16px",
                              fontFamily: "Open Sans",
                              fontWeight: location.pathname === product.link ? "400" : "400",
                              backgroundColor:  "transparent", // Light red bg
                              "&:hover": {
                                backgroundColor: "#FFB6C1",
                              }
                            }}
                          >
                            {product.name}
                          </Link>
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
                      color: isActiveRoute(item.link) ? "#d32f2f" : "#000000", // Red if active
                      fontWeight: "600",
                      "&:hover": { color: "#d32f2f" },
                      fontFamily: "Open Sans",
                       // Optional underline
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

                  <ListItem 
                    button 
                    onClick={() => setOpenProductsMobile(!openProductsMobile)}
                    sx={{
                      color: isActiveRoute(item.link) ? "#d32f2f" : "#000",
                      backgroundColor:"transparent",
                      borderLeft: isActiveRoute(item.link) ? "4px solid #d32f2f" : "none",
                    }}
                  >
                    <ListItemText
                      primary={item.title}
                      primaryTypographyProps={{
                        fontWeight: isActiveRoute(item.link) ? 700 : 600,
                        fontSize: "15px",
                        color: "inherit",
                      }}
                    />
                  </ListItem>

                  {openProductsMobile && (
                    <Box sx={{ paddingLeft: 3 }}>
                      {productDropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.link}
                          onClick={handleDrawerToggle}
                          style={{
                            display: "block",
                            padding: "8px 25px",
                            textDecoration: "none",
                            color: "#000",
                            fontSize: "14px",
                            fontWeight: location.pathname === item.link ? 600 : 400,
                            backgroundColor: "transparent",
                            
                          }}
                        >
                          {item.name}
                        </Link>
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
                  sx={{
                    color: isActiveRoute(item.link) ? "#d32f2f" : "#000",
                    backgroundColor: isActiveRoute(item.link) ? "#fdeaea" : "transparent",
                    borderLeft: isActiveRoute(item.link) ? "4px solid #d32f2f" : "none",
                  }}
                >
                  <ListItemText
                    primary={item.title}
                    primaryTypographyProps={{
                      fontWeight: isActiveRoute(item.link) ? 700 : 600,
                      fontSize: "15px",
                      color: "inherit",
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