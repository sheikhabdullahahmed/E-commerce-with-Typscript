import * as React from "react";
import { useState, useEffect, useCallback } from "react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import logo from "../../assets/Logo.png";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Button,
  Badge,
  Container,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuIcon from "@mui/icons-material/Menu";

const pages = [
  { name: "Home", Link: "/" },
  { name: "About", Link: "/about" },
  { name: "Shop", Link: "/shop" },
  { name: "Blog", Link: "/blog" },
  { name: "Contact", Link: "/contact" },
];

function ResponsiveAppBar() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [viewList, setViewList] = useState(false);
  const location = useLocation();

  const searchBarRef = React.useRef<HTMLDivElement>(null);
  const searchIconRef = React.useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(target) &&
        searchIconRef.current &&
        !searchIconRef.current.contains(target)
      ) {
        setShowSearch(false);
        setSearchValue("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleViewList = useCallback(() => {
    setViewList((prev) => !prev);
  }, []);

  return (
<AppBar
  position="fixed" // Replaced 'relative' with 'fixed'
  sx={{
    minHeight: "65px",
    height: "65px",
    mb: "5px",
    bgcolor: "#FFFFFF",
    padding: { xs: "0 5px", md: "0 70px" },
    zIndex: 1100,
  }}
>
      {/* Desktop View */}
      <Container
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Toolbar disableGutters>
          <Box sx={{ width: "120px", height: "50px", cursor: "pointer" }}>
            <img
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              src={logo}
              alt="Furni Pro"
              loading="lazy"
            />
          </Box>
        </Toolbar>

        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {pages.map((page) => (
            <Button
              key={page.name}
              component={RouterLink}
              to={page.Link}
              sx={{
                my: 2,
                mx: 1,
                display: "block",
                color: "black",
                position: "relative",
                "&:hover": { backgroundColor: "transparent" },
                ...(location.pathname === page.Link && {
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "-4px",
                    left: 0,
                    width: "100%",
                    height: "2px",
                    backgroundColor: "black",
                  },
                }),
                ...(!location.pathname && {
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: "-4px",
                    left: 0,
                    width: "0%",
                    height: "2px",
                    backgroundColor: "black",
                    transition: "width 0.2s ease-in-out",
                  },
                }),
              }}
            >
              {page.name}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            ref={searchIconRef}
            onClick={() => setShowSearch(true)}
            size="large"
            aria-label="Search"
            color="inherit"
          >
            <SearchIcon sx={{ color: "black" }} />
          </IconButton>
          <IconButton size="large" aria-label="Favorite" color="inherit">
            <FavoriteBorderIcon sx={{ fontSize: "30px", color: "black" }} />
          </IconButton>
          <IconButton size="large" aria-label="Shop" color="inherit">
            <ShoppingBagOutlinedIcon
              sx={{ fontSize: "30px", color: "black" }}
            />
            <Badge badgeContent={0} color="error" />
          </IconButton>
        </Box>
      </Container>

      {showSearch ? (
        <Box
          ref={searchBarRef}
          sx={{
            width: "300px",
            position: "absolute",
            top: "70px",
            right: "20%",
            display: { xs: "none", md: "block" },
          }}
        >
          <TextField
            sx={{ bgcolor: "#FFF", width: "100%", borderRadius: "20px" }}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            label="Search"
            variant="outlined"
          />
        </Box>
      ) : (
        <Box
          sx={{
            width: "300px",
            height: "56px",
            position: "absolute",
            top: "70px",
            right: "20%",
            display: { xs: "none", md: "block" },
            visibility: "hidden",
          }}
        />
      )}

      {/* Mobile View */}
      <Container sx={{ display: { xs: "block", md: "none" } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "65px",
          }}
        >
          <Toolbar disableGutters>
            <Box
              sx={{ width: "80px", height: "50px", cursor: "pointer" }}
              onClick={() => setViewList(false)}
            >
              <img
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
                src={logo}
                alt="Furni Pro"
                loading="lazy"
              />
            </Box>
          </Toolbar>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={toggleViewList} size="large" aria-label="Menu">
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            mb: "10px",
          }}
        >
          <Box sx={{ width: "70%", position: "relative" }}>
            <TextField
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Search..."
              label="Search"
              sx={{
                width: "100%",
                border: "none",
                borderBottom: "1px solid",
                bgcolor: "#fff",
              }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon sx={{ cursor: "pointer", color: "black" }} />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Box>

        {viewList && (
          <Box
            className="fade-in"
            sx={{
              display: { xs: "block", md: "none" },
              position: "absolute",
              top: "65px",
              left: 0,
              width: "100%",
              bgcolor: "#FFFFFF",
              zIndex: 1000,
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <Box
              sx={{
                padding: "0 50px",
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
                height: "60px",
                alignItems: "center",
              }}
            >
              <IconButton
                onClick={() => setViewList(false)}
                size="large"
                aria-label="Favorite"
                color="inherit"
              >
                <FavoriteBorderIcon sx={{ fontSize: "30px", color: "black" }} />
                <Badge color="error" />
              </IconButton>
              <IconButton
                onClick={() => setViewList(false)}
                size="large"
                aria-label="Cart"
                color="inherit"
                sx={{ m: "0 30px" }}
              >
                <ShoppingBagOutlinedIcon
                  sx={{ fontSize: "30px", color: "black" }}
                />
                <Badge color="error" />
              </IconButton>
            </Box>
            <Box sx={{ width: "100%", pb: "10px" }}>
              <Box
                sx={{
                  color: "black",
                  display: "flex",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page.name}
                    component={RouterLink}
                    to={page.Link}
                    sx={{
                      my: 1,
                      mx: 2,
                      display: "block",
                      color: "black",
                      position: "relative",
                      "&:hover": { backgroundColor: "transparent" },
                      ...(location.pathname === page.Link && {
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: "-4px",
                          left: 0,
                          width: "100%",
                          height: "2px",
                          backgroundColor: "black",
                          transition: "width 0.2s ease-in-out",
                        },
                      }),
                      ...(!location.pathname && {
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: "-4px",
                          left: 0,
                          width: "0%",
                          height: "2px",
                          backgroundColor: "black",
                          transition: "width 0.2s ease-in-out",
                        },
                      }),
                    }}
                    onClick={() => setViewList(false)}
                  >
                    {page.name}
                  </Button>
                ))}
              </Box>
            </Box>
          </Box>
        )}
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
