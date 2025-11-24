import React, { useState } from "react";
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
  Container
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Logo from "../../Assets/logo 1.png";
import '../../App.css';

const pages = [
  { title: "HOME", link: "/" },
  { title: "ABOUT US", link: "/about" },
  { title: "PRODUCTS AND SERVICES", link: "/products" },
  { title: "FACILITIES", link: "/facilities" },
  { title: "CSR", link: "/csr" },
  { title: "MEDIA", link: "/media" },
  { title: "CAREERS", link: "/careers" },
  { title: "CONTACT US", link: "/contact" }
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          background: "#fff",
          color: "#000",
          paddingY: 1,
          boxShadow: "0px 2px 10px rgba(0,0,0,0.1)"
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* LEFT — LOGO */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img
                src={Logo}
                alt="Vikram India"
                style={{ width: 200, height: "auto" }}
              />
            </Box>

            {/* DESKTOP MENU */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
              {pages.map((item) => (
                <Button
                  key={item.title}
                  component={Link}
                  to={item.link}
                  sx={{
                    fontSize:"16px",
                    color: "#000000",
                    fontWeight: 400,
                    "&:hover": { color: "#d32f2f" },
                    lineHeight:"100%",
                    fontFamily:"Open Sans"

                  }}
                >
                  {item.title}
                </Button>
              ))}
            </Box>

            {/* MOBILE MENU BUTTON */}
            <IconButton
              sx={{ display: { xs: "flex", md: "none" } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* MOBILE DRAWER */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        <Box sx={{ width: 250, paddingTop: 2 }}>
          <List>
            {pages.map((item) => (
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
                    fontSize: "15px"
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
