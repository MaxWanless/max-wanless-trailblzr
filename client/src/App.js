import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { UserProvider } from "./hooks/userContext";
import { ParksProvider } from "./hooks/parksContext";
import Container from "@mui/material/Container";
import Account from "./pages/Account/Account";
import Dashboard from "./pages/Dashboard/Dashboard";
import Map from "./pages/Map/Map";
import Favourites from "./pages/Favourites/Favourites";
import ParkDetails from "./pages/ParkDetails/ParkDetails";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Header from "./components/Headers/Header/Header";
import "./App.scss";

function App() {
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
        <UserProvider initialUser={{}}>
          <BrowserRouter>
            <Header />
            <ParksProvider>
              <Container sx={{ height: "calc(100vh - 65px)" }} disableGutters>
                <Routes>
                  <Route path="/" element={<SignIn />} />
                  <Route path="/Dashboard" element={<Dashboard />} />
                  <Route path="/Dashboard/:parkId" element={<ParkDetails />} />
                  <Route path="/Map" element={<Map />} />
                  <Route path="/Favourites" element={<Favourites />} />
                  <Route path="/Account" element={<Account />} />
                  <Route path="/Signin" element={<SignIn />} />
                  <Route path="/Signup" element={<SignUp />} />
                </Routes>
              </Container>
            </ParksProvider>
          </BrowserRouter>
        </UserProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
