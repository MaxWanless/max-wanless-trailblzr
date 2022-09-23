import { useTheme } from "@emotion/react";
import jwt_decode from "jwt-decode";
import useMediaQuery from "@mui/material/useMediaQuery";
import DesktopHeader from "../DesktopHeader/DesktopHeader";
import MobileHeader from "../MobileHeader/MobileHeader";
import "./Header.scss";

const Header = () => {
  let token = "";
  let decodedUser = {};
  const theme = useTheme();
  const mobileView = useMediaQuery(theme.breakpoints.down("md"));

  if (sessionStorage.getItem("authorization")) {
    token = sessionStorage.getItem("authorization").split(" ")[1];
    decodedUser = jwt_decode(token);
  } else if (localStorage.getItem("authorization")) {
    token = localStorage.getItem("authorization").split(" ")[1];
    decodedUser = jwt_decode(token);
  }

  return (
    <>
      {mobileView ? (
        <MobileHeader user={decodedUser} />
      ) : (
        <DesktopHeader user={decodedUser} />
      )}
    </>
  );
};

export default Header;
