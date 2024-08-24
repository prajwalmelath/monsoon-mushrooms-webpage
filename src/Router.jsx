import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./containers/LandingPage";
import { Team } from "./containers/Team";
import { AboutUs } from "./containers/AboutUs";
import { Contact } from "./containers/Contact";

export const MainPage = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/#team" element={<Team />} />
        <Route path="/#aboutUs" element={<AboutUs />} />
        <Route path="/#contactUs" element={<Contact />} />
      </Routes>
    </Router>
  );
};
