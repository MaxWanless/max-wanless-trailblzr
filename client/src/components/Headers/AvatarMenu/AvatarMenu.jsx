import { useState } from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const AvatarMenu = ({ user }) => {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const stringToColor = (string) => {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  };

  const stringAvatar = (name) => {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box>
      <Tooltip title="Open Settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          {user.firstName ? (
            <Avatar
              sx={{ width: 35, height: 35 }}
              {...stringAvatar(
                `${user.firstName.toUpperCase()} ${user.lastName.toUpperCase()}`
              )}
            />
          ) : (
            <Avatar sx={{ width: 35, height: 35 }} />
          )}
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {user.firstName ? (
          <div>
            <Link className="header__link" to="/Account">
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Profile</Typography>
              </MenuItem>
            </Link>
            <Link className="header__link" to="/favourites">
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Favourites</Typography>
              </MenuItem>
            </Link>
          </div>
        ) : (
          <Link className="header__link" to="/signin">
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">Login</Typography>
            </MenuItem>
          </Link>
        )}
      </Menu>
    </Box>
  );
};

export default AvatarMenu;
