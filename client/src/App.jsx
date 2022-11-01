import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ModeProvider } from "./hooks/modeContext";
import { ThemeContext } from "./hooks/themeContext";
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
  return (
    <div className="app">
      <ModeProvider>
        <ThemeContext>
          <BrowserRouter>
            <UserProvider initialUser={{}}>
              <Header />
              <ParksProvider>
                <Container sx={{ height: "calc(100vh - 65px)" }} disableGutters>
                  <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route
                      path="/Dashboard/:parkId"
                      element={<ParkDetails />}
                    />
                    <Route path="/Map" element={<Map />} />
                    <Route path="/Favourites" element={<Favourites />} />
                    <Route path="/Account" element={<Account />} />
                    <Route path="/Signin" element={<SignIn />} />
                    <Route path="/Signup" element={<SignUp />} />
                  </Routes>
                </Container>
              </ParksProvider>
            </UserProvider>
          </BrowserRouter>
        </ThemeContext>
      </ModeProvider>
    </div>
  );
}

export default App;
