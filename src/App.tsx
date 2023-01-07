import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import Login from "./pages/Login";
import UserWishList from "./pages/UserWishList";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const App = () => (
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<UserWishList />}></Route>
          <Route path="/:userId/wish-list" element={<UserWishList />}></Route>
          <Route path="/:userId/profile" element={<UserWishList />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </div>
  </ThemeProvider>
);

export default App;
