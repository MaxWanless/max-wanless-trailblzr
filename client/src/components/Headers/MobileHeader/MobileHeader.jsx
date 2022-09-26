import { AppBar, Toolbar, Container, Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import TerrainIcon from "@mui/icons-material/Terrain";
import MobileNavMenu from "./MobileNavMenu";
import AvatarMenu from "../AvatarMenu/AvatarMenu";

const MobileHeader = ({ user }) => {
  return (
    <AppBar
      position="static"
      sx={{ background: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Mobile Menu */}
          <MobileNavMenu />
          {/* Mobile Logo */}
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
          {/* User Menu */}
          <AvatarMenu user={user} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default MobileHeader;
