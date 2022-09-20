import { Route, useLocation } from "react-router-dom";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SlideRoutes from "react-slide-routes";
import Account from "./pages/Account/Account";
import Dashboard from "./pages/Dashboard/Dashboard";
import Favourites from "./pages/Favourites/Favourites";
import ParkDetails from "./pages/ParkDetails/ParkDetails";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Header from "./components/Header/Header";
import "./App.scss";

function App() {
  const location = useLocation();
  const [searchText, setSearchText] = useState("");
  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    console.log(searchText);
  };
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#697e59",
      },
      secondary: {
        main: "#FFFFFF",
      },
    },
    typography: {
      fontFamily: [
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      h2: { fontSize: 32, fontWeight: 600, lineHeight: 1 },
      h4: { fontSize: 12, fontWeight: 600, lineHeight: "1.25rem" },
      body2: { fontSize: 13, fontWeight: 400, lineHeight: "1rem" },
    },
  });
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <Header
          handleSearchChange={handleSearchChange}
          searchText={searchText}
        />
        {/* <Routes> */}
        <SlideRoutes location={location}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/:parkId" element={<ParkDetails />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/account" element={<Account />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </SlideRoutes>
        {/* </Routes> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
