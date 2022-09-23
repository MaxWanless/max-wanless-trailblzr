import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TerrainIcon from "@mui/icons-material/Terrain";
import AvatarMenu from "../AvatarMenu/AvatarMenu";

const DesktopHeader = ({ user }) => {
  const pathName = useLocation().pathname;
  const pages = ["dashboard", "favourites"];
  const routes = ["/dashboard", "/favourites"];

  return (
    <AppBar
      position="static"
      sx={{ background: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Desktop Logo */}
          <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
            <TerrainIcon fontSize="large" />
            <Typography
              variant="h2"
              noWrap
              component="a"
              href=""
              sx={{
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
          <Box sx={{ flexGrow: 1 }}>
            <Tabs
              value={routes.includes(pathName) ? pathName : false}
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
          <AvatarMenu user={user} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default DesktopHeader;
