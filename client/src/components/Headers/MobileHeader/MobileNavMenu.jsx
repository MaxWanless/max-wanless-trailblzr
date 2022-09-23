import { useState } from "react";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

const MobileNavMenu = () => {
  const pages = ["dashboard", "favourites"];
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
          <Link className="header__link" key={index} to={`/${page}`}>
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </Box>
  );
};

export default MobileNavMenu;
