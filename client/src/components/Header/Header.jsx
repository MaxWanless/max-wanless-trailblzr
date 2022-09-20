import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Tabs,
  Tab,
  styled,
  InputBase,
  alpha,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import TerrainIcon from "@mui/icons-material/Terrain";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.scss";

const Header = ({ handleSearchChange, searchText }) => {
  const pages = ["dashboard", "favourites", "account"];
  const [showNavMenu, setShowNavMenu] = useState(false);
  const handleOpenNavMenu = (event) => {
    setShowNavMenu(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setShowNavMenu(null);
  };

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("xs")]: {
        width: "0",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  return (
    <AppBar
      position="static"
      sx={{ background: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Desktop Logo */}
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
            <TerrainIcon sx={{ mr: 1 }} />
            <Typography
              variant="h2"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              TrailBLZR
            </Typography>
          </Box>
          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Tabs
              value={useLocation().pathname}
              aria-label="Navigation tabs"
              textColor="inherit"
              indicatorColor="secondary"
            >
              <Tab
                label="dashboard"
                value={`/dashboard`}
                to={`/dashboard`}
                component={Link}
              />
              <Tab
                label="favourites"
                value={`/favourites`}
                to={`/favourites`}
                component={Link}
              />
              <Tab
                label="Account"
                value={`/account`}
                to={`/account`}
                component={Link}
              />
              {/* {pages.map((page) => (
                <Tab
                  label={page}
                  value={`/${page}`}
                  to={`/${page}`}
                  key={page}
                  component={Link}
                />
              ))} */}
            </Tabs>
          </Box>
          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={showNavMenu}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(showNavMenu)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page, index) => (
                <Link className="header__link" key={index} to={`/${page}`}>
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          {/* Mobile Logo */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              alignItems: "center",
            }}
          >
            <TerrainIcon fontSize="large" />
            {/* <Typography
              variant="h2"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              TrailBLZR
            </Typography> */}
          </Box>
          {/* Mobile Search */}
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={handleSearchChange}
                value={searchText}
              />
            </Search>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
