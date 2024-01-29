import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./views/About";
import Contact from "./views/Contact";
import Portfolio from "./views/Portfolio";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ProfileSidebar from "./components/profileSidebar";
import MenuSidebar from "./components/menuSidebar";

function App() {
  return (
    <Router>
      {/* Include your navigation bar */}
      <Navbar  />
      {/* Define your routes */}
      <ProfileSidebar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <MenuSidebar/>
      <Footer />
    </Router>
  );
}

export default App;
