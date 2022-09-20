import { useTheme } from "@emotion/react";
import useMediaQuery from "@mui/material/useMediaQuery";
import DesktopHeader from "../DesktopHeader/DesktopHeader";
import MobileHeader from "../MobileHeader/MobileHeader";
import "./Header.scss";

const Header = () => {
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down("md"));
  return <>{mobileView ? <MobileHeader /> : <DesktopHeader />}</>;
};

export default Header;
