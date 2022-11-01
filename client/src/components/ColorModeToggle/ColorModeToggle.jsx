import { useContext } from "react";
import { ModeContext } from "../../hooks/modeContext";
import { useTheme } from "@emotion/react";
import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ColorModeToggle = () => {
  const { setMode } = useContext(ModeContext);
  const theme = useTheme();

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  return (
    <IconButton onClick={toggleColorMode}>
      {theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
};

export default ColorModeToggle;
