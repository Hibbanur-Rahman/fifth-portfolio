import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./views/About";
import Contact from "./views/Contact";
import Portfolio from "./views/Portfolio";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      {/* Include your navigation bar */}
      <Navbar />
      {/* Define your routes */}
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
