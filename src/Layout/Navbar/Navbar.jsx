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
import { Link, useLocation } from "react-router-dom";
import Logo from "../../Assets/logo 1.png";
import "../../App.css";

const pages = [
  { title: "HOME", link: "/home" },
  { title: "ABOUT US", link: "/about/group-profile" },
  { title: "PRODUCTS AND SERVICES", link: "/products" },
  { title: "FACILITIES", link: "/facilities" },
  { title: "CSR", link: "/csr" },
  { title: "MEDIA", link: "/media/news" },
  { title: "CAREERS", link: "/careers/working-with-us" },
  { title: "Blog", link: "/blogs" },
  { title: "CONTACT US", link: "/contact/addresses" },
];

// ABOUT US DROPDOWN


// PRODUCT DROPDOWN
const productDropdown = [
  { name: "Module Mounting Structure", link: "/products/mms-learnMore" },
  { name: "Hot Dip Galvanization", link: "/products/hot-dip" },
  { name: "Tea Processing Machinery", link: "/products/processing-card" },
];

const Navbar = () => {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openProductsDesktop, setOpenProductsDesktop] = useState(false);
  const [openProductsMobile, setOpenProductsMobile] = useState(false);

  // NEW DROPDOWN STATE
  const [openAboutDesktop, setOpenAboutDesktop] = useState(false);
  const [openAboutMobile, setOpenAboutMobile] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const isActiveRoute = (route) => {
    if (productDropdown.some(item => item.link === location.pathname)) {
      return route === "/products" || route === "/products/";
    }

    if (location.pathname === route) return true;
    if (route !== "/" && location.pathname.startsWith(route + "/")) return true;
    return false;
  };

  useEffect(() => {
    const closeMenu = () => {
      setOpenProductsDesktop(false);
      setOpenAboutDesktop(false);
    };
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
            <Box sx={{ display: "flex", alignItems: "center" }} component={Link} to={"/home"}>
              <img src={Logo} alt="Vikram India" style={{ width: 200, height: "auto" }} />
            </Box>

            {/* DESKTOP MENU */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
              {pages.map((item) => {
             
                if (item.title === "PRODUCTS AND SERVICES") {
                  return (
                    <Box
                      key={item.title}
                      sx={{ position: "relative" }}
                      onMouseEnter={() => setOpenProductsDesktop(true)}
                      onMouseLeave={() => setOpenProductsDesktop(false)}
                    >
                      <Button
                        sx={{
                          fontSize: "16px",
                          color: isActiveRoute(item.link) ? "#d32f2f" : "#000000",
                          fontWeight: "600",
                          "&:hover": { color: "#d32f2f" },
                          fontFamily: "Roboto",
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
                              className="dropdown-link"
                            >
                              {product.name}
                            </Link>
                          ))}
                        </Box>
                      )}
                    </Box>
                  );
                }

                // NORMAL MENU ITEMS
                return (
                  <Button
                    key={item.title}
                    component={Link}
                    to={item.link}
                    sx={{
                      fontSize: "16px",
                      color: isActiveRoute(item.link) ? "#d32f2f" : "#000",
                      fontWeight: "600",
                      fontFamily: "Roboto",
                      position: "relative",
                      background: "transparent",

                      "&::after": {
                        content: '""',
                        position: "absolute",
                        left: "50%",
                        bottom: "0px",
                        width: "0%",
                        height: "2px",
                        backgroundColor: "#d32f2f",
                        transition: "all 0.35s ease",
                        transform: "translateX(-50%)",
                      },

                      "&:hover::after": {
                        width: "100%",
                      },

                      "&:hover": {
                        background: "transparent",
                        color: "#d32f2f",
                      },
                    }}

                  >
                    {item.title}
                  </Button>
                );
              })}
            </Box>

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
            {pages.map((item) => {
              // ABOUT US MOBILE
              if (item.title === "ABOUT US") {
                return (
                  <ListItem
                    key={item.title}
                    button
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
                      }}
                    />
                  </ListItem>
                );
              }


              // PRODUCT MOBILE
              if (item.title === "PRODUCTS AND SERVICES") {
                return (
                  <React.Fragment key={item.title}>
                    <ListItem
                      button
                      onClick={() => setOpenProductsMobile(!openProductsMobile)}
                      sx={{
                        color: isActiveRoute(item.link) ? "#d32f2f" : "#000",
                        backgroundColor: "transparent",
                        borderLeft: isActiveRoute(item.link) ? "4px solid #d32f2f" : "none",
                      }}
                    >
                      <ListItemText
                        primary={item.title}
                        primaryTypographyProps={{
                          fontWeight: isActiveRoute(item.link) ? 700 : 600,
                          fontSize: "15px",
                        }}
                      />
                    </ListItem>

                    {openProductsMobile && (
                      <Box sx={{ paddingLeft: 3 }}>
                        {productDropdown.map((product) => (
                          <Link
                            key={product.name}
                            to={product.link}
                            onClick={handleDrawerToggle}
                            style={{
                              display: "block",
                              padding: "8px 25px",
                              textDecoration: "none",
                              color: "#000",
                              fontSize: "14px",
                            }}
                          >
                            {product.name}
                          </Link>
                        ))}
                      </Box>
                    )}
                  </React.Fragment>
                );
              }

              // NORMAL MOBILE LINKS
              return (
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
                    }}
                  />
                </ListItem>
              );
            })}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
