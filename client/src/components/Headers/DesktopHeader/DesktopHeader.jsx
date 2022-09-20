import { Link, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  Typography,
  Tabs,
  Tab,
  styled,
  InputBase,
  alpha,
} from "@mui/material";
import TerrainIcon from "@mui/icons-material/Terrain";
import SearchIcon from "@mui/icons-material/Search";

const DesktopHeader = () => {
  const pathName = useLocation().pathname;
  const pages = ["dashboard", "favourites", "account"];
  const routes = ["/dashboard", "/favourites", "/account"];

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
              value={routes.includes(pathName) ? pathName : false}
              aria-label="Navigation tabs"
              textColor="inherit"
              indicatorColor="secondary"
            >
              {pages.map((page) => (
                <Tab
                  label={page}
                  value={`/${page}`}
                  to={`/${page}`}
                  key={page}
                  component={Link}
                />
              ))}
            </Tabs>
          </Box>
          {/* Search Bar */}
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
              />
            </Search>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default DesktopHeader;
