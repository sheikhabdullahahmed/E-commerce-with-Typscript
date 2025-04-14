import * as React from "react";
import { useState, useEffect } from "react";
import logo from '../../assets/Logo.png'
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
  { name: "About", Link: "/About" },
  { name: "Shop", Link: "/Shop" },
  { name: "Blog", Link: "/Blog" },
  { name: "Contact", Link: "/Contact" },
];

interface CartState {
  Cart: { SelectedProductsId: string[] };
}

interface FavState {
  Fav: { favProductsId: string[] };
}

function ResponsiveAppBar() {
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [viewList, setViewList] = useState<boolean>(false);

  const searchBarRef = React.useRef<HTMLDivElement>(null);
  const searchIconRef = React.useRef<HTMLButtonElement>(null);



  // Handle click outside to close search bar
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        !searchBarRef.current?.contains(target) &&
        !searchIconRef.current?.contains(target)
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

  return (
    <AppBar
      position="sticky"
      sx={{
        minHeight: "65px",
        height: { xs: "fit-content", md: "65px" },
        mb: "5px",
        bgcolor: "#FFFFFF",
        padding: { xs: "0 5px", md: "0 70px" },
      }}
    >
      {/* Desktop View */}
      <Container
        sx={{
          display: { xs: "none", md: "flex" },
          justifyContent: "space-between",
        }}
      >
        <Toolbar disableGutters>
          <Box
            sx={{ width: "120px", cursor: "pointer" }}
          >
            <img
              style={{ width: "100%", height: "100%" }}
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
              sx={{ my: 2, display: "block", color: "black" }}
            >
              {page.name}
              <hr
                style={{
                  display: location.pathname === page.Link ? "block" : "none",
                }}
              />
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
          <IconButton
            size="large"
            aria-label="Favorite"
            color="inherit"
          >
            <FavoriteBorderIcon sx={{ fontSize: "30px", color: "black" }} />
          </IconButton>
          <IconButton
            size="large"
            aria-label="Shop"
            color="inherit"
          >
            <ShoppingBagOutlinedIcon sx={{ fontSize: "30px", color: "black" }} />
            <Badge badgeContent={""} color="error" />
          </IconButton>
        </Box>
      </Container>

      {showSearch && (
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
      )}

      {/* Mobile View */}
      <Container sx={{ display: { xs: "block", md: "none" } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Toolbar disableGutters>
            <Box
              sx={{ width: "80px", cursor: "pointer" }}
              onClick={() => {
                setViewList(false);
              }}
            >
              <img
                style={{ width: "100%", height: "100%" }}
                src={logo}
                alt="Furni Pro"
                loading="lazy"
              />
            </Box>
          </Toolbar>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              onClick={() => setViewList(!viewList)}
              size="large"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", mb: "10px" }}>
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
                bgcolor: "#FFF",
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
          <Box className="fade-in" sx={{ display: { xs: "block", md: "none" } }}>
            <Box
              sx={{
                padding: "0 50px",
                display: { xs: "flex", md: "none" },
                justifyContent: "center",
                height: "60px",
              }}
            >
              <IconButton
                onClick={() => {
                  setViewList(false);
                }}
                size="large"
                aria-label="Favorite"
                color="inherit"
              >
                <FavoriteBorderIcon sx={{ fontSize: "30px", color: "black" }} />
                <Badge  color="error" />
              </IconButton>
              <IconButton
                onClick={() => {
                  setViewList(false);
                }}
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
            <Box sx={{ width: "100%", height: "fit-content" }}>
              <Box
                sx={{
                  color: "black",
                  mb: "10px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page.name}
                    sx={{ my: 2, display: "block", color: "black" }}
                    onClick={() => {
                      setViewList(false);
                    }}
                  >
                    {page.name}
                    <hr
                      style={{
                        display: location.pathname === page.Link ? "block" : "none",
                      }}
                    />
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