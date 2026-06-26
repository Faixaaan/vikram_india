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

import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
// import data.logo from "../../Assets/logo 1.png";
import "../../App.css";
import { axiosInstance } from "../../Api/Axios/axios";
import { endpoints } from "../../Api/EndPoints/endpoints";

const pages = [
  { title: "HOME", link: "/home" },
  { title: "ABOUT US", link: "/about/group-profile" },
  { title: "PRODUCTS AND SERVICES", link: "/products" },
  { title: "FACILITIES", link: "/facilities" },

  { title: "CAREERS", link: "/careers/working-with-us" },
  { title: "BLOG", link: "/blogs" },
  { title: "CONTACT US", link: "/contact/addresses" },
];

// ABOUT US DROPDOWN


// PRODUCT DROPDOWN
const productDropdown = [
  { name: "Module Mounting Structure", link: "/products/mms-learnMore" },
  { name: "Hot Dip Galvanization", link: "/products/hot-dip" },
  { name: "Tea Processing Machinery", link: "/products/tea-processing-machinery/Tmd-Division-machine-structure" },
];

const Navbar = () => {
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openProductsDesktop, setOpenProductsDesktop] = useState(false);
  const [openProductsMobile, setOpenProductsMobile] = useState(false);

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // NEW DROPDOWN STATE
  const [openAboutDesktop, setOpenAboutDesktop] = useState(false);

  const [data, setData] = useState({});


  /* ================= FETCH DATA ================= */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(endpoints.pageSetting.navFooter);
        const settingData = res?.data?.data || {};
        setData(settingData);

      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

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


  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling Down
        setShowNavbar(false);
      } else {
        // Scrolling Up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          top: showNavbar ? 16 : "-120px",
          left: "50%",
          transform: "translateX(-50%)",
          width: {
            xs: "95%",
            xl: "90%",
          },
          maxWidth: "1600px",

          borderRadius: "22px",

          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",

          background: "rgba(255,255,255,0.85)",

          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",

          border: "1px solid rgba(0,0,0,0.08)",

          boxShadow: `
    inset 0 1px 0 rgba(255,255,255,0.8),
    inset 0 -1px 0 rgba(0,0,0,0.04),
    0 10px 30px rgba(0,0,0,0.08)
  `,

          transition: "all .4s cubic-bezier(.4,0,.2,1)",
          // zIndex: 1400,
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between", padding: { xs: "0px", md: "0px 16px" } }}>
            <Box sx={{ display: "flex", alignItems: "center" }} component={Link} to={"/home"}>
              <img src={data?.logo} alt="Vikram India" style={{ width: 200, height: "auto" }} />
            </Box>

            {/* DESKTOP MENU */}
            <Box sx={{ display: { xs: "none", lg: "flex" }, gap: 1 }}>
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
                        key={item.title}
                        disableRipple
                        endIcon={
                          <KeyboardArrowDownRoundedIcon
                            sx={{
                              transition: "0.3s ease",
                              transform: openProductsDesktop
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                            }}
                          />
                        }
                        sx={{
                          px: 2.5,
                          py: 1,
                          borderRadius: "999px",

                          fontSize: "14px",
                          fontWeight: 600,


                          color: isActiveRoute(item.link)
                            ? "#fff"
                            : "#111827",



                          background: isActiveRoute(item.link)
                            ? "linear-gradient(135deg,#c40613,#ff5757)"
                            : "transparent",

                          boxShadow: isActiveRoute(item.link)
                            ? "0 8px 25px rgba(196,6,19,.35)"
                            : "none",

                          transition: "all .3s ease",

                          "&:hover": {
                            background: isActiveRoute(item.link)
                              ? "linear-gradient(135deg,#c40613,#ff5757)"
                              : "rgba(196,6,19,.08)",

                            transform: "translateY(-2px)",

                            color: isActiveRoute(item.link)
                              ? "#fff"
                              : "#c40613",
                          },
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
                      px: 2.5,
                      py: 1,
                      borderRadius: "999px",

                      fontSize: "14px",
                      fontWeight: 600,

                      color: isActiveRoute(item.link)
                        ? "#fff"
                        : "#111827",

                      background: isActiveRoute(item.link)
                        ? "linear-gradient(135deg,#c40613,#ff5757)"
                        : "transparent",

                      boxShadow: isActiveRoute(item.link)
                        ? "0 8px 25px rgba(196,6,19,.35)"
                        : "none",

                      transition: "all .3s ease",

                      "&:hover": {
                        background: isActiveRoute(item.link)
                          ? "linear-gradient(135deg,#c40613,#ff5757)"
                          : "rgba(196,6,19,.08)",

                        transform: "translateY(-2px)",

                        color: isActiveRoute(item.link)
                          ? "#fff"
                          : "#c40613",
                      },
                    }}
                  >
                    {item.title}
                  </Button>
                );
              })}
            </Box>

            <IconButton sx={{
              display: { xs: "flex", lg: "none" }, width: 48,
              height: 48,

              background:
                "rgba(196,6,19,.08)",

              borderRadius: "14px",

              "&:hover": {
                background:
                  "rgba(196,6,19,.15)",
              },
            }} onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle} PaperProps={{
        sx: {
          width: 300,

          background:
            "rgba(255,255,255,.95)",

          backdropFilter:
            "blur(20px)",

          borderTopRightRadius: 24,
          borderBottomRightRadius: 24,

        },
      }}>
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
