import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./views/about";
import Contact from "./views/contact";
import Portfolio from "./views/portfolio";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ProfileSidebar from "./components/profileSidebar";
import MenuSidebar from "./components/menuSidebar";
import Blogs from "./views/blogs";
import Resume from "./views/resume";

function App() {
  return (
    <Router>
      {/* Include your navigation bar */}
      <Navbar />
      {/* Define your routes */}
      <div className="row m-0 p-0 p-3">
        <ProfileSidebar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>
        <MenuSidebar />
      </div>

      <Footer />
    </Router>
  );
}

export default App;
