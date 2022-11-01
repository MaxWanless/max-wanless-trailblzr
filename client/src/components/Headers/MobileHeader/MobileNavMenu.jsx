import { useState } from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import DashboardIcon from "@mui/icons-material/Dashboard";

const MobileNavMenu = () => {
  const pages = [{ icon: <DashboardIcon />, text: "Dashboard" }];
  const [showNavMenu, setShowNavMenu] = useState(false);

  const handleOpenNavMenu = (event) => {
    setShowNavMenu(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setShowNavMenu(null);
  };

  return (
    <Box>
      <IconButton sx={{ p: 0 }} onClick={handleOpenNavMenu} color="inherit">
        <MenuIcon fontSize="large" />
      </IconButton>
      <Menu
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
      >
        {pages.map((page, index) => (
          <Link className="header__link" key={index} to={`/${page.text}`}>
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <ListItemIcon>{page.icon}</ListItemIcon>
              <Typography textAlign="center">{page.text}</Typography>
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </Box>
  );
};

export default MobileNavMenu;
